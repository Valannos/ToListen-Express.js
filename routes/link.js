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

router.get('/api/tolisten', linkModel.getAllLinks);
router.get('/api/tolisten', function (req, res) {

    req.linkjson = JSON.stringify(req.allLinks);
    res.type('json');
    res.status(200).send(req.linkjson);

});



router.get('/delete/:id', linkModel.deleteOne, function (req, res) {

    res.redirect('/links/linksRemoved');

});

router.get('/api/tolisten/delete/:id', linkModel.deleteOne, function (req, res) {


    res.sendStatus(200);


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


router.post('/api/tolisten/add', linkModel.addOne, function (req, res) {

    console.log('insert successful');
   
    res.sendStatus(200);

});




module.exports = router;
