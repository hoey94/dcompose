FROM node:16.14.2

RUN mkdir -p /home/node
WORKDIR /home/node

COPY . /home/node
RUN npm install

ENTRYPOINT ["npm", "start"]