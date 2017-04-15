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

### Once deployed

When the API is deployed, ensure that the `MONGODB_URI` environment variable points to a valid MongoDB instance.

To start the API:

``` sh
$ yarn start
```

