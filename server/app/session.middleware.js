const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(session({secret: 'tongiscool'}));

module.exports = router;
