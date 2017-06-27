'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../server');
const { addDatabaseHooks } = require('./utils')

suite('login', addDatabaseHooks(() => {

  test('POST /login', (done) => {
    request(server)
      .post('/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'm.m.hares@gmail.com',
        password: 'Meghan'
      })
      .expect('set-cookie', /token=[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+; Path=\/;.+HttpOnly/)
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 2,
        firstName: 'Meghan',
        lastName: 'Prestemon',
        email: 'm.m.hares@gmail.com'
      })
      .expect('Content-Type', /json/)
      .end(done);
  });

  test('POST /login with bad email', (done) => {
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

  test('POST /login with bad password', (done) => {
    request(server)
      .post('/token')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'm.m.hares@gmail.com',
        password: 'badpassword'
      })
      .expect('Content-Type', /plain/)
      .expect(400, 'Bad email or password', done);
  });

  // test('DELETE /login', (done) => {
  //   request(server)
  //     .del('/token')
  //     .set('Accept', 'application/json')
  //     .expect('set-cookie', /token=; Path=\//)
  //     .expect(200)
  //     .end(done);
  // });
}));
