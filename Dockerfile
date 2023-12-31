FROM node:14.4.0-alpine3.10

WORKDIR /usr/qlbh-app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]