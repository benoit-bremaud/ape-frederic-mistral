# docker/frontend/Dockerfile
FROM node:18

WORKDIR /app

COPY frontend/package*.json ./

RUN npm install -g @angular/cli
RUN npm install

COPY frontend/ .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
