





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
