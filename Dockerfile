FROM node:8.2.1
MAINTAINER fuhuixiang
ADD . /home/dev-server
ADD ./sources.list /etc/apt/sources.list
WORKDIR /home/dev-server
ENV NODE_ENV production
ENV PORT 3000
RUN apt-get -y update && apt-get install -y libcairo2-dev libjpeg62-turbo-dev libpango1.0-dev libgif-dev build-essential g++
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install pm2 -g
RUN npm install
RUN npm rebuild
EXPOSE 3000
#CMD tail -f /var/log/cron.log 
ENTRYPOINT pm2-docker start ./process.yml
