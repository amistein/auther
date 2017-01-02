const express = require('express');
const router = express.Router();
const User = require('../api/users/user.model');

router.post('/', function(req, res, next) {
  User.findOne({
    where: req.body
  })
  .then(user => {
    if (user) {
      req.session.userId = user.id;
      res.send(user);
    } else res.sendStatus(401);
  })
  .catch(next);
});

module.exports = router;