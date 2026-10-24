// Xip de compte de Commons en el Banc: idioma de la interfície i sessió central.
import {test,expect} from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {bank} from './account-fixtures.js';

const here=path.dirname(fileURLToPath(import.meta.url));
const COMMONS=process.env.COMMONS_ASSETS||path.join(here,'../../../edutictac-commons/services/portal/public/assets');
const teacher={authenticated:true,kind:'oidc',role:'profesor',display_name:'Laia Ferrer',login_available:true,links:{teacher:'/teacher.html',student:'/student.html',logout:'/api/auth/session/logout'}};

test.beforeEach(()=>{if(!fs.existsSync(path.join(COMMONS,'account-widget.js')))throw new Error(`Apunta COMMONS_ASSETS a un checkout de Commons amb el xip (ara: ${COMMONS})`);});

test('el xip substituïx el selector d’idioma i canvia la interfície sense tocar el filtre de continguts',async({page})=>{
 await bank(page,{commons:COMMONS});
 const widget=page.locator('edutictac-account');
 await expect(widget.locator('summary')).toHaveAttribute('aria-label','Entrar');
 await expect(page.locator('.lang-switcher')).toBeHidden();
 await widget.locator('summary').click();
 await expect(widget.locator('[data-lang-option]')).toHaveText(['CA','VA','ES','EN']);
 await expect(widget.locator('[data-theme-option]')).toHaveCount(0);
 await widget.locator('[data-lang-option="es"]').click();
 await expect(page.locator('h1 span')).toHaveText('Banc de recursos');
 expect(await page.evaluate(()=>document.documentElement.lang)).toBe('es');
 expect(new URL(page.url()).searchParams.get('lang')).toBe(null);
});

test('amb sessió central el bloc d’accés propi deixa d’oferir entrar i eixir',async({page})=>{
 await bank(page,{commons:COMMONS,central:true,teacher:true,session:teacher});
 await expect(page.locator('edutictac-account summary')).toHaveAttribute('aria-label',/Laia Ferrer/);
 await expect(page.locator('#loginBtn')).toHaveCount(0);
 await expect(page.locator('#studentLoginBtn')).toHaveCount(0);
 await expect(page.locator('#submitActivityBtn')).toBeVisible();
});

test('si Commons no respon, el selector d’idioma propi es queda',async({page})=>{
 await bank(page);
 await expect(page.locator('.lang-switcher')).toBeVisible();
});
