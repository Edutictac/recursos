import {test,expect} from '@playwright/test';
import {bank} from './account-fixtures.js';
async function credentials(page){await page.locator('#studentLoginBtn').click();await page.locator('#studentCode').fill('TEST01');await page.locator('#studentPin').fill('1234');}

test('alumnat entra amb codi i PIN i recupera preferències; eixir les neteja',async({page})=>{
 const model=await bank(page);await credentials(page);await page.locator('#studentSendBtn').click();
 await expect(page.locator('#studentDialog')).not.toBeVisible();await expect(page.locator('#studentLogoutBtn')).toContainText('TEST01');
 await expect(page.locator('.fav-btn')).toHaveAttribute('aria-pressed','true');
 expect(model.calls[0]).toEqual({path:'/api/student/login',body:{public_code:'TEST01',pin:'1234'}});
 await page.locator('#studentLogoutBtn').click();await expect(page.locator('#studentLoginBtn')).toBeEnabled();
 await expect(page.locator('.fav-btn')).toHaveAttribute('aria-pressed','false');
 await page.locator('#studentLoginBtn').click();await expect(page.locator('#studentPin')).toHaveValue('');
 expect(await page.evaluate(()=>Object.values(localStorage).join(' '))).not.toContain('1234');
});

test('PIN net en enviar; petició única, error traduït i reintent',async({page})=>{
 await bank(page);let release,started;const waiting=new Promise(resolve=>started=resolve);let calls=0;
 await page.route('**/api/student/login',async route=>{calls++;started();await new Promise(resolve=>release=resolve);await route.fulfill({status:401,json:{detail:'private error'}});});
 await credentials(page);await page.locator('#studentSendBtn').click();await waiting;
 await expect(page.locator('#studentPin')).toHaveValue('');await expect(page.locator('#studentSendBtn')).toBeDisabled();
 await page.locator('#studentForm').evaluate(form=>form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true})));
 release();await expect(page.locator('#studentFeedback')).toContainText("No s'ha pogut validar");expect(calls).toBe(1);
 await expect(page.locator('#studentSendBtn')).toBeEnabled();
 await page.unroute('**/api/student/login');await page.locator('#studentPin').fill('1234');await page.locator('#studentSendBtn').click();
 await expect(page.locator('#studentLogoutBtn')).toBeVisible();
});

test('cancel·lar, Escape i pagehide esborren credencials',async({page})=>{
 await bank(page);await credentials(page);await page.locator('#studentCancelBtn').click();
 await page.locator('#studentLoginBtn').click();await expect(page.locator('#studentCode')).toHaveValue('');await expect(page.locator('#studentPin')).toHaveValue('');
 await page.locator('#studentPin').fill('1234');await page.keyboard.press('Escape');
 await page.locator('#studentLoginBtn').click();await expect(page.locator('#studentPin')).toHaveValue('');
 await page.locator('#studentPin').fill('1234');await page.evaluate(()=>window.dispatchEvent(new PageTransitionEvent('pagehide')));
 await expect(page.locator('#studentDialog')).not.toBeVisible();await expect(page.locator('#studentPin')).toHaveValue('');
 await page.evaluate(()=>window.dispatchEvent(new PageTransitionEvent('pageshow',{persisted:true})));await expect(page.locator('#studentLoginBtn')).toBeEnabled();
});

test('accés docent conserva OIDC i canvi d’idioma conserva el formulari',async({page})=>{
 await bank(page,{teacher:true});await expect(page.locator('#loginBtn')).toHaveAttribute('href','/api/auth/logout');
 await credentials(page);await page.locator('#studentCancelBtn').click();
 await page.locator('[data-lang=en]').click();await expect(page.locator('#loginBtn')).toHaveText('Log out');
 await page.locator('#studentLoginBtn').click();await page.locator('#studentCode').fill('TEST01');await page.locator('#studentCancelBtn').click();
 await expect(page.locator('#loginBtn')).toHaveAttribute('href','/api/auth/logout');
});

test('mode sense API conserva catàleg i preferències locals sense controls privats',async({page})=>{
 await bank(page,{remote:false});await expect(page.locator('#authPanel')).toHaveCount(0);
 await expect(page.locator('#personalPrefsNote')).toContainText('navegador');await page.locator('.fav-btn').click();await expect(page.locator('.fav-btn')).toHaveAttribute('aria-pressed','true');
});
