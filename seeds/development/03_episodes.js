
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('episodes').del()
    .then(function (){
      return knex('episodes').insert([
        //example call described -- >
        {
          "title": "TWiT 245: No Hitler For You",
          "url": "http://www.podtrac.com/pts/redirect.mp3/aolradio.podcast.aol.com/twit/twit0245.mp3",
          "podcast_title": "this WEEK in TECH - MP3 Edition",
          "podcast_url": "http://leo.am/podcasts/twit",
          "description": "[...]",
          "website": "http://www.podtrac.com/pts/redirect.mp3/aolradio.podcast.aol.com/twit/twit0245.mp3",
          "released": "2010-12-25T00:30:00",
          "mygpo_link": "http://gpodder.net/episode/1046492"
        },
          // actual call returned ---->
        {
          "author": null,
          "common_title": null,
          "content_types": [],
          "description": null,
          "episodes": [],
          "errors": {},
          "flattr": null,
          "http_etag": null,
          "http_last_modified": "Mon, 26 Jun 2017 02:27:37 GMT",
          "hub": null,
          "language": null,
          "license": null,
          "link": null,
          "logo": null,
          "new_location": null,
          "subtitle": null,
          "tags": [],
          "title": null,
          "urls": [
            "http://hippiesympathizer.libsyn.com/1114-running-the-world-with-an-inferiority-complex-foreign-policy"
          ],
          "warnings": {}
        }

      ]);

  })
  .then(function(){
      return knex.raw(`SELECT setval('episodes_id_seq', (SELECT MAX(id) FROM episodes))`)
  });
}
