FROM node:19.3-alpine

WORKDIR /frontend

COPY . .

RUN npm ci --production && npm i serve

RUN npm run build

CMD [ "npx", "serve", "build" ]