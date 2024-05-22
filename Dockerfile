FROM node:18.17.0-alpine as base
RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY . .

RUN npm install 

RUN npm run build

RUN npm install nodemon --save-dev
RUN npm install -g pm2

CMD pm2 start npm --name "next-app" -- start && pm2 logs