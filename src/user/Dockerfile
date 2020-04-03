FROM node:12.13-alpine

RUN mkdir -p /usr/app
RUN mkdir -p /usr/app/src

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --only=production

COPY src/shared ./src/shared
COPY src/user ./src/user

ENV USER_PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start-user"]