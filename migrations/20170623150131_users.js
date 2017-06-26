'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('first_name', 50).notNullable().defaultTo('');
    table.string('last_name', 50).notNullable().defaultTo('');
    table.string('email', 100).notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
