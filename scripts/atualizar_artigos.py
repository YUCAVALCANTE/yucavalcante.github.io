"""Gera a seção "Textos" da página inicial a partir de dados/artigos.json.

Uso:
    python scripts/atualizar_artigos.py

Para incluir um texto novo, acrescente-o em dados/artigos.json (na categoria certa,
mais recente primeiro) e rode o script. Ele reescreve só o trecho entre os marcadores
<!-- TEXTOS:INICIO --> e <!-- TEXTOS:FIM --> do index.html.
"""

from __future__ import annotations

import html
import json
from pathlib import Path

SITE = Path(__file__).resolve().parents[1]
MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
INICIO, FIM = "<!-- TEXTOS:INICIO -->", "<!-- TEXTOS:FIM -->"


def mes(d: str) -> str:
    ano, m = d.split("-")
    return f"{MESES[int(m) - 1]}/{ano}"


def quantidade(cat: dict) -> int:
    return sum(i.get("partes", 1) for i in cat["itens"])


def linha(item: dict) -> str:
    e = html.escape
    meta = [mes(item["d"]), "inglês" if item["lang"] == "en" else "português"]
    if item.get("partes"):
        meta.append(f"{item['partes']} partes")
    sub = f'<span class="txt-sub">{e(item["sub"])}</span>' if item.get("sub") else ""
    lang = ' lang="en"' if item["lang"] == "en" else ""
    return (
        f'<li><a href="{e(item["u"])}"><span class="txt-t"{lang}>{e(item["t"])}</span>{sub}'
        f'<span class="txt-meta">{" · ".join(meta)}</span></a></li>'
    )


def gerar(dados: dict) -> str:
    e = html.escape
    cats = dados["categorias"]
    total = sum(quantidade(c) for c in cats)
    datas = sorted(i["d"] for c in cats for i in c["itens"])
    botoes = "\n".join(
        f'        <button class="txt-tab" role="tab" type="button" id="aba-{c["id"]}" aria-controls="txt-{c["id"]}"'
        f' aria-selected="{"true" if n == 0 else "false"}">{e(c["nome"])} <span>{quantidade(c)}</span></button>'
        for n, c in enumerate(cats)
    )
    paineis = "\n".join(
        f'      <div class="txt-panel" role="tabpanel" id="txt-{c["id"]}" aria-labelledby="aba-{c["id"]}">\n'
        f'        <p class="txt-desc">{e(c["descricao"])}</p>\n'
        f'        <ul class="txt-list">\n          ' + "\n          ".join(linha(i) for i in c["itens"]) + "\n        </ul>\n"
        f"      </div>"
        for c in cats
    )
    return f"""{INICIO}
  <section id="textos" aria-labelledby="textos-titulo">
    <div class="sec-head">
      <h2 id="textos-titulo">Textos</h2>
      <a href="{e(dados["perfil"])}">Ver tudo no Medium</a>
    </div>
    <p class="txt-intro">{total} textos publicados no Medium, de {mes(datas[0])} a {mes(datas[-1])}: artigos técnicos, tutoriais, crônicas e contos.</p>
    <div class="txt-tabs" role="tablist" aria-label="Categorias de textos">
{botoes}
    </div>
    <div class="txt-panels">
{paineis}
    </div>
    <script>
      (function () {{
        const abas = [...document.querySelectorAll('.txt-tab')];
        const abrir = (aba) => {{
          abas.forEach((a) => {{
            const ativa = a === aba;
            a.setAttribute('aria-selected', String(ativa));
            a.tabIndex = ativa ? 0 : -1;
            document.getElementById(a.getAttribute('aria-controls')).hidden = !ativa;
          }});
        }};
        abas.forEach((a, i) => {{
          a.addEventListener('click', () => abrir(a));
          a.addEventListener('keydown', (ev) => {{
            const passo = ev.key === 'ArrowRight' ? 1 : ev.key === 'ArrowLeft' ? -1 : 0;
            if (!passo) return;
            const prox = abas[(i + passo + abas.length) % abas.length];
            abrir(prox); prox.focus(); prox.scrollIntoView({{ block: 'nearest', inline: 'nearest' }});
          }});
        }});
        abrir(abas[0]);
      }})();
    </script>
  </section>
  {FIM}"""


def main() -> None:
    dados = json.loads((SITE / "dados" / "artigos.json").read_text(encoding="utf-8"))
    pagina = SITE / "index.html"
    texto = pagina.read_text(encoding="utf-8")
    secao = gerar(dados)
    if INICIO in texto:
        ini, fim = texto.index(INICIO), texto.index(FIM) + len(FIM)
        texto = texto[:ini] + secao + texto[fim:]
    else:
        ancora = '  <section class="contact read"'
        texto = texto.replace(ancora, secao + "\n\n" + ancora, 1)
    pagina.write_text(texto, encoding="utf-8", newline="\n")
    print(f"{sum(quantidade(c) for c in dados['categorias'])} textos em {len(dados['categorias'])} categorias")


if __name__ == "__main__":
    main()
