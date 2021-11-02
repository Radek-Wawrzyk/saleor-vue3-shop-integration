# saleor-pwa

### Project description
Our aim is to re-create nike shop based on the Saleor Ecommerce headless platform. The beggining architecture would be SPA based on the Vue.js and Typescript + PWA feature

### UI/UX
As we don't have custom UI prototype/layout, we would use nike.com as example. Therefore our main goal is to "reproduce" and improve Nike shop based on their live styles and logic.

### Git flow
We use typical git flow, the production branch is `main`, develop is `staging`. For each hotfix/feature please create issue on the github project

| Git action | Structure | Example |
| --- | --- | --- |
| Feature | `feature/#X[issue-number] - NameOfFeature` | `feature/#1-UseProduct` |
| Hotfix | `hotfix/#X[Issue-number] - DescrtiptionOfFix` | `hotifx/#1-FixCart` |
| Commit style | `[name-of-the-scope] - [title of commit]` | `Cart - Add clearAll() method` |

### Useful links
- Project Kanban board - https://github.com/Radek-Wawrzyk/saleor-vue3-shop-integration/projects/1
- Saleor docs - https://docs.saleor.io/docs/3.0/developer/
- Nike shop - https://www.nike.com/pl
- Admin URL - http://srv1.kalnica.eu:9000/
- GraphQl API URL - http://srv1.kalnica.eu:8000/graphql/

### Saleor online instance credentials
| Login | matisiek11@gmail.com |
| --- | --- |
| Password | 12345678 |


### Used technologies
- Vue3
- Apollo4 (GraphQL)
- Typescript 4
- SCSS
- Webpack
- VeeValidate
 
<br/><br/>

## Project setup

### Installing all npm dependencies
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Format files with Prettier
```
yarn format
```
