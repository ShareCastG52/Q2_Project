'use strict';


process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const knex = require('../knex');
const server = require('../server');
const { addDatabaseHooks } = require('./utils')

suite('routes users', addDatabaseHooks(() => {
  test('GET /users without token', (done) => {
    request(server)
      .get('/token')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, 'false', done);
  });

  test('POST /token', (done) => {
    request(server)
      .post('/token')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        email: 'jkrowling@gmail.com',
        password: 'youreawizard'
      })
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
});
