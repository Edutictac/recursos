<script setup>
import {computed, reactive, shallowRef, ref, watch} from 'vue';
import {i18n, areaLabel, languageLabel, levelLabel, getLang} from '/scripts/i18n.js';
import {applicationLabel, computeFilteredGames, gameKey, uniqueValues, uniqueLevelValues, uniqueLanguageValues} from '/scripts/filters.js';
import ResourceCard from './ResourceCard.vue';
const props=defineProps({onAction:Function});
const context=shallowRef({games:[],favorites:new Set(),userRatings:new Map(),ratingSummary:new Map(),userReports:new Set(),brokenSummary:new Map(),reportByUrl:new Map(),backendMode:'local',isAdmin:false,epoch:0,loading:true});
const params=new URLSearchParams(location.search);
const criteria=reactive({term:params.get('q')||'',selectedLevel:params.get('level')||'',selectedLanguage:params.get('lang')||'',selectedArea:params.get('area')||'',selectedFormat:params.get('format')||'',selectedApplication:params.get('application')||'',minRating:Number(params.get('rating'))||0,onlyFavorites:params.get('fav')==='1',onlySubmissions:params.get('submissions')==='1',onlyBroken:false,onlyReported:false});
const visibleCount=ref(48);
const filtered=computed(()=>computeFilteredGames(context.value.games,criteria,context.value));
const visible=computed(()=>filtered.value.slice(0,visibleCount.value));
const options=computed(()=>({level:uniqueLevelValues(context.value.games),language:uniqueLanguageValues(context.value.games),area:uniqueValues(context.value.games,'area'),format:uniqueValues(context.value.games,'format'),application:[...new Set(context.value.games.map(applicationLabel).filter(Boolean))].sort()}));
function setContext(next) {context.value={...next,language:getLang()};if(!next.isAdmin){criteria.onlyBroken=false;criteria.onlyReported=false;}}
function syncUrl() {
  const p=new URLSearchParams();
  for(const [name,value] of Object.entries({q:criteria.term.trim(),level:criteria.selectedLevel,lang:criteria.selectedLanguage,area:criteria.selectedArea,format:criteria.selectedFormat,application:criteria.selectedApplication,rating:criteria.minRating||'',fav:criteria.onlyFavorites?'1':'',submissions:criteria.onlySubmissions?'1':''}))if(value)p.set(name,value);
  const url=location.pathname+(p.size?'?'+p:'')+location.hash;
  history.replaceState(null,'',url);
}
watch(criteria,()=>{visibleCount.value=48;syncUrl();});
defineExpose({setContext});
</script>
<template>
  <Teleport to="#catalogueFilters">
    <label><span>{{ i18n('search_label') }}</span><input id="searchInput" v-model="criteria.term" type="search" :placeholder="i18n('search_placeholder')"></label>
    <label v-for="filter in [{id:'levelFilter',field:'selectedLevel',options:'level',label:'level',format:levelLabel},{id:'languageFilter',field:'selectedLanguage',options:'language',label:'language',format:languageLabel},{id:'areaFilter',field:'selectedArea',options:'area',label:'area',format:areaLabel},{id:'applicationFilter',field:'selectedApplication',options:'application',label:'application',format:v=>v},{id:'formatFilter',field:'selectedFormat',options:'format',label:'format',format:v=>v}]" :key="filter.id">
      <span>{{ i18n(filter.label+'_label') }}</span><select :id="filter.id" v-model="criteria[filter.field]"><option value="">{{ i18n(filter.label+'_all') }}</option><option v-for="value in options[filter.options]" :key="value" :value="value">{{ filter.format(value) }}</option></select>
    </label>
    <label><span>{{ i18n('rating_min_label') }}</span><select id="ratingFilter" v-model.number="criteria.minRating"><option :value="0">{{ i18n('rating_all_filter') }}</option><option v-for="value in 5" :key="value" :value="value">{{ value }}★{{ value<5?'+':'' }}</option></select></label>
    <label class="check-wrap"><input id="favoritesOnly" v-model="criteria.onlyFavorites" type="checkbox"><span>{{ i18n('favorites_only') }}</span></label>
    <label class="check-wrap"><input id="submissionsOnly" v-model="criteria.onlySubmissions" type="checkbox"><span>{{ i18n('submissions_only') }}</span></label>
    <label v-if="context.isAdmin" id="brokenOnlyLabel" class="check-wrap"><input id="brokenOnly" v-model="criteria.onlyBroken" type="checkbox"><span>{{ i18n('broken_only') }}</span></label>
    <label v-if="context.isAdmin" id="reportedOnlyLabel" class="check-wrap"><input id="reportedOnly" v-model="criteria.onlyReported" type="checkbox"><span>{{ i18n('reported_only') }}</span></label>
  </Teleport>
  <div class="results-head"><h2>{{ i18n('section_title') }}</h2><p id="resultCount">{{ i18n('result_count',filtered.length,context.games.length) }}</p></div>
  <p v-if="context.error" role="alert">{{ i18n('catalogue_load_error') }}</p>
  <p v-if="context.loading" role="status">{{ i18n('catalogue_loading') }}</p>
  <div id="grid" class="grid" aria-live="polite" :aria-busy="context.loading"><ResourceCard v-for="(game,index) in visible" :key="context.epoch+':'+gameKey(game)+':'+index" :game="game" :context="context" :on-action="onAction" /></div>
  <div class="load-more-wrap"><button v-if="filtered.length>visible.length" id="loadMoreBtn" class="btn-load-more" type="button" @click="visibleCount+=48">{{ i18n('load_more',filtered.length-visible.length) }}</button></div>
  <p v-if="!filtered.length&&!context.loading" id="emptyState" class="empty">{{ i18n('empty') }}</p>
</template>
