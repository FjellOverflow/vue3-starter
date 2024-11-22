FROM oven/bun:1 AS build

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install --production --frozen-lockfile

COPY . .

RUN bun run build-only

FROM nginx:latest

COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]