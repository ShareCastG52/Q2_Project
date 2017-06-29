'use strict';

const express = require('express');
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const { camelizeKeys, decamelizeKeys } = require('humps');

const FavoritesRepository = require('../src/favorites-repository');
const favoritesRepo = new FavoritesRepository();

const router = express.Router();

/**
 * @api {get} /favorites Generate favorite podcasts for logged in user
 * @apiVersion 1.0.0
 * @apiName GetFavorites
 * @apiGroup Favorites
 *
 * @apiSuccess {Object[]} searchResults                   User information.
 * @apiSuccess {Number}   searchResults.id                Podcast ID.
 * @apiSuccess {Number}   searchResults.artistId          Artist ID for iTunes.
 * @apiSuccess {Number}   searchResults.collectionId      Podcast ID for iTunes.
 * @apiSuccess {Number}   searchResults.trackId           Podcast ID for iTunes.
 * @apiSuccess {String}   searchResults.artistName        Podcast organization's name.
 * @apiSuccess {String}   searchResults.collectionName    Podcast name.
 * @apiSuccess {String}   searchResults.artistViewUrl     URL for something?
 * @apiSuccess {String}   searchResults.collectionViewUrl URL for podcast on iTunes.
 * @apiSuccess {String}   searchResults.feedUrl           URL for RSS feed.
 * @apiSuccess {String}   searchResults.trackViewUrl      URL for podcast on iTunes.
 * @apiSuccess {String}   searchResults.artworkUrl60      URL for image.
 * @apiSuccess {String}   searchResults.releaseDate       Release date of the podcast.
 * @apiSuccess {String}   searchResults.artworkUrl600     URL for larger image.
 * @apiSuccess {String[]} searchResults.genreIds          Genre IDs for iTunes.
 * @apiSuccess {String[]} searchResults.genres            Genres for the podcast.
 * @apiSuccess {String}   searchResults.createdAt         Date of podcast creation in database.
 * @apiSuccess {String}   searchResults.updatedAt         Date of last podcast update in database.
 * @apiSuccess {Number}   searchResults.userId            User ID.
 * @apiSuccess {Number}   searchResults.userIdShared      ID of user this podcast was shared with.
 * @apiSuccess {Number}   searchResults.podcastId         Podcast ID.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
        id: 1,
        artistId: 1134742667,
        collectionId: 948976028,
        trackId: 948976028,
        artistName: 'Stories Podcast / Wondery',
        collectionName: 'Stories Podcast - A Free Children\'s Story Podcast for Bedtime, Car Rides, and Kids of All Ages!',
        artistViewUrl: 'https://itunes.apple.com/us/artist/wondery/id1134742667?mt=2&uo=4',
        collectionViewUrl: 'https://itunes.apple.com/us/podcast/stories-podcast-free-childrens-story-podcast-for-bedtime/id948976028?mt=2&uo=4',
        feedUrl: 'http://rss.art19.com/stories-podcast',
        trackViewUrl: 'https://itunes.apple.com/us/podcast/stories-podcast-free-childrens-story-podcast-for-bedtime/id948976028?mt=2&uo=4',
        artworkUrl60: 'http://is1.mzstatic.com/image/thumb/Music62/v4/ce/22/03/ce220318-10da-b927-16fb-ab5479045e1b/source/60x60bb.jpg',
        releaseDate: '2017-06-14T21:51:00Z',
        artworkUrl600: 'http://is1.mzstatic.com/image/thumb/Music62/v4/ce/22/03/ce220318-10da-b927-16fb-ab5479045e1b/source/600x600bb.jpg',
        genreIds: [ '1305', '26', '1301', '1304' ],
        genres: [ 'Kids & Family', 'Podcasts', 'Arts', 'Education' ],
        createdAt: '2016-06-29T14:26:16.000Z',
        updatedAt: '2016-06-29T14:26:16.000Z',
        userId: 1,
        userIdShared: 2,
        podcastId: 1
      }, {
        id: 4,
        artistId: 135082710,
        collectionId: 555384933,
        trackId: 555384933,
        artistName: 'Roadshow by CNET',
        collectionName: 'On Cars (HD)',
        artistViewUrl: 'https://itunes.apple.com/us/artist/cnet-com/id135082710?mt=2&uo=4',
        collectionViewUrl: 'https://itunes.apple.com/us/podcast/on-cars-hd/id555384933?mt=2&uo=4',
        feedUrl: 'http://feed.cnet.com/feed/podcast/cnet-on-cars/hd.xml',
        trackViewUrl: 'https://itunes.apple.com/us/podcast/on-cars-hd/id555384933?mt=2&uo=4',
        artworkUrl60: 'http://is1.mzstatic.com/image/thumb/Music111/v4/30/65/c2/3065c294-252c-bd78-36f4-31659eb2af15/source/60x60bb.jpg',
        releaseDate: '2017-03-28T23:33:00Z',
        artworkUrl600: 'http://is1.mzstatic.com/image/thumb/Music111/v4/30/65/c2/3065c294-252c-bd78-36f4-31659eb2af15/source/600x600bb.jpg',
        genreIds: [ '1446', '26', '1318' ],
        genres: [ 'Gadgets', 'Podcasts', 'Technology' ],
        createdAt: '2016-06-29T14:26:16.000Z',
        updatedAt: '2016-06-29T14:26:16.000Z',
        userId: 1,
        userIdShared: 2,
        podcastId: 2
      }
 *
 * @apiErrorExample {json} Unauthorized user
 *    HTTP/1.1 400 "Unauthorized"
 *
 * @apiErrorExample {json}  List error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get('/', checkForToken, verifyUser, (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    return res.status(401).send('Unauthorized')
  }

  favoritesRepo.queryAll(userId).then((favorites) => {
    res.send(camelizeKeys(favorites));
  })
  .catch(err =>
    res.status(500).send(err));
});

/**
 * @api {get} /favorites/:id Generate single favorite podcast for logged in user
 * @apiVersion 1.0.0
 * @apiName GetFavorite
 * @apiGroup Favorites
 *
 * @apiParam {Number} id  Favorite podcast ID.
 * @apiParamExample {json} Request-Example:
 *    {
 *      id: 2
 *    }
 *
 * @apiSuccess {Object} searchResults                   User information.
 * @apiSuccess {Number}   searchResults.id                Podcast ID.
 * @apiSuccess {Number}   searchResults.userId            User ID.
 * @apiSuccess {Number}   searchResults.userIdShared      ID of user this podcast was shared with.
 * @apiSuccess {Number}   searchResults.podcastId         Podcast ID.
 * @apiSuccess {String}   searchResults.createdAt         Date of podcast creation in database.
 * @apiSuccess {String}   searchResults.updatedAt         Date of last podcast update in database.
 * @apiSuccess {Number}   searchResults.artistId          Artist ID for iTunes.
 * @apiSuccess {Number}   searchResults.collectionId      Podcast ID for iTunes.
 * @apiSuccess {Number}   searchResults.trackId           Podcast ID for iTunes.
 * @apiSuccess {String}   searchResults.artistName        Podcast organization's name.
 * @apiSuccess {String}   searchResults.collectionName    Podcast name.
 * @apiSuccess {String}   searchResults.artistViewUrl     URL for something?
 * @apiSuccess {String}   searchResults.collectionViewUrl URL for podcast on iTunes.
 * @apiSuccess {String}   searchResults.feedUrl           URL for RSS feed.
 * @apiSuccess {String}   searchResults.trackViewUrl      URL for podcast on iTunes.
 * @apiSuccess {String}   searchResults.artworkUrl60      URL for image.
 * @apiSuccess {String}   searchResults.releaseDate       Release date of the podcast.
 * @apiSuccess {String}   searchResults.artworkUrl600     URL for larger image.
 * @apiSuccess {String[]} searchResults.genreIds          Genre IDs for iTunes.
 * @apiSuccess {String[]} searchResults.genres            Genres for the podcast.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
        id: 1,
        userId: 1,
        userIdShared: 2,
        podcastId: 1,
        createdAt: '2016-06-29T14:26:16.000Z',
        updatedAt: '2016-06-29T14:26:16.000Z',
        artistId: 1134742667,
        collectionId: 948976028,
        trackId: 948976028,
        artistName: 'Stories Podcast / Wondery',
        collectionName: 'Stories Podcast - A Free Children\'s Story Podcast for Bedtime, Car Rides, and Kids of All Ages!',
        artistViewUrl: 'https://itunes.apple.com/us/artist/wondery/id1134742667?mt=2&uo=4',
        collectionViewUrl: 'https://itunes.apple.com/us/podcast/stories-podcast-free-childrens-story-podcast-for-bedtime/id948976028?mt=2&uo=4',
        feedUrl: 'http://rss.art19.com/stories-podcast',
        trackViewUrl: 'https://itunes.apple.com/us/podcast/stories-podcast-free-childrens-story-podcast-for-bedtime/id948976028?mt=2&uo=4',
        artworkUrl60: 'http://is1.mzstatic.com/image/thumb/Music62/v4/ce/22/03/ce220318-10da-b927-16fb-ab5479045e1b/source/60x60bb.jpg',
        releaseDate: '2017-06-14T21:51:00Z',
        artworkUrl600: 'http://is1.mzstatic.com/image/thumb/Music62/v4/ce/22/03/ce220318-10da-b927-16fb-ab5479045e1b/source/600x600bb.jpg',
        genreIds: [ '1305', '26', '1301', '1304' ],
        genres: [ 'Kids & Family', 'Podcasts', 'Arts', 'Education' ]
      }
 *
 * @apiErrorExample {json} Unauthorized user
 *    HTTP/1.1 400 "Unauthorized"
 *
 * @apiErrorExample {json}  List error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get('/:id', checkForToken, verifyUser,  (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    return res.status(401).send('Unauthorized')
  }

  let favoritesId = req.params.id;

  favoritesRepo.getFav(userId, favoritesId).then(favorite => {
    res.send(camelizeKeys(favorite));
  })
  .catch(err =>
    res.status(500).send(err));
});

/**
 * @api {post} /favorites Create favorites entry
 * @apiVersion 1.0.0
 * @apiName PostFavorite
 * @apiGroup Favorites
 *
 * @apiParam {Number} userId    User ID.
 * @apiParam {Number} podcastId Podcast ID.
 * @apiParamExample {json} Request-Example:
 *    {
 *      userId: 1,
 *      podcastId: 2
 *    }
 *
 * @apiSuccess {Object}  favorites               Favorite podcast information.
 * @apiSuccess {Number}  favorites.id            Favorite podcast's unique ID.
 * @apiSuccess {Number}  favorites.podcastId     Unique ID of the podcast.
 * @apiSuccess {Number}  favorites.userId        User's ID.
 * @apiSuccess {Number}  favorites.userIdShared  ID of user you are sharing with.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      id: 5,
 *      podcastId: 3,
 *      userId: 2,
 *      userIdShared: null
 *    }
 *
 * @apiErrorExample {json} Unauthorized user
 *    HTTP/1.1 400 "Unauthorized"
 *
 * @apiErrorExample {json}  List error
 *    HTTP/1.1 500 Internal Server Error
 */

