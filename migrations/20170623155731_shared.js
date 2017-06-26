'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('shared', (table) => {
    table.increments('id').primary();
    table.text('description');
    table.text('comments');
    table.integer('user_id_from').notNullable().references('id').inTable('users').index();
    table.integer('user_id_to').notNullable().references('id').inTable('users').index();
    table.integer('podcast_id').references('id').inTable('podcasts').onDelete('CASCADE').index();
    table.integer('episode_id').references('id').inTable('episodes').onDelete('CASCADE').index();
    table.timestamps(true, true);
  })
};

//NOTE: What is .index()? Is it necessary?
    //  DO NOT 'CASCADE' ON DELETE for 'user_id_from' and 'user_id_to'
        //*Also in favorites line 7 (same 'CASCADE' issue)


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shared');
};
