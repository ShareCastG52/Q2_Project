
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function (){
      return knex('favorites').insert([
        //example call described -- >

          {   // user1 grant shared with user2 meghan, the first1 podcast in our list
            'id': 1,
            'user_id': 1,
            'user_id_shared': 2,
            'podcast_id': 1,
            'created_at': new Date('2016-06-29 14:26:16 UTC'),
            'updated_at': new Date('2016-06-29 14:26:16 UTC')
          },
          { // user3 dummy shared with user 2 meghan podcast id 2
            'id': 2,
            'user_id': 3,
            'user_id_shared': 2,
            'podcast_id': 2,
            'created_at': new Date('2016-06-29 14:26:16 UTC'),
            'updated_at': new Date('2016-06-29 14:26:16 UTC')
          },
          {   // user1 grant shared with user2 meghan, the second2 podcast in our list
            'id': 4,
            'user_id': 1,
            'user_id_shared': 2,
            'podcast_id': 2,
            'created_at': new Date('2016-06-29 14:26:16 UTC'),
            'updated_at': new Date('2016-06-29 14:26:16 UTC')
          },
          {  //user3 dummy shared with user 1 grant podcast id 2
            'id': 3,
            'user_id': 3,
            'user_id_shared': 1,
            'podcast_id': 2,
            'created_at': new Date('2016-06-29 14:26:16 UTC'),
            'updated_at': new Date('2016-06-29 14:26:16 UTC')
          }

      ]);
  })
  .then(function(){
      return knex.raw(`SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites))`)
  });
}
