ARG NODE_VERSION=23.11.0-alpine

FROM node:${NODE_VERSION} AS dev

ENV NODE_ENV=development

WORKDIR /app

COPY package.json ./

RUN --mount=type=cache,target=/root/.npm npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host" ]