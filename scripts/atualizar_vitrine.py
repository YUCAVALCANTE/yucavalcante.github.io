"""Gera dados/vitrine.json: os recortes pequenos que ilustram cada card da página inicial.

Uso:
    python scripts/atualizar_vitrine.py

Lê os dados já publicados de cada projeto (voos, comércio exterior e aeroportos) e grava
um único arquivo leve, para a página inicial não precisar baixar as bases completas.
"""

from __future__ import annotations

import csv
import io
import json
import urllib.request
from pathlib import Path

SITE = Path(__file__).resolve().parents[1]
COMEX = "https://yucavalcante.github.io/comercio-exterior-brasileiro"


def baixar(url: str) -> bytes:
    with urllib.request.urlopen(url, timeout=60) as r:
        return r.read()


def voos() -> list[dict]:
    decis = json.loads((SITE / "voos" / "dados" / "modelo_decis.json").read_text(encoding="utf-8"))
    return [{"decil": d["decil"], "taxa": d["taxa_real"]} for d in decis if d["cenario"] == "Planejamento"]


def comex() -> list[dict]:
    texto = baixar(f"{COMEX}/dados/projecao-anual.csv").decode("utf-8")
    linhas = list(csv.DictReader(io.StringIO(texto)))
    return [
        {"ano": int(r["year"]), "tipo": r["type"], "exportacao_bi": round(float(r["export"]) / 1e9, 1)}
        for r in linhas
    ]


def aeroportos() -> list[dict]:
    indice = json.loads(baixar(f"{COMEX}/aeroportos/dados/index.json").decode("utf-8"))
    aero = [o for o in indice["origins"] if o.get("airport")]
    top = sorted(aero, key=lambda o: o["fob"], reverse=True)[:5]
    apelidos = {
        "GUARULHOS": "Guarulhos (SP)", "VIRACOPOS": "Viracopos (SP)", "EDUARDO GOMES": "Manaus (AM)",
        "RIO DE JANEIRO": "Galeão (RJ)", "GUARARAPES": "Recife (PE)", "BRASILIA": "Brasília (DF)",
        "CONFINS": "Confins (MG)", "SALVADOR": "Salvador (BA)", "FORTALEZA": "Fortaleza (CE)",
    }
    def nome(o: dict) -> str:
        bruto = o["name"].upper()
        return next((v for k, v in apelidos.items() if k in bruto), o["name"].split(" - ", 1)[-1].title())
    return [{"aeroporto": nome(o), "fob_bi": round(o["fob"] / 1e9, 1)} for o in top]


def main() -> None:
    saida = SITE / "dados" / "vitrine.json"
    saida.parent.mkdir(exist_ok=True)
    dados = {"voos": voos(), "comex": comex(), "aeroportos": aeroportos()}
    saida.write_text(json.dumps(dados, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(json.dumps(dados["aeroportos"], ensure_ascii=False))
    print(f"{saida.relative_to(SITE)}: {saida.stat().st_size / 1e3:.1f} KB")


if __name__ == "__main__":
    main()
