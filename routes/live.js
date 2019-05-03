var express = require('express');
var router = express.Router();

/* GET votes page. */
router.get('/', function(req, res, next) {
  res.render('live', { title: 'Question' });
});

module.exports = router;
