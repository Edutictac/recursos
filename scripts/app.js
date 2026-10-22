import { i18n, areaLabel, languageLabel, levelLabel, detectLang, setLang, getLang } from "./i18n.js";
import { registerServiceWorker, updateSwVersionFromSource } from "./sw-manager.js";
import { initOfflineBanner } from "./url-state.js";
import { state } from "./state.js";
import {uniqueValues, uniqueLanguageValues, buildReportIndex} from './filters.js';
import {clearSelect, fillSelect} from './render.js';
import {
  initPreferenceBackend, loadSubmissions,
  toggleFavoritePreference, setRatingPreference, reportBroken,
  hideResource, isAdmin, submitActivity, loadSources, unhideResource,
} from "./api.js";

const dataUrl = "./data/games.json";
const homeDataUrl = "./data/games-home.json";
const reportUrl = "./reports/link-report.json";
let catalogue, access, federationSequence = 0, sessionSequence = 0;

// DOM refs
const offlineBanner = document.querySelector("#offlineBanner");
const sourcesPanel = document.querySelector("#sourcesPanel");
const sourcesList = document.querySelector("#sourcesList");
const submitDialog = document.querySelector("#submitDialog");
const submitForm = document.querySelector("#submitForm");
const submitTitleInput = document.querySelector("#submitTitle");
const submitUrlInput = document.querySelector("#submitUrl");
const submitNotesInput = document.querySelector("#submitNotes");
const submitNameInput = document.querySelector("#submitName");
const submitAreaSelect = document.querySelector("#submitArea");
const submitLanguageSelect = document.querySelector("#submitLanguage");
const submitCancelBtn = document.querySelector("#submitCancelBtn");
const submitFeedback = document.querySelector("#submitFeedback");
const submitSendBtn = document.querySelector("#submitSendBtn");

setLang(detectLang());
registerServiceWorker();
updateSwVersionFromSource();
initOfflineBanner(offlineBanner, i18n);

boot().catch((error) => {
  console.error("No se pudo iniciar la aplicacion", error);
  state.isPartialLoad = false; state.catalogueError = true; render();
});

async function boot() {
  try {
    const {mountCatalogue, mountAccess} = await import('/assets/ui/catalogue.js');
    catalogue = mountCatalogue(document.querySelector('#catalogueApp'), {onAction: catalogueAction});
    access = mountAccess(document.querySelector('#accessApp'), {onSessionChange:refreshSession,onPropose:openSubmitDialog});
  } catch {
    const output=document.querySelector('#catalogueApp');
    output.textContent=i18n('catalogue_load_error');
    output.setAttribute('role','alert');
    return;
  }

  const homeGames = await fetchJson(homeDataUrl, true) || await fetchJson(dataUrl);
  state.games = Array.isArray(homeGames) ? homeGames : [];
  state.isPartialLoad = true;

  await initPreferenceBackend();
  updateAuthUi();
  applyStaticTranslations();
  updateLangButtons();
  wireEvents();
  render();
  loadFederatedResources()
    .then(() => { render(); })
    .catch((error) => console.warn("No se pudo cargar EduHoot", error));

  if (state.backendMode === "remote") {
    loadSubmissions()
      .then(() => { render(); })
      .catch((err) => console.warn("Error en carregar propostes", err));
  }

  Promise.all([
    fetchJson(dataUrl),
    fetchJson(reportUrl, true),
  ]).then(([games, report]) => {
    state.games = Array.isArray(games) ? games : state.games;
    state.isPartialLoad = false;

    if (report && Array.isArray(report.results)) {
      state.reportByUrl = buildReportIndex(report.results);
      state.reportSummary = report.summary || null;
    }

    render();
    return loadFederatedResources();
  }).then(() => {
    render();
  }).catch((error) => {
    state.isPartialLoad = false; render();
    console.warn("Error en càrrega completa de dades", error);
  });
}

function federatedGame(resource) {
  const url = resource.source_url || resource.play_url || "";
  return {
    title: resource.title || "",
    title_ca: resource.title_ca || "",
    title_en: resource.title_en || "",
    notes: resource.description || "",
    notes_ca: resource.description_ca || "",
    area: resource.subject || "General",
    language: Array.isArray(resource.language) ? resource.language : [],
    levels: Array.isArray(resource.educational_level) && resource.educational_level.length
      ? resource.educational_level
      : (resource.educational_stage ? [resource.educational_stage] : []),
    format: resource.format || "eduhoot",
    url,
    image: resource.thumbnail_url || "",
    provider: resource.provider,
    external_id: resource.external_id,
    _isFederated: true,
  };
}

async function loadFederatedResources() {
  const sequence = ++federationSequence, epoch = state.preferenceEpoch;
  const results = await Promise.allSettled([
    fetch("/api/resources?provider=eduhoot&limit=200", {credentials:"same-origin"}).then(async r => {
      if (!r.ok) throw new Error("EduHoot unavailable");
      return (await r.json()).items || [];
    }),
    (async () => {
      const books=[];
      for (let offset=0; offset<10000; offset+=80) {
        const r=await fetch("/api/llibres/books?limit=80&offset="+offset,{cache:"no-store"});
        if (!r.ok) throw new Error("Llibres unavailable");
        const data=await r.json(); books.push(...data.items);
        if (!data.more) break;
      }
      return books;
    })(),
  ]);
  if (sequence !== federationSequence || epoch !== state.preferenceEpoch) return;
  const resources=results.flatMap(r => r.status==="fulfilled" ? r.value : []);
  const federated=resources.map(r => ({...federatedGame(r),
    url:r.play_url || r.source_url || "", download_url:r.download_url || ""}));
  state.games=state.games.filter(g => !g._isFederated && g.provider!=="edutictac-llibres" && g.source!=="edutictac-llibres").concat(federated);
}

