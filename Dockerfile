FROM nginx:1.27-alpine

COPY . /usr/share/nginx/html
COPY nginx.local.conf /etc/nginx/conf.d/default.conf
