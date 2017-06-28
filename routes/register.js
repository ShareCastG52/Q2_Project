'use strict';

const bcrypt = require('bcrypt');
const express = require('express');
const Repo = require('../src/user-repository');
const humps = require('humps');

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
      return repo.register(humps.decamelizeKeys(req.body), hash);
    })
    .then((newEntry) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(humps.camelizeKeys(newEntry[0]));
    })
    .catch(err => {
      if (err.message === 'ERROR_ID_EXISTS') {
        res.status(400).send("Our records indicate that this email is already registered to our system");
        return;
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(500).send(err);
    });
});

function verifyLoginDetails(req, res, next) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    if (firstName && lastName && email && password) {
      next();
      return;
    }
    else if (!email) {
      res.status(400).send("Email must not be blank");
    }
    else if (!lastName) {
      res.status(400).send("Last name must not be blank");
    }
    else if (!firstName) {
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
