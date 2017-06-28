'use strict';

const express = require('express');
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const { camelizeKeys, decamelizeKeys } = require('humps');

const FavoritesRepository = require('../src/favorites-repository');
const favoritesRepo = new FavoritesRepository();

var dummyData = {
  "wrapperType": "track",
  "kind": "podcast",
  "artistId": 910791972,
  "collectionId": 1199526401,
  "trackId": 1199526401,
  "artistName": "Salomondrin",
  "collectionName": "Lets Talk About Cars YO!",
  "trackName": "Lets Talk About Cars YO!",
  "collectionCensoredName": "Lets Talk About Cars YO!",
  "trackCensoredName": "Lets Talk About Cars YO!",
  "artistViewUrl": "https://itunes.apple.com/us/artist/embassy-row/id910791972?mt=2&uo=4",
  "collectionViewUrl": "https://itunes.apple.com/us/podcast/lets-talk-about-cars-yo/id1199526401?mt=2&uo=4",
  "feedUrl": "http://rss.acast.com/letstalkaboutcarsyo",
  "trackViewUrl": "https://itunes.apple.com/us/podcast/lets-talk-about-cars-yo/id1199526401?mt=2&uo=4",
  "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Music111/v4/2d/96/36/2d963604-51c1-a500-cb6d-9569c071c289/source/30x30bb.jpg",
  "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music111/v4/2d/96/36/2d963604-51c1-a500-cb6d-9569c071c289/source/60x60bb.jpg",
  "artworkUrl100": "http://is1.mzstatic.com/image/thumb/Music111/v4/2d/96/36/2d963604-51c1-a500-cb6d-9569c071c289/source/100x100bb.jpg",
  "collectionPrice": 0,
  "trackPrice": 0,
  "trackRentalPrice": 0,
  "collectionHdPrice": 0,
  "trackHdPrice": 0,
  "trackHdRentalPrice": 0,
  "releaseDate": "2017-06-23T09:30:00Z",
  "collectionExplicitness": "cleaned",
  "trackExplicitness": "cleaned",
  "trackCount": 17,
  "country": "USA",
  "currency": "USD",
  "primaryGenreName": "Automotive",
  "contentAdvisoryRating": "Clean",
  "artworkUrl600": "http://is1.mzstatic.com/image/thumb/Music111/v4/2d/96/36/2d963604-51c1-a500-cb6d-9569c071c289/source/600x600bb.jpg",
  "genreIds": [
    "1454",
    "26",
    "1323",
    "1303"
  ],
  "genres": [
    "Automotive",
    "Podcasts",
    "Games & Hobbies",
    "Comedy"
  ]
};


// eslint-disable-next-line new-cap
const router = express.Router();
//NOTE other errors to handle: 1 if they ask for a podcast that doesn't ERROR_ID_EXISTS

//TEST GET NOTE delete after working call returns a podcast entry
// router.get('/', (req, res, next) => {
//   let userId = 1;
//   if (!userId) {
//     res.header('Content-Type', 'application/json');
//     return res.status(401).send('Unauthorized')
//   }
//
//   favoritesRepo.queryAll(userId).then((favorites) => {
//
//     res.send(camelizeKeys(favorites));
//   })
//   .catch(err => err);
//   // .catch(err => next(err));
// });
//2
//gets all favorites by single user
router.get('/', checkForToken, verifyUser, (req, res, next) => {
  router.get('/', (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    res.header('Content-Type', 'application/json');
    return res.status(401).send('Unauthorized')
  }

  favoritesRepo.queryAll(userId).then((favorites) => {
    res.send(camelizeKeys(favorites));
  })
  .catch(err => err);
  // .catch(err => next(err));
});
});
//NOTE TEST get podcast by id route DELETE after verify
// TODO delete this sample get
// router.get('/:id',  (req, res, next) => {
//   let userId = 1;
//   if (!userId) {
//     res.header('Content-Typgit e', 'application/json');
//     return res.status(401).send('Unauthorized')
//   }
//
//   let favoritesId = req.params.id;
//
//   favoritesRepo.getFav(userId, favoritesId).then(favorite => {
//
//     res.send(camelizeKeys(favorite));
//   })
//   .catch(err => next(err));
// });


//get a single 'favorited' podcast by its id (found through favorites)
router.get('/:id', checkForToken, verifyUser,  (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    res.header('Content-Type', 'application/json');
    return res.status(401).send('Unauthorized')
  }

  let favoritesId = req.params.id;

  favoritesRepo.getFav(userId, favoritesId).then(favorite => {

    res.send(camelizeKeys(favorite));
  })
  .catch(err => next(err));
});
var dummyData2 = {

  userIdShared: 2,
  podcastId: 1,
  episodeId: 4,
  }

  // NOTE need to distinguish bettwen un-happy paths probably with empty obj if logic
// TODO Delete this entry - sample POST request
// add podcast to favorites table by single user
// router.post('/', (req, res, next) => {
//   let userId = 1;
//   if (!userId) {
//     res.header('Content-Type', 'application/json');
//     return res.status(401).send('Unauthorized')
//   }
//
//   let newFavoriteData = dummyData2;
//
//   favoritesRepo.createRelationship(userId, newFavoriteData).then((favorites) => {
//     res.send(camelizeKeys(favorites[0]));
//   })
//   .catch(err => next(err));
// });


// add podcast to favorites table by single user
router.post('/', checkForToken, verifyUser, (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    res.header('Content-Type', 'application/json');
    return res.status(401).send('Unauthorized')
  }

  let newFavoriteData = req.body;

  favoritesRepo.createRelationship(userId, newFavoriteData).then((favorites) => {
    res.send(camelizeKeys(favorites[0]));
  })
  .catch(err => next(err));
});
// NOTE Sample DELETE request
router.delete('/', checkForToken, verifyUser, (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    res.header('Content-Type', 'application/json');
    return res.status(401).send('Unauthorized')
  }

  let favoriteId = req.body.favoriteId;

  favoritesRepo.delete(userId, favoriteId).then((favorites) => {
    res.send(camelizeKeys(favorites[0]));
  })
  .catch(err => next(err));
});


router.delete('/', checkForToken, verifyUser, (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    res.header('Content-Type', 'application/json');
    return res.status(401).send('Unauthorized')
  }

  let favoriteId = req.body.favoriteId;

  favoritesRepo.delete(userId, favoriteId).then((favorites) => {
    res.send(camelizeKeys(favorites[0]));
  })
  .catch(err => next(err));
});

//the idea behind this is that users have been logged
function getUserId(req) {
  let decodedToken = jwt.decode(req.cookies.token, {complete: true});
  return decodedToken.payload.sub.id;
}

function checkForToken(req, res, next){
  if(req.cookies.token){
    next();
    return;
  }
  res.setHeader('Content-Type', 'application/json');
  res.status(401).send('Unauthorized');
}

function verifyUser(req, res, next){
  jwt.verify(req.cookies.token,
      process.env.JWT_KEY, (err, decoded) => {
    if(decoded){
      next();
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(401).send('Unauthorized');
  });
}

module.exports = router;
