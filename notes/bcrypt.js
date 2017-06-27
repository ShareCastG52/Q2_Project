var bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash('youreawizard', saltRounds).then(function(hash) {
    console.log(hash);
});
//
// bcrypt.compare(myPlaintextPassword, hash).then(function(res) {
//     // res == true
// });
