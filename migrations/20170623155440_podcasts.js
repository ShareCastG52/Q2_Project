'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('podcasts', (table) => {
    table.increments();
    table.string('genre', 25);
    table.string('title', 25);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('podcasts');
};
