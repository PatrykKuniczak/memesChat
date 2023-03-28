FROM node:19.3-alpine AS builder

USER node

WORKDIR /app

COPY --chown=node:node package*.json .

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

FROM node:19.3-alpine AS final

USER node

WORKDIR /app

COPY --chown=node:node --from=builder app/package*.json .

RUN npm ci --omit=dev

RUN rm package*.json

COPY --chown=node:node --from=builder app/dist ./dist

CMD [ "node", "dist/main.js"]