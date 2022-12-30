FROM node:14-alpine3.16

RUN mkdir -p /home/app
WORKDIR /home/app

COPY ./app /home/app
COPY package*.json ./
RUN npm install

CMD [ "npm", "start" ]