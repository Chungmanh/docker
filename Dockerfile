FROM node:14.17.1-alpine
COPY . /app
WORKDIR /app
CMD node app.js
EXPOSE 3000