'use strict';

const bcrypt = require('bcrypt');
const express = require('express');
const Repo = require('../src/user-repository');
const humps = require('humps');
// eslint-disable-next-line new-cap
const router = express.Router();
let repo = new Repo();
const saltRounds = 10;
const jwt = require('jsonwebtoken');

<<<<<<< HEAD
//verifies an established user to DB
router.post('/' , verifyLoginDetails, (req, res, next) => {

// Store hash in your password DB with storePasswords Fn
  let email, hashed_password, id;
        repo.authenticate (req.body.email)
        .then((credentials) => {
           {email, hashed_password, id} = credentials;

          return email, hashed_password, id;
        })
        .then((input) => {
            //inout is foo
          return bcrypt.compare(req.body.password, hashed_password)

        })
        .then((successfulLogin) => {
          if (!successfulLogin) {
            res.header('Content-Type', 'application/json');
            res.status(400).send('Email or password don\'t match, try again');
            return;
          }

          // TODO pickup coding HERE NOTE
          const jwtPayload ={
            iss: "ShareCast",
            sub: {
              email: email,
              id: id
            },
            exp: math.floor(Date.now()/ 1000) + 60*60*24,
            loggedIn: true
          }
          // NOTE decide between JWT_KEY and TOKEN_SECRET
          // let newToken = jwt.sign(payload, process.env.JWT_KEY);
          const secret = process.env.TOKEN_SECRET;
          const token = jwt.sign(jwtPayload, secret);
          console.log(token);
          res.cookie('token', token, {httpOnly: true });
          // NOTE should send JSON back check in tests
          res.status(200).send([id, email]);

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


=======
//posts a new user to DB
router.post('/' , verifyLoginDetails, (req, res, next) => {

  // Store hash in your password DB with storePasswords Fn

            repo.authenticate (req.body.email)
              .then((credentials) => {
                {email, hashed_password, id} = credentials;
                bcrypt.compare(req.body.password, hashed_password)
                  .then((successfulLogin) => {
                    if (!successfulLogin) {
                      res.header('Content-Type', 'application/json');
                      res.send('Email and password don\'t match');
                      return;
                    }

                    // TODO pickup coding HERE NOTE
                    const jwtPayload ={
                      iss: "ShareCast",
                      sub: {
                        email: email,
                        id: id
                      },
                      exp: math.floor(Date.now()/ 1000) + 60*60,
                      loggedIn: true
                    }
                    const secret = process.env.TOKEN_SECRET;
                    const token = jwt.sign(jwtPaylod, secret);
                    res.cookie()
                    res.status(200).send([id, email])


                  })
              })
              .catch(err => res.status(500).send(err));
          } else {
            res.status()

          }

        })



});

    //this route is for new users only

})
>>>>>>> fce494d4c3d466c987173411f3c6b8b9c824b1f4

// function checkIfUserIsRegistered(req, res, next) {
//
// }

function verifyLoginDetails(req, res, next) {

    let email = req.body.email;
    let password = req.body.password;

<<<<<<< HEAD
    if (email && password) {
=======
    if (firstName && lastName && email && password) {
>>>>>>> fce494d4c3d466c987173411f3c6b8b9c824b1f4
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
