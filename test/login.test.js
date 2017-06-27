'use strict';

process.env.NODE_ENV = 'development';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../server');
const { addDatabaseHooks } = require('./utils')

suite('login routes ', addDatabaseHooks(() => {
  test('GET /login without token', (done) => {
    request(server)
      .get('/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, /must not be blank/, done);
  });

  test('POST /login', (done) => {
    request(server)
      .post('/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'jkrowling@gmail.com',
        password: 'youreawizard'
      })

      // could replace regex with  actual hash $2a$10$cQo8K6csAddwipjOl8STweaJFOGVuI0Tih3UdSQnoTBwUXpU3VAPW


      .expect('set-cookie', /token=[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+; Path=\/;.+HttpOnly/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 1,
        firstName: 'Joanne',
        lastName: 'Rowling',
        email: 'jkrowling@gmail.com'
      })
      .expect('Content-Type', /json/)
      .end(done);
  });

  test('GET /token with token', (done) => {
    const agent = request.agent(server);

    request(server)
      .post('/token')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'jkrowling@gmail.com',
        password: 'youreawizard'
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        agent.saveCookies(res);

        agent
          .get('/token')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, 'true', done);
      });
  });

  test('DELETE /token', (done) => {
    request(server)
      .del('/token')
      .set('Accept', 'application/json')
      .expect('set-cookie', /token=; Path=\//)
      .expect(200)
      .end(done);
  });

  test('POST /token with bad email', (done) => {
    request(server)
      .post('/token')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'bad.email@gmail.com',
        password: 'youreawizard'
      })
      .expect('Content-Type', /plain/)
      .expect(400, 'Bad email or password', done);
  });

  test('POST /token with bad password', (done) => {
    request(server)
      .post('/token')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'jkrowling@gmail.com',
        password: 'badpassword'
      })
      .expect('Content-Type', /plain/)
      .expect(400, 'Bad email or password', done);
  });
}));
