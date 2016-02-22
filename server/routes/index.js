var express = require('express');
var router = express.Router();
var app = express();
var db = app.get('db');

/* GET home page. */
router.get('/', function (req, res, next) {
  var list = db.all(() => { true; });
  res.render('index', { title: 'Express', db: list });
});

module.exports = router;
