
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function (){
      return knex('favorites').insert([
        //example call described -- >

          {   // user1 grant shared with user2 meghan, the first podcast in our list
            'id': 1,
            'user_id': 1,
            'user_id_shared': 2,
            'podcast_id':1,

          },
          { // user3 dummy shared with user 2 meghan podcast id 2
            'id': 2,
            'user_id': 3,
            'user_id_shared': 2,
            'podcast_id':2,

          },
          {  //user3 dummy shared with user 1 grant podcast id 2
            'id': 3,
            'user_id': 3,
            'user_id_shared': 1,
            'podcast_id':2,
            
          }

      ]);

  })
  .then(function(){
      return knex.raw(`SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites))`)
  });
}
