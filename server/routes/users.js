var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  req.db.all(() => {
    return true;
  }, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.get('/insert', function (req, res) {
  req.db.insert({bookmark: +new Date()}, (err, count) => {
    res.send('inserted ' + count + '<br>' + err);
  });
});

module.exports = router;
