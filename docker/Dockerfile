FROM node:18-alpine
WORKDIR /app
RUN npm install yandexmusappapi
COPY node_modules/yandexmusappapi ./node_modules/yandexmusappapi
EXPOSE 1337
CMD node script.mjs