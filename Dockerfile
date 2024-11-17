FROM node:18-alpine3.14 as build-stage

RUN mkdir -p /home/node
WORKDIR /home/node

COPY . /home/node
RUN npm install -g cnpm
RUN cnpm install

ENTRYPOINT ["cnpm", "start"]