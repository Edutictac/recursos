<script setup>
import {computed, ref} from 'vue';
import {i18n, getLang, areaLabel, levelLabel} from '/scripts/i18n.js';
import {gameKey, gameLanguageText, normalizeUrl} from '/scripts/filters.js';
import {DEFAULT_GAME_IMAGE} from '/scripts/state.js';
import {openFlashDialog} from '/scripts/flash.js';
import {openJClicDialog} from '/scripts/jclic.js';
import {openIframeDialog} from '/scripts/external.js';
const props=defineProps({game:Object, context:Object, onAction:Function});
const pending=ref(false), message=ref(''), failed=ref(false), fallback=ref(false);
const key=computed(()=>gameKey(props.game));
const title=computed(()=>{props.context;const lang=getLang();return ((lang==='va'||lang==='ca')?props.game.title_ca:lang==='en'?props.game.title_en:'')||props.game.title||i18n('no_title');});
const notes=computed(()=>{props.context;const lang=getLang();return ((lang==='va'||lang==='ca')?props.game.notes_ca:lang==='en'?props.game.notes_en:'')||props.game.notes||i18n('no_notes');});
const favorite=computed(()=>props.context.favorites.has(key.value));
const rating=computed(()=>props.context.userRatings.get(key.value)||0);
const summary=computed(()=>props.context.ratingSummary.get(key.value));
const report=computed(()=>props.context.brokenSummary.get(key.value));
const reported=computed(()=>props.context.userReports.has(key.value));
const remote=computed(()=>props.context.backendMode==='remote');
const health=computed(()=>props.context.reportByUrl.get(normalizeUrl(props.game.url)));
const healthText=computed(()=> !health.value ? i18n('not_checked') : health.value.ok ? '' : i18n(health.value.severity==='warning'?'link_warn':'link_error',health.value.error||`HTTP ${health.value.httpStatus||'error'}`));
const image=computed(()=>safeUrl(props.game.image)||DEFAULT_GAME_IMAGE);
const url=computed(()=>safeUrl(props.game.url));
function safeUrl(raw) { if(!raw)return '';try{const u=new URL(raw,window.location.href);return ['http:','https:'].includes(u.protocol)&&!u.username&&!u.password?u.href:'';}catch{return '';}}
const embedded=computed(()=>props.game.flash||['jclic','eduhoot','llibres'].includes(props.game.format));
function open() {
  if(!url.value)return;
  if(props.game.flash)openFlashDialog(url.value,props.game.title);
  else if(props.game.format==='jclic')openJClicDialog(url.value,props.game.title);
  else openIframeDialog(url.value,props.game.title,props.game.format==='llibres');
}
async function action(type,value) {
  if(pending.value||props.context.sessionChanging)return;
  if(['hide','unhide'].includes(type)&&!props.context.isAdmin)return;
  const confirmKey=type==='report'?(props.context.isAdmin?'report_broken_confirm_admin':'report_broken_confirm'):type==='hide'?'admin_hide_confirm':type==='unhide'?'admin_unhide_confirm':null;
  if(confirmKey&&!window.confirm(i18n(confirmKey,title.value)))return;
  pending.value=true;message.value='';failed.value=false;
  try { await props.onAction(type,key.value,value,props.context.epoch);if(type==='report')message.value='report_broken_feedback'; }
  catch { failed.value=true;message.value='catalogue_action_error'; }
  finally { pending.value=false; }
}
</script>
<template>
  <article class="card" :class="{submission:game._isSubmission,broken:health&&!health.ok}" :aria-busy="pending">
    <button v-if="embedded" type="button" class="card-image-link" :title="i18n(game.flash?'play_ruffle':'open_game')" :aria-label="i18n(game.flash?'play_ruffle':'open_game')" :disabled="!url" @click="open"><img class="card-image" :src="fallback?DEFAULT_GAME_IMAGE:image" :alt="game.title||i18n('no_title')" loading="lazy" decoding="async" @error="fallback=true"></button>
    <a v-else class="card-image-link" :href="url||undefined" target="_blank" rel="noreferrer noopener" :title="i18n('open_game')" :aria-label="i18n('open_game')"><img class="card-image" :src="fallback?DEFAULT_GAME_IMAGE:image" :alt="game.title||i18n('no_title')" loading="lazy" decoding="async" @error="fallback=true"></a>
    <div class="card-head"><h3>{{ title }}</h3><div class="card-actions">
      <button type="button" class="fav-btn" :class="{active:favorite}" :title="i18n(favorite?'favorite_remove':'favorite_add')" :aria-label="i18n(favorite?'favorite_remove':'favorite_add')" :aria-pressed="favorite" :disabled="context.sessionChanging||pending" @click="action('favorite')">❤</button>
      <button v-if="remote" type="button" class="report-btn" :class="{active:reported}" :title="i18n(reported?'report_broken_active':'report_broken')" :aria-label="i18n(reported?'report_broken_active':'report_broken')" :disabled="context.sessionChanging||pending||reported" @click="action('report')">⚠</button>
      <button v-if="remote&&context.isAdmin" type="button" class="admin-hide-btn" :title="i18n('admin_hide_resource')" :aria-label="i18n('admin_hide_resource')" :disabled="context.sessionChanging||pending" @click="action('hide')">×</button>
      <button v-if="remote&&context.isAdmin&&report?.adminReported" type="button" class="admin-unhide-btn" :title="i18n('admin_unhide_resource')" :aria-label="i18n('admin_unhide_resource')" :disabled="context.sessionChanging||pending" @click="action('unhide')">↩</button>
    </div></div>
    <div class="meta">
      <span v-if="game._isSubmission" class="tag submission">{{ i18n('submission_badge') }}</span>
      <span class="tag">{{ areaLabel(game.area||'General') }}</span>
      <span v-for="level in game.levels||(game.level?[game.level]:[i18n('no_level')])" :key="level" class="tag">{{ levelLabel(level) }}</span>
      <span class="tag lang">{{ gameLanguageText(game)||i18n('catalogue_no_language') }}</span>
      <span v-if="['jclic','h5p','eduhoot','scorm','llibres'].includes(game.format)" class="tag format">{{ game.format.toUpperCase() }}</span>
      <span v-if="game.flash" class="tag flash">Flash</span>
    </div>
    <div class="rating" role="group" :aria-label="i18n('rating_group_label')">
      <span class="rating-label">{{ i18n('rating_label') }}</span>
      <span v-if="remote" class="rating-summary">{{ summary?.count?i18n('rating_avg',summary.avg.toFixed(1),summary.count):i18n('rating_no_votes') }}</span>
      <div class="stars"><button v-for="value in 5" :key="value" class="star-btn" :class="{active:value<=rating}" type="button" :title="i18n('rating_set',value)" :aria-label="i18n('rating_set',value)" :aria-pressed="value<=rating" :disabled="context.sessionChanging||pending" @click="action('rating',value)">★</button></div>
    </div>
    <p class="note">{{ notes }}</p><p v-if="healthText" class="health">{{ healthText }}</p>
    <p v-if="game._isSubmission&&game._submittedBy" class="note submission-by">{{ i18n('submission_by',game._submittedBy) }}</p>
    <p v-if="message" class="report-feedback" :role="failed?'alert':'status'">{{ i18n(message) }}</p>
  </article>
</template>
