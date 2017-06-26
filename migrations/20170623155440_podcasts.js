'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('podcasts', (table) => {
    table.increments('id').primary();
    table.string('genre', 25).notNullable().defaultTo('');
    table.string('title', 150).notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('podcasts');
};
