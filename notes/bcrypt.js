var bcrypt = require('bcrypt');
const saltRounds = 10;

<<<<<<< HEAD
bcrypt.hash('youreawizard', saltRounds).then(function(hash) {
    console.log(hash);
});
//
// bcrypt.compare(myPlaintextPassword, hash).then(function(res) {
//     // res == true
// });
=======
bcrypt.hash('Dummy', saltRounds).then(function(hash) {
    console.log(hash);
});

bcrypt.compare(myPlaintextPassword, hash).then(function(res) {
    // res == true
});
>>>>>>> fce494d4c3d466c987173411f3c6b8b9c824b1f4
