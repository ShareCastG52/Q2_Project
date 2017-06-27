<<<<<<< HEAD
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

router.post('/', verifyLoginDetails, (req, res, next) => {

  repo.checkIfUserIsRegistered(req.body.email)
    .then(resolvedEntry => {
      if (resolvedEntry.id) {
        res.setHeader('Content-Type', 'application/json');
        res.send("Our records indicate that this email is already registered to our system")
      }
    bcrypt.hash(req.body.password, saltRounds)
      .then((hash) => {
        repo.register(req.body, hash)
      })
      .then((newEntry) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(`Thanks for registering ${newEntry.first_name}! You are now able to log in to your account`);
      })
    })
    .catch(err => {
      res.setHeader('Content-Type', 'application/json')
      res.status(500).send(err)
    });
})

// test for already create user  ---> should bouce with "Our records indicate that this email is already registered to our system"
// test for new user should include their name, regex /thanks for registering, status 200
=======




>>>>>>> fce494d4c3d466c987173411f3c6b8b9c824b1f4


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
      res.setHeader('Content-Type', 'application/json');
      res.status(400).send("Email must not be blank");
    }
    else if (!lastName) {
      res.setHeader('Content-Type', 'application/json');
      res.status(400).send("Last name must not be blank");
    }
    else if (!firstName) {
      res.setHeader('Content-Type', 'application/json');
      res.status(400).send("First name must not be blank");
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
