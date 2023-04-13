FROM node:19.3-alpine AS builder

USER node

WORKDIR /frontend

COPY --chown=node package*.json .

RUN npm ci

COPY --chown=node . .

RUN npm run build

RUN npm ci --omit=dev

FROM nginx:1.23.4-alpine AS final

ARG USER

WORKDIR /frontend

COPY --chown=${USER} --from=builder frontend/build /usr/share/nginx/html
COPY --chown=${USER} nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD [ "nginx", "-g", "daemon off;"]