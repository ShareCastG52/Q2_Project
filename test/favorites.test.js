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

    test('GET /favorites', (done) => {
      agent
        // .set('cookie', ['token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTaGFyZUNhc3QiLCJzdWIiOnsiZW1haWwiOiJtLm0uaGFyZXNAZ21haWwuY29tIiwiaWQiOjJ9LCJleHAiOjE0OTg3ODg3MTYsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE0OTg3MDIzMTZ9._KDWTCyv5cO8MDdmbqQ595g36PzoPr9V0woI3tAWsgA'])
        .get('/favorites')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, [{
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
        }], done);
    });

    test('GET /favorites/1', (done) => {
      agent
        .get('/favorites/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, [{
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
        }], done);
    });

    test('GET /favorites/2', (done) => {
      agent
        .get('/favorites/2')
        .set('Accept', 'application/json')
        .expect(200, [{
          id: 2,
          userId: 1,
          userIdShared: 2,
          podcastId: 2,
          createdAt: '2016-06-29T14:26:16.000Z',
          updatedAt: '2016-06-29T14:26:16.000Z',
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
          genres: [ 'Gadgets', 'Podcasts', 'Technology' ]
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
        .expect(200, {
          id: 5,
          podcastId: 2,
          userId: 1,
          userIdShared: null
        }, done);
    });

    test('DELETE /favorites', (done) => {
      agent
        .delete('/favorites')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ favoriteId: 1 })
        .expect('Content-Type', /json/)
        .expect((res) => {
          delete res.body.createdAt;
          delete res.body.updatedAt;
        })
        .expect(200, {
          id: 1,
          podcastId: 1,
          userId: 1,
          userIdShared: 2
        }, done);
    });
  }));

  suite('without token', addDatabaseHooks(() => {
    test('GET /favorites', (done) => {
      request(server)
        .get('/favorites')
        .set('Accept', 'application/json')
        .expect('Content-Type', /text/)
        .expect(401, 'Unauthorized', done);
    });

    test('GET /favorites/1', (done) => {
      request(server)
        .get('/favorites/check?bookId=1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /text/)
        .expect(401, 'Unauthorized', done);
    });

    test('GET /favorites/2', (done) => {
      request(server)
        .get('/favorites/check?bookId=2')
        .set('Accept', 'application/json')
        .expect('Content-Type', /text/)
        .expect(401, 'Unauthorized', done);
    });

    test('POST /favorites', (done) => {
      request(server)
        .post('/favorites')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ userId: 1, podcastId: 2 })
        .expect('Content-Type', /text/)
        .expect(401, 'Unauthorized', done);
    });

    test('DELETE /favorites', (done) => {
      request(server)
        .del('/favorites')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({ favoriteId: 1 })
        .expect('Content-Type', /text/)
        .expect(401, 'Unauthorized', done);
    });
  }));
}));
