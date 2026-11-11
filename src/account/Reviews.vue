<script setup>
import {shallowRef,ref,nextTick,onMounted,onBeforeUnmount} from 'vue';
import {i18n,getLang} from '/scripts/i18n.js';
import {state} from '/scripts/state.js';
const context=shallowRef({isAdmin:false,backendMode:'local',epoch:-1,language:getLang()});
const status=ref('pending'),items=ref([]),loading=ref(false),error=ref(false),message=ref('');
const feedback=ref({}),busy=ref(''),visible=ref(true);
let sequence=0;
function allowed(){return visible.value&&!context.value.sessionChanging&&context.value.isAdmin&&context.value.backendMode==='remote'&&context.value.epoch===state.preferenceEpoch;}
function t(key,...args){context.value.language;return i18n(key,...args);}
async function refresh(){
  if(!allowed()||loading.value)return;
  const token=++sequence,epoch=context.value.epoch;loading.value=true;error.value=false;message.value='';items.value=[];
  try{
    const response=await fetch('/api/admin/educrea/reviews?status='+encodeURIComponent(status.value),{credentials:'same-origin',cache:'no-store'});
    if(!response.ok)throw new Error(String(response.status));
    const data=await response.json();
    if(token!==sequence||!allowed()||epoch!==state.preferenceEpoch)return;
    items.value=Array.isArray(data.items)?data.items:[];
    await nextTick();
    if(token===sequence&&allowed()&&location.hash==='#reviewsApp')document.querySelector('#reviewsApp')?.scrollIntoView({block:'start'});
  }catch{if(token===sequence&&allowed())error.value=true;}
  finally{if(token===sequence)loading.value=false;}
}
async function decide(item,decision){
  if(busy.value)return;
  if(decision==='return'&&!(feedback.value[item.id]||'').trim()){error.value=false;message.value='';item.feedbackRequired=true;return;}
  if(decision==='approve'&&!confirm(t('reviews_confirm_approve')))return;
  busy.value=item.id;error.value=false;message.value='';
  try{
    const response=await fetch('/api/admin/educrea/reviews/'+encodeURIComponent(item.id),{
      method:'POST',credentials:'same-origin',cache:'no-store',
      headers:{'Content-Type':'application/json','If-Match':'"'+item.revision+'"'},
      body:JSON.stringify({decision,feedback:feedback.value[item.id]||''})});
    if(!response.ok)throw new Error(String(response.status));
    message.value=t('reviews_saved');
    await refresh();
  }catch{error.value=true;}
  finally{busy.value='';}
}
function setContext(next){
  const changed=next.epoch!==context.value.epoch||next.isAdmin!==context.value.isAdmin||next.backendMode!==context.value.backendMode||next.sessionChanging!==context.value.sessionChanging;
  context.value={...next,language:getLang()};
  if(changed){++sequence;items.value=[];error.value=false;loading.value=false;if(allowed())void refresh();}
}
function hide(){visible.value=false;++sequence;items.value=[];loading.value=false;}
function show(event){if(!event.persisted)return;visible.value=true;if(allowed())void refresh();}
onMounted(()=>{window.addEventListener('pagehide',hide);window.addEventListener('pageshow',show);});
onBeforeUnmount(()=>{hide();window.removeEventListener('pagehide',hide);window.removeEventListener('pageshow',show);});
defineExpose({setContext});
</script>
<template>
  <section v-if="visible&&!context.sessionChanging&&context.isAdmin&&context.backendMode==='remote'" id="reviewsPanel" class="sources-panel" :aria-busy="loading">
    <h2>{{t('reviews_title')}}</h2>
    <div class="review-toolbar">
      <select v-model="status" :aria-label="t('reviews_status')" @change="refresh">
        <option value="pending">{{t('reviews_pending')}}</option>
        <option value="approved">{{t('reviews_approved')}}</option>
        <option value="returned">{{t('reviews_returned')}}</option>
      </select>
      <button class="btn-auth secondary" :disabled="loading" @click="refresh">{{t('sources_refresh')}}</button>
    </div>
    <p v-if="loading" role="status">{{t('reviews_loading')}}</p>
    <p v-else-if="error" role="alert">{{t('reviews_error')}}</p>
    <p v-else-if="!items.length" role="status">{{t('reviews_empty')}}</p>
    <p v-if="message" role="status">{{message}}</p>
    <div class="sources-list">
      <article v-for="item in items" :key="item.id" class="source-row review-row">
        <strong>{{item.title}}</strong>
        <span>{{item.author}} · {{item.license}} · {{item.template}} · r{{item.revision}}</span>
        <span>{{t('reviews_status')}}: {{item.status}}<template v-if="item.feedback"> · {{item.feedback}}</template></span>
        <div class="review-actions">
          <a class="btn-auth secondary" :href="'/api/admin/educrea/reviews/'+encodeURIComponent(item.id)+'/preview'" target="_blank" rel="noopener">{{t('reviews_preview')}}</a>
          <template v-if="item.status==='pending'">
            <button class="btn-auth" type="button" :disabled="busy===item.id" @click="decide(item,'approve')">{{t('reviews_approve')}}</button>
            <input v-model="feedback[item.id]" :placeholder="t('reviews_feedback')" maxlength="1000" />
            <button class="btn-auth secondary" type="button" :disabled="busy===item.id" @click="decide(item,'return')">{{t('reviews_return')}}</button>
          </template>
        </div>
        <p v-if="item.feedbackRequired" class="review-feedback" role="alert">{{t('reviews_feedback_required')}}</p>
      </article>
    </div>
  </section>
</template>
