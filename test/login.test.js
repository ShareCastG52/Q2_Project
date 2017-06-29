'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../index');
const { addDatabaseHooks } = require('./utils')

suite('login route', addDatabaseHooks(() => {

  test('POST /login with proper credentials', (done) => {
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
        email: 'm.m.hares@gmail.com'
      })
      .expect('Content-Type', /json/)
      .end(done);
  });

  test('POST /login with bad email', (done) => {
    request(server)
      .post('/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'bad.email@gmail.com',
        password: 'youreawizard'
      })
      .expect('Content-Type', /text/)
      .expect(400, 'Email or password doesn\'t match, try again', done);
  });

  test('POST /login with bad password', (done) => {
    request(server)
      .post('/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'm.m.hares@gmail.com',
        password: 'badpassword'
      })
      .expect('Content-Type', /text/)
      .expect(400, 'Email or password doesn\'t match, try again', done);
  });

  test('POST /login with no email', (done) => {
    request(server)
      .post('/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        password: 'youreawizard'
      })
      .expect('Content-Type', /text/)
      .expect(400, 'Email must not be blank', done);
  });

  test('POST /login with no password', (done) => {
    request(server)
      .post('/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'm.m.hares@gmail.com'
      })
      .expect('Content-Type', /text/)
      .expect(400, 'Password must not be blank', done);
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
