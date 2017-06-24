'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('user_id_shared').references('id').inTable('users').index();
    table.integer('podcast_id').references('id').inTable('podcasts').onDelete('CASCADE').index();
    table.integer('episode_id').references('id').inTable('episodes').onDelete('CASCADE').index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites');
};
