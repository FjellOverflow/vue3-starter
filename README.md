# vue3-starter

A minimal template for new Vue3 projects.

## Features

This template comes pre-packed with

- [vue-router](https://router.vuejs.org/) for routing
- [vue-i18n](https://vue-i18n.intlify.dev/) for localization
- [vitest](https://vitest.dev/) for unit testing
- [cypress](https://www.cypress.io/) for e2e testing
- [unplugin-vue-router](https://github.com/posva/unplugin-vue-router) for file based routing
- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) for auto imported components
- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) for route based layouts

## CI & CD

A CI pipeline for Github is configured in `.github/workflows/ci.yml`. On push it will run `typecheck`, `lint`, `build` as well as `unit` and `e2e` test.

A Dockerfile is present, too. The project can be packaged as a docker image with

```sh
docker build -t vue3-starter .
```

and run with

```sh
docker run -p 80:80 vue3-starter
```

which will start a nginx container that serves the application at [localhost:80](http://localhost:80)

## Requirements

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- [VSCode](https://code.visualstudio.com/download)

- [pnpm](https://pnpm.io/installation)

## Installation

```sh
git clone https://github.com/FjellOverflow/vue3-starter.git
cd vue3-starter
pnpm i
```

In VSCode, go to **_Extensions_**, type `@recommended` and install recommended extensions.

## Commands

Called with `pnpm run <command>`

| command     | effect                             |
| ----------- | ---------------------------------- |
| dev         | starts hot-module-reload server    |
| build       | builds for production              |
| preview     | serves the build app for preview   |
| test:unit   | runs unit tests with vitest        |
| test:e2e    | runs end-to-end tests with cypress |
| lint        | lints source                       |
| typecheck   | typechecks source                  |
| update-deps | auto-updates dependencies          |
