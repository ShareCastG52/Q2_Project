'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/sharecast_dev',
    seeds: {
      directory: `${__dirname}/seeds/development`
   }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/sharecast_test',
    seeds: {
      directory: `${__dirname}/seeds/development`
   }
 },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: `${__dirname}/seeds/development`
    }
  }
};
