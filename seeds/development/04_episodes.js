

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('episodes').del()
    .then(function (){
      return knex('episodes').insert(

      // [
      //     {
      //         "author": "TED",
      //         "common_title": null,
      //         "content_types": [
      //             "video"
      //         ],
      //         "description": "Youtube uploads by TEDtalksDirector",
      //         "episodes":
               [
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "When Michael Bierut was tapped to design a logo for public school libraries, he had no idea he was embarking on a years-long passion project. In this often hilarious talk, he recalls his obsessive quest to bring energy, learning, art and graphics into these magical spaces where school librarians can inspire new generations of readers and thinkers.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=YsA_JTeHJ6A"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:YsA_JTeHJ6A",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=YsA_JTeHJ6A",
                      "number": null,
                      "released": 1498229326,
                      "short_title": null,
                      "subtitle": null,
                      "title": "How to design a library that makes kids want to read |  Michael Bierut"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "Rhiannon Giddens pours the emotional weight of American history into her music. Listen as she performs traditional folk ballads \u2014 including \"Waterboy,\" \"Up Above My Head,\" and \"Lonesome Road\" by Sister Rosetta Tharp \u2014 and one glorious original song, \"Come Love Come,\" inspired by Civil War-era slave narratives.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=VbeekjZP-CI"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:VbeekjZP-CI",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=VbeekjZP-CI",
                      "number": null,
                      "released": 1498229241,
                      "short_title": null,
                      "subtitle": null,
                      "title": "Songs that bring history to life | Rhiannon Giddens"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "Illness is universal \u2014 but access to care is not. Physician Raj Panjabi has a bold vision to bring health care to everyone, everywhere. With the 2017 TED Prize, Panjabi is building the Community Health Academy, a global platform that aims to modernize how community health workers learn vital skills, creating jobs along the way.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=N9HF8mMe2pU"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:N9HF8mMe2pU",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=N9HF8mMe2pU",
                      "number": null,
                      "released": 1498144892,
                      "short_title": null,
                      "subtitle": null,
                      "title": "No one should die because they live too far from a doctor | Raj Panjabi"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "For a crime he committed in his early twenties, the courts sentenced Marlon Peterson to 10 years in prison -- and, as he says, a lifetime of irrelevance. While behind bars, Peterson found redemption through a penpal mentorship program with students from Brooklyn. In this brave talk, he reminds us why we should invest in the humanity of those people society would like to disregard and discard.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=D9ZNpt6FVTY"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:D9ZNpt6FVTY",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=D9ZNpt6FVTY",
                      "number": null,
                      "released": 1498059549,
                      "short_title": null,
                      "subtitle": null,
                      "title": "Am I not human? A call for criminal justice reform | Marlon Peterson"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "Sixty-five million people were displaced from their homes by conflict and disaster in 2016. It's not just a crisis; it's a test of who we are and what we stand for, says David Miliband -- and each of us has a personal responsibility to help solve it. In this must-watch talk, Miliband gives us specific, tangible ways to help refugees and turn empathy and altruism into action.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=PgCmT0qkfQM"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:PgCmT0qkfQM",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=PgCmT0qkfQM",
                      "number": null,
                      "released": 1497980395,
                      "short_title": null,
                      "subtitle": null,
                      "title": "The refugee crisis is a test of our character | David Miliband"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "We must face our fears if we want to get the most out of technology -- and we must conquer those fears if we want to get the best out of humanity, says Garry Kasparov. One of the greatest chess players in history, Kasparov lost a memorable match to IBM supercomputer Deep Blue in 1997. Now he shares his vision for a future where intelligent machines help us turn our grandest dreams into reality.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=NP8xt8o4_5Q"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:NP8xt8o4_5Q",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=NP8xt8o4_5Q",
                      "number": null,
                      "released": 1497975586,
                      "short_title": null,
                      "subtitle": null,
                      "title": "Don't fear intelligent machines. Work with them | Garry Kasparov"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "As we keep pumping carbon dioxide into the atmosphere, more of it is dissolving in the oceans, leading to drastic changes in the water's chemistry. Triona McGrath researches this process, known as ocean acidification, and in this talk she takes us for a dive into an oceanographer's world. Learn more about how the \"evil twin of climate change\" is impacting the ocean \u2014 and the life that depends on it.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=KJPpJhQxaLw"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:KJPpJhQxaLw",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=KJPpJhQxaLw",
                      "number": null,
                      "released": 1497885060,
                      "short_title": null,
                      "subtitle": null,
                      "title": "How pollution is changing the ocean's chemistry | Triona McGrath"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "Where does OK Go come up with ideas like dancing in zero gravity, performing in ultra slow motion or constructing a warehouse-sized Rube Goldberg machine for their music videos? In between live performances of \"This Too Shall Pass\" and \"The One Moment,\" lead singer and director Damian Kulash takes us inside the band's creative process, showing us how to look for wonder and surprise.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=WyOSqjIABe0"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:WyOSqjIABe0",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=WyOSqjIABe0",
                      "number": null,
                      "released": 1497630554,
                      "short_title": null,
                      "subtitle": null,
                      "title": "How to find a wonderful idea | OK Go"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "Where did Zika come from, and what can we do about it? Molecular biologist Nina Fedoroff takes us around the world to understand Zika's origins and how it spread, proposing a controversial way to stop the virus -- and other deadly diseases -- by preventing infected mosquitoes from multiplying.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=3vJ4-UH38dQ"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:3vJ4-UH38dQ",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=3vJ4-UH38dQ",
                      "number": null,
                      "released": 1497541249,
                      "short_title": null,
                      "subtitle": null,
                      "title": "A secret weapon against Zika and other mosquito-borne diseases | Nina Fedoroff"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "Once homebound by epilepsy, mental health advocate Sitawa Wafula found her strength in writing about it. Now, she advocates for others who are yet to find their voices, cutting through stigma and exclusion to talk about what it's like to live with the condition.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=_B1JmOerYmY"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:_B1JmOerYmY",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=_B1JmOerYmY",
                      "number": null,
                      "released": 1497455190,
                      "short_title": null,
                      "subtitle": null,
                      "title": "Why I speak up about living with epilepsy | Sitawa Wafula"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "\"Ideas can and do change the world,\" says historian Rutger Bregman, sharing his case for a provocative one: guaranteed basic income. Learn more about the idea's 500-year history and a forgotten modern experiment where it actually worked -- and imagine how much energy and talent we would unleash if we got rid of poverty once and for all.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=ydKcaIE6O1k"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:ydKcaIE6O1k",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=ydKcaIE6O1k",
                      "number": null,
                      "released": 1497368326,
                      "short_title": null,
                      "subtitle": null,
                      "title": "Poverty isn't a lack of character; it's a lack of cash | Rutger Bregman"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "T. Morgan Dixon and Vanessa Garrison, founders of the health nonprofit GirlTrek, are on a mission to reduce the leading causes of preventable death among Black women -- and build communities in the process. How? By getting one million women and girls to prioritize their self-care, lacing up their shoes and walking in the direction of their healthiest, most fulfilled lives.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=8olL43PKJKw"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:8olL43PKJKw",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=8olL43PKJKw",
                      "number": null,
                      "released": 1497283593,
                      "short_title": null,
                      "subtitle": null,
                      "title": "When Black women walk, things change | T. Morgan Dixon and Vanessa Garrison"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "Teens don't get enough sleep, and it's not because of Snapchat, social lives or hormones -- it's because of public policy, says Wendy Troxel. Drawing from her experience as a sleep researcher, clinician and mother of a teenager, Troxel discusses how early school start times deprive adolescents of sleep during the time of their lives when they need it most.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=TS6lFDVR-3g"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:TS6lFDVR-3g",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=TS6lFDVR-3g",
                      "number": null,
                      "released": 1497021103,
                      "short_title": null,
                      "subtitle": null,
                      "title": "Why school should start later for teens | Wendy Troxel"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "Why are we so deadlocked on climate, and what would it take to overcome the seemingly insurmountable barriers to progress? Policy entrepreneur Ted Halstead proposes a transformative solution based on the conservative principles of free markets and limited government. Learn more about how this carbon dividends plan could trigger an international domino effect towards a more popular, cost-effective and equitable climate solution.\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=ta2Wvy9F_gA"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:ta2Wvy9F_gA",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=ta2Wvy9F_gA",
                      "number": null,
                      "released": 1496938881,
                      "short_title": null,
                      "subtitle": null,
                      "title": "A climate solution where all sides can win | Ted Halstead"
                  },
                  {
                      "author": "TED",
                      "content": null,
                      "content_types": [
                          "video"
                      ],
                      "description": "In this deeply moving talk, Lucy Kalanithi reflects on life and purpose, sharing the story of her late husband, Paul, a young neurosurgeon who turned to writing after his terminal cancer diagnosis. \"Engaging in the full range of experience -- living and dying, love and loss -- is what we get to do,\" Kalanithi says. \"Being human doesn't happen despite suffering -- it happens within it.\"\n\nThe TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more.\n\nFollow TED on Twitter: http://www.twitter.com/TEDTalks\nLike TED on Facebook: https://www.facebook.com/TED\n\nSubscribe to our channel: https://www.youtube.com/TED",
                      "duration": null,
                      "files": [
                          {
                              "filesize": null,
                              "mimetype": "application/x-youtube",
                              "urls": [
                                  "https://www.youtube.com/watch?v=U5-yBjKKicA"
                              ]
                          }
                      ],
                      "flattr": null,
                      "guid": "yt:video:U5-yBjKKicA",
                      "language": null,
                      "license": null,
                      "link": "https://www.youtube.com/watch?v=U5-yBjKKicA",
                      "number": null,
                      "released": 1496854057,
                      "short_title": null,
                      "subtitle": null,
                      "title": "What makes life worth living in the face of death | Lucy Kalanithi"
                  }
              ],
              "errors": {},
              "flattr": null,
              "http_etag": null,
              "http_last_modified": null,
              "hub": null,
              "language": null,
              "license": null,
              "link": "https://www.youtube.com/channel/UCAuUUnT6oDeKwE6v1NGQxug",
              "logo": null,
              "new_location": null,
              "subtitle": null,
              "tags": [],
              "title": "TED",
              "urls": [
                  "http://youtube.com/rss/user/TEDtalksDirector/videos.rss",
                  "https://www.youtube.com/feeds/videos.xml?channel_id=UCAuUUnT6oDeKwE6v1NGQxug"
              ],
              "warnings": {}
      //     }
      // ]
);

  })
  .then(function(){
      return knex.raw(`SELECT setval('episodes_id_seq', (SELECT MAX(id) FROM episodes))`)
  });
}
