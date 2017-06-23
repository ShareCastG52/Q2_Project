
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name', 50).notNullable().defaultTo('');
    table.string('last_name', 50).notNullable().defaultTo('');
    table.string('email', 100).notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.timestamps(true, true);
  })
};

// NOTE: change first and last max length?
      // do we want to change data type for password?
      // do we want timestamps for each table? (probably)

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
