"""Monta voos/index.html e copia os dados a partir do repositório atrasos-voos-brasil.

Uso:
    python scripts/atualizar_voos.py ../atrasos-voos-brasil

O corpo do dashboard (dashboard/index.html) é o mesmo publicado no claude.ai;
voos/dash.js implementa a interface `dash` em cima dos arquivos JSON.
"""

from __future__ import annotations

import shutil
import sys
from pathlib import Path

SITE = Path(__file__).resolve().parents[1]


def main(repo: Path) -> None:
    corpo = (repo / "dashboard" / "index.html").read_text(encoding="utf-8")
    corpo = "\n".join(l for l in corpo.splitlines() if 'name="dash-one-writer"' not in l)
    modelo = (SITE / "voos" / "template.html").read_text(encoding="utf-8")
    (SITE / "voos" / "index.html").write_text(modelo.replace("{{CORPO}}", corpo), encoding="utf-8")

    destino = SITE / "voos" / "dados"
    destino.mkdir(parents=True, exist_ok=True)
    for arq in sorted((repo / "reports" / "dashboard").glob("*.json")):
        shutil.copy2(arq, destino / arq.name)
        print(f"{arq.name}: {arq.stat().st_size / 1e3:.0f} KB")
    print("voos/index.html atualizado")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit(__doc__)
    main(Path(sys.argv[1]).resolve())
