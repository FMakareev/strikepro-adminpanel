FROM node:10-alpine

LABEL maintainer="arthur.ragimov@gmail.com"

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 4000

ENTRYPOINT ["yarn", "run", "start"]