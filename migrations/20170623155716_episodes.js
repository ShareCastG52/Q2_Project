'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('episodes', (table) => {
    table.increments();
    table.string('title', 25);
    table.text('description');
    table.string('url')
    table.integer('podcast').notNullable().references('id').inTable('podcasts').index();
    table.dateTime('release_date');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('episodes');
};
