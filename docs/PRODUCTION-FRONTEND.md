# Banc: desplegament del frontend Vue

El Banc públic tenia una interfície anterior a Vue. L'API Docker ja admet els
llibres, però això no actualitza els fitxers estàtics de nginx. Esta fase publica
només el frontend; no obri encara `llibres.edutictac.es`.

## Preparació

```bash
npm ci --ignore-scripts
npm run build
npm test
python3 -m unittest discover -s tests -p test_frontend_package.py -v
python3 scripts/package-frontend.py --output /tmp/recursos-frontend-release
```

El paquet conté una llista explícita de fitxers estàtics i un manifest SHA256.
Exclou dades, imatges del catàleg, motors, configuració, fonts Vue, eines
operatives i credencials. El bundle versionat inclou els components Vue i la
llicència MIT; l'enllaç del peu proporciona el codi font AGPL del projecte.

Al servidor, crear una versió nova davall de `/var/www/recursos-releases/`,
comprovar tots els hashes i enllaçar els sis directoris compartits del manifest
a `/var/www/recursos/`: `data`, `reports`, `assets/game-images`, `assets/flash`,
`assets/ruffle` i `assets/jclic`. No copiar damunt d'estos directoris ni eliminar
l'arrel anterior: continua sent el destí de les actualitzacions del catàleg.
L'API té el seu propi catàleg SQLite; no substituir-lo pel JSON del repositori.

Guardar la configuració nginx i els hashes del catàleg en una còpia privada.
Registrar també els identificadors i les hores d'arrancada dels contenidors i de
Play per a comprovar que no es reinicien altres aplicacions.

## Comprovació privada

Servir la versió candidata només en `127.0.0.1:18186` amb nginx. El proxy `/api/`
apunta a `127.0.0.1:8004`, admet únicament GET/HEAD, elimina Cookie/Authorization
i bloqueja `/api/internal/`. Accedir per un túnel SSH local, sense exposar el port.
Validar tots els fitxers de `APP_SHELL` i els motors compartits amb HTTP 200.

Amb Python, pytest i Playwright disponibles:

```bash
RECURSOS_FRONTEND_TEST_URL=http://127.0.0.1:18186 \
  python -m pytest tests/production/test_frontend.py -q
```

Estes proves no escriuen en l'API: comproven el catàleg real en tres amplàries,
idiomes, filtres, consulta de llibres, un lector amb respostes simulades només al
navegador i la instal·lació real del service worker amb lectura sense connexió.
No substituïxen una prova humana amb compte docent i alumnat.

## Activació i retirada

L'arrel pública apunta a `/var/www/recursos-current`, un enllaç canviat
atòmicament cap a la versió comprovada. En la primera activació cal canviar
únicament `root` del vhost, executar `nginx -t` i recarregar nginx. Esperar la
disponibilitat HTTP: una recàrrega correcta no implica que els treballadors nous
ja estiguen escoltant. No reiniciar API, Commons, Play o EduHoot.

Repetir les proves sobre HTTPS públic i comprovar l'actualització d'un navegador
amb la caché antiga. El worker nou usa `recursos-v1.24.4`: elimina les cachés
anteriors i no guarda sessions, preferències ni publicacions de Llibres.
La precàrrega usa `Request` amb `cache: "reload"` per a evitar que la caché HTTP
encara vàlida del navegador introduïsca fitxers de la versió anterior en el shell
nou. `tests/test_frontend_upgrade.py` reproduïx el problema i comprova la solució
amb un servidor temporal local i un navegador real:

```bash
python -m pytest tests/test_frontend_upgrade.py -q
```

Si cal retirar el frontend, conservar totes les dades actuals. Preparar una
versió de retorn amb el shell anterior i un worker amb un nom de caché nou que
mantinga les API privades en mode només xarxa i la precàrrega amb `cache: "reload"`;
no recuperar el worker antic que
guardava respostes d'identitat. Canviar l'enllaç cap a eixa versió i verificar la
recàrrega. No restaurar SQLite ni snapshots de dades per un problema del frontend.

Després de la verificació pública, retirar el vhost candidat i tancar el túnel.
La fase següent és HTTPS de Llibres, activació de publicació i acceptació humana
docent → alumnat → tutor → lectura pública.

## Resultat en producció — 22-10-2026

Publicat en `https://recursos.edutictac.es/`. L'enllaç actual apunta a
`/var/www/recursos-releases/20261022-vue-llibres-cachefix`. El shell Vue inclou
la consulta de Llibres i el lector sense execució de scripts, amb etiqueta i
filtre propis. El catàleg existent i els directoris de mitjans es conserven.

Validació: compilació correcta, 90 proves d'interfície, 4 de caché, 2 del paquet,
2 de regressió de l'actualització i 7 sobre HTTPS públic. El candidat inicial
també va passar 7 comprovacions abans del canvi d'arrel. L'assaig final sobre
el VPS va carregar el worker públic antic `recursos-v1.19.4-dialog-fix-20261022`
en un navegador temporal i el va actualitzar al worker corregit `recursos-v1.24.4`:
el catàleg Vue s'obri i l'HTML, el carregador i el bundle de la caché coincidixen
exactament amb els servits. No s'han creat llibres ni comptes en producció.

La primera comprovació d'actualització va detectar que la caché HTTP podia
introduir fitxers antics dins del worker `v1.24.3`; eixa versió queda superada.
La correcció de precàrrega i la prova que reproduïx el problema estan en Git.

Els hashes dels dos JSON de catàleg i de l'informe d'enllaços no han canviat.
Tots els contenidors conserven identificador i hora d'arrancada, i Play conserva
el PID: només s'ha recarregat nginx. API, Commons, Play i EduHoot responen 200.
Llibres continua privat en `127.0.0.1:8182`, amb publicació desactivada.

Còpia privada de nginx, línia base i resultats:
`/var/backups/edutictac/recursos-vue-20261022/`. Versió de retorn preparada:
`/var/www/recursos-releases/20261022-legacy-rollback`, amb worker separat, API
només xarxa i precàrrega que evita la caché HTTP. No tornar a `v1.24.3`.
