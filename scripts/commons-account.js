// La instal·lació decidix l'origen; mai carregar el compte públic en un aula local.
(() => {
  const base = new URL(window.EDUTICTAC_COMMONS_URL);
  if (!['http:', 'https:'].includes(base.protocol) || base.username || base.password) return;
  const widget = document.querySelector('edutictac-account');
  if (!widget) return;
  widget.dataset.base = base.origin;
  if (window.EDUTICTAC_COMMONS_LOCAL) widget.dataset.home = base.origin + '/';
  const script = document.createElement('script');
  script.src = new URL('/assets/account-widget.js', base).href;
  script.async = true;
  document.head.appendChild(script);
})();
