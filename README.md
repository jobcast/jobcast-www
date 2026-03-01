Static [Gatsby](https://www.gatsbyjs.com/) site generator for https://www.jobcast.net

## Setup
* This project requires **Node 16**. If using nvm: `nvm use 16`
* Create `.env.development` at root and populate environment variables:
```
GATSBY_GRAPHQL_IDE=playground
GOOGLE_TAGMANAGER_ID=
CONTENTFUL_SPACE_ID={value}
CONTENTFUL_ACCESS_TOKEN={value}
GATSBY_ALGOLIA_APP_ID={value}
GATSBY_ALGOLIA_SEARCH_KEY={value}
GATSBY_ALGOLIA_INDEX_NAME={value}
```
* Install dependencies
```shell
npm ci
```
> **Apple Silicon (M-series) Macs:** `sharp` does not have prebuilt binaries for arm64 at this version and cannot compile from source. Since this project does not use Gatsby image processing, skip native install scripts:
> ```shell
> npm ci --ignore-scripts
> ```

## Develop
```shell
npm start
```
* Site is running at: http://localhost:8000
* GraphQL: http://localhost:8000/___graphql

## Deploy
* `git push` to remote, and Netlify will auto-deploy
