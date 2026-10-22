import {test,expect} from '@playwright/test';
import {bank} from './account-fixtures.js';
const providers=[{provider:'<img src=x onerror=bad()>',resources:7,last_sync:{status:'ok',finished_at:'2026-10-21T09:00:00Z',fetched:9,created:2,updated:3,errors:0}},{provider:'manual',resources:0}];

for(const teacher of [false,true]){
 test(`fonts restringides sense peticions (docent=${teacher})`,async({page})=>{
  let calls=0;await page.route('**/api/admin/sources',route=>{calls++;return route.fulfill({json:{providers}});});
  await bank(page,{teacher});await expect(page.locator('#sourcesPanel')).toHaveCount(0);expect(calls).toBe(0);
 });
}

test('fonts carreguen, es traduïxen i refresquen sense executar contingut',async({page})=>{
 const model=await bank(page,{admin:true,teacher:true});model.providers=providers;
 await page.locator('#sourcesRefresh').click();await expect(page.locator('.source-row')).toHaveCount(2);
 await expect(page.locator('.source-row').first()).toContainText('Recursos: 7');await expect(page.locator('.source-row').first()).toContainText('Errors: 0');
 await expect(page.locator('.source-row').last()).toContainText('Mai');await expect(page.locator('#sourcesList img')).toHaveCount(0);
 await page.locator('[data-lang=en]').click();await expect(page.locator('#sourcesTitle')).toHaveText('Resource sources');await expect(page.locator('.source-row').last()).toContainText('Never');
 await page.locator('[data-lang=es]').click();await expect(page.locator('.source-row').last()).toContainText('Nunca');
 await page.locator('[data-lang=ca]').click();await expect(page.locator('#sourcesTitle')).toHaveText('Fonts de recursos');
});

test('error de fonts visible, reintent i estat buit',async({page})=>{
 await bank(page,{admin:true});await page.route('**/api/admin/sources',route=>route.fulfill({status:503,json:{detail:'private information'}}));
 await page.locator('#sourcesRefresh').click();await expect(page.locator('#sourcesPanel [role=alert]')).toContainText('No s’han pogut');
 await expect(page.locator('#sourcesRefresh')).toBeEnabled();await expect(page.locator('#sourcesList .source-row')).toHaveCount(0);
 await page.unroute('**/api/admin/sources');await page.locator('#sourcesRefresh').click();await expect(page.locator('#sourcesPanel [role=status]')).toHaveText('No hi ha fonts registrades.');
});

test('canviar de sessió descarta fonts i identitat pendents del compte anterior',async({page})=>{
 const model=await bank(page,{admin:true,teacher:true});let release,started;const waiting=new Promise(resolve=>started=resolve);
 await page.route('**/api/admin/sources',async route=>{started();await new Promise(resolve=>release=resolve);await route.fulfill({json:{providers}});});
 await page.locator('#sourcesRefresh').click();await waiting;await expect(page.locator('#sourcesRefresh')).toBeDisabled();
 model.admin=false;model.teacher=false;
 await page.evaluate(async()=>{await (await import('/scripts/api.js')).initPreferenceBackend();document.querySelector('[data-lang=en]').click();});
 await expect(page.locator('#sourcesPanel')).toHaveCount(0);release();await expect(page.locator('#loginBtn')).toHaveAttribute('href','/api/auth/login');
 await expect(page.locator('#sourcesPanel')).toHaveCount(0);
});

test('pagehide neteja fonts i el retorn torna a comprovar privilegis',async({page})=>{
 const model=await bank(page,{admin:true});model.providers=providers;await page.locator('#sourcesRefresh').click();await expect(page.locator('.source-row')).toHaveCount(2);
 await page.evaluate(()=>window.dispatchEvent(new PageTransitionEvent('pagehide')));await expect(page.locator('#sourcesPanel')).toHaveCount(0);
 model.admin=false;
 await page.evaluate(()=>window.dispatchEvent(new PageTransitionEvent('pageshow',{persisted:true})));await expect(page.locator('#studentLoginBtn')).toBeEnabled();
 await expect(page.locator('#sourcesPanel')).toHaveCount(0);
});
