FROM node:19.3-alpine

WORKDIR /api

COPY package*.json .

RUN npm ci --omit=dev

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]