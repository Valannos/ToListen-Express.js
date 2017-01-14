var express = require('express');
var router = express.Router();
var linkModel = require('../model/linkModel');
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/savelinks', function (req, res, next) {
    res.render('links', {title: 'Save links'});
});

router.use(bodyParser.urlencoded({extended: true}));

router.get('/mytolisten', linkModel.getAllLinks);
router.get('/mytolisten', function (req, res) {



    
    req.linkjson = JSON.stringify(req.allLinks);

    res.type('json');
    res.status(200).send(req.linkjson);

});



router.get('/delete/:id', linkModel.deleteOne);



router.post('/add', function (req, res, next) {

    console.log('Form received');
    console.log(req.body);
    next();

});


router.post('/add', linkModel.addOne);




module.exports = router;
