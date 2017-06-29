'use strict';

const knex = require('../knex');

class UserRepository{

// POST-4) receive email - check against db
  authenticate(email){
    // POST-5) get array of objects from knex - return id, db_hashed_pw
    return knex('users')
      .select('id', 'first_name', 'last_name', 'email', 'hashed_password')
      .where({email: email})
      .first();
  }

  checkIfUserIsRegistered(email){
    return knex('users')
      .where({email: email})
      .first();
  }

  register(body, hash){
    return knex('users')
      .insert({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      hashed_password: hash
    }, ['id', 'first_name', 'last_name', 'email']);
  }
}

module.exports = UserRepository;
