//common Sense with Dan Carlin

// API CALL -->  https://itunes.apple.com/search?country=US&media=podcast&term=cars
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('podcasts').del()
    .then(function (){
      return knex('podcasts').insert([
        {

          "artist_id": 1134742667,
          "collection_id": 948976028,
          "track_id": 948976028,
          "artist_name": "Stories Podcast / Wondery",
          "collection_name": "Stories Podcast - A Free Children's Story Podcast for Bedtime, Car Rides, and Kids of All Ages!",
          "artist_view_url": "https://itunes.apple.com/us/artist/wondery/id1134742667?mt=2&uo=4",
          "collection_view_url": "https://itunes.apple.com/us/podcast/stories-podcast-free-childrens-story-podcast-for-bedtime/id948976028?mt=2&uo=4",
          "feed_url": "http://rss.art19.com/stories-podcast",
          "track_view_url": "https://itunes.apple.com/us/podcast/stories-podcast-free-childrens-story-podcast-for-bedtime/id948976028?mt=2&uo=4",
          "artwork_url_60": "http://is1.mzstatic.com/image/thumb/Music62/v4/ce/22/03/ce220318-10da-b927-16fb-ab5479045e1b/source/60x60bb.jpg",
          "release_date": "2017-06-14T21:51:00Z",
          "artwork_url_600": "http://is1.mzstatic.com/image/thumb/Music62/v4/ce/22/03/ce220318-10da-b927-16fb-ab5479045e1b/source/600x600bb.jpg",
          "genre_ids": [
            "1305",
            "26",
            "1301",
            "1304"
          ],
          "genres": [
            "Kids & Family",
            "Podcasts",
            "Arts",
            "Education"
          ]
        },
        {

          "artist_id": 135082710,
          "collection_id": 555384933,
          "track_id": 555384933,
          "artist_name": "Roadshow by CNET",
          "collection_name": "On Cars (HD)",
          "artist_view_url": "https://itunes.apple.com/us/artist/cnet-com/id135082710?mt=2&uo=4",
          "collection_view_url": "https://itunes.apple.com/us/podcast/on-cars-hd/id555384933?mt=2&uo=4",
          "feed_url": "http://feed.cnet.com/feed/podcast/cnet-on-cars/hd.xml",
          "track_view_url": "https://itunes.apple.com/us/podcast/on-cars-hd/id555384933?mt=2&uo=4",
          "artwork_url_60": "http://is1.mzstatic.com/image/thumb/Music111/v4/30/65/c2/3065c294-252c-bd78-36f4-31659eb2af15/source/60x60bb.jpg",
          "release_date": "2017-03-28T23:33:00Z",
          "artwork_url_600": "http://is1.mzstatic.com/image/thumb/Music111/v4/30/65/c2/3065c294-252c-bd78-36f4-31659eb2af15/source/600x600bb.jpg",
          "genre_ids": [
            "1446",
            "26",
            "1318"
          ],
          "genres": [
            "Gadgets",
            "Podcasts",
            "Technology"
          ]
        },
      ]);

  })
  .then(function(){
      return knex.raw(`SELECT setval('podcasts_id_seq', (SELECT MAX(id) FROM podcasts))`)
  });
}
