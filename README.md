# yucavalcante.github.io

Site pessoal de Yury Cavalcante, publicado pelo GitHub Pages.

| Caminho | Conteúdo |
|---|---|
| `/` | Página inicial do portfólio |
| `/voos/` | Dashboard interativo de atrasos de voos (dados da ANAC) |
| `/comercio-exterior-brasileiro/` | Vem do repositório [comercio-exterior-brasileiro](https://github.com/YUCAVALCANTE/comercio-exterior-brasileiro), que publica a pasta `docs/` |

## Adicionar um projeto à vitrine

1. Ligue o GitHub Pages no repositório do projeto (**Settings → Pages**). Ele passa a ser servido em `yucavalcante.com/<nome-do-repositório>/`.
2. Em `index.html`, copie um `<article class="card">` e troque os textos e os links.
3. Para o mini gráfico, acrescente uma função em `desenhos` (no fim de `index.html`) e os dados em `scripts/atualizar_vitrine.py`, depois rode `python scripts/atualizar_vitrine.py`. Sem gráfico, apague a `<figure>` do card.

## Textos do Medium

A seção "Textos" da página inicial é gerada a partir de `dados/artigos.json`. Para incluir um texto novo, acrescente-o na categoria certa (mais recente primeiro; uma série de contos é um item só, com `partes`) e rode:

```bash
python scripts/atualizar_artigos.py
```

## Atualizar o dashboard de voos

O dashboard é gerado a partir do repositório [atrasos-voos-brasil](https://github.com/YUCAVALCANTE/atrasos-voos-brasil):

```bash
# no repositório atrasos-voos-brasil, depois de rodar o pipeline
python -m atrasos.dashboard_dados

# aqui
python scripts/atualizar_voos.py ../atrasos-voos-brasil
git add -A && git commit -m "Atualiza dados do dashboard" && git push
```

`voos/dash.js` reproduz, sobre arquivos JSON, a mesma interface que o dashboard usa no claude.ai. Por isso o corpo da página (`dashboard/index.html`) é idêntico nos dois lugares.

## Domínio próprio

1. No DNS do domínio, crie quatro registros **A** para `@` apontando para `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`, e um **CNAME** `www` → `yucavalcante.github.io`.
2. Em **Settings → Pages → Custom domain**, informe o domínio e marque **Enforce HTTPS** quando o certificado ficar pronto.
