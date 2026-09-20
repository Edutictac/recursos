# assets/ruffle/ esta en .gitignore (es un paquet npm descarregat, no codi font):
# el fem aci amb una etapa de build perque la imatge Docker el porte inclos,
# igual que ja passa en el desplegament natiu de recursos.edutictac.es (que
# executa fetch-ruffle.mjs a ma abans de copiar els fitxers). Sense esta
# etapa, /assets/ruffle/ no existeix dins del contenidor i cap activitat
# Flash carrega mai (falla ja la carrega del propi reproductor Ruffle).
FROM node:22-alpine AS ruffle
WORKDIR /build
COPY scripts/fetch-ruffle.mjs scripts/fetch-ruffle.mjs
RUN node scripts/fetch-ruffle.mjs

FROM nginx:1.27-alpine

COPY . /usr/share/nginx/html
COPY --from=ruffle /build/assets/ruffle /usr/share/nginx/html/assets/ruffle
COPY nginx.local.conf /etc/nginx/conf.d/default.conf
