FROM node:16-alpine

RUN mkdir /DevOpsAPI

WORKDIR /DevOpsAPI

COPY package*.json /DevOpsAPI

COPY app.js /DevOpsAPI

RUN mkdir -p /src/routes/

RUN mkdir -p /tests/

WORKDIR /DevOpsAPI/src/routes

COPY ./src/routes/devops.js /DevOpsAPI/src/routes/

COPY ./src/routes/index.js /DevOpsAPI/src/routes/

WORKDIR /DevOpsAPI/tests

COPY /tests/apitest.js .

WORKDIR /DevOpsAPI

RUN npm install

EXPOSE 8080

CMD [ "node", "app.js" ]