router.post('/', checkForToken, verifyUser, (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    return res.status(401).send('Unauthorized')
  }

  let newFavoriteData = req.body;

  favoritesRepo.createRelationship(userId, newFavoriteData).then((favorites) => {
    res.send(camelizeKeys(favorites[0]));
  })
  .catch(err =>
    res.status(500).send(err));
});

/**
 * @api {delete} /favorites Delete a favorites entry
 * @apiVersion 1.0.0
 * @apiName DeleteFavorite
 * @apiGroup Favorites
 *
 * @apiParam {Number} favoriteId  Favorite podcast ID.
 * @apiParamExample {json} Request-Example:
 *    {
 *      favoriteId: 1
 *    }
 *
 * @apiSuccess {Object}  favorites               Favorite podcast information.
 * @apiSuccess {Number}  favorites.id            Favorite podcast's unique ID.
 * @apiSuccess {Number}  favorites.podcastId     Unique ID of the podcast.
 * @apiSuccess {Number}  favorites.userId        User's ID.
 * @apiSuccess {Number}  favorites.userIdShared  ID of user you are sharing with.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      id: 1,
 *      podcastId: 1,
 *      userId: 1,
 *      userIdShared: 2
 *    }
 *
 * @apiErrorExample {json} Unauthorized user
 *    HTTP/1.1 400 "Unauthorized"
 *
 * @apiErrorExample {json}  List error
 *    HTTP/1.1 500 Internal Server Error
 */

router.delete('/', checkForToken, verifyUser, (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    return res.status(401).send('Unauthorized')
  }
  let favoriteId = req.body.favoriteId;

  favoritesRepo.delete(userId, favoriteId).then((favorites) => {
    res.send(camelizeKeys(favorites[0]));
  })
  .catch(err =>
    res.status(500).send(err));
});

function getUserId(req) {
  let decodedToken = jwt.decode(req.cookies.token, {complete: true});
  return decodedToken.payload.sub.id;
}

function checkForToken(req, res, next){
  if(req.cookies.token){
    next();
    return;
  }
  res.status(401).send('Unauthorized');
}

function verifyUser(req, res, next){
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, decoded) => {
    if(decoded){
      next();
      return;
    }
    res.status(401).send('Unauthorized');
  });
}

module.exports = router;
