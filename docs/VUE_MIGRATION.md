# Migració gradual del Banc de recursos a Vue

## Arquitectura comprovada

El repositori `Edutictac/recursos` és el frontend independent del banc: HTML,
CSS i mòduls JavaScript servits per nginx. `scripts/app.js` coordina la càrrega
de `data/games-home.json`, `data/games.json`, l'informe d'enllaços, propostes i
catàlegs federats. `scripts/api.js` és el client de Recursos API; conserva
preferències locals si el servidor no està disponible. El servidor FastAPI i
la seua SQLite pertanyen a `Edutictac/recursos-api`, no a este repositori.

`scripts/state.js` i `filters.js` ja separaven l'estat i les regles de cerca:
normalització, tolerància a errades, llengua, etapa, matèria, format, valoració,
favorits, propostes i filtres d'administració. Es reutilitzen. Les claus de
favorits continuen sent URL normalitzades; no hi ha una migració de dades.

Flash/Ruffle, JClic i el reproductor iframe són mòduls independents. Els llibres
publicats s'obtenen de `/api/llibres/books` i es lligen amb el visor existent,
amb `sandbox="allow-downloads"`. EduHoot usa el seu reproductor anterior.
H5P i SCORM conserven els enllaços que ja tenien les targetes.

La imatge Docker conserva nginx en execució i l'etapa de descàrrega de Ruffle.
No s'ha modificat la configuració d'autenticació, la base de dades o la API.
El banc continua servint-se en el seu domini o port propi.

## Ordre acordat

El 22-10-2026 l'usuari prioritza el banc abans de Play dins del pla Vue de
Commons. El treball de la API continua en paral·lel i no es desplega des d'esta
migració del frontend.

- [x] Catàleg: filtres, cerca, targetes, paginació, favorits, valoracions,
  informes i accions d'ocultar/restaurar. Conservació dels reproductors.
- [x] Compilació estàtica amb versions fixades i comprovació del bundle en CI.
- [x] Caché del nou graf de mòduls; cap resposta de sessió/preferències en caché.
- [ ] Accés docent/alumnat i formularis de propostes: extracció dels diàlegs
  encara coordinats per `scripts/app.js`, amb neteja de PIN i proves de sessió.
- [ ] Panell de fonts i operacions de gestió pròpies del banc.
- [ ] Revisió conjunta amb la API en desenvolupament i proves amb comptes
  autoritzats abans de publicar una versió.

## Primera fase

`src/catalogue/Catalogue.vue` controla els filtres i la paginació de 48 recursos.
`ResourceCard.vue` mostra les dades i executa les accions a través del client
existent. Les plantilles DOM i els manejadors equivalents es retiren de
`scripts/render.js` i `app.js`; el primer conserva només les utilitats dels
selects del formulari de propostes, encara sense migrar.

`app.js` passa al component una instantània de les col·leccions i preferències
quan acaben les càrregues o accions. No s'introduïx un segon magatzem persistent.
Els mòduls de API, estat, filtres, idiomes i reproductors són imports externs del
bundle; el controlador i Vue compartixen la mateixa instància de cada mòdul.

El canvi d'idioma conserva la cerca, les opcions i la quantitat de recursos
visibles. Els criteris es guarden en la URL, inclosos format i propostes.
Una opció que no figura en el catàleg inicial es conserva fins que arriba el
catàleg complet. Els filtres administratius només es mostren amb el rol actual;
el servidor continua autoritzant cada operació.

Les accions d'una targeta es bloquegen mentre esperen resposta, mostren errors
traduïts i permeten reintentar. Les peticions de preferències capturen una
versió de context; si es reinicialitza la sessió, la resposta antiga no modifica
les preferències noves. També es descarten càrregues federades antigues.

Títols i notes s'interpolen com a text. Els enllaços i imatges només accepten
HTTP/HTTPS sense credencials; es conserva la miniatura de reserva. El lector de
llibres conserva el seu sandbox i no s'executa HTML del catàleg com a plantilla.

El service worker puja a `recursos-v1.20.0`, inclou el bundle i els mòduls
necessaris per a tornar a obrir el catàleg sense xarxa, i retira la caché de les
respostes de la API. Els llibres publicats i retirats continuen exigint xarxa.
Les miniatures públiques mantenen la seua política anterior. Les preferències
locals del navegador mantenen les claus existents; una resposta privada del
servidor no pot usar-se com a recanvi sense xarxa per a una altra sessió.

## Compilació, llicències i verificació

```sh
npm ci --ignore-scripts
npm run build
npm test
```

Cal Node 22.12 o posterior. `assets/ui/catalogue.js` és un artefacte versionat,
precompilat i sense compilació de plantilles en execució. nginx no necessita
Node ni accés a un CDN. CI recompila i comprova que el bundle estiga actualitzat.

Es reutilitzen les versions ja adoptades en Commons: Vue 3.5.44, Vite 8.3.5 i
plugin-vue 6.0.10; Playwright 1.63.0 per a proves. Són dependències lliures:
Vue/Vite/plugin-vue, MIT; Playwright, Apache-2.0. El runtime Vue es distribuïx amb
`assets/ui/licenses/vue-MIT.txt`. El projecte conserva el seu fitxer LICENSE
AGPL-3.0; els motors i les seues llicències no se substituïxen.

Les proves de navegador usen dades sintètiques i contractes de API simulats,
en escriptori i mòbil. Comproven navegació pública, preferències locals/remotes,
errors, moderació, càrrega parcial/completa, quatre idiomes, filtres per URL,
respostes tardanes, noms inerts i integracions dels reproductors. No acrediten
una sessió OIDC real ni una moderació amb comptes de producció. Les proves del
service worker comproven la protecció de respostes privades i el graf sense xarxa.
No s'executen importadors, captures externes o comprovacions massives d'enllaços.


## Resultat comprovat — 22-10-2026

- 42 proves de navegador aprovades, en escriptori i mòbil, i tres proves del
  service worker. Les dobles peticions i les targetes d'un context anterior no
  modifiquen les preferències del context nou.
- Compilació, sintaxi i comprovació d'espais correctes. Bundle aproximadament
  104 kB (32 kB comprimit); el runtime conserva la llicència MIT distribuïda.
- Activat només el frontend `recursos` amb la imatge local
  `registry.edutictac.es/edutictac/recursos:catalogue-vue-candidate`.
  Imatge anterior preservada com a `before-catalogue-vue-20261022`.
  No es recreen Recursos API, ID API, Authentik, portal, editors o volums.
- Comprovació anònima del catàleg real i cerca amb context tàctil: sense errors
  JavaScript; el bundle servit coincidix amb el compilat. Captura valenciana
  en `/tmp/recursos-catalogue-vue-va.png`. No s'han modificat preferències o
  continguts de comptes reals.
- La API local actual respon 200 a `/api/preferences` i 404 a
  `/api/llibres/books`; el treball del servidor continua en paral·lel. El lector
  es comprova amb contractes sintètics, però queda pendent repetir el recorregut
  amb llibres reals quan la API local publique eixa ruta.

Per a provar-ho en la tailnet: `http://100.74.151.108:8086/`. Cal recarregar la
pàgina si ja estava oberta perquè s'active la nova versió del service worker.
No s'ha fet push ni desplegament al VPS. El següent bloc és accés i propostes.
