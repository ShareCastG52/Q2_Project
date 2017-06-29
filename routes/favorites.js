'use strict';

const express = require('express');
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const { camelizeKeys, decamelizeKeys } = require('humps');

const FavoritesRepository = require('../src/favorites-repository');
const favoritesRepo = new FavoritesRepository();

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', checkForToken, verifyUser, (req, res, next) => {

  let userId = getUserId(req);
  if (!userId) {
    res.header('Content-Type', 'application/json');
    return res.status(401).send('Unauthorized')
  }

  favoritesRepo.queryAll(userId).then((favorites) => {
    res.send(camelizeKeys(favorites));
  })
  .catch(err =>
    res.status(500).send(err));
  // .catch(err => next(err));
});

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
  .catch(err =>
    res.status(500).send(err));
});

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
  .catch(err =>
    res.status(500).send(err));
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
  .catch(err =>
    res.status(500).send(err));
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
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, decoded) => {
    if(decoded){
      next();
      return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(401).send('Unauthorized');
  });
}

module.exports = router;
