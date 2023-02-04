FROM node:16

WORKDIR /app
COPY package.json package.json
RUN yarn install
COPY . .
EXPOSE 4000

CMD [ "node", "src/index.ts" ]