FROM node:18 AS build

WORKDIR /app
RUN corepack enable

COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install

COPY . .

RUN pnpm build

FROM nginx:latest

COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]