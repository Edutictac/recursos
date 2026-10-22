<script setup>
import {ref, shallowRef, nextTick, onMounted, onBeforeUnmount} from 'vue';
import {i18n, getLang} from '/scripts/i18n.js';
import {authMe, studentLogin, studentLogout} from '/scripts/api.js';
import {state} from '/scripts/state.js';
const props=defineProps({onSessionChange:Function,onPropose:Function,onBusy:Function});
const context=shallowRef({backendMode:'local',epoch:-1,language:getLang()});
const identity=ref({}), busy=ref(false), checking=ref(false), feedback=ref(''), error=ref(false);
const dialog=ref(), codeInput=ref(), code=ref(''), pin=ref('');
let sequence=0, active=true;
function t(key,...args){context.value.language;return i18n(key,...args);}
function clear(){code.value='';pin.value='';feedback.value='';error.value=false;
  if(codeInput.value)codeInput.value.value='';
  const input=dialog.value?.querySelector('#studentPin');if(input)input.value='';
}
function close(){dialog.value?.close();clear();}
async function identify(){
  const request=++sequence, epoch=context.value.epoch;
  identity.value={};checking.value=true;
  const me=await authMe();
  if(!active||request!==sequence||epoch!==state.preferenceEpoch)return;
  identity.value=me;state.isTeacher=Boolean(me.logged_in);checking.value=false;
}
function setContext(next){
  const changed=next.epoch!==context.value.epoch||next.backendMode!==context.value.backendMode;
  context.value={...next,language:getLang()};
  if(changed){close();identity.value={};checking.value=false;++sequence;if(active&&next.backendMode==='remote')void identify();}
}
async function open(){if(busy.value)return;clear();dialog.value.showModal();await nextTick();codeInput.value?.focus();}
async function authenticate(){
  if(busy.value||!active||context.value.epoch!==state.preferenceEpoch)return;
  const publicCode=code.value.trim();let submittedPin=pin.value.trim();pin.value='';
  if(!publicCode||!submittedPin){feedback.value='student_login_missing';error.value=true;return;}
  busy.value=true;props.onBusy(true);feedback.value='student_login_loading';error.value=false;
  try{
    const pending=studentLogin({publicCode,pin:submittedPin});submittedPin='';
    await pending;
    if(!active)return;
    close();await props.onSessionChange();
  }catch{if(active&&dialog.value?.open){feedback.value='student_login_error';error.value=true;}}
  finally{submittedPin='';busy.value=false;props.onBusy(false);}
}
async function logout(){
  if(busy.value||!active||context.value.epoch!==state.preferenceEpoch)return;busy.value=true;props.onBusy(true);feedback.value='';
  try{await studentLogout();if(active)await props.onSessionChange();}
  catch{if(active){feedback.value='session_error';error.value=true;}}
  finally{busy.value=false;props.onBusy(false);}
}
function hide(){active=false;++sequence;close();identity.value={};checking.value=true;}
async function show(event){if(!event.persisted)return;active=true;await props.onSessionChange();void identify();}
onMounted(()=>{window.addEventListener('pagehide',hide);window.addEventListener('pageshow',show);});
onBeforeUnmount(()=>{hide();window.removeEventListener('pagehide',hide);window.removeEventListener('pageshow',show);});
defineExpose({setContext});
</script>
<template>
  <Teleport to="#authMount">
    <div v-if="context.backendMode==='remote'" id="authPanel" class="auth-panel" aria-live="polite">
      <div class="auth-actions">
        <a v-if="!checking" id="loginBtn" class="btn-auth secondary" @click="event=>{if(busy)event.preventDefault();}" :aria-disabled="busy" :href="identity.logged_in?'/api/auth/logout':'/api/auth/login'">{{t(identity.logged_in?'logout_btn':'login_btn')}}</a>
        <button v-if="!identity.student_logged_in" id="studentLoginBtn" class="btn-auth secondary" :disabled="busy||checking" @click="open">{{t('student_login_btn')}}</button>
        <button v-else id="studentLogoutBtn" class="btn-auth secondary" :disabled="busy||checking" @click="logout">{{t('student_logout_btn',identity.student_code||'')}}</button>
        <button id="submitActivityBtn" class="btn-auth secondary" :disabled="busy||checking" @click="props.onPropose()">{{t('submit_btn')}}</button>
      </div>
      <p v-if="feedback==='session_error'" role="alert">{{t(feedback)}}</p>
    </div>
  </Teleport>
  <Teleport to="#prefsMount">
    <p id="personalPrefsNote" class="personal-note" :class="{remote:context.backendMode==='remote'}">{{t(context.backendMode==='remote'?'personal_prefs_note_remote':'personal_prefs_note_local')}}</p>
  </Teleport>
  <dialog ref="dialog" id="studentDialog" class="submit-dialog" aria-labelledby="studentDialogTitle" @close="clear" @cancel="clear" @click="event=>{if(event.target===dialog)close();}">
    <h2 id="studentDialogTitle" class="submit-dialog-title">{{t('student_dialog_title')}}</h2>
    <form id="studentForm" @submit.prevent="authenticate">
      <div class="submit-fields">
        <label><span>{{t('student_code_label')}}</span><input ref="codeInput" id="studentCode" v-model="code" type="text" required autocomplete="off" maxlength="12" :disabled="busy" /></label>
        <label><span>{{t('student_pin_label')}}</span><input id="studentPin" v-model="pin" type="password" required inputmode="numeric" autocomplete="off" :disabled="busy" /></label>
      </div>
      <p v-if="feedback" id="studentFeedback" class="submit-feedback" :class="{error}" :role="error?'alert':'status'">{{t(feedback)}}</p>
      <div class="submit-actions"><button id="studentCancelBtn" type="button" class="btn-auth secondary" @click="close">{{t('submit_cancel')}}</button><button id="studentSendBtn" class="btn-auth" :disabled="busy">{{t('student_send')}}</button></div>
    </form>
  </dialog>
</template>
