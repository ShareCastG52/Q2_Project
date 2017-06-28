'use strict';

const express = require('express');
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const { camelizeKeys, decamelizeKeys } = require('humps');

const FavoritesRepository = require('../src/favorites-repository');
const favoritesRepo = new FavoritesRepository();

// eslint-disable-next-line new-cap
const router = express.Router();

function getUserId(req) {
  if (!req.cookies.token) {
    return;
  }
  let decodedToken = jwt.decode(req.cookies.token, {complete: true});
  return decodedToken.payload.sub.id;
}

router.get('/', (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    res.header('Content-Type', 'text/plain');
    return res.status(401).send('Unauthorized')
  }

  favoritesRepo.query(userId).then((favorites) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(camelizeKeys(favorites));
  })
  .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    res.header('Content-Type', 'text/plain');
    return res.status(401).send('Unauthorized')
  }

  let favoritesId = req.params.id;

  favoritesRepo.get(userId, favoritesId).then(favorite => {
    res.send(camelizeKeys(favorite));
  })
  .catch(err => next(err));
});

router.post('/', (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    res.header('Content-Type', 'text/plain');
    return res.status(401).send('Unauthorized')
  }

  let newFavoriteData = req.body;

  favoritesRepo.create(userId, newFavoriteData).then((favorites) => {
    res.send(camelizeKeys(favorites[0]));
  })
  .catch(err => next(err));
});

router.delete('/', (req, res, next) => {
  let userId = getUserId(req);
  if (!userId) {
    res.header('Content-Type', 'text/plain');
    return res.status(401).send('Unauthorized')
  }

  let favoriteId = req.body.favoriteId;

  favoritesRepo.delete(userId, favoriteId).then((favorites) => {
    res.send(camelizeKeys(favorites[0]));
  })
  .catch(err => next(err));
});

module.exports = router;
