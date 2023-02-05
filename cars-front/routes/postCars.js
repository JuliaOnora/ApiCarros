var express = require('express');
var router = express.Router();

/* POST users listing. */
router.get('/', function(req, res, next) {
  res.render('newCar');
});


module.exports = router;