'use strict';

const knex = require('../knex');

class UserRepository{
<<<<<<< HEAD
=======
  checkIfUserIsRegistered(hash){
    return knex('users')
      .where({hashed_password: hash})
      .first()

  }
>>>>>>> fce494d4c3d466c987173411f3c6b8b9c824b1f4
// POST-4) receive email - check against db
  authenticate(email){
    // POST-5) get array of objects from knex - return id, db_hashed_pw
    return knex('users')
      .select('id', 'first_name', 'last_name', 'email', 'hashed_password')
<<<<<<< HEAD
      .where({ email: email})
      .first();
  }

  checkIfUserIsRegistered(email){
    return knex('users')
    .where({email: email})
    .first()

  }
=======
      .where({email: email})
      .first();
  }


>>>>>>> fce494d4c3d466c987173411f3c6b8b9c824b1f4
  register(body, hash){
    return knex.insert({first_name:body.first_name, last_name: body.last_name, email: body.email, hashed_password: hash}, 'id')
      .into('users')
      .then((ids) => {
        return knex('users')
            .select('id', 'first_name', 'last_name', 'email')
            .where('id',ids[0]);
    });
  }

}

module.exports = UserRepository;
