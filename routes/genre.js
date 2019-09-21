var express = require('express');
var router = express.Router();
var Genre = require('../models/genre.model')

router.get('/', (req, res, next) => {
Genre.findAll().then((genres) => res.send(genres))
    
});


router.post('/', (req, res, next) => {
Genre.create({
    label: req.body.label
    }).then((genre) => res.status(201).send(genre)).catch((err) => res.status(400).send());
});

module.exports = router;