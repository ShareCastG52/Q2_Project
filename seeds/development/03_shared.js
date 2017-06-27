exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shared').del()
    .then(function (){
      return knex('shared').insert([
        {   // user1 grant shared with user2 meghan, the first podcast in our list
          'id': 1,
          'user_id_from': 1,
          'user_id_to': 2,
          'podcast_id':1,
          'comments': "hey I think you'd really like this podcast"
        },
        { // user3 dummy shared with user 2 meghan podcast id 2
          'id': 2,
          'user_id_from': 3,
          'user_id_to': 2,
          'podcast_id':2,
          'comments': "hey, i\'m the dummy, I think you'd really like this podcast"
        },
        {  //user3 dummy shared with user 1 grant podcast id 2
          'id': 3,
          'user_id_from': 3,
          'user_id_to': 1,
          'podcast_id':2,
          'comments': "hey i\'m a dummy, I think you'd really like this podcast"
        }
        ]);

        })
        .then(function(){
            return knex.raw(`SELECT setval('shared_id_seq', (SELECT MAX(id) FROM shared))`);
        });
      }
