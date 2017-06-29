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

/**
 * @api {get} /search Use search term to generate iTunes data
 * @apiVersion 1.0.0
 * @apiName GetSearch
 * @apiGroup Search
 *
 * @apiParam {String} search    User's chosen search term.
 * @apiParamExample {json} Request-Example:
 *    {
 *      search: 'goop'
 *    }
 *
 * @apiSuccess {Object[]} searchResults                   User information.
 * @apiSuccess {String}   searchResults.artistName        Podcast organization's name.
 * @apiSuccess {String}   searchResults.artworkUrl60      URL for image.
 * @apiSuccess {String}   searchResults.artworkUrl600     URL for larger image.
 * @apiSuccess {Number}   searchResults.collectionId      Podcast ID for iTunes.
 * @apiSuccess {String}   searchResults.collectionName    Podcast name.
 * @apiSuccess {String}   searchResults.collectionViewUrl URL for podcast on iTunes.
 * @apiSuccess {String}   searchResults.feedUrl           URL for RSS feed.
 * @apiSuccess {String[]} searchResults.genreIds          Genre IDs for iTunes.
 * @apiSuccess {String[]} searchResults.genres            Genres for the podcast.
 * @apiSuccess {String}   searchResults.releaseDate       Release date of the podcast.
 * @apiSuccess {Number}   searchResults.trackId           Podcast ID for iTunes.
 * @apiSuccess {String}   searchResults.trackViewUrl      URL for podcast on iTunes.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
        "artistName": "Maria Calanchini",
        "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music62/v4/9e/d5/9d/9ed59d33-a591-26cd-d740-e8f906a08a15/source/60x60bb.jpg",
        "artworkUrl600": "http://is1.mzstatic.com/image/thumb/Music62/v4/9e/d5/9d/9ed59d33-a591-26cd-d740-e8f906a08a15/source/600x600bb.jpg",
        "collectionId": 1141945550,
        "collectionName": "Goop Tales Stories - Free Audio Stories for Kids for bedtime, car rides or any time at all!",
        "collectionViewUrl": "https://itunes.apple.com/us/podcast/goop-tales-stories-free-audio-stories-for-kids-for/id1141945550?mt=2&uo=4",
        "feedUrl": "http://gooptales.libsyn.com/rss",
        "genreIds": [
           "1305",
           "26",
           "1304",
           "1415"
        ],
        "genres": [
           "Kids & Family",
           "Podcasts",
           "Education",
           "K-12"
        ],
        "releaseDate": "2017-06-18T10:30:00Z",
        "trackId": 1141945550,
        "trackViewUrl": "https://itunes.apple.com/us/podcast/goop-tales-stories-free-audio-stories-for-kids-for/id1141945550?mt=2&uo=4"
      },
      {
        "artistName": "Bryan Rucker & Aggie Hewitt",
        "artworkUrl60": "http://is4.mzstatic.com/image/thumb/Music71/v4/08/0d/c5/080dc581-2675-521b-71d2-acfb67d081d0/source/60x60bb.jpg",
        "artworkUrl600": "http://is4.mzstatic.com/image/thumb/Music71/v4/08/0d/c5/080dc581-2675-521b-71d2-acfb67d081d0/source/600x600bb.jpg",
        "collectionId": 1157064805,
        "collectionName": "Goop Yourself",
        "collectionViewUrl": "https://itunes.apple.com/us/podcast/goop-yourself/id1157064805?mt=2&uo=4",
        "feedUrl": "http://goopyourself.podbean.com/feed/",
        "genreIds": [
          "1324",
          "26"
        ],
        "genres": [
          "Society & Culture",
          "Podcasts"
        ],
        "releaseDate": "2017-06-23T20:31:00Z",
        "trackId": 1157064805,
        "trackViewUrl": "https://itunes.apple.com/us/podcast/goop-yourself/id1157064805?mt=2&uo=4"
      },
      {
        "artistName": "Liz & Nick",
        "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music117/v4/06/03/6a/06036ac9-5923-e9a8-5ee3-ca49a61218d5/source/60x60bb.jpg",
        "artworkUrl600": "http://is1.mzstatic.com/image/thumb/Music117/v4/06/03/6a/06036ac9-5923-e9a8-5ee3-ca49a61218d5/source/600x600bb.jpg",
        "collectionId": 1244568697,
        "collectionName": "The Goop Pod",
        "collectionViewUrl": "https://itunes.apple.com/us/podcast/the-goop-pod/id1244568697?mt=2&uo=4",
        "feedUrl": "https://www.thegooppod.com/home/?format=rss",
        "genreIds": [
          "1303",
          "26",
          "1301",
          "1306",
          "1324"
        ],
        "genres": [
          "Comedy",
          "Podcasts",
          "Arts",
          "Food",
          "Society & Culture"
        ],
        "releaseDate": "2017-06-22T17:49:00Z",
        "trackId": 1244568697,
        "trackViewUrl": "https://itunes.apple.com/us/podcast/the-goop-pod/id1244568697?mt=2&uo=4"
      },
      {
        "artistName": "LibriVox",
        "artworkUrl60": "http://is5.mzstatic.com/image/thumb/Music6/v4/00/83/44/008344f6-7d9f-2031-39c1-107020839411/source/60x60bb.jpg",
        "artworkUrl600": "http://is5.mzstatic.com/image/thumb/Music6/v4/00/83/44/008344f6-7d9f-2031-39c1-107020839411/source/600x600bb.jpg",
        "collectionId": 733259146,
        "collectionName": "Goop Directory, The by BURGESS, Frank Gelett",
        "collectionViewUrl": "https://itunes.apple.com/us/podcast/goop-directory-the-by-burgess-frank-gelett/id733259146?mt=2&uo=4",
        "feedUrl": "https://librivox.org/rss/393",
        "genreIds": [
          "1401",
          "26",
          "1301"
        ],
        "genres": [
          "Literature",
          "Podcasts",
          "Arts"
        ],
        "trackId": 733259146,
        "trackViewUrl": "https://itunes.apple.com/us/podcast/goop-directory-the-by-burgess-frank-gelett/id733259146?mt=2&uo=4"
      }
 *
 * @apiErrorExample {json} Unauthorized user
 *    HTTP/1.1 400 "Unauthorized"
 *
 * @apiErrorExample {json}  List error
 *    HTTP/1.1 500 Internal Server Error
 */

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
      res.status(200).send(humps.camelizeKeys(newFavorite[0]));
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
  res.status(401).send('Unauthorized');
}

function verifyUser(req, res, next){
  jwt.verify(req.cookies.token,
      process.env.JWT_KEY, (err, decoded) => {
    if(decoded){
      next();
      return;
    }
    res.status(401).send('Unauthorized');
  });
}

module.exports = router;
