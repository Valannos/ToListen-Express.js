
var connexion = require('../db');



module.exports = {

    getAllFiles: function (req, res, next) {

        connexion.query('SELECT * FROM file', function (err, rows, fields) {

            if (err)
                throw err;
            else {
                req.allLinks = rows;
                for (var i = 0; i < req.allLinks.length; i++) {
                    req.allLinks[i].url = null;
                }
                req.linkjson = JSON.stringify(req.allLinks);
                next();
               
            }
        });
    },

    addOne: function (req, res, next) {

        var post = {
            title: req.title,
            url: req.url,
            name: req.file,
            genre: req.genre,
            sender: req.sender,
            author: req.author
        };
        connexion.query('INSERT INTO file SET ?', post, function (err, rows, fields) {

            if (err) {

                throw err;
            } else {
                next();
            }
        });
    },

    deleteOne: function (req, res, next) {

        connexion.query('DELETE FROM file WHERE id = ?', req.params.id, function (err, rows, fields) {
            if (err) {
                throw err;
            } else {
                next();
            }




        });

    }, getOne: function (req, res, next) {

        connexion.query('SELECT * FROM file WHERE id=? LIMIT 1', req.params.id, function (err, rows, fields) {

            if (err)
                throw err;
            else {
                req.file = rows[0].url;
                
                next();

            }
        });


    }

};
