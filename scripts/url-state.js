export function initOfflineBanner(banner, translate) {
  if (!banner) return;

  const update = () => {
    banner.textContent = translate("offline_banner");
    banner.classList.toggle("hidden", navigator.onLine);
  };

  window.addEventListener("offline", update);
  window.addEventListener("online", update);
  update();
}
