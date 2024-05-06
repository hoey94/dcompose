FROM node:16.14.2

RUN mkdir -p /home/node
WORKDIR /home/node

COPY . /home/node
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g yarn
RUN yarn install

ENTRYPOINT ["yarn", "run server"]