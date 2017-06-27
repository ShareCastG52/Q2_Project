'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../index');
const { addDatabaseHooks } = require('./utils')

suite('favorites', addDatabaseHooks(() => {
  suite('with token', addDatabaseHooks(() => {
    const agent = request.agent(server);

    beforeEach((done) => {
      request(server)
        .post('/users')
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

    test('GET /favorites', (done) => {
      agent
        .get('/favorites')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, [{
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
  }));
}));
