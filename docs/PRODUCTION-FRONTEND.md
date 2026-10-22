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
amb la caché antiga. El worker nou usa `recursos-v1.24.3`: elimina les cachés
anteriors i no guarda sessions, preferències ni publicacions de Llibres.

Si cal retirar el frontend, conservar totes les dades actuals. Preparar una
versió de retorn amb el shell anterior i un worker amb un nom de caché nou que
mantinga les API privades en mode només xarxa; no recuperar el worker antic que
guardava respostes d'identitat. Canviar l'enllaç cap a eixa versió i verificar la
recàrrega. No restaurar SQLite ni snapshots de dades per un problema del frontend.

Després de la verificació pública, retirar el vhost candidat i tancar el túnel.
La fase següent és HTTPS de Llibres, activació de publicació i acceptació humana
docent → alumnat → tutor → lectura pública.
