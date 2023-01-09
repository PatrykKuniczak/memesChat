FROM node:19.3-alpine

WORKDIR /backend

COPY . .

RUN npm ci --production

RUN npm run build

CMD ["node", "dist/main"]