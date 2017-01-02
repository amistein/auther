'use strict';
const User = require('./users/user.model');

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.get('/auth/me', function(req, res, next) {
  User.findById(req.session.userId)
  .then(user => {
    if (user) res.send(user);
    else res.sendStatus(201);
  })
  .catch(next);
});

module.exports = router;
