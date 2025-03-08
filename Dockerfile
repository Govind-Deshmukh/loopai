FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./
RUN yarn install --production

COPY . .

RUN yarn run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/node_modules node_modules

EXPOSE 3000

CMD ["yarn", "next", "start"]
