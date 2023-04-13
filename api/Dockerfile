FROM node:19.3-alpine AS builder

USER node

WORKDIR /api

COPY --chown=node package*.json .

RUN npm ci

COPY --chown=node . .

RUN npm run build

RUN npm ci --omit=dev

FROM node:19.3-alpine AS final

USER node

WORKDIR /api

COPY --chown=node --from=builder api/dist ./dist
COPY --chown=node --from=builder api/node_modules ./node_modules

CMD [ "node", "dist/src/main.js"]