<script setup>
import {shallowRef,ref,onMounted,onBeforeUnmount} from 'vue';
import {i18n,getLang} from '/scripts/i18n.js';
import {loadSources} from '/scripts/api.js';
import {state} from '/scripts/state.js';
const context=shallowRef({isAdmin:false,backendMode:'local',epoch:-1,language:getLang()});
const providers=ref([]),loading=ref(false),error=ref(false),visible=ref(true);
let sequence=0;
function allowed(){return visible.value&&!context.value.sessionChanging&&context.value.isAdmin&&context.value.backendMode==='remote'&&context.value.epoch===state.preferenceEpoch;}
function t(key,...args){context.value.language;return i18n(key,...args);}
function date(value){const parsed=new Date(value);return value&&Number.isFinite(parsed.getTime())?parsed.toLocaleString(context.value.language==='va'?'ca-ES-valencia':context.value.language):t('sources_never');}
async function refresh(){
  if(!allowed()||loading.value)return;
  const token=++sequence,epoch=context.value.epoch;loading.value=true;error.value=false;providers.value=[];
  try{
    const data=await loadSources();
    if(token!==sequence||!allowed()||epoch!==state.preferenceEpoch)return;
    providers.value=data||[];
  }catch{if(token===sequence&&allowed())error.value=true;}
  finally{if(token===sequence)loading.value=false;}
}
function setContext(next){
  const changed=next.epoch!==context.value.epoch||next.isAdmin!==context.value.isAdmin||next.backendMode!==context.value.backendMode||next.sessionChanging!==context.value.sessionChanging;
  context.value={...next,language:getLang()};
  if(changed){++sequence;providers.value=[];error.value=false;loading.value=false;if(allowed())void refresh();}
}
function hide(){visible.value=false;++sequence;providers.value=[];loading.value=false;error.value=false;}
function show(event){if(!event.persisted)return;visible.value=true;/* Session is refreshed by Access before sources are fetched again. */}
onMounted(()=>{window.addEventListener('pagehide',hide);window.addEventListener('pageshow',show);});
onBeforeUnmount(()=>{hide();window.removeEventListener('pagehide',hide);window.removeEventListener('pageshow',show);});
defineExpose({setContext});
</script>
<template>
  <section v-if="visible&&!context.sessionChanging&&context.isAdmin&&context.backendMode==='remote'" id="sourcesPanel" class="sources-panel" aria-labelledby="sourcesTitle" :aria-busy="loading">
    <h2 id="sourcesTitle">{{t('sources_title')}}</h2>
    <button id="sourcesRefresh" class="btn-auth secondary" :disabled="loading" @click="refresh">{{t('sources_refresh')}}</button>
    <p v-if="loading" role="status">{{t('sources_loading')}}</p>
    <p v-else-if="error" role="alert">{{t('sources_error')}}</p>
    <p v-else-if="!providers.length" role="status">{{t('sources_empty')}}</p>
    <div id="sourcesList" class="sources-list">
      <div v-for="(provider,index) in providers" :key="provider.provider+':'+index" class="source-row">
        <strong>{{provider.provider}}</strong>
        <span>{{t('sources_summary',provider.resources??0,provider.last_sync?.status||'—',date(provider.last_sync?.finished_at))}}</span>
        <span>{{t('sources_counts',provider.last_sync?.fetched??'—',provider.last_sync?.created??'—',provider.last_sync?.updated??'—',provider.last_sync?.errors??'—')}}</span>
      </div>
    </div>
  </section>
</template>
