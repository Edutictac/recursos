
# Correcciones puntuales de producción

La actualización completa posterior del 22-10-2026 sustituye este frontend
anterior por Vue y el worker `recursos-v1.24.4`. Estado actual y comprobaciones en
[PRODUCTION-FRONTEND.md](PRODUCTION-FRONTEND.md). La corrección del diálogo se
conserva; lo siguiente describe el despliegue histórico anterior.

## Reproductor cerrado visible — 22-10-2026

Corrección de código `9fc4c27`: `.iframe-dialog` reserva su diseño flexible solo
cuando tiene el atributo `open`. Antes, el diálogo cerrado aparecía como una
ventana blanca al final del catálogo. Prueba de regresión reproducida en rojo y
12 comprobaciones de reproductores correctas después (escritorio y móvil).

Se publica en `https://recursos.edutictac.es/` únicamente ese cambio sobre la hoja
de estilos existente y una nueva versión de su service worker:
`recursos-v1.19.4-dialog-fix-20261022`. La instalación pública usa todavía el
frontend anterior al Vue local: no reemplazar su shell por el de main sin
preparar el despliegue completo. La actualización de idiomas `b30d903` está en
Git, pero no forma parte de este despliegue. Se conservan las rutas y los 21
recursos de la caché pública, todos comprobados con HTTP 200.

Archivos: `/var/www/recursos/styles/site.css`, `/var/www/recursos/sw.js`.
Copia previa: `/var/backups/edutictac/recursos-dialog-20261022T175402Z/` (privada).
Escritura atómica por archivo tras comprobar hashes; sin cambios en API, datos,
configuración o reinicios. Para deshacer, restaurar solo estos dos archivos de
la copia; incrementar otra vez la versión de caché si ya se ha distribuido.

Validación posterior sobre HTTPS público en anchos 1280 y 393: CSS idéntico al
candidato, diálogo oculto al cargar, visible al abrir y oculto tras cerrar;
service worker publicado con la nueva versión. No se crean actividades ni se
usan sesiones personales para las pruebas.
