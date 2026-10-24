import {expect} from '@playwright/test';
// commons: carpeta amb els fitxers del xip de Commons (simula https://commons.edutictac.es);
// central: l'API respon com amb RECURSOS_CENTRAL_SESSION=1.
export async function bank(page,{admin=false,teacher=false,remote=true,commons=null,central=false,session=null}={}){
 const model={student:false,admin,teacher,calls:[],submissions:[],providers:[]};
 await page.addInitScript(()=>{if(window.top===window)localStorage.setItem('recursos-lang','va');});
 await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
 if(commons)await page.route('https://commons.edutictac.es/**',route=>{
  const url=new URL(route.request().url());
  if(url.pathname.startsWith('/assets/'))return route.fulfill({path:commons+'/'+url.pathname.split('/').pop()});
  if(url.pathname==='/api/auth/session')return route.fulfill({json:session||{authenticated:false,kind:'anonymous',login_available:true,links:{login:'/api/auth/oidc/login?next=x',teacher:'/teacher.html',student:'/student.html',logout:'/api/auth/session/logout'}},headers:{'Access-Control-Allow-Origin':'http://127.0.0.1:18086','Access-Control-Allow-Credentials':'true'}});
  return route.fulfill({status:404,body:''});
 });
 await page.route('**/data/games*.json',route=>route.fulfill({json:[{title:'Geometry',url:'https://games.example.test/a',area:'Matematicas',language:'Castellano',levels:['Primaria'],format:'html'}]}));
 await page.route('**/reports/link-report.json',route=>route.fulfill({json:{results:[]}}));
 await page.route('**/api/**',route=>{
  const path=new URL(route.request().url()).pathname,method=route.request().method();
  if(new URL(route.request().url()).hostname!=='127.0.0.1')return route.fallback();
  if(method==='POST')model.calls.push({path,body:route.request().postDataJSON()});
  if(path==='/api/preferences')return route.fulfill({status:remote?200:503,json:{admin:model.admin,favorites:model.student?['https://games.example.test/a']:[],ratings:{},reports:[],rating_summary:{},broken_reports:{}}});
  if(path==='/api/auth/me')return route.fulfill({json:{logged_in:model.teacher,student_logged_in:model.student,student_code:model.student?'TEST01':'',admin:model.admin,central}});
  if(path==='/api/student/login'){model.student=true;model.teacher=false;model.admin=false;return route.fulfill({json:{ok:true}});}
  if(path==='/api/student/logout'){model.student=false;model.admin=false;return route.fulfill({json:{ok:true}});}
  if(path==='/api/submissions'){
   if(method==='POST'){model.submissions.push({...route.request().postDataJSON(),id:'new'});return route.fulfill({status:201,json:{id:'new'}});}
   return route.fulfill({json:model.submissions});
  }
  if(path==='/api/admin/sources')return route.fulfill({json:{providers:model.providers}});
  if(path==='/api/llibres/books')return route.fulfill({json:{items:[],more:false}});
  if(path==='/api/resources')return route.fulfill({json:{items:[]}});
  return route.fulfill({status:404,json:{detail:'not found'}});
 });
 await page.goto('/');await expect(page.locator('#grid article')).toHaveCount(1);
 if(remote&&!central)await expect(page.locator('#studentLoginBtn')).toBeEnabled();
 return model;
}
