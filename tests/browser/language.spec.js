import {test,expect} from '@playwright/test';
import {bank} from './account-fixtures.js';

for (const [lang,label] of [['es','Juegos'],['ca','Jocs'],['va','Jocs'],['en','Games']]) {
 test(`shared preference ${lang} overrides an older bank preference and survives reload`,async({page,context})=>{
  await context.addCookies([{name:'edutictac_language',value:lang,url:'http://127.0.0.1/'}]);
  await bank(page);
  await expect(page.locator(`[data-lang=${lang}]`)).toHaveClass(/active/);
  await expect(page.locator('.results-head h2')).toHaveText(label);
  await page.reload();
  await expect(page.locator(`[data-lang=${lang}]`)).toHaveClass(/active/);
  await expect(page.locator('.results-head h2')).toHaveText(label);
 });
}

test('explicit URL, changes and return from another app preserve filters and drafts',async({page,context})=>{
 await bank(page);
 await page.goto('/?ui_lang=en&level=Primaria#catalogue');
 await expect(page.locator('[data-lang=en]')).toHaveClass(/active/);
 await page.locator('#searchInput').fill('Geometry');
 await page.locator('[data-lang=es]').click();
 expect(new URL(page.url()).searchParams.get('ui_lang')).toBe('es');
 expect(new URL(page.url()).searchParams.get('level')).toBe('Primaria');
 expect(new URL(page.url()).hash).toBe('#catalogue');
 await context.addCookies([{name:'edutictac_language',value:'en',url:'http://127.0.0.1/'}]);
 await page.evaluate(()=>window.dispatchEvent(new Event('focus')));
 await expect(page.locator('.results-head h2')).toHaveText('Games');
 await expect(page.locator('#searchInput')).toHaveValue('Geometry');
 const cookie=(await context.cookies()).find(c=>c.name==='edutictac_language');
 expect(cookie.value).toBe('en');
});
