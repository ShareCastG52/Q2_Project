// 
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('episodes').del()
//     .then(function (){
//       return knex('episodes').insert([
//         //example call described -- >
//
//       ]);
//
//   })
//   .then(function(){
//       return knex.raw(`SELECT setval('episodes_id_seq', (SELECT MAX(id) FROM episodes))`)
//   });
// }
