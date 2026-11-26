"""Capstone da IBM (pouso do Falcon 9), revisitado.

Refaz a avaliação do projeto de 2024 com o que eu faria hoje e grava os números
que a página /capstone-spacex/ desenha.

Uso (na raiz do repositório):
    python capstone-spacex/analise/revisitar.py

Dados: dataset_part_2.csv e dataset_part_3.csv do curso Applied Data Science
Capstone (90 lançamentos do Falcon 9, de 2010 a 2020, coletados da API da SpaceX).
"""

from __future__ import annotations

import json
import warnings
from pathlib import Path

import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, brier_score_loss
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.tree import DecisionTreeClassifier

warnings.filterwarnings("ignore")
AQUI = Path(__file__).resolve().parent
SAIDA = AQUI.parent / "dados.json"

base = pd.read_csv(AQUI / "dados" / "dataset_part_2.csv")
X = pd.read_csv(AQUI / "dados" / "dataset_part_3.csv").astype(float)
y = base["Class"].to_numpy()
tentou = ~base["Outcome"].str.startswith("None")   # "None None" / "None ASDS": não houve tentativa de pouso

# Mesma árvore que venceu em 2024 (max_features "auto" equivale a "sqrt" num classificador)
ARVORE_2024 = dict(criterion="entropy", max_depth=8, max_features="sqrt", min_samples_leaf=2,
                   min_samples_split=10, splitter="random")


# 1. O que o rótulo "não pousou" (Class = 0) significa
composicao = {
    "pousou": int(((y == 1)).sum()),
    "tentou_e_falhou": int(((y == 0) & tentou).sum()),
    "sem_tentativa": int(((y == 0) & ~tentou).sum()),
}
taxa_com_tentativa = float(y[tentou].mean())


# 2. A avaliação original: divisão aleatória com 18 voos de teste
Xs = StandardScaler().fit_transform(X)
_, _, _, y_teste = train_test_split(Xs, y, test_size=0.2, random_state=2)
maioria_teste = float(max(y_teste.mean(), 1 - y_teste.mean()))

acertos = []
for semente in range(200):
    a, b, c, d = train_test_split(Xs, y, test_size=0.2, random_state=semente)
    modelo = DecisionTreeClassifier(random_state=semente, **ARVORE_2024).fit(a, c)
    acertos.append(accuracy_score(d, modelo.predict(b)))
acertos = np.array(acertos)

regra_pernas_tudo = float(accuracy_score(y, base["Legs"].astype(int)))


# 3. Avaliação na ordem do tempo: cada voo é previsto só com os voos anteriores
ordem = base.sort_values("FlightNumber").index.to_numpy()
base_o, X_o, y_o = base.loc[ordem].reset_index(drop=True), X.loc[ordem].reset_index(drop=True), y[ordem]
INICIO = 30   # os 30 primeiros voos só treinam
prev = {k: [] for k in ["historico", "ultimos10", "pernas", "logistica", "arvore"]}
for i in range(INICIO, len(base_o)):
    yt, Xt = y_o[:i], X_o.iloc[:i]
    prev["historico"].append(yt.mean())
    prev["ultimos10"].append(yt[-10:].mean())
    pernas_iguais = base_o["Legs"].iloc[:i] == base_o["Legs"].iloc[i]
    prev["pernas"].append((yt[pernas_iguais.to_numpy()].sum() + 1) / (pernas_iguais.sum() + 2))   # Laplace
    esc = StandardScaler().fit(Xt)
    log = LogisticRegression(C=0.1, max_iter=2000).fit(esc.transform(Xt), yt)
    prev["logistica"].append(log.predict_proba(esc.transform(X_o.iloc[[i]]))[0, 1])
    arv = DecisionTreeClassifier(random_state=0, **ARVORE_2024).fit(Xt, yt)
    prev["arvore"].append(arv.predict_proba(X_o.iloc[[i]])[0, 1])
y_futuro = y_o[INICIO:]


def resumo(p):
    p = np.asarray(p)
    acerto = accuracy_score(y_futuro, p >= 0.5)
    # intervalo de 90% por bootstrap dos voos avaliados
    rng = np.random.default_rng(0)
    amostras = [accuracy_score(y_futuro[idx], (p >= 0.5)[idx]) for idx in rng.integers(0, len(p), (2000, len(p)))]
    return {"acerto": round(float(acerto), 4), "lo": round(float(np.percentile(amostras, 5)), 4),
            "hi": round(float(np.percentile(amostras, 95)), 4), "brier": round(float(brier_score_loss(y_futuro, p)), 4)}


temporal = {k: resumo(v) for k, v in prev.items()}


# 4. Linha do tempo: resultado de cada voo e taxa de pouso nas 10 últimas tentativas
voos, janela = [], []
for _, v in base_o.iterrows():
    tipo = "sem" if v["Outcome"].startswith("None") else ("pousou" if v["Class"] == 1 else "falhou")
    if tipo != "sem":
        janela.append(v["Class"])
    voos.append({"n": int(v["FlightNumber"]), "data": v["Date"], "tipo": tipo,
                 "taxa10": round(float(np.mean(janela[-10:])), 3) if len(janela) >= 5 else None})

dados = {
    "n_voos": int(len(base)),
    "periodo": [base["Date"].min(), base["Date"].max()],
    "composicao": composicao,
    "taxa_com_tentativa": round(taxa_com_tentativa, 4),
    "original": {"n_teste": int(len(y_teste)), "acerto_2024": 0.8333, "maioria_teste": round(maioria_teste, 4),
                 "splits": {"media": round(float(acertos.mean()), 4), "p5": round(float(np.percentile(acertos, 5)), 4),
                            "p95": round(float(np.percentile(acertos, 95)), 4)}},
    "regra_pernas_tudo": round(regra_pernas_tudo, 4),
    "temporal": {"n": int(len(y_futuro)), "pousaram": int(y_futuro.sum()), "modelos": temporal},
    "voos": voos,
}
SAIDA.write_text(json.dumps(dados, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
print(json.dumps({k: v for k, v in dados.items() if k != "voos"}, ensure_ascii=False, indent=1))
