var express = require('express');
var router = express.Router();
var linkModel = require('../model/linkModel');
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('links', {title: 'Links', added: false, deleted: false});
});

router.get('/linksAdded', function (req, res) {
    res.render('links', {title: 'Links', added: true, deleted: false});
});

router.get('/linksRemoved', function (req, res) {
    res.render('links', {title: 'Links', added: false, deleted: true});
});


router.use(bodyParser.urlencoded({extended: true}));

router.get('/mytolisten', linkModel.getAllLinks);
router.get('/mytolisten', function (req, res) {

    req.linkjson = JSON.stringify(req.allLinks);
    res.type('json');
    res.status(200).send(req.linkjson);

});



router.get('/delete/:id', linkModel.deleteOne, function (req, res) {

     res.redirect('/links/linksRemoved');

});



router.post('/add', function (req, res, next) {

    console.log('Form received');
    console.log(req.body);
    next();

});
router.post('/add', linkModel.addOne);
router.post('/add', function (req, res) {

    console.log('Insert successful');
    res.redirect('/links/linksAdded');

});




module.exports = router;
