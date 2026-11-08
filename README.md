# yucavalcante.github.io

Site pessoal de Yury Cavalcante, publicado pelo GitHub Pages.

| Caminho | Conteúdo |
|---|---|
| `/` | Página inicial do portfólio |
| `/voos/` | Dashboard interativo de atrasos de voos (dados da ANAC) |

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
