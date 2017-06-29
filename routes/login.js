'use strict';

const bcrypt = require('bcrypt');
const express = require('express');
const Repo = require('../src/user-repository');
const humps = require('humps');
const jwt = require('jsonwebtoken');
// eslint-disable-next-line new-cap
const router = express.Router();
let repo = new Repo();
const saltRounds = 10;

/**
 * @api {post} /login Authenticate user
 * @apiVersion 1.0.0
 * @apiName PostLogin
 * @apiGroup Login
 *
 * @apiParam {String} email     Mandatory user email.
 * @apiParam {String} password  Mandatory user password.
 * @apiParamExample {json} Request-Example:
 *    {
 *      email: 'm.m.hares@gmail.com',
 *      password: 'Meghan'
 *    }
 *
 * @apiSuccess {Object}  jwtPayload.sub        User information.
 * @apiSuccess {Number}  jwtPayload.sub.id     User's id.
 * @apiSuccess {String}  jwtPayload.sub.email  User's email.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      id: 2,
 *      email: 'm.m.hares@gmail.com'
 *    }
 *
 * @apiErrorExample {json} Email not found
 *    HTTP/1.1 400 "Email or password doesn't match, try again"
 *
 * @apiErrorExample {json} Password not found
 *    HTTP/1.1 400 "Email or password doesn't match, try again"
 *
 * @apiErrorExample {json}  List error
 *    HTTP/1.1 500 Internal Server Error
 */

router.post('/' , verifyLoginDetails, (req, res, next) => {
  let userCredentials;

      repo.authenticate (req.body.email)
        .then((credentials) => {
          if (!credentials) {
            throw new Error('ERROR_NO_MATCH');
          }
          userCredentials = credentials;
          console.log('CREDENTIALS', userCredentials, 'IN LOGIN.JS LINE 25');
          return bcrypt.compare(req.body.password, credentials.hashed_password)
        })
        .then((successfulLogin) => {
          if (!successfulLogin) {
            throw new Error('ERROR_NO_MATCH');
          }

          const jwtPayload ={
            iss: "ShareCast",
            sub: {
              email: userCredentials.email,
              id: userCredentials.id
            },
            exp: Math.floor(Date.now()/ 1000) + 60*60*24,
            loggedIn: true

          };
          console.log('jwtPayload.sub', jwtPayload.sub, 'IN LOGIN.JS LINE 43' );
          const secret = process.env.JWT_KEY;
          const token = jwt.sign(jwtPayload, secret);

          res.cookie('token', token, {httpOnly: true });
          // NOTE should send JSON back check in tests
          res.status(200).send(jwtPayload.sub);
        })
        .catch(err => {
          if (err.message === 'ERROR_NO_MATCH') {
            res.status(400).send('Email or password doesn\'t match, try again');
            return;
          }
          res.setHeader('Content-Type', 'application/json');
          res.status(500).send(err);
        });

      });


// route.get('/', verifyLoginDetails, (req, res, next) => {
//   // NOTE should GET requests even hit this route?
//
//   //if so then we'll just want to pass them either to their auth landing page or??
// })

    //this route is for new users only


// function checkIfUserIsRegistered(req, res, next) {
//
// }

function verifyLoginDetails(req, res, next) {

    let email = req.body.email;
    let password = req.body.password;

    if (email && password) {
      next();
      return;
    }
    else if (!email) {
      res.status(400).send("Email must not be blank");
    }
    else if (!password) {
      res.status(400).send("Password must not be blank");
    }
    // NOTE do we even need this given the above else if's? and wouldn't this be handled by form validation?
    else {
      res.status(400).send("Incorrect credentials");
    }
};



module.exports = router;
