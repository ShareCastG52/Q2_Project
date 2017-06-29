'use strict';

const bcrypt = require('bcrypt');
const express = require('express');
const Repo = require('../src/user-repository');
const humps = require('humps');

const router = express.Router();
let repo = new Repo();
const saltRounds = 10;

/**
 * @api {post} /register Register new user
 * @apiVersion 1.0.0
 * @apiName PostRegister
 * @apiGroup Register
 *
 * @apiParam {String} firstName Mandatory user first name.
 * @apiParam {String} lastName  Mandatory user last name.
 * @apiParam {String} email     Mandatory user email.
 * @apiParam {String} password  Mandatory user password.
 * @apiParamExample {json} Request-Example:
 *    {
 *      firstName: 'Carl',
 *      lastName: 'Jung',
 *      email: 'cgjung@gmail.com',
 *      password: 'psychology'
 *    }
 *
 * @apiSuccess {Object}  newEntry[0]            User information.
 * @apiSuccess {Number}  newEntry[0].id         User's id.
 * @apiSuccess {String}  newEntry[0].firstName  User's first name.
 * @apiSuccess {String}  newEntry[0].lastName   User's last name.
 * @apiSuccess {String}  newEntry[0].email      User's email.
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      id: 4,
 *      firstName: 'Carl',
 *      lastName: 'Jung',
 *      email: 'cgjung@gmail.com'
 *    }
 *
 * @apiErrorExample {json} User already exists
 *    HTTP/1.1 400 "Our records indicate that this email is already registered to our system"
 *
 * @apiErrorExample {json} No first name provided
 *    HTTP/1.1 400 "First name must not be blank"
 *
 * @apiErrorExample {json} No last name provided
 *    HTTP/1.1 400 "Last name must not be blank"
 *
 * @apiErrorExample {json} No email provided
 *    HTTP/1.1 400 "Email must not be blank"
 *
 * @apiErrorExample {json} No password provided
 *    HTTP/1.1 400 "Password must not be blank"
 *
 * @apiErrorExample {json}  List error
 *    HTTP/1.1 500 Internal Server Error
 */

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
