import {test,expect} from '@playwright/test';
const games=Array.from({length:55},(_,i)=>({id:'game-'+i,title:'Game '+i,title_ca:'Joc '+i,title_en:'Game EN '+i,url:'https://games.example.test/'+i,area:i%2?'Musica':'Matematicas',language:i%2?'Castellano':'Català/Valencià',levels:['Primaria'],format:i%2?'h5p':'html',notes:'Geometry numbers'}));
async function bank(page,{remote=false,admin=false,items=games,books=[],play=[]}={}){
 const prefs={admin,favorites:[],ratings:{},reports:[],rating_summary:{},broken_reports:{}};const calls=[];
 await page.addInitScript(()=>localStorage.setItem('recursos-lang','va'));
 await page.route('**/*',route=>{const url=new URL(route.request().url());if(url.hostname!=='127.0.0.1')return route.abort();return route.continue();});
 await page.route('**/data/games*.json',route=>route.fulfill({json:items}));
 await page.route('**/reports/link-report.json',route=>route.fulfill({json:{results:[]}}));
 await page.route('**/api/**',route=>{
  const path=new URL(route.request().url()).pathname,method=route.request().method();
  if(path==='/api/llibres/books')return route.fulfill({json:{items:books,more:false}});
  if(path==='/api/resources'){const url=new URL(route.request().url());const offset=Number(url.searchParams.get('offset'))||0;return route.fulfill({json:{items:url.searchParams.get('provider')==='edutictac-play'?play.slice(offset,offset+200):[],total:play.length}});}
  if(path==='/api/preferences'&&remote)return route.fulfill({json:prefs});
  if(path==='/api/auth/me')return route.fulfill({json:{logged_in:remote,admin,student_logged_in:false}});
  if(path==='/api/submissions')return route.fulfill({json:[]});
  if(path==='/api/admin/sources')return route.fulfill({json:{providers:[]}});
  if(method==='POST'){
   const body=route.request().postDataJSON();calls.push({path,body});
   if(path==='/api/favorites/toggle'){const favorite=!prefs.favorites.includes(body.game_key);prefs.favorites=favorite?[...prefs.favorites,body.game_key]:prefs.favorites.filter(key=>key!==body.game_key);return route.fulfill({json:{favorite}});}
   if(path==='/api/ratings')return route.fulfill({json:{value:body.value,avg:body.value,count:1}});
   if(path==='/api/reports')return route.fulfill({json:{count:1,admin_reported:false}});
   if(path==='/api/admin/resources/hide')return route.fulfill({json:{count:0,admin_reported:true}});
   if(path==='/api/admin/resources/unhide')return route.fulfill({json:{count:0,admin_reported:false}});
  }
  return route.fulfill({status:503,json:{detail:'unavailable'}});
 });
 await page.goto('/');await expect(page.locator('#grid article').first()).toBeVisible();return{prefs,calls};
}

test('catàleg públic paginat, idioma i filtres reactius sense perdre la pàgina',async({page})=>{
 await bank(page);
 await expect(page.locator('#grid article')).toHaveCount(48);
 await page.locator('#loadMoreBtn').click();await expect(page.locator('#grid article')).toHaveCount(55);
 await page.locator('[data-lang=es]').click();await expect(page.locator('#grid article')).toHaveCount(55);
 await expect(page.locator('#grid article h3').first()).toHaveText('Game 0');
 await page.locator('#areaFilter').selectOption('Musica');await expect(page.locator('#grid article')).toHaveCount(27);
 await page.locator('#languageFilter').selectOption('Català/Valencià');await expect(page.locator('#emptyState')).toBeVisible();
 await page.locator('#languageFilter').selectOption('');await page.locator('#areaFilter').selectOption('');
 await page.locator('#searchInput').fill('geometru');await expect(page.locator('#grid article')).toHaveCount(48);
 expect(new URL(page.url()).searchParams.get('q')).toBe('geometru');
});

test('enllaç amb filtres restaura fins i tot valors que arriben amb la càrrega completa',async({page})=>{
 await bank(page);
 await page.goto('/?q=Geometry&level=Primaria&lang=Castellano&area=Musica&format=h5p&rating=0');
 await expect(page.locator('#grid article')).toHaveCount(27);
 await expect(page.locator('#formatFilter')).toHaveValue('h5p');
 await page.locator('[data-lang=en]').click();await expect(page.locator('#levelFilter option:checked')).toHaveText('Primary');
 await expect(page.locator('#searchInput')).toHaveValue('Geometry');
 await page.reload();await expect(page.locator('#grid article')).toHaveCount(27);
});

