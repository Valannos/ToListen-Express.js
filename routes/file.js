var express = require('express');
var router = express.Router();
var util = require('util');
var formidable = require('formidable');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs-extra');
var fileModel = require('../model/fileModel');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('files', {title: 'Files', added: false, deleted: false});
});

router.get('/fileDeleted', function (req, res, next) {
    res.render('files', {title: 'Files', added: false, deleted: true});
});

router.get('/fileAdded', function (req, res, next) {
    res.render('files', {title: 'Files', added: true, deleted: false});
});

router.post('/upload', function (req, res, next) {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

        console.log(util.inspect({

            fields: fields,
            files: files

        }));
        req.title = fields.title;
        req.genre = fields.genre;
        req.sender = fields.sender;
        req.author = fields.author;

    });
    form.on('fileBegin', function (name, file) {

        file.path = __dirname + '/../temp/';

    });
    form.on('progress', function (bytesReceived, bytesExpected) {
        var percent_complete = (bytesReceived / bytesExpected) * 100;
        console.log(percent_complete.toFixed(2));
    });

    form.on('end', function (fields, files) {

        var temp_path = this.openedFiles[0].path;
        var file_name = this.openedFiles[0].name;

        var new_location = path.join(__dirname, '/../files/');
        fs.copy(temp_path, new_location + file_name, function (err) {


            if (err) {
                console.log(err);
            } else {
                console.log('File successfully uploaded');
                req.folder = new_location;
                req.file = file_name;
                req.url = req.folder + req.file;
                next();
            }


        });

    });

}, fileModel.addOne, function (req, res) {

    console.log('************DB Insert successful************');
    res.redirect('/files/fileAdded');

});


router.get('/download/:id', fileModel.getOne, function (req, res) {

    console.log('Fichier localisé : ' + req.file);
    res.download(req.file);

});


router.get('/allFiles', fileModel.getAllFiles, function (req, res) {

    console.log('JSON ready, sending response...');
    res.type('json');
    res.status(200).send(req.linkjson);

});

router.get('/delete/:id', fileModel.getOne, function (req, res, next) {

    fs.unlink(req.file, function (err) {

        if (err) {
            console.log(err);

        } else {
            console.log('file has been deleted');
            next();
        }
    });

}, fileModel.deleteOne, function (req, res) {

    console.log('************Entry successfully removed************');
    res.redirect('/files/fileDeleted');

});


module.exports = router;
