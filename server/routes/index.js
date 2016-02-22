var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var list = req.db.all(() => { true; });
  res.render('index', { title: 'Express', db: list });
});

module.exports = router;
