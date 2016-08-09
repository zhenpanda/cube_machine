var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passwordHash = require('password-hash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// sign up user into db route
router.post('/', function(req, res, next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: passwordHash.generate(req.body.password),
    email: req.body.email,
  });
  user.save(function(err, result) {
    if(err) {
      return res.status(404).json({
        error:err
      })
    }
  })
});

module.exports = router;
