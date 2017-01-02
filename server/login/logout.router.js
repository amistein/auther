const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  req.session.userId = null;
  res.sendStatus(200);
});

module.exports = router;
