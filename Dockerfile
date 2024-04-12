FROM node:18-alpine


WORKDIR /home/app

COPY . ./

RUN yarn 

EXPOSE 3333

CMD ["yarn", "run", "dev"]

