
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function (){
      return knex('users').insert([
        {
          'first_name': 'Grant',
          'last_name': 'Willison',
          'email': 'emailgdw@gmail.com',

        },
        {
          'first_name': 'Meghan',
          'last_name': 'Prestemon',
          'email': 'm.m.hares@gmail.com',

        },
        {
          'first_name': 'dummy',
          'last_name': 'user',
          'email': 'dummyUser@gmail.com',

        }
      ]);

  })
  .then(function(){
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
  });
}
