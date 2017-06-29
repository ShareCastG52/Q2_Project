
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function (){
      return knex('users').insert([
        {
          'id': 1,
          'first_name': 'Grant',
          'last_name': 'Willison',
          'email': 'emailgdw@gmail.com',
          'hashed_password': '$2a$10$AdBWIytdZxElaGvlxGKb6e0NF5P1rv3sCyQyWHZIqYvV1JbqxHEdS',
          'created_at': new Date('2016-06-29 14:26:16 UTC'),
          'updated_at': new Date('2016-06-29 14:26:16 UTC')
        },
        {
          'id':2,
          'first_name': 'Meghan',
          'last_name': 'Prestemon',
          'email': 'm.m.hares@gmail.com',
          'hashed_password': '$2a$10$MHCRByQXcrufNuhLRuOAv.WdyAC5R5f/Qjz9xvilWN4OGm0qL4/Hm',
          'created_at': new Date('2016-06-29 14:26:16 UTC'),
          'updated_at': new Date('2016-06-29 14:26:16 UTC')
        },
        {
          'id': 3,
          'first_name': 'Dummy',
          'last_name': 'user',
          'email': 'dummyUser@gmail.com',
          'hashed_password': '$2a$10$2.0gXjKB5FY5RHMNzuUVYO9xg.OcUuv5wbRTPjxYHZEbiUSIasDou',
          'created_at': new Date('2016-06-29 14:26:16 UTC'),
          'updated_at': new Date('2016-06-29 14:26:16 UTC')
        }
      ]);

  })
  .then(function(){
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
  });
}
