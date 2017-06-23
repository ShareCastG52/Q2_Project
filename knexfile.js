'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/sharecast_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/sharecast_test'
  }
};
