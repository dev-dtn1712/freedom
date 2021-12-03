FROM node:10.15.3-alpine as builder

WORKDIR /build
COPY ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile

COPY ./ ./
RUN yarn build

FROM node:10.15.3-alpine as runner
WORKDIR /app

COPY ./server/package.json ./server/yarn.lock ./
RUN yarn install --frozen-lockfile --production

COPY --from=builder /build/build ./dist

EXPOSE 5000

CMD ["./node_modules/.bin/serve", "--single", "./dist"]
