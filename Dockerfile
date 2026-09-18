FROM nginx:alpine

LABEL org.opencontainers.image.title="Banc de recursos"
LABEL org.opencontainers.image.description="PWA estatica del cataleg de recursos amb proxy intern cap a recursos-api"
LABEL org.opencontainers.image.source="https://git.edutictac.es/Edutictac/recursos"

COPY . /usr/share/nginx/html
COPY nginx.local.conf /etc/nginx/conf.d/default.conf
