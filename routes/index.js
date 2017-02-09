var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express To Listen' });
});

router.get('/cake', function(req, res, next){
    
    res.render('cake', { title: 'Sorry...but...' });
    
});

module.exports = router;


