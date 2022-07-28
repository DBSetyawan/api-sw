# We'll use the Node slim image as a base cos it's light and nice
FROM node:10-alpine

WORKDIR /usr/src/app

# Copy package.json & package-lock.json to the root of the api dir
COPY ./kasirpintar/services/package.json ./kasirpintar/services/package-lock.json ./

# Add node_modules to the envionmental path variable so we can run binaries easily
ENV PATH /usr/src/app/node_modules/.bin:$PATH

USER root

# Install the good ol' NPM modules and get Adonis CLI in the game
RUN npm install --no-optional
RUN npm i -g pm2

# Copy everything to the root of the API service docker volume, and expose port to the outside world
COPY --chown=node:node . .

EXPOSE 1379

CMD npm run pm2:start