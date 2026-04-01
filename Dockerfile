FROM node:20-alpine

WORKDIR /app/myapp

COPY myapp/package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]