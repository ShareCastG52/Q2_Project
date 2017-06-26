//common Sense with Dan Carlin

// API CALL -->  http://feeds.gpodder.net/parse?url=http://feeds.feedburner.com/dancarlin/commonsense?format=json
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('podcasts').del()
    .then(function (){
      return knex('podcasts').insert([
  {
    "author": "Common Sense with Dan Carlin",
    "common_title": "Show ",
    "content_types": [
      "audio"
    ],
    "description": "Common Sense with Dan Carlin is an independent look at politics and current events from popular New Media personality Dan Carlin.\n\nCarlin's self-described \"Martian\" viewpoints infuse each episode with a political alien's take on the world around us and the problems it faces. It's a smart, unique (and admittedly U.S.-centric) program that doesn't dumb down the information or analysis for the slowest person in the room.\n\nCarlin's rapid-fire staccato voice has been compared to William Shatner after too many espressos. That, plus his penchant for making everyone in the audience mad at him eventually, makes for a witch's brew of a podcast that is not for everyone. But for those craving a deeper intellectual analysis, a less partisan approach and unpredictable outside-the-box revelations, Common Sense with Dan Carlin is a feast for the mind.",
    "episodes": [
      {
        "author": null,
        "content": "Politically-related violence in the U.S. heats up as talk of \"Civil War\" goes mainstream. What would a \"Civil War\" in the U.S. even look like? Dan has some thoughts on this and ways to potentially avoid such a fate.",
        "content_types": [
          "audio"
        ],
        "description": "Politically-related violence in the U.S. heats up as talk of \"Civil War\" goes mainstream. What would a \"Civil War\" in the U.S. even look like? Dan has some thoughts on this and ways to potentially avoid such a fate.",
        "duration": 3618,
        "files": [
          {
            "filesize": 44092585,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd16.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcd16.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-316-the-day-of-the-dove",
        "number": 316,
        "released": 1497857453,
        "short_title": "The Day of the Dove",
        "subtitle": "Politically-related violence in the U.S. heats up as talk of \"Civil War\" goes mainstream. What would a \"Civil War\" in the U.S. even look like? Dan has some thoughts on this and ways to potentially avoid such a fate.",
        "title": "Show 316 - The Day of the Dove"
      },
      {
        "author": null,
        "content": "There's a lot in this show subject-wise, but it's really supposed to be about War Powers in the USA and how events in Syria and North Korea play into the issue.",
        "content_types": [
          "audio"
        ],
        "description": "There's a lot in this show subject-wise, but it's really supposed to be about War Powers in the USA and how events in Syria and North Korea play into the issue.",
        "duration": 3676,
        "files": [
          {
            "filesize": 44788169,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd15.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcd15.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-315-war-on-a-whim",
        "number": 315,
        "released": 1493610026,
        "short_title": "War on a Whim?",
        "subtitle": "There's a lot in this show subject-wise, but it's really supposed to be about War Powers in the USA and how events in Syria and North Korea play into the issue.",
        "title": "Show 315 - War on a Whim?"
      },
      {
        "author": null,
        "content": "As the GOP attempts to repeal the Affordable Care Act, Dan ponders the dichotomy between what Americans spend on health care versus what they get in return.",
        "content_types": [
          "audio"
        ],
        "description": "As the GOP attempts to repeal the Affordable Care Act, Dan ponders the dichotomy between what Americans spend on health care versus what they get in return.",
        "duration": 3733,
        "files": [
          {
            "filesize": 45474025,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd14.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcd14.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-314-unhealthy-numbers",
        "number": 314,
        "released": 1489639202,
        "short_title": "Unhealthy Numbers",
        "subtitle": "As the GOP attempts to repeal the Affordable Care Act, Dan ponders the dichotomy between what Americans spend on health care versus what they get in return.",
        "title": "Show 314 - Unhealthy Numbers"
      },
      {
        "author": null,
        "content": "Dan is in an introspective mental place in this show...but he may just drag you in there with him.",
        "content_types": [
          "audio"
        ],
        "description": "Dan is in an introspective mental place in this show...but he may just drag you in there with him.",
        "duration": 3204,
        "files": [
          {
            "filesize": 39124726,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd13.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcd13.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-313-get-me-a-glass-of-water",
        "number": 313,
        "released": 1487088488,
        "short_title": "Get Me A Glass of Water",
        "subtitle": "Dan is in an introspective mental place in this show...but he may just drag you in there with him.",
        "title": "Show 313 - Get Me A Glass of Water"
      },
      {
        "author": null,
        "content": "Dan has another visit with the always fascinating science historian and TV host James Burke. He also catches up a bit on early Trump cabinet picks and the Dakota pipeline protests.",
        "content_types": [
          "audio"
        ],
        "description": "Dan has another visit with the always fascinating science historian and TV host James Burke. He also catches up a bit on early Trump cabinet picks and the Dakota pipeline protests.",
        "duration": 4885,
        "files": [
          {
            "filesize": 59298040,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd12.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcd12.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-312-re-connections-james-burke",
        "number": 312,
        "released": 1481152844,
        "short_title": "Re-Connections with James Burke",
        "subtitle": "Dan has another visit with the always fascinating science historian and TV host James Burke. He also catches up a bit on early Trump cabinet picks and the Dakota pipeline protests.",
        "title": "Show 312 - Re-Connections with James Burke"
      },
      {
        "author": null,
        "content": "Post-2016 election analysis and discussion from a Martian political perspective.",
        "content_types": [
          "audio"
        ],
        "description": "Post-2016 election analysis and discussion from a Martian political perspective.",
        "duration": 3793,
        "files": [
          {
            "filesize": 46189370,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd11.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcd11.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-311-trumped",
        "number": 311,
        "released": 1478849453,
        "short_title": "Trumped",
        "subtitle": "Post-2016 election analysis and discussion from a Martian political perspective.",
        "title": "Show 311 - Trumped"
      },
      {
        "author": null,
        "content": "What happens if our nation's problems become too large to realistically imagine our politicians solving? What if voting doesn't help? Dan reminds us that he's not a moderate, and that you probably aren't either.",
        "content_types": [
          "audio"
        ],
        "description": "What happens if our nation's problems become too large to realistically imagine our politicians solving? What if voting doesn't help? Dan reminds us that he's not a moderate, and that you probably aren't either.",
        "duration": 2689,
        "files": [
          {
            "filesize": 32948423,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd10.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcd10.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-310-or-else",
        "number": 310,
        "released": 1476391826,
        "short_title": "Or Else",
        "subtitle": "What happens if our nation's problems become too large to realistically imagine our politicians solving? What if voting doesn't help? Dan reminds us that he's not a moderate, and that you probably aren't either.",
        "title": "Show 310 - Or Else"
      },
      {
        "author": null,
        "content": "Secrecy, hacking, information leaks, whistle-blowers, foreign-operative propaganda pushers, disinformation, election tampering and the search for any truth in cyberspace occupy Dan's thoughts in this show.",
        "content_types": [
          "audio"
        ],
        "description": "Secrecy, hacking, information leaks, whistle-blowers, foreign-operative propaganda pushers, disinformation, election tampering and the search for any truth in cyberspace occupy Dan's thoughts in this show.",
        "duration": 3396,
        "files": [
          {
            "filesize": 41472294,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd09.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcd09.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-309-a-bodyguard-of-lies/",
        "number": 309,
        "released": 1473466244,
        "short_title": "A Bodyguard of Lies",
        "subtitle": "Secrecy, hacking, information leaks, whistle-blowers, foreign-operative propaganda pushers, disinformation, election tampering and the search for any truth in cyberspace occupy Dan's thoughts in this show.",
        "title": "Show 309 - A Bodyguard of Lies"
      },
      {
        "author": null,
        "content": "After a brief hiatus to finish his other podcast, Dan has a huge backlog of material to cover. The presidential race, foreign affairs and racial and cultural questions take center stage.",
        "content_types": [
          "audio"
        ],
        "description": "After a brief hiatus to finish his other podcast, Dan has a huge backlog of material to cover. The presidential race, foreign affairs and racial and cultural questions take center stage.",
        "duration": 4404,
        "files": [
          {
            "filesize": 53528332,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd08.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcd08.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-308-return-of-the-podcaster",
        "number": 308,
        "released": 1471216835,
        "short_title": "Return of the Podcaster",
        "subtitle": "After a brief hiatus to finish his other podcast, Dan has a huge backlog of material to cover. The presidential race, foreign affairs and racial and cultural questions take center stage.",
        "title": "Show 308 - Return of the Podcaster"
      },
      {
        "author": null,
        "content": "This show has a \"chickens coming home to roost\" feel to it, but maybe in a positive way. It was supposed to be about the recent British vote to leave the EU, but evolved into something larger. Surprise, surprise.",
        "content_types": [
          "audio"
        ],
        "description": "This show has a \"chickens coming home to roost\" feel to it, but maybe in a positive way. It was supposed to be about the recent British vote to leave the EU, but evolved into something larger. Surprise, surprise.",
        "duration": 2977,
        "files": [
          {
            "filesize": 36402566,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd07.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdccd07.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-307-revenge-gangrenous-finger",
        "number": 307,
        "released": 1467003917,
        "short_title": "Revenge of the Gangrenous Finger",
        "subtitle": "This show has a \"chickens coming home to roost\" feel to it, but maybe in a positive way. It was supposed to be about the recent British vote to leave the EU, but evolved into something larger. Surprise, surprise.",
        "title": "Show 307 - Revenge of the Gangrenous Finger"
      },
      {
        "author": null,
        "content": "Hate is a very strong word, but increasing numbers of Americans hate their countrymen. Is this a danger to the stability of the country? If it were deemed such, what can be done about it?",
        "content_types": [
          "audio"
        ],
        "description": "Hate is a very strong word, but increasing numbers of Americans hate their countrymen. Is this a danger to the stability of the country? If it were deemed such, what can be done about it?",
        "duration": 2649,
        "files": [
          {
            "filesize": 32468836,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd06.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdccd06.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-306-disengaging-lizard-brain",
        "number": 306,
        "released": 1465107746,
        "short_title": "Disengaging the Lizard Brain",
        "subtitle": "Hate is a very strong word, but increasing numbers of Americans hate their countrymen. Is this a danger to the stability of the country? If it were deemed such, what can be done about it?",
        "title": "Show 306 - Disengaging the Lizard Brain"
      },
      {
        "author": null,
        "content": "Dan finds the idea of a Donald Trump presidency to be inconceivable. He also thinks a fundamental change in U.S. Foreign Policy is also inconceivable. Could one inconceivable outcome lead to another?",
        "content_types": [
          "audio"
        ],
        "description": "Dan finds the idea of a Donald Trump presidency to be inconceivable. He also thinks a fundamental change in U.S. Foreign Policy is also inconceivable. Could one inconceivable outcome lead to another?",
        "duration": 4312,
        "files": [
          {
            "filesize": 52423674,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd05.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdccd05.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-305-catalyst-for-the-inconceivable",
        "number": 305,
        "released": 1462650668,
        "short_title": "A Catalyst for the Inconceivable",
        "subtitle": "Dan finds the idea of a Donald Trump presidency to be inconceivable. He also thinks a fundamental change in U.S. Foreign Policy is also inconceivable. Could one inconceivable outcome lead to another?",
        "title": "Show 305 - A Catalyst for the Inconceivable"
      },
      {
        "author": null,
        "content": "As the U.S. Presidential campaign veers into unprecedented territory Dan sees opportunity in the unusual circumstances. \"Anger is an Energy\" he says. And he says it AGAIN and AGAIN.",
        "content_types": [
          "audio"
        ],
        "description": "As the U.S. Presidential campaign veers into unprecedented territory Dan sees opportunity in the unusual circumstances. \"Anger is an Energy\" he says. And he says it AGAIN and AGAIN.",
        "duration": 2664,
        "files": [
          {
            "filesize": 32641555,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd04.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdccd04.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-304-speed-dating-for-delegates",
        "number": 304,
        "released": 1460857988,
        "short_title": "Speed Dating For Delegates",
        "subtitle": "As the U.S. Presidential campaign veers into unprecedented territory Dan sees opportunity in the unusual circumstances. \"Anger is an Energy\" he says. And he says it AGAIN and AGAIN.",
        "title": "Show 304 - Speed Dating For Delegates"
      },
      {
        "author": null,
        "content": "It's not easy to get under Dan's normally flexible, see-things-from-multiple-angles skin, but Donald Trump's stated willingness to cross traditional American moral fault lines has done just that.",
        "content_types": [
          "audio"
        ],
        "description": "It's not easy to get under Dan's normally flexible, see-things-from-multiple-angles skin, but Donald Trump's stated willingness to cross traditional American moral fault lines has done just that.",
        "duration": 2871,
        "files": [
          {
            "filesize": 35129996,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd03.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdccd03.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-303-the-way-you-play-the-game",
        "number": 303,
        "released": 1459489826,
        "short_title": "The Way You Play The Game Redux",
        "subtitle": "It's not easy to get under Dan's normally flexible, see-things-from-multiple-angles skin, but Donald Trump's stated willingness to cross traditional American moral fault lines has done just that.",
        "title": "Show 303 - The Way You Play The Game Redux"
      },
      {
        "author": null,
        "content": "Justice Scalia of the Supreme Court dies and CEO Tim Cook and Apple go toe-to-toe with the U.S. Government over privacy.",
        "content_types": [
          "audio"
        ],
        "description": "Justice Scalia of the Supreme Court dies and CEO Tim Cook and Apple go toe-to-toe with the U.S. Government over privacy.",
        "duration": 3369,
        "files": [
          {
            "filesize": 41108678,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd02.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdccd02.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-302-courts-cooks-apples",
        "number": 302,
        "released": 1456520666,
        "short_title": "Of Courts, Cooks and Apples",
        "subtitle": "Justice Scalia of the Supreme Court dies and CEO Tim Cook and Apple go toe-to-toe with the U.S. Government over privacy.",
        "title": "Show 302 - Of Courts, Cooks and Apples"
      },
      {
        "author": null,
        "content": "In an election where political outsiders are exceeding all expectations, who better than a political outsider to break down the situation? Dan gives his Martian-style post-Iowa analysis and looks ahead to 2020.",
        "content_types": [
          "audio"
        ],
        "description": "In an election where political outsiders are exceeding all expectations, who better than a political outsider to break down the situation? Dan gives his Martian-style post-Iowa analysis and looks ahead to 2020.",
        "duration": 3124,
        "files": [
          {
            "filesize": 38167701,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd01.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdccd01.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-301-martian-perspectives",
        "number": 301,
        "released": 1454797808,
        "short_title": "Martian Perspectives",
        "subtitle": "In an election where political outsiders are exceeding all expectations, who better than a political outsider to break down the situation? Dan gives his Martian-style post-Iowa analysis and looks ahead to 2020.",
        "title": "Show 301 - Martian Perspectives"
      },
      {
        "author": null,
        "content": "Fantasies about electoral chaos, calls for political prudence and martian thoughts on an anti-federal government standoff in Oregon help stuff this episode chock full of what most of you love about this show.",
        "content_types": [
          "audio"
        ],
        "description": "Fantasies about electoral chaos, calls for political prudence and martian thoughts on an anti-federal government standoff in Oregon help stuff this episode chock full of what most of you love about this show.",
        "duration": 4730,
        "files": [
          {
            "filesize": 57437593,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcd00.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdccd00.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-300-trecenti",
        "number": 300,
        "released": 1452211313,
        "short_title": "Trecenti",
        "subtitle": "Fantasies about electoral chaos, calls for political prudence and martian thoughts on an anti-federal government standoff in Oregon help stuff this episode chock full of what most of you love about this show.",
        "title": "Show 300 - Trecenti"
      },
      {
        "author": null,
        "content": "A mass shooting in California is tied to an American-born Muslim.Can any defense prevent homegrown terror while leaving our rights intact?",
        "content_types": [
          "audio"
        ],
        "description": "A mass shooting in California is tied to an American-born Muslim.Can any defense prevent homegrown terror while leaving our rights intact?",
        "duration": 3646,
        "files": [
          {
            "filesize": 49636959,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcc99.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcc99.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-299-the-war-on-bad-thoughts",
        "number": 299,
        "released": 1449710228,
        "short_title": "The War on Bad Thoughts",
        "subtitle": "A mass shooting in California is tied to an American-born Muslim.Can any defense prevent homegrown terror while leaving our rights intact?",
        "title": "Show 299 - The War on Bad Thoughts"
      },
      {
        "author": null,
        "content": "What began as a show speculating about speeding up the pace of technological discoveries morphed into a conversation about effective responses to the November 13th 2015 terror attacks in Paris.",
        "content_types": [
          "audio"
        ],
        "description": "What began as a show speculating about speeding up the pace of technological discoveries morphed into a conversation about effective responses to the November 13th 2015 terror attacks in Paris.",
        "duration": 4136,
        "files": [
          {
            "filesize": 49636959,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcc98.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcc98.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-298-innovation-acceleration-and-jab-defense",
        "number": 298,
        "released": 1447542668,
        "short_title": "Innovation Acceleration and Jab Defense",
        "subtitle": "What began as a show speculating about speeding up the pace of technological discoveries morphed into a conversation about effective responses to the November 13th 2015 terror attacks in Paris.",
        "title": "Show 298 - Innovation Acceleration and Jab Defense"
      },
      {
        "author": null,
        "content": "An audio playback glitch results in Dan not being able to work on the overdue Hardcore History show. This effort is what got completed instead. Syria, Russia and the Democratic Presidential Primary debates are discussed.",
        "content_types": [
          "audio"
        ],
        "description": "An audio playback glitch results in Dan not being able to work on the overdue Hardcore History show. This effort is what got completed instead. Syria, Russia and the Democratic Presidential Primary debates are discussed.",
        "duration": 3184,
        "files": [
          {
            "filesize": 38883677,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcc97.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcc97.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-297-the-show-that-should-not-be",
        "number": 297,
        "released": 1445215988,
        "short_title": "The That Should Not Be",
        "subtitle": "An audio playback glitch results in Dan not being able to work on the overdue Hardcore History show. This effort is what got completed instead. Syria, Russia and the Democratic Presidential Primary debates are discussed.",
        "title": "Show 297 - The Show That Should Not Be"
      },
      {
        "author": null,
        "content": "Dan tries to break down some of the issues and add some context to the arguments, nuances and complexities of the current immigration and refugee situation in Europe and the U.S..",
        "content_types": [
          "audio"
        ],
        "description": "Dan tries to break down some of the issues and add some context to the arguments, nuances and complexities of the current immigration and refugee situation in Europe and the U.S..",
        "duration": 3865,
        "files": [
          {
            "filesize": 47055816,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcc96.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcc96.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-296-immigration-breakdown",
        "number": 296,
        "released": 1443157728,
        "short_title": "Immigration Breakdown",
        "subtitle": "Dan tries to break down some of the issues and add some context to the arguments, nuances and complexities of the current immigration and refugee situation in Europe and the U.S..",
        "title": "Show 296 - Immigration Breakdown"
      },
      {
        "author": null,
        "content": "Dan puts on his pundit hat to analyze the first GOP televised debate. Not surprisingly, while he's no fan of Donald Trump, he finds reasons to be glad there's a political outsider in the race.",
        "content_types": [
          "audio"
        ],
        "description": "Dan puts on his pundit hat to analyze the first GOP televised debate. Not surprisingly, while he's no fan of Donald Trump, he finds reasons to be glad there's a political outsider in the race.",
        "duration": 3329,
        "files": [
          {
            "filesize": 40621857,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcc95.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcc95.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-295-trumping-the-playbook",
        "number": 295,
        "released": 1439016488,
        "short_title": "Trumping the Playbook",
        "subtitle": "Dan puts on his pundit hat to analyze the first GOP televised debate. Not surprisingly, while he's no fan of Donald Trump, he finds reasons to be glad there's a political outsider in the race.",
        "title": "Show 295 - Trumping the Playbook"
      },
      {
        "author": null,
        "content": "Experts have said that we are heading towards a future where privacy is dead. Do humans have any say in the matter? Dan talks encryption, personal security vs collective security, and dreams he has.",
        "content_types": [
          "audio"
        ],
        "description": "Experts have said that we are heading towards a future where privacy is dead. Do humans have any say in the matter? Dan talks encryption, personal security vs collective security, and dreams he has.",
        "duration": 2652,
        "files": [
          {
            "filesize": 32495794,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcc94.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcc94.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-294-backdoors-to-glass-houses",
        "number": 294,
        "released": 1436854708,
        "short_title": "Backdoors to Glass Houses",
        "subtitle": "Experts have said that we are heading towards a future where privacy is dead. Do humans have any say in the matter? Dan talks encryption, personal security vs collective security, and dreams he has.",
        "title": "Show 294 - Backdoors to Glass Houses"
      },
      {
        "author": null,
        "content": "Dan has an in-depth discussion with author, neuroscientist, philosopher and podcaster Sam Harris about terrorism, violence, Islam, morality in foreign policy and a whole lot of other things.",
        "content_types": [
          "audio"
        ],
        "description": "Dan has an in-depth discussion with author, neuroscientist, philosopher and podcaster Sam Harris about terrorism, violence, Islam, morality in foreign policy and a whole lot of other things.",
        "duration": 8192,
        "files": [
          {
            "filesize": 98985134,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcc93.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcc93.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-293-sitting-down-with-sam",
        "number": 293,
        "released": 1435378088,
        "short_title": "Sitting Down with Sam",
        "subtitle": "Dan has an in-depth discussion with author, neuroscientist, philosopher and podcaster Sam Harris about terrorism, violence, Islam, morality in foreign policy and a whole lot of other things.",
        "title": "Show 293 - Sitting Down with Sam"
      },
      {
        "author": null,
        "content": "Dan has talked in the past about funding drives to get reformers elected, but this show explores a more \"if you can't beat them, join them\" approach to achieving public policy goals in a money-dominated system.",
        "content_types": [
          "audio"
        ],
        "description": "Dan has talked in the past about funding drives to get reformers elected, but this show explores a more \"if you can't beat them, join them\" approach to achieving public policy goals in a money-dominated system.",
        "duration": 3341,
        "files": [
          {
            "filesize": 40093383,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcc92.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcc92.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-292-pandering-for-liberty",
        "number": 292,
        "released": 1433545692,
        "short_title": "Pandering for Liberty",
        "subtitle": "Dan has talked in the past about funding drives to get reformers elected, but this show explores a more \"if you can't beat them, join them\" approach to achieving public policy goals in a money-dominated system.",
        "title": "Show 292 - Pandering for Liberty"
      },
      {
        "author": null,
        "content": "Recorded to the soothing background sounds of jackhammers, this show talks about the electorate's collective memory with a bit about riots and partisan self-image thrown in for variety's sake.",
        "content_types": [
          "audio"
        ],
        "description": "Recorded to the soothing background sounds of jackhammers, this show talks about the electorate's collective memory with a bit about riots and partisan self-image thrown in for variety's sake.",
        "duration": 3769,
        "files": [
          {
            "filesize": 45899440,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcc91.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcc91.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-291-past-performance-future-results",
        "number": 291,
        "released": 1431828528,
        "short_title": "Past Performance & Future Results",
        "subtitle": "Recorded to the soothing background sounds of jackhammers, this show talks about the electorate's collective memory with a bit about riots and partisan self-image thrown in for variety's sake.",
        "title": "Show 291 - Past Performance & Future Results"
      },
      {
        "author": null,
        "content": "The ideas of secrecy, democracy, special interests and international trade deals are interwoven into this episode that uses the negotiations over two upcoming international trade agreements to highlight current trends.",
        "content_types": [
          "audio"
        ],
        "description": "The ideas of secrecy, democracy, special interests and international trade deals are interwoven into this episode that uses the negotiations over two upcoming international trade agreements to highlight current trends.",
        "duration": 3000,
        "files": [
          {
            "filesize": 36676533,
            "mimetype": "audio/mpeg",
            "urls": [
              "http://traffic.libsyn.com/dancarlin/cswdcc90.mp3"
            ]
          }
        ],
        "flattr": null,
        "guid": "http://traffic.libsyn.com/dancarlin/cswdcc90.mp3",
        "language": null,
        "license": null,
        "link": "http://www.dancarlin.com/product/common-sense-290-the-illusion-of-control",
        "number": 290,
        "released": 1427604498,
        "short_title": "The Illusion of Control",
        "subtitle": "The ideas of secrecy, democracy, special interests and international trade deals are interwoven into this episode that uses the negotiations over two upcoming international trade agreements to highlight current trends.",
        "title": "Show 290 - The Illusion of Control"
      }
    ],
    "errors": {},
    "flattr": null,
    "http_etag": "GwrMY2DLcwxx+MXSrLTyyc+UIdU",
    "http_last_modified": "Mon, 26 Jun 2017 01:59:38 GMT",
    "hub": "http://pubsubhubbub.appspot.com/",
    "language": "en-us",
    "license": null,
    "link": "http://www.dancarlin.com",
    "logo": "http://www.dancarlin.com/graphics/CS_DC_iTunes.jpg",
    "new_location": null,
    "subtitle": "Common Sense with Dan Carlin is an independent look at politics and current events from popular New Media personality Dan Carlin.",
    "tags": [
      "News & Politics",
      "carlin",
      "News",
      "libertarian",
      "constitution",
      "freedom",
      "politics",
      "Politics",
      "independent",
      "nonpartisan",
      "dan",
      "rights"
    ],
    "title": "Common Sense with Dan Carlin",
    "urls": [
      "http://feeds.feedburner.com/dancarlin/commonsense?format=json"
    ],
    "warnings": {}
  }
]);

  })
  .then(function(){
      return knex.raw(`SELECT setval('podcasts_id_seq', (SELECT MAX(id) FROM podcasts))`)
  });
}
