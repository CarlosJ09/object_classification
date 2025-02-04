FROM node:23-bullseye

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev"]