test('favorits i valoracions locals es conserven en recarregar i es poden filtrar',async({page})=>{
 await bank(page,{items:games.slice(0,3)});const card=page.locator('#grid article').first();
 await card.locator('.fav-btn').click();await expect(card.locator('.fav-btn')).toHaveAttribute('aria-pressed','true');
 await card.locator('.star-btn').nth(3).click();await expect(card.locator('.star-btn.active')).toHaveCount(4);
 await page.locator('#favoritesOnly').check();await expect(page.locator('#grid article')).toHaveCount(1);
 await page.reload();await expect(page.locator('#grid article')).toHaveCount(1);
 await expect(page.locator('.star-btn.active')).toHaveCount(4);
 await page.locator('.fav-btn').click();await expect(page.locator('#emptyState')).toBeVisible();
});

test('API de preferències conserva contractes i errors visibles permeten reintentar',async({page})=>{
 const {calls}=await bank(page,{remote:true,items:games.slice(0,2)});
 const card=page.locator('#grid article').first();await card.locator('.fav-btn').click();
 await expect(card.locator('.fav-btn')).toHaveAttribute('aria-pressed','true');
 expect(calls[0]).toEqual({path:'/api/favorites/toggle',body:{game_key:games[0].url}});
 await card.locator('.star-btn').nth(4).click();await expect(card.locator('.rating-summary')).toContainText('5.0');
 await page.locator('#ratingFilter').selectOption('4');await expect(page.locator('#grid article')).toHaveCount(1);
 await page.route('**/api/favorites/toggle',route=>route.fulfill({status:503,json:{detail:'internal detail'}}));
 await card.locator('.fav-btn').click();await expect(card.getByRole('alert')).toContainText('No s’ha pogut guardar');
 await expect(card.locator('.fav-btn')).toBeEnabled();
 await page.unroute('**/api/favorites/toggle');await card.locator('.fav-btn').click();await expect(card.locator('.fav-btn')).toHaveAttribute('aria-pressed','false');
});

test('administració oculta i restaura, confirmació cancel·lada no envia res',async({page})=>{
 const {calls}=await bank(page,{remote:true,admin:true,items:games.slice(0,1)});
 page.once('dialog',dialog=>dialog.dismiss());await page.locator('.admin-hide-btn').click();expect(calls).toHaveLength(0);
 page.on('dialog',dialog=>dialog.accept());await page.locator('.admin-hide-btn').click();await expect(page.locator('#emptyState')).toBeVisible();
 await page.locator('#brokenOnly').check();await expect(page.locator('#grid article')).toHaveCount(1);
 await page.locator('.admin-unhide-btn').click();await expect(page.locator('#emptyState')).toBeVisible();
 await page.locator('#brokenOnly').uncheck();await expect(page.locator('#grid article')).toHaveCount(1);
});

test('els informes no s’envien dos voltes i no apareixen controls admin per a convidats',async({page})=>{
 const {calls}=await bank(page,{remote:true,items:games.slice(0,1)});
 await expect(page.locator('.admin-hide-btn')).toHaveCount(0);await expect(page.locator('#brokenOnly')).toHaveCount(0);
 page.on('dialog',dialog=>dialog.accept());await page.locator('.report-btn').click();await expect(page.locator('.report-btn')).toBeDisabled();
 expect(calls.filter(call=>call.path==='/api/reports')).toHaveLength(1);
});

test('lector Llibres i EduHoot mantenen el reproductor existent i sandbox del llibre',async({page})=>{
 const book={provider:'edutictac-llibres',external_id:'book',title:'Story',format:'llibres',play_url:'/book-reader',subject:'General',language:['Castellano']};
 await bank(page,{items:[],books:[book]});await page.route('**/book-reader',route=>route.fulfill({contentType:'text/html',body:'<h1>Story reader</h1>'}));
 await page.locator('#grid .card-image-link').click();await expect(page.locator('#iframeDialog')).toBeVisible();
 await expect(page.locator('#iframeContainer iframe')).toHaveAttribute('sandbox','allow-downloads');
 await page.locator('#iframeClose').click();await expect(page.locator('#iframeContainer iframe')).toHaveCount(0);
});

test('títols i notes amb HTML queden inerts i URL executables no creen enllaços',async({page})=>{
 await bank(page,{items:[{title:'<img src=x onerror="window.bad=true">',notes:'<script>bad()</script>',url:'javascript:alert(1)',image:'javascript:alert(1)',area:'General'}]});
 await expect(page.locator('#grid h3')).toContainText('<img src=x');await expect(page.locator('#grid h3 img')).toHaveCount(0);
 await expect(page.locator('.card-image-link')).not.toHaveAttribute('href',/javascript:/);
 expect(await page.evaluate(()=>window.bad)).toBeUndefined();
});

test('un canvi de sessió descarta una resposta antiga de valoració',async({page})=>{
 await bank(page,{remote:true,items:games.slice(0,1)});let release,started;const waiting=new Promise(resolve=>started=resolve);
 await page.route('**/api/ratings',async route=>{started();await new Promise(resolve=>release=resolve);await route.fulfill({json:{value:5,avg:5,count:1}});});
 await page.locator('.star-btn').nth(4).click();await waiting;
 await page.evaluate(async()=>{await(await import('/scripts/api.js')).initPreferenceBackend();});release();
 await expect(page.locator('.fav-btn')).toBeEnabled();
 expect(await page.evaluate(async()=>[...(await import('/scripts/state.js')).state.userRatings])).toEqual([]);
});

test('la cerca no desborda el mòbil i no duplica targetes en carregar més',async({page})=>{
 await bank(page);await page.locator('#loadMoreBtn').click();await expect(page.locator('#grid article')).toHaveCount(55);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});

test('si falla el bundle es mostra un missatge i es conserva la navegació',async({page})=>{
 await page.addInitScript(()=>localStorage.setItem('recursos-lang','va'));
 await page.route('**/assets/ui/catalogue.js',route=>route.abort());await page.goto('/');await expect(page.locator('#catalogueApp')).toContainText('Torna a carregar');
 await expect(page.locator('.hero')).toBeVisible();
});

test('la càrrega completa conserva els filtres d’un catàleg inicial parcial',async({page})=>{
 await bank(page,{items:games.slice(0,1)});
 let release,started;const waiting=new Promise(resolve=>started=resolve);
 await page.route('**/data/games-home.json',route=>route.fulfill({json:games.slice(0,1)}));
 await page.route('**/data/games.json',async route=>{started();await new Promise(resolve=>release=resolve);await route.fulfill({json:games});});
 await page.goto('/?area=Musica&format=h5p');await waiting;
 await expect(page.locator('#areaFilter')).toHaveValue('');
 release();await expect(page.locator('#areaFilter')).toHaveValue('Musica');
 await expect(page.locator('#formatFilter')).toHaveValue('h5p');
 await expect(page.locator('#grid article')).toHaveCount(27);
});

test('una petició pendent bloqueja dobles favorits',async({page})=>{
 await bank(page,{remote:true,items:games.slice(0,1)});let release,started,requests=0;const waiting=new Promise(resolve=>started=resolve);
 await page.route('**/api/favorites/toggle',async route=>{requests++;started();await new Promise(resolve=>release=resolve);await route.fulfill({json:{favorite:true}});});
 await page.locator('.fav-btn').click();await waiting;await expect(page.locator('.fav-btn')).toBeDisabled();
 await page.locator('.fav-btn').evaluate(button=>button.click());release();
 await expect(page.locator('.fav-btn')).toHaveAttribute('aria-pressed','true');expect(requests).toBe(1);
});

test('els quatre idiomes traduïxen les targetes conservant els filtres',async({page})=>{
 await bank(page,{items:games.slice(0,1)});
 for(const [lang,title] of [['es','Game 0'],['ca','Joc 0'],['va','Joc 0'],['en','Game EN 0']]){
  await page.locator('[data-lang='+lang+']').click();await expect(page.locator('.card h3')).toHaveText(title);
  await expect(page.locator('#searchInput')).toHaveValue('');
 }
});

test('si falta el catàleg inicial recupera el catàleg complet',async({page})=>{
 await bank(page,{items:games.slice(0,2)});
 await page.route('**/data/games-home.json',route=>route.fulfill({status:404}));
 await page.reload();await expect(page.locator('#grid article')).toHaveCount(2);
});

