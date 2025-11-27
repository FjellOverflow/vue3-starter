<h1 align="center">
  Vue3 Starter
</h1>

<p align="center">
  A minimal template for new Vue3 projects
</p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/v/FjellOverflow/vue3-starter?label=Version"/>
  &ensp;
  <img src="https://img.shields.io/github/license/FjellOverflow/vue3-starter?label=License"/>
  &ensp;
  <img src="https://img.shields.io/github/actions/workflow/status/FjellOverflow/vue3-starter/ci.yaml?branch=main&label=CI"/>
</p>

<p align="center">
  <a href="#features">Features</a> |
  <a href="#installation">Installation</a> |
  <a href="#development">Development</a> |
  <a href="#production">Production</a> |
  <a href="#continuous-integration">Continuous Integration</a>
</p>

## Features

- 🪧 File-based routing ([vue-router](https://github.com/vuejs/router), [plugin](https://github.com/posva/unplugin-vue-router))
- 🖼️ Page layouts ([plugin](https://github.com/johncampionjr/vite-plugin-vue-layouts))
- 🌎 Internationalization ([vue-i18n](https://github.com/intlify/vue-i18n))
- 🔄 Auto imports ([plugin](https://github.com/unplugin/unplugin-auto-import), [plugin](https://github.com/unplugin/unplugin-vue-components))
- ⚡ Unit tests ([vitest](https://github.com/vitest-dev/vitest))
- 🧪 e2e tests ([cypress](https://github.com/cypress-io/cypress))
- ✨ TypeScript, ESLint & Prettier

## Installation

The template runs in [bun](https://bun.sh/), a NodeJS compatible JavaScript environment.

```sh
git clone https://github.com/FjellOverflow/vue3-starter.git
cd vue3-starter
bun install
```

To install the recommended extensions for VSCode, open the _Extensions_ tab and type `@recommended`.

## Development

To start the dev-server run `bun run dev`. All commands are called with `bun run <command>`, the most common ones are:

- `dev`: start dev server
- `build`: build project
- `test:unit`: run unit tests
- `test:e2e:dev`: interactive e2e tests

For a full list of all commands, check the `scripts` section in `package.json`.

> [!WARNING]  
> While the scripts can also be run with just `bun <script>`, the `build` commands needs to be run with `bun run build`, as `bun build` will instead use bun's built-in builder, instead of Vite.

## Production

To build the project for production, use

```sh
bun install --production --frozen-lockfile
bun run build-only
```

To build a Docker image with the provided Dockerfile, use

```sh
docker build -t vue3-starter .
docker run -p 80:80 vue3-starter
```

which will start an nginx container that serves the application at [localhost:80](http://localhost:80)

## Continuous Integration

A CI pipeline for Github is configured in `.github/workflows/ci.yaml`. When changes are pushed to Github, a Github action will run `typecheck`, `lint` as well as `test:unit` and `test:e2e`. On any errors, the pipeline fails.
