[![Build Status](https://travis-ci.org/mcalthrop/auth-mongo-express-node.svg?branch=master)](https://travis-ci.org/mcalthrop/auth-mongo-express-node)

# mongo-express-node-auth

_Express server with MongoDB and authentication_

## Overview

This is a codebase that can be used as a starting point for an API that provides endpoints for authentication:

- signup
- login
- logout

The following features and technologies are used:

- [Yarn](https://yarnpkg.com/en/)
- [ES2015/ES6](https://babeljs.io/learn-es2015/)
- [Eslint](http://eslint.org/)
- MVC implementation using [Node](https://nodejs.org/en/), [Express](http://expressjs.com/), [Mongo](https://www.mongodb.com/) and [Mongoose](http://mongoosejs.com/)
- [Travis](https://travis-ci.org/mcalthrop/auth-mongo-express-node) for CI testing
- JSON data returned in [JSON API](http://jsonapi.org/) format
- [PassportJS](http://passportjs.org/) for authentication and [Permission](https://www.npmjs.com/package/permission) for authorisation
- [APIDOC](http://apidocjs.com/) for documenting the API endpoints
- [Jasmine](https://jasmine.github.io/) and [Supertest](https://www.npmjs.com/package/supertest) for testing the API endpoints

## Setup

### Install yarn

Follow the instructions here:

[yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

### Install NodeJS packages

Install the NodeJS packages:

``` sh
$ yarn
```

### Install Mongo

Follow the instructions here:

[www.mongodb.com/download-center#community](https://www.mongodb.com/download-center#community)

## Running the API

> API code is in the `api` directory.

### During development

In a terminal tab, start the MongoDB daemon:

``` sh
$ mongod
```

In another terminal tab, you can use `nodemon`:

``` sh
$ yarn nodemon
```

To check if the API is running, browse to:

[localhost:4001/api](http://localhost:4001/api)

### Once deployed

Ensure that the following environment variables are set in the deployed environment:

- `MONGODB_URI` &ndash; points to a valid MongoDB instance
- `APP_SECRET` &ndash; a randomly-generated secret (see [passwordsgenerator.net/](https://passwordsgenerator.net/))

To start the API:

``` sh
$ yarn start
```

## Tests

### All

To run all tests:

``` sh
$ yarn test
```

### Linting

> Check the `.eslint` file for the Eslint rules.

The Javascript code can be linted as follows:

``` sh
$ yarn lint
```

And to auto-correct any errors that can be corrected:

``` sh
$ yarn lint:fix
```

### API

> API tests are in the `spec` directory.

To run the API tests:

``` sh
$ yarn jasmine
```

## API docs

To generate the documentation for the API endpoints:

``` sh
$ yarn apidocs
```

And to view the output, open the `apidocs/index.html` file in your browser.

## Seeding the database

> Database-related code is in the `db` directory.

To seed the Mongo database with sample data:

``` sh
$ yarn db:seed
```

When developing locally, running the following command will seed the local database:

``` sh
$ yarn db:seed:local
```
