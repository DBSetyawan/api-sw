FROM node:12.18.2-alpine3.9

ARG user
ARG uid

RUN mkdir /srv/app && chown node:node /srv/app

RUN npm install -g @adonisjs/cli
RUN npm install -g nodemon

USER node

WORKDIR /srv/app

COPY --chown=node:node /kasirpintar/services/package.json /kasirpintar/services/package-lock.json ./

RUN npm install --quiet

# TODO: Can remove once we have some dependencies in package.json.
RUN mkdir -p node_modules

COPY . .

RUN cp .env.xample .env

#to run node.js script with sudo as we want to listen on port 80
USER root
EXPOSE 80

CMD ["npm","start"]