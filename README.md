# mongo-express-node-auth

_Express server with MongoDB and authentication_

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

The Javascript code can be linted as follows:

``` sh
$ yarn lint
```

And to auto-correct any errors that can be corrected:

``` sh
$ yarn lint:fix
```
