FROM node:19.3-alpine AS builder

USER node

WORKDIR /app

COPY --chown=node:node package*.json .

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

RUN npm ci --omit=dev

FROM node:19.3-alpine AS final

USER node

WORKDIR /app

COPY --chown=node:node --from=builder app/dist ./dist
COPY --chown=node:node --from=builder app/node_modules ./node_modules

CMD [ "node", "dist/src/main.js"]