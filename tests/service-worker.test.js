import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';

async function worker(offline=false) {
  const listeners={}, stored=[], precached=[];
  const cache={addAll:async paths=>precached.push(...paths),match:async()=>new Response('old private preferences'),put:async request=>stored.push(request.url)};
  const caches={open:async()=>cache,match:async()=>new Response('old private preferences'),keys:async()=>[]};
  const context={self:{location:{origin:'http://bank.test'},addEventListener:(name,fn)=>listeners[name]=fn,skipWaiting:()=>{},clients:{claim:async()=>{}}},caches,URL,fetch:async()=>{if(offline)throw new Error('offline');return new Response('{"value":"synthetic"}',{headers:{'Content-Type':'application/json'}});}};
  vm.runInNewContext(await readFile(new URL('../sw.js',import.meta.url),'utf8'),context);
  return {listeners,stored,precached};
}

test('private API responses are not written to the offline cache',async()=>{
  const {listeners,stored}=await worker();
  for(const path of ['/api/preferences','/api/auth/me','/api/submissions','/api/llibres/books']){
    let response;
    listeners.fetch({request:new Request('http://bank.test'+path),respondWith:p=>response=p});
    assert.equal((await response).status,200);
  }
  assert.deepEqual(stored,[]);
});

test('offline session requests never recover a previous cached identity',async()=>{
  const {listeners}=await worker(true);
  let response;
  listeners.fetch({request:new Request('http://bank.test/api/preferences'),respondWith:p=>response=p});
  await assert.rejects(response,/offline/);
});

test('offline shell includes the compiled UI and its external module dependencies',async()=>{
  const {listeners,precached}=await worker();let done;
  listeners.install({waitUntil:p=>done=p});await done;
  for(const path of ['./scripts/language-preference.js','./assets/ui/catalogue.js','./scripts/state.js','./scripts/filters.js','./scripts/flash.js','./scripts/jclic.js','./scripts/external.js'])assert.ok(precached.includes(path),path);
});
