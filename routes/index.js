var express = require('express');
var router = express.Router();

var login = require('./login');
var register = require('./register');

var users = require('./users');
var posts = require('./posts');

router.get('/', function(req, res, next) {
  res.send('api works!');
});

router.use('/login', login);
router.use('/register', register);

router.use('/users', users);
router.use('/posts', posts);

module.exports = router;
