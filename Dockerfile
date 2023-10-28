FROM node

RUN mkdir -p /home/app
WORKDIR /home/app

COPY ./app /home/app

RUN npm install

CMD [ "npm", "start" ]
EXPOSE 3000