for(const format of ['flash','jclic','eduhoot','h5p','scorm']){
 test(`el reproductor ${format} conserva la seua integració`,async({page})=>{
  const url=format==='jclic'?'/jclic.html?project=https%3A%2F%2Fexample.test%2Fproject.jclic.zip&title=Project':format==='flash'?'/assets/flash/test.swf':'/activity-view';
  await bank(page,{items:[{title:'Player test',url,format,flash:format==='flash'}]});
  if(['h5p','scorm'].includes(format)){
   await expect(page.locator('.card-image-link')).toHaveAttribute('target','_blank');
   await expect(page.locator('.card-image-link')).toHaveAttribute('rel','noreferrer noopener');return;
  }
  if(format==='flash'){
   await page.evaluate(()=>window.RufflePlayer={newest:()=>({createPlayer:()=>{const element=document.createElement('div');element.load=async options=>{window.loadedFlash=options.url;};return element;}})});
   await page.route('**/assets/flash/test.swf',route=>route.fulfill({status:200,body:'synthetic'}));
  }
  if(format==='jclic')await page.evaluate(()=>window.JClicObject={loadProject:(_container,project)=>{window.loadedJClic=project;}});
  await page.route('**/activity-view',route=>route.fulfill({contentType:'text/html',body:'<p>Activity</p>'}));
  await page.locator('.card-image-link').click();
  if(format==='flash')await expect.poll(()=>page.evaluate(()=>window.loadedFlash)).toContain('/assets/flash/test.swf');
  else if(format==='jclic')expect(await page.evaluate(()=>window.loadedJClic)).toBe('https://example.test/project.jclic.zip');
  else{await expect(page.locator('#iframeContainer iframe')).not.toHaveAttribute('sandbox',/.*/);await expect(page.locator('#iframeDialog')).toBeVisible();}
 });
}

test('una targeta d’un context anterior no envia favorits al context nou',async({page})=>{
 const {calls}=await bank(page,{remote:true,items:games.slice(0,1)});
 await page.evaluate(async()=>{const api=await import('/scripts/api.js');const refreshing=api.initPreferenceBackend();document.querySelector('.fav-btn').click();await refreshing;});
 await expect(page.locator('.fav-btn')).toBeEnabled();
 expect(calls).toHaveLength(0);
 expect(await page.evaluate(async()=>[...(await import('/scripts/state.js')).state.favorites])).toEqual([]);
});


test('Play té etiqueta pròpia, conserva H5P i filtra per aplicació amb enllaç compartible',async({page})=>{
 const play=Array.from({length:201},(_,i)=>({provider:'edutictac-play',external_id:'edutictac-play:'+i,title:'Play activity '+i,format:'h5p',play_url:'https://play.example.test/'+i,subject:'General'}));
 await bank(page,{items:[games[1]],play,books:[{provider:'edutictac-llibres',title:'Story',format:'llibres',play_url:'https://books.example.test/story'}]});
 await page.locator('#applicationFilter').selectOption('Play');
 await expect(page.locator('#resultCount')).toContainText('201');
 await expect(page.locator('#grid .tag.application')).toHaveText(Array(48).fill('Play'));
 await expect(page.locator('#grid .tag.format')).toHaveText(Array(48).fill('H5P'));
 await page.locator('#formatFilter').selectOption('h5p');
 expect(new URL(page.url()).searchParams.get('application')).toBe('Play');
 await page.reload();await expect(page.locator('#applicationFilter')).toHaveValue('Play');
 await expect(page.locator('#resultCount')).toContainText('201');
 await page.locator('#applicationFilter').selectOption('');
 await expect(page.locator('#resultCount')).toContainText('202');
 await page.locator('#formatFilter').selectOption('');
 await page.locator('#applicationFilter').selectOption('Llibres');
 await expect(page.locator('#grid article')).toHaveCount(1);
 await expect(page.locator('#grid h3')).toHaveText('Story');
 for(const [lang,label] of [['es','Aplicación'],['va','Aplicació'],['en','Application']]){
  await page.locator('[data-lang='+lang+']').click();
  await expect(page.locator('label').filter({has:page.locator('#applicationFilter')})).toContainText(label);
 }
});
