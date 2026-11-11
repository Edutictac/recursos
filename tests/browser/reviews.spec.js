import {test,expect} from '@playwright/test';
import {bank} from './account-fixtures.js';

test('l’enllaç directe mostra les revisions abans del catàleg i dins de la pantalla',async({page})=>{
 await bank(page,{admin:true,teacher:true});
 await page.route('**/api/admin/educrea/reviews?**',async route=>{
  await new Promise(resolve=>setTimeout(resolve,150));
  await route.fulfill({json:{items:[{id:'review-test',title:'Sopa de prova',author:'Aula',license:'CC BY 4.0',template:'sopa_letras',revision:1,status:'pending'}]}});
 });
 await page.goto('/?review-test=1#reviewsApp');
 await expect(page.locator('#reviewsPanel')).toContainText('Sopa de prova');
 await expect(page.locator('#reviewsPanel')).toBeInViewport();
 await expect(page.locator('#reviewsNavigation')).toBeVisible();
 expect(await page.evaluate(()=>Boolean(document.querySelector('#reviewsApp').compareDocumentPosition(document.querySelector('#catalogueApp'))&Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
 await page.locator('#reviewsNavigation a').click();
 await expect(page.locator('#reviewsPanel')).toBeInViewport();
});

test('la navegació de revisions no apareix ni consulta propostes sense permisos',async({page})=>{
 let requests=0;
 page.on('request',request=>{if(new URL(request.url()).pathname.startsWith('/api/admin/educrea/reviews'))requests++;});
 await bank(page,{teacher:true});
 await expect(page.locator('#reviewsNavigation')).toBeHidden();
 await expect(page.locator('#reviewsPanel')).toHaveCount(0);
 expect(requests).toBe(0);
});
