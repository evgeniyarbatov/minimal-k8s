FROM --platform=linux/amd64 node:lts
 
WORKDIR /app
COPY . /app

RUN npm install

EXPOSE 8080

CMD ["npm","start"]