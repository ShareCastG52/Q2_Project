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

//verifies an established user to DB
router.post('/' , verifyLoginDetails, (req, res, next) => {
// Store hash in your password DB with storePasswords Fn

  let userCredentials;

      repo.authenticate (req.body.email)
        .then((credentials) => {
          userCredentials = credentials;
          return bcrypt.compare(req.body.password, credentials.hashed_password)
        })
        .then((successfulLogin) => {
          if (!successfulLogin) {
            res.setHeader('Content-Type', 'application/json');
            res.status(400).send('Email or password don\'t match, try again');
            return;
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

          const secret = process.env.JWT_KEY;
          const token = jwt.sign(jwtPayload, secret);
          res.cookie('token', token, {httpOnly: true });
          // NOTE should send JSON back check in tests
          res.status(200).send(jwtPayload.sub);

        })
        .catch(err => {
          res.setHeader('Content-Type', 'application/json')
          res.status(500).send(err)
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
      res.setHeader('Content-Type', 'application/json');
      res.status(400).send("Email must not be blank");
    }
    else if (!password) {
      res.setHeader('Content-Type', 'application/json');
      res.status(400).send("Password must not be blank");
    }
    // NOTE do we even need this given the above else if's? and wouldn't this be handled by form validation?
    else {
      res.setHeader('Content-Type', 'application/json');
      res.status(400).send("Incorrect credentials");
    }
};



module.exports = router;
