#Build stage
FROM --platform=linux/amd64 node:18-alpine AS build

WORKDIR /app

COPY . /app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
