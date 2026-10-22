import {test,expect} from '@playwright/test';
import {bank} from './account-fixtures.js';
async function proposal(page,url='https://games.example.test/new'){
 await page.locator('#submitActivityBtn').click();await page.locator('#submitTitle').fill('  New activity  ');await page.locator('#submitUrl').fill(url);
}

test('proposta envia contracte existent i confirma fins que la persona tanca',async({page})=>{
 const model=await bank(page);await proposal(page);await page.locator('#submitArea').selectOption('Matematicas');await page.locator('#submitLanguage').selectOption('Castellano');
 await page.locator('#submitNotes').fill('<img src=x onerror=bad()>');await page.locator('#submitName').fill('Test');await page.locator('#submitSendBtn').click();
 await expect(page.locator('#submitFeedback')).toHaveClass(/ok/);await expect(page.locator('#grid article')).toHaveCount(2);
 expect(model.calls[0]).toEqual({path:'/api/submissions',body:{title:'New activity',url:'https://games.example.test/new',notes:'<img src=x onerror=bad()>',name:'Test',area:'Matematicas',language:'Castellano'}});
 await expect(page.locator('#submitSendBtn')).toBeDisabled();await page.locator('#submitCancelBtn').click();await proposal(page);await expect(page.locator('#submitNotes')).toHaveValue('');
 await expect(page.locator('#grid article img[onerror]')).toHaveCount(0);
});

test('valida URL abans d’enviar i manté el text quan falla',async({page})=>{
 const model=await bank(page);await proposal(page,'javascript:alert(1)');await page.locator('#submitSendBtn').click();
 await expect(page.locator('#submitFeedback')).toContainText('enllaç vàlid');expect(model.calls).toHaveLength(0);
 await page.locator('#submitUrl').fill('https://user:password@example.test/');await page.locator('#submitSendBtn').click();expect(model.calls).toHaveLength(0);
 await page.route('**/api/submissions',route=>route.request().method()==='POST'?route.fulfill({status:429,json:{detail:'private error'}}):route.fulfill({json:[]}));
 await page.locator('#submitUrl').fill('https://games.example.test/new');await page.locator('#submitSendBtn').click();await expect(page.locator('#submitFeedback')).toHaveClass(/error/);
 await expect(page.locator('#submitTitle')).toHaveValue('  New activity  ');await expect(page.locator('#submitSendBtn')).toBeEnabled();
 await page.unroute('**/api/submissions');await page.locator('#submitSendBtn').click();await expect(page.locator('#submitFeedback')).toHaveClass(/ok/);
});

test('confirmació de guardat separada del refresc evita reenviaments',async({page})=>{
 const model=await bank(page);await page.route('**/api/submissions',async route=>{
  if(route.request().method()==='POST'){model.calls.push({path:'/api/submissions'});return route.fulfill({status:201,json:{id:'new'}});}
  return route.fulfill({status:503,json:{detail:'unavailable'}});
 });
 await proposal(page);await page.locator('#submitSendBtn').click();await expect(page.locator('#submitFeedback')).toContainText('recarrega');
 await expect(page.locator('#submitFeedback')).toHaveClass(/ok/);await expect(page.locator('#submitSendBtn')).toBeDisabled();
 expect(model.calls).toHaveLength(1);
});

test('cancel·lar una resposta pendent no ompli ni tanca un diàleg posterior',async({page})=>{
 await bank(page);let release,started;const waiting=new Promise(resolve=>started=resolve);
 await page.route('**/api/submissions',async route=>{
  if(route.request().method()!=='POST')return route.fulfill({json:[]});started();await new Promise(resolve=>release=resolve);return route.fulfill({status:201,json:{id:'new'}});
 });
 await proposal(page);await page.locator('#submitSendBtn').click();await waiting;await expect(page.locator('#submitSendBtn')).toBeDisabled();
 await page.locator('#submitForm').evaluate(form=>form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true})));
 await page.locator('#submitCancelBtn').click();release();await expect.poll(()=>page.evaluate(()=>document.querySelector('#submitSendBtn').disabled)).toBe(false);
 await proposal(page);await expect(page.locator('#submitFeedback')).toHaveCount(0);await expect(page.locator('#submitDialog')).toBeVisible();
});

test('context nou descarta el formulari anterior i pagehide neteja dades',async({page})=>{
 await bank(page);await proposal(page);await page.locator('#submitName').fill('Private draft');
 await page.evaluate(async()=>{await (await import('/scripts/api.js')).initPreferenceBackend();document.querySelector('[data-lang=en]').click();});
 await expect(page.locator('#submitDialog')).not.toBeVisible();await expect(page.locator('#submitName')).toHaveValue('');
 await page.locator('#submitActivityBtn').click();await expect(page.locator('#submitDialogTitle')).toHaveText('Propose an activity');
 await page.locator('#submitName').fill('Private draft');await page.evaluate(()=>window.dispatchEvent(new PageTransitionEvent('pagehide')));
 await expect(page.locator('#submitDialog')).not.toBeVisible();await expect(page.locator('#submitName')).toHaveValue('');
});
