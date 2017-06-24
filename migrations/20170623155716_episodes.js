'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('episodes', (table) => {
    table.increments();
    table.string('title', 150).notNullable().defaultTo('');
    table.text('description');
    table.string('url', 255).notNullable().defaultTo('');
    table.integer('podcast_id').notNullable().references('id').inTable('podcasts').index();
    table.dateTime('release_date');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('episodes');
};
