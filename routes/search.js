'user strict';

const bcrypt = require('bcrypt');
const express = require('express');
const humps = require('humps');
const jwt = require('jsonwebtoken');
const rp = require('request-promise');

const router = express.Router();
const saltRounds = 10;

const SearchRepository = require('../src/search-repository');
const searchRepo = new SearchRepository();

const ITUNES_SEARCH_BASE_URL = "https://itunes.apple.com/search?country=US&media=podcast&term="
const ITUNES_PODCAST_LOOKUP_BASE_URL = "https://itunes.apple.com/lookup?id="

router.get('/', (req, res, next) => {
  let searchTerm = req.body.search;
  rp(`${ITUNES_SEARCH_BASE_URL}${encodeURIComponent(searchTerm)}`)
    .then(itunesData => {
      let searchResults = searchRepo.getPodcastData(JSON.parse(itunesData));
      res.status(200).send(humps.camelizeKeys(searchResults));
    })
    .catch(err => {
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send(err);
    });
});


router.post('/', checkForToken, verifyUser, (req, res, next) => {
  let podcastItunesId = req.body.collectionId;
  let userId = getUserId(req);
  let podcastData;

  rp(`${ITUNES_PODCAST_LOOKUP_BASE_URL}${podcastItunesId}`)
    .then(jsonData => {
      podcastData = JSON.parse(jsonData).results[0];
      return searchRepo.checkForPodcastInTable(podcastData);
    })
    .then(podcastExists => {
      if (!podcastExists) {
        podcastIdPromise = searchRepo.createPodcastEntry(podcastData);
      } else {
        podcastIdPromise = searchRepo.getPodcastId(podcastData);
      }
      return podcastIdPromise;
    })
    .then(podcastId => {
      return searchRepo.createFavoritesEntry(userId, podcastId);
    })
    .then(newFavorite => {
      res.status(200).send(humps.camelizeKeys(newFavorite));
    })
    .catch(err => {
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send(err);
    });
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
