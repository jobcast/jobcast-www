Static [Gatsby](https://www.gatsbyjs.com/) site generator for https://www.jobcast.net

## Setup
* Create `.env.development` at root and populate environment variables:
```
GATSBY_GRAPHQL_IDE=playground
CONTENTFUL_SPACE_ID={value}
CONTENTFUL_ACCESS_TOKEN={value}
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
