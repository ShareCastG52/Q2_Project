'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../index');
const { addDatabaseHooks } = require('./utils');

suite('favorites', addDatabaseHooks(() => {
  suite('with token', addDatabaseHooks(() => {
    const agent = request.agent(server);

    beforeEach((done) => {
      request(server)
        .post('/login')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({
          email: 'emailgdw@gmail.com',
          password: 'Grant'
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          agent.saveCookies(res);
          done();
        });
    });

    test.only('GET /favorites', (done) => {
      agent
        // .set('cookie', ['token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTaGFyZUNhc3QiLCJzdWIiOnsiZW1haWwiOiJtLm0uaGFyZXNAZ21haWwuY29tIiwiaWQiOjJ9LCJleHAiOjE0OTg3ODg3MTYsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE0OTg3MDIzMTZ9._KDWTCyv5cO8MDdmbqQ595g36PzoPr9V0woI3tAWsgA'])
        .get('/favorites')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, [{
          "artistId": 1134742667,
          "collectionId": 948976028,
          "track_id": 948976028,
          "artistName": "Stories Podcast / Wondery",
          "collection_name": "Stories Podcast - A Free Children's Story Podcast for Bedtime, Car Rides, and Kids of All Ages!",
          "artistViewUrl": "https://itunes.apple.com/us/artist/wondery/id1134742667?mt=2&uo=4",
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
          ],
          'id': 1,
          'user_id': 1,
          'user_id_shared': 2,
          'podcast_id': 1,
          'created_at': new Date('2016-06-29 14:26:16 UTC'),
          'updated_at': new Date('2016-06-29 14:26:16 UTC')
        }, {
          'id': 2,
          'user_id': 3,
          'user_id_shared': 2,
          'podcast_id': 2,
          'created_at': new Date('2016-06-29 14:26:16 UTC'),
          'updated_at': new Date('2016-06-29 14:26:16 UTC')
        }, {
          'id': 3,
          'user_id': 3,
          'user_id_shared': 1,
          'podcast_id': 2,
          'created_at': new Date('2016-06-29 14:26:16 UTC'),
          'updated_at': new Date('2016-06-29 14:26:16 UTC')
        }], done);
    });

    test('GET /favorites/1', (done) => {
      agent
        .get('/favorites/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, [{
          'id': 1,
          'user_id': 1,
          'user_id_shared': 2,
          'podcast_id': 1,
          'created_at': new Date('2016-06-29 14:26:16 UTC'),
          'updated_at': new Date('2016-06-29 14:26:16 UTC')
        }], done);
    });

    test('GET /favorites/2', (done) => {
      agent
        .get('/favorites/2')
        .set('Accept', 'application/json')
        .expect(200, [{
          'id': 2,
          'user_id': 3,
          'user_id_shared': 2,
          'podcast_id': 2,
          'created_at': new Date('2016-06-29 14:26:16 UTC'),
          'updated_at': new Date('2016-06-29 14:26:16 UTC')
        }], done);
    });

    test('POST /favorites', (done) => {
      agent
        .post('/favorites')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ userId: 1, podcastId: 2 })
        .expect('Content-Type', /json/)
        .expect((res) => {
          delete res.body.createdAt;
          delete res.body.updatedAt;
        })
        .expect(200, { id: 4, podcastId: 2, userId: 1 }, done);
    });

    test('DELETE /favorites', (done) => {
      agent
        .delete('/favorites')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ podcastId: 1 })
        .expect('Content-Type', /json/)
        .expect((res) => {
          delete res.body.createdAt;
          delete res.body.updatedAt;
        })
        .expect(200, { podcastId: 1, userId: 1 }, done);
    });
  }));
  //
  // suite('without token', addDatabaseHooks(() => {
  //   test('GET /favorites', (done) => {
  //     request(server)
  //       .get('/favorites')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /plain/)
  //       .expect(401, 'Unauthorized', done);
  //   });
  //
  //   test('GET /favorites/check?bookId=1', (done) => {
  //     request(server)
  //       .get('/favorites/check?bookId=1')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /plain/)
  //       .expect(401, 'Unauthorized', done);
  //   });
  //
  //   test('GET /favorites/check?bookId=2', (done) => {
  //     request(server)
  //       .get('/favorites/check?bookId=2')
  //       .set('Accept', 'application/json')
  //       .expect('Content-Type', /plain/)
  //       .expect(401, 'Unauthorized', done);
  //   });
  //
  //   test('POST /favorites', (done) => {
  //     request(server)
  //       .post('/favorites')
  //       .set('Accept', 'application/json')
  //       .set('Content-Type', 'application/json')
  //       .send({ bookId: 2 })
  //       .expect('Content-Type', /plain/)
  //       .expect(401, 'Unauthorized', done);
  //   });
  //
  //   test('DELETE /favorites', (done) => {
  //     request(server)
  //       .del('/favorites')
  //       .set('Accept', 'application/json')
  //       .set('Content-Type', 'application/json')
  //       .send({ bookId: 1 })
  //       .expect('Content-Type', /plain/)
  //       .expect(401, 'Unauthorized', done);
  //   });
  // }));
}));
