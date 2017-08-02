FROM node:8.2.1
MAINTAINER fuhuixiang
ADD . /home/dev-server
WORKDIR /home/dev-server
ENV NODE_ENV production
ENV PORT 3000
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install pm2 -g
RUN npm install
EXPOSE 23335
ENTRYPOINT pm2-docker start ./process.yml
