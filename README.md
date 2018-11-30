# Cool Idea Generator

This app generates random words to be utilized as a tool for generating ideas, sparking creativity, and possibly having fun.

## Getting Started

Clone or download the repo

```
git clone https://github.com/mfiss/cool-idea-generator.git my-idea-app && cd my-idea-app

```


### Installing

Install dependencies

npm
```
npm install

```
yarn
```
yarn install

```

You'll need to set up a mongodb database and import data-backup.json as a jsonArray.

```
mongoimport -d [database] -c [collection] --file data-backup.json --jsonArray
```

## Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [GraphQL](https://graphql.org/) 
* [Apollo Client](https://www.apollographql.com/docs/react/) 
* [Mongodb](https://www.mongodb.com/)
