'use strict';

const bcrypt = require('bcrypt');
const express = require('express');
const Repo = require('../src/user-repository');
const humps = require('humps');
// eslint-disable-next-line new-cap
const router = express.Router();
let repo = new Repo();
const saltRounds = 10;

router.post('/', verifyLoginDetails, (req, res, next) => {

  repo.checkIfUserIsRegistered(req.body.email)
    .then(userCredentials => {
      if (userCredentials) {
        throw new Error('ERROR_ID_EXISTS')
      }
      return bcrypt.hash(req.body.password, saltRounds)
    })
    .then((hash) => {
      console.log(hash, 'hash');
      //here
      return repo.register(humps.decamelizeKeys(req.body), hash);
    })
    .then((newEntry) => {
      console.log(newEntry[0], 'new entry');
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(`Thanks for registering ${newEntry[0].first_name}! You are now able to log in to your account`);
    })
    .catch(err => {
      if (err.message === 'ERROR_ID_EXISTS') {
        res.status(400).send("Our records indicate that this email is already registered to our system");
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send(err);
    });
})

// test for already create user  ---> should bouce with "Our records indicate that this email is already registered to our system"
// test for new user should include their name, regex /thanks for registering, status 200


function verifyLoginDetails(req, res, next) {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;

    if (first_name && last_name && email && password) {
      next();
      return;
    }
    else if (!email) {
      res.status(400).send("Email must not be blank");
    }
    else if (!last_name) {
      res.status(400).send("Last name must not be blank");
    }
    else if (!first_name) {
      res.status(400).send("First name must not be blank");
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
