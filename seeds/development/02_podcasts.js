
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('podcasts').del()
    .then(function (){
      return knex('podcasts').insert();

  })
  .then(function(){
      return knex.raw(`SELECT setval('podcasts_id_seq', (SELECT MAX(id) FROM podcasts))`)
  });
}
