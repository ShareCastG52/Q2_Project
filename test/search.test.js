'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../index');
const { addDatabaseHooks } = require('./utils');

suite('search', addDatabaseHooks(() => {
  suite('with token', addDatabaseHooks(() => {
    const agent = request.agent(server);

    beforeEach((done) => {
      request(server)
        .post('/login')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({
          email: 'm.m.hares@gmail.com',
          password: 'Meghan'
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          agent.saveCookies(res);
          done();
        });
    });

    test('GET /search', (done) => {
      agent
        .get('/search')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ search: 'goop' })
        .expect('Content-Type', /json/)
        .expect(200, [{
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
        }], done);
    });

    test('POST /search', (done) => {
      agent
        .post('/search')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ collectionId: 411534351 })
        .expect('Content-Type', /json/)
        .expect((res) => {
          delete res.body.createdAt;
          delete res.body.updatedAt;
        })
        .expect(200, { id: 5, podcastId: 3, userId: 2, userIdShared: null }, done);
    });
  }));

  suite('without token', addDatabaseHooks(() => {
    test('POST /search', (done) => {
      request(server)
        .post('/search')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ collectionId: 411534351 })
        .expect('Content-Type', /text/)
        .expect(401, 'Unauthorized', done);
    });
  }));
}));
