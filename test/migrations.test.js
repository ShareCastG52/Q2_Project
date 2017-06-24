'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const knex = require('../knex');
const { addDatabaseHooks } = require('./utils')

suite('migrations', addDatabaseHooks(() => {
  test('users columns', (done) => {
    knex('users').columnInfo()
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'users_id_seq\'::regclass)'
          },

          first_name: {
            type: 'character varying',
            maxLength: 50,
            nullable: false,
            defaultValue: '\'\'::character varying'
          },

          last_name: {
            type: 'character varying',
            maxLength: 50,
            nullable: false,
            defaultValue: '\'\'::character varying'
          },

          email: {
            type: 'character varying',
            maxLength: 100,
            nullable: false,
            defaultValue: null
          },

          hashed_password: {
            type: 'character',
            maxLength: 60,
            nullable: false,
            defaultValue: null
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} is not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('podcasts columns', (done) => {
    knex('podcasts').columnInfo()
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'podcasts_id_seq\'::regclass)'
          },

          genre: {
            type: 'character varying',
            maxLength: 25,
            nullable: false,
            defaultValue: '\'\'::character varying'
          },

          title: {
            type: 'character varying',
            maxLength: 150,
            nullable: false,
            defaultValue: '\'\'::character varying'
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} is not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('episodes columns', (done) => {
    knex('episodes').columnInfo()
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'episodes_id_seq\'::regclass)'
          },

          title: {
            type: 'character varying',
            maxLength: 150,
            nullable: false,
            defaultValue: '\'\'::character varying'
          },

          description: {
            type: 'text',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          url: {
            type: 'character varying',
            maxLength: 255,
            nullable: false,
            defaultValue: '\'\'::character varying'
          },

          podcast_id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
          },

          release_date: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} is not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('favorites columns', (done) => {
    knex('favorites').columnInfo()
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'favorites_id_seq\'::regclass)'
          },

          user_id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
          },

          user_id_shared: {
            type: 'integer',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          podcast_id: {
            type: 'integer',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          episode_id: {
            type: 'integer',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} is not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('shared columns', (done) => {
    knex('shared').columnInfo()
      .then((actual) => {
        const expected = {
          id: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: 'nextval(\'shared_id_seq\'::regclass)'
          },

          description: {
            type: 'text',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          comments: {
            type: 'text',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          user_id_from: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
          },

          user_id_to: {
            type: 'integer',
            maxLength: null,
            nullable: false,
            defaultValue: null
          },

          podcast_id: {
            type: 'integer',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          episode_id: {
            type: 'integer',
            maxLength: null,
            nullable: true,
            defaultValue: null
          },

          created_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          },

          updated_at: {
            type: 'timestamp with time zone',
            maxLength: null,
            nullable: false,
            defaultValue: 'now()'
          }
        };

        for (const column in expected) {
          assert.deepEqual(
            actual[column],
            expected[column],
            `Column ${column} is not the same`
          );
        }

        done();
      })
      .catch((err) => {
        done(err);
      });
  });
}));
