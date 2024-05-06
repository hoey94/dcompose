FROM alpine:3.13.4
RUN apk add nodejs
RUN apk add npm
RUN npm i pm2 -g

RUN mkdir -p /home/node
WORKDIR /home/node

COPY . /home/node
RUN npm install -g cnpm
RUN cnpm install

ENTRYPOINT ["cnpm", "start"]