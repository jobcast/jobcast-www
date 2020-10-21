Static [Gatsby](https://www.gatsbyjs.com/) site generator for https://www.jobcast.net

## Setup
* Create `.env.development` at root and populate environment variables:
```
GATSBY_GRAPHQL_IDE=playground
GOOGLE_TAGMANAGER_ID=
INTERCOM_WORKSPACE_ID=
CONTENTFUL_SPACE_ID={value}
CONTENTFUL_ACCESS_TOKEN={value}
GATSBY_ALGOLIA_APP_ID={value}
GATSBY_ALGOLIA_SEARCH_KEY={value}
GATSBY_ALGOLIA_INDEX_NAME={value}
```
* Install dependencies
```shell
npm install
```

## Develop
```shell
npm start
```
* Site is running at: http://localhost:8000
* GraphQL: http://localhost:8000/___graphql

## Deploy
* `git push` to remote, and Netlify will auto-deploy
