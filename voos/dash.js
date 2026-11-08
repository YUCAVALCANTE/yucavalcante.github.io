/*
 * Adaptador mínimo para rodar o dashboard fora do claude.ai.
 * Implementa a mesma interface usada pela página (dash.data, dash.draw, dash.onData,
 * dash.params/setParams/resetParams, dash.colors, dash.setLink) sobre arquivos JSON locais.
 * Os filtros escolhidos ficam na URL (?empresa=GLO&ano=2025), então dá para compartilhar uma visão.
 */
(function () {
  'use strict';

  const DEFAULTS = { empresa: 'Todas', aeroporto: 'Todos', ano: 'Todos' };
  const DATASETS = [
    'filtros', 'indicadores', 'mensal', 'por_hora', 'por_dia_semana', 'rotas',
    'modelo_metricas', 'modelo_decis', 'modelo_importancia',
  ];
  const CORES = {
    claro: ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#6250d6', '#e34948'],
    escuro: ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181', '#008300', '#9085e9', '#e66767'],
  };

  const store = {};
  const params = { ...DEFAULTS };
  const draws = new Map();
  const listeners = [];
  const escuro = window.matchMedia('(prefers-color-scheme: dark)');

  // Filtros vindos da URL
  const url = new URLSearchParams(location.search);
  for (const k of Object.keys(DEFAULTS)) if (url.get(k)) params[k] = url.get(k);

  const syncUrl = () => {
    const q = new URLSearchParams();
    for (const [k, v] of Object.entries(params)) if (v != null && v !== DEFAULTS[k]) q.set(k, v);
    const s = q.toString();
    history.replaceState(null, '', location.pathname + (s ? '?' + s : '') + location.hash);
  };

  let agendado = false;
  const render = () => {
    agendado = false;
    for (const fn of listeners) {
      try { fn(); } catch (e) { console.error(e); }
    }
    for (const el of document.querySelectorAll('[data-draw]')) {
      if (el.closest('[hidden]')) continue;
      const fn = draws.get(el.dataset.draw);
      if (!fn) continue;
      try { fn(el); } catch (e) { console.error('draw', el.dataset.draw, e); }
    }
  };
  const agendar = () => {
    if (agendado) return;
    agendado = true;
    requestAnimationFrame(render);
  };

  window.dash = {
    get colors() { return escuro.matches ? CORES.escuro : CORES.claro; },
    data(id) { return store[id] || { status: 'loading', data: [] }; },
    params() { return { ...params }; },
    setParams(o) {
      for (const [k, v] of Object.entries(o)) {
        if (v == null || v === '') params[k] = DEFAULTS[k];
        else params[k] = v;
      }
      syncUrl();
      agendar();
    },
    resetParams() {
      Object.assign(params, DEFAULTS);
      syncUrl();
      agendar();
    },
    onData(fn) { listeners.push(fn); agendar(); },
    draw(nome, fn) { draws.set(nome, fn); agendar(); },
    setLink(nome) { history.replaceState(null, '', location.pathname + location.search + '#' + nome); },
    refresh() {},
  };

  // Carrega os dados
  for (const id of DATASETS) {
    fetch(`dados/${id}.json`)
      .then((r) => { if (!r.ok) throw new Error(r.status + ' ' + r.statusText); return r.json(); })
      .then((rows) => { store[id] = { status: 'ok', data: rows, columns: rows.length ? Object.keys(rows[0]) : [] }; })
      .catch((e) => { store[id] = { status: 'error', data: [], message: String(e) }; console.error(id, e); })
      .finally(agendar);
  }

  // Redesenha quando uma aba aparece, quando a largura muda ou quando o tema muda
  new MutationObserver((muts) => {
    if (muts.some((m) => !(m.target.classList && m.target.classList.contains('vx-tip')))) agendar();
  }).observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['hidden'] });
  let largura = 0;
  new ResizeObserver(() => {
    const w = document.documentElement.clientWidth;
    if (Math.abs(w - largura) > 4) { largura = w; agendar(); }
  }).observe(document.documentElement);
  escuro.addEventListener('change', agendar);
})();
