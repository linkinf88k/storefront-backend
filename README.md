# Storefront backend

This repo contains the backend application for an eCommerce store front. It is a RESTful API.

## Installation Instructions

'npm install' to install the required packages.

### Ports

The application runs on port `5000` with database on `5432`.

### Environment variables

POSTGRES_HOST=localhost
POSTGRES_DB=my_store
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123
POSTGRES_PORT=5432
PORT=3000
POSTGRES_TEST_DB=my_store_test
ENV=DEV BCRYPT_PASSWORD=hihi
SALT_ROUNDS=10
TOKEN_SECRET=
TOKEN_TEST=

### DATABASE setup:

create database my_store;
create database my_store_test;
db-migrate up
npm run start Docker setup
'docker-compose up' to start the docker container. Used a init script to create dev and test databases.

### Jasmine tests

'npm run test' to run jasmine tests. It will change the environment to test and perform tests using the test DB and fill a TOKEN_TEST to .env file
