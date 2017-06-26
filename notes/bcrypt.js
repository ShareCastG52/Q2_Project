var bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash('Dummy', saltRounds).then(function(hash) {
    console.log(hash);
});
