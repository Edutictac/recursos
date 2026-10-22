<script setup>
import {ref,reactive,shallowRef,computed,onMounted,onBeforeUnmount,nextTick} from 'vue';
import {i18n,getLang,areaLabel,languageLabel} from '/scripts/i18n.js';
import {uniqueValues,uniqueLanguageValues} from '/scripts/filters.js';
import {submitActivity} from '/scripts/api.js';
import {state} from '/scripts/state.js';
const props=defineProps({onSubmitted:Function});
const context=shallowRef({epoch:-1,backendMode:'local',games:[],language:getLang()});
const dialog=ref(), titleInput=ref(), busy=ref(false), sent=ref(false), feedback=ref(''), failed=ref(false);
const draft=reactive({title:'',url:'',notes:'',name:'',area:'',language:''});
let generation=0,active=true;
const areas=computed(()=>uniqueValues(context.value.games,'area'));
const languages=computed(()=>uniqueLanguageValues(context.value.games));
function t(key){context.value.language;return i18n(key);}
function reset(){Object.keys(draft).forEach(key=>draft[key]='');feedback.value='';failed.value=false;sent.value=false;}
function close(){++generation;dialog.value?.close();reset();}
function setContext(next){if(next.epoch!==context.value.epoch||next.backendMode!==context.value.backendMode)close();context.value={...next,language:getLang()};}
async function open(){if(!active||context.value.backendMode!=='remote'||context.value.epoch!==state.preferenceEpoch||busy.value)return;reset();++generation;dialog.value.showModal();await nextTick();titleInput.value?.focus();}
function validUrl(value){try{const url=new URL(value);return ['http:','https:'].includes(url.protocol)&&!url.username&&!url.password;}catch{return false;}}
async function submit(){
  if(busy.value||sent.value||!active||context.value.backendMode!=='remote'||context.value.epoch!==state.preferenceEpoch)return;
  const payload=Object.fromEntries(Object.entries(draft).map(([key,value])=>[key,value.trim()]));
  if(!payload.title||!validUrl(payload.url)){feedback.value='submit_invalid';failed.value=true;return;}
  payload.area=payload.area||'General';
  const token=generation,epoch=context.value.epoch;
  const current=()=>active&&token===generation&&epoch===state.preferenceEpoch;
  busy.value=true;failed.value=false;feedback.value='submit_loading';
  try{
    await submitActivity(payload);
    if(!current())return;
    reset();sent.value=true;feedback.value='submit_success';
    try{await props.onSubmitted();}catch{if(current())feedback.value='submit_refresh_error';}
  }catch{if(current()){feedback.value='submit_error';failed.value=true;}}
  finally{busy.value=false;}
}
function hide(){active=false;close();dialog.value?.querySelector('form')?.reset();}
function show(){active=true;}
onMounted(()=>{window.addEventListener('pagehide',hide);window.addEventListener('pageshow',show);});
onBeforeUnmount(()=>{hide();window.removeEventListener('pagehide',hide);window.removeEventListener('pageshow',show);});
defineExpose({setContext,open});
</script>
<template>
  <dialog ref="dialog" id="submitDialog" class="submit-dialog" aria-labelledby="submitDialogTitle" @cancel="close" @click="event=>{if(event.target===dialog)close();}">
    <h2 id="submitDialogTitle" class="submit-dialog-title">{{t('submit_dialog_title')}}</h2>
    <form id="submitForm" @submit.prevent="submit">
      <fieldset class="submit-fields" :disabled="busy||sent">
        <label><span>{{t('submit_field_title')}}</span><input ref="titleInput" id="submitTitle" v-model="draft.title" required autocomplete="off" /></label>
        <label><span>{{t('submit_field_url')}}</span><input id="submitUrl" v-model="draft.url" type="url" required autocomplete="off" /></label>
        <label><span>{{t('area_label')}}</span><select id="submitArea" v-model="draft.area"><option value="">—</option><option v-for="area in areas" :key="area" :value="area">{{areaLabel(area)}}</option></select></label>
        <label><span>{{t('language_label')}}</span><select id="submitLanguage" v-model="draft.language"><option value="">—</option><option v-for="language in languages" :key="language" :value="language">{{languageLabel(language)}}</option></select></label>
        <label><span>{{t('submit_field_notes')}}</span><textarea id="submitNotes" v-model="draft.notes" rows="3"></textarea></label>
        <label><span>{{t('submit_field_name')}}</span><input id="submitName" v-model="draft.name" autocomplete="off" /></label>
      </fieldset>
      <p v-if="feedback" id="submitFeedback" class="submit-feedback" :class="{error:failed,ok:sent}" :role="failed?'alert':'status'">{{t(feedback)}}</p>
      <div class="submit-actions"><button id="submitCancelBtn" type="button" class="btn-auth secondary" @click="close">{{t(sent?'dialog_close':'submit_cancel')}}</button><button id="submitSendBtn" class="btn-auth" :disabled="busy||sent">{{t('submit_send')}}</button></div>
    </form>
  </dialog>
</template>
