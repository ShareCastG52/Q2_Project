'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('podcasts', (table) => {
    table.increments('id').primary();
    table.integer('artist_id').notNullable();
    table.integer('collection_id').notNullable();
    table.integer('track_id').notNullable();
    table.string('artist_name', 255).notNullable().defaultTo('');
    table.string('collection_name', 255).notNullable().defaultTo('');
    table.string('artist_view_url', 255).notNullable().defaultTo('');
    table.string('collection_view_url', 255).notNullable().defaultTo('');
    table.string('feed_url', 255).notNullable().defaultTo('');
    table.string('track_view_url', 255).notNullable().defaultTo('');
    table.string('artwork_url_60', 255);
    table.dateTime('release_date');
    table.string('artwork_url_600', 255);
    table.specificType('genre_ids', 'text[]');
    table.specificType('genres', 'text[]')
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('podcasts');
};