async function fetchJson(url, optional = false) {
  const response = await fetch(url, { cache: "default" });
  if (!response.ok) {
    if (optional) return null;
    throw new Error(`Fallo al cargar ${url}: ${response.status}`);
  }
  try {
    return await response.json();
  } catch (error) {
    if (optional) return null;
    throw error;
  }
}

function allGames() {
  return state.submissions.length > 0 ? [...state.games, ...state.submissions] : state.games;
}

function render() {
  access?.setContext({backendMode:state.backendMode,epoch:state.preferenceEpoch});
  catalogue?.setContext({games:allGames(),favorites:new Set(state.favorites),userRatings:new Map(state.userRatings),
    ratingSummary:new Map(state.ratingSummary),userReports:new Set(state.userReports),brokenSummary:new Map(state.brokenSummary),
    reportByUrl:new Map(state.reportByUrl),backendMode:state.backendMode,isAdmin:isAdmin(),epoch:state.preferenceEpoch,loading:state.isPartialLoad,error:state.catalogueError});
}

async function catalogueAction(type,key,value,epoch) {
  if (epoch !== state.preferenceEpoch) { render(); throw new Error("preference_context_changed"); }
  const actions={favorite:()=>toggleFavoritePreference(key),rating:()=>setRatingPreference(key,value),report:()=>reportBroken(key),hide:()=>hideResource(key),unhide:()=>unhideResource(key)};
  if(!actions[type])return;
  await actions[type](); render();
}

async function refreshSession() {
  const sequence=++sessionSequence;
  const pending=initPreferenceBackend();render();updateAuthUi();
  await pending;
  if(sequence!==sessionSequence)return;
  render();updateAuthUi();
  await Promise.allSettled([loadSubmissions(),loadFederatedResources()]);
  if(sequence===sessionSequence)render();
}

function updateAuthUi() {
  sourcesPanel?.classList.toggle("hidden",state.backendMode!=="remote"||!isAdmin());
  if(state.backendMode==="remote"&&isAdmin())void renderSources();
}

async function renderSources() {
  if (!sourcesList || !isAdmin()) return;
  const providers = await loadSources();
  if (!providers) return;
  sourcesList.innerHTML = "";
  for (const p of providers) {
    const last = p.last_sync || {};
    const row = document.createElement("div");
    row.className = "source-row";
    const title = document.createElement("strong");
    title.textContent = p.provider;
    const info = document.createElement("span");
    const status = last.status || "—";
    const fetched = last.fetched ?? "—";
    const created = last.created ?? "—";
    const updated = last.updated ?? "—";
    const errors = last.errors ?? "—";
    const finished = last.finished_at ? new Date(last.finished_at).toLocaleString() : "nunca";
    info.textContent = `Recursos: ${p.resources} · Estado: ${status} · Última sync: ${finished} · fetched ${fetched}, nuevos ${created}, actualizados ${updated}, errores ${errors}`;
    row.append(title, info);
    sourcesList.append(row);
  }
}

function updateLangButtons() {
  const lang = getLang();
  document.querySelectorAll(".btn-lang").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = i18n(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = i18n(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", i18n(el.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", i18n(el.dataset.i18nTitle));
  });
  document.title = i18n("doc_title");
}

function wireEvents() {
  if (submitCancelBtn) submitCancelBtn.addEventListener("click", () => submitDialog?.close());
  if (submitDialog) {
    submitDialog.addEventListener("click", (e) => {
      if (e.target === submitDialog) submitDialog.close();
    });
  }
  if (submitForm) submitForm.addEventListener("submit", handleSubmitForm);
  document.querySelectorAll(".btn-lang").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      updateLangButtons();
      applyStaticTranslations();
      updateAuthUi();
      render();
    });
  });
}

// --- Submit dialog ---

function openSubmitDialog() {
  if (!submitDialog) return;
  const games = allGames();
  clearSelect(submitAreaSelect);
  fillSelect(submitAreaSelect, uniqueValues(games, "area"), areaLabel);
  clearSelect(submitLanguageSelect);
  fillSelect(submitLanguageSelect, uniqueLanguageValues(games), languageLabel);
  submitForm?.reset();
  if (submitFeedback) {
    submitFeedback.className = "submit-feedback hidden";
    submitFeedback.textContent = "";
  }
  submitDialog.showModal();
}

async function handleSubmitForm(e) {
  e.preventDefault();
  if (state.backendMode !== "remote") return;

  const title = submitTitleInput?.value.trim() || "";
  const url = submitUrlInput?.value.trim() || "";
  const notes = submitNotesInput?.value.trim() || "";
  const area = submitAreaSelect?.value || "General";
  const language = submitLanguageSelect?.value || "";
  const name = submitNameInput?.value.trim() || "";

  if (!title || !url) return;

  if (submitSendBtn) submitSendBtn.disabled = true;
  showSubmitFeedback(i18n("submit_loading"), "");

  try {
    await submitActivity({ title, url, notes, area, language, name });
    showSubmitFeedback(i18n("submit_success"), "ok");
    submitForm?.reset();
    await loadSubmissions();
    render();
    setTimeout(() => submitDialog?.close(), 1800);
  } catch (error) {
    console.error("Error en enviar proposta", error);
    showSubmitFeedback(i18n("submit_error"), "error");
  } finally {
    if (submitSendBtn) submitSendBtn.disabled = false;
  }
}

function showSubmitFeedback(text, type) {
  if (!submitFeedback) return;
  submitFeedback.textContent = text;
  submitFeedback.className = `submit-feedback${type ? ` ${type}` : ""}`;
}

