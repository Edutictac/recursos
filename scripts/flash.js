const RUFFLE_SRC = "./assets/ruffle/ruffle.js";
const REMOTE_FLASH_BASE = "https://recursos.edutictac.es/assets/flash/";

const flashDialog = document.querySelector("#flashDialog");
const flashClose = document.querySelector("#flashClose");
const flashFullscreen = document.querySelector("#flashFullscreen");
const flashContainer = document.querySelector("#flashContainer");
const flashTitle = document.querySelector("#flashTitle");
let activeFlashPlayer = null;

flashClose.addEventListener("click", closeFlashDialog);
flashDialog.addEventListener("click", (e) => {
  if (e.target === flashDialog) closeFlashDialog();
});
document.addEventListener("keydown", handleFlashShortcuts);
if (flashFullscreen) {
  flashFullscreen.addEventListener("click", toggleFlashFullscreen);
}

export async function openFlashDialog(url, title) {
  flashTitle.textContent = title;
  flashContainer.innerHTML = "";
  flashDialog.showModal();

  try {
    const ruffle = await loadRuffle();
    const flashUrl = await resolveFlashUrl(url);
    const player = ruffle.createPlayer();
    player.style.width = "100%";
    player.style.height = "100%";
    flashContainer.appendChild(player);
    activeFlashPlayer = player;
    player.addEventListener("dblclick", toggleFlashFullscreen);
    await player.load({ url: flashUrl });
  } catch (error) {
    console.error("No se pudo cargar la actividad Flash", error);
    activeFlashPlayer = null;
    flashContainer.innerHTML = "";
    flashContainer.appendChild(createFlashError(url));
  }
}

export function closeFlashDialog() {
  if (document.fullscreenElement === activeFlashPlayer) {
    document.exitFullscreen().catch(() => {
      // Ignoramos errores al salir de fullscreen para no bloquear el cierre.
    });
  }
  flashDialog.close();
  flashContainer.innerHTML = "";
  activeFlashPlayer = null;
}

function handleFlashShortcuts(event) {
  if (!flashDialog.open) {
    return;
  }

  if (event.key.toLowerCase() === "f" && !event.ctrlKey && !event.altKey && !event.metaKey) {
    event.preventDefault();
    toggleFlashFullscreen();
  }
}

async function toggleFlashFullscreen() {
  if (!activeFlashPlayer || !document.fullscreenEnabled) {
    return;
  }

  if (document.fullscreenElement === activeFlashPlayer) {
    await document.exitFullscreen();
    return;
  }

  await activeFlashPlayer.requestFullscreen();
}

async function loadRuffle() {
  if (window.RufflePlayer) return window.RufflePlayer.newest();
  await new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = RUFFLE_SRC;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
  return window.RufflePlayer.newest();
}

async function resolveFlashUrl(url) {
  const candidates = flashAssetCandidates(url);
  if (!candidates) {
    return url;
  }

  try {
    const response = await fetch(candidates.local, {
      method: "HEAD",
      cache: "no-store"
    });
    if (response.ok) {
      return candidates.local;
    }
  } catch {
    // Si no existe en local o falla la consulta, seguimos con la URL remota.
  }

  return candidates.remote;
}

// Los .swf del catálogo se referencian siempre como "assets/flash/<ruta>"
// (relativa o absoluta, con posibles subcarpetas y querystring, p. ej.
// "assets/flash/cisco/RootMovie.swf?lesson=1"). No todas las instalaciones
// de Commons llevan el archivo completo (algunos pesan hasta 100 MB y no
// están en git), así que probamos primero en local y si no está caemos
// al mismo fichero servido en recursos.edutictac.es.
function flashAssetCandidates(url) {
  const str = String(url || "");
  const marker = "assets/flash/";
  const idx = str.toLowerCase().indexOf(marker);
  if (idx === -1) {
    return null;
  }

  const rest = str.slice(idx + marker.length);
  if (!rest) {
    return null;
  }

  return {
    local: `./assets/flash/${rest}`,
    remote: `${REMOTE_FLASH_BASE}${rest}`
  };
}

function createFlashError(url) {
  const wrapper = document.createElement("div");
  wrapper.className = "flash-error";

  const message = document.createElement("p");
  message.textContent = "No se pudo cargar esta actividad Flash.";

  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer noopener";
  link.textContent = "Abrir archivo original";

  wrapper.append(message, link);
  return wrapper;
}
