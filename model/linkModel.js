/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var connexion = require('../db');



module.exports = {

    getAllLinks: function (req, res, next) {

        connexion.query('SELECT * FROM link', function (err, rows, fields) {

            if (err)
                console.log(err);
            else {
                req.allLinks = rows;
                next();
            }
        });
    },

    addOne: function (req, res, next) {

      /*  console.log('---------------------------');
        console.log('TO POST : \n' + req.body);
        console.log('---------------------------');*/
        connexion.query('INSERT INTO link (url, sender, genre, author, title, isViewed) VALUES (?,?,?,?,?,0)', [req.body.url, req.body.sender, req.body.genre, req.body.author, req.body.title], function (err, rows, fields) {

            if (err) {

                console.log(err);
            } else {

                req.body.mediaId = rows.insertId;
                //    console.log("Id insert : " + req.body.mediaId);
                next();
            }
        });
    },

    deleteOne: function (req, res, next) {



        connexion.query('DELETE FROM link WHERE id = ?', [req.params.id], function (err, rows, fields) {
            if (err) {
                console.log(err);
            } else {


                //  console.log(req.body.mediaId);
                next();
            }
        });
    },
    getById: function (req, res, next) {

        connexion.query('SELECT * FROM link WHERE id = ?', [req.body.mediaId], function (err, rows, fields) {

            if (err)
                throw err;
            else {
                req.link = rows;
                next();
            }
        });
    },

    switchViewState: function (req, res, next) {

        if (req.link[0].isViewed === 0) {

            connexion.query('UPDATE link SET isViewed = 1 WHERE id = ?', req.link[0].id, function (err, rows, fields) {

                if (err)
                    throw err;
                else {
                    req.link[0].isViewed = 1;
                    next();
                }
            });

        } else {

            connexion.query('UPDATE link SET isViewed = 0 WHERE id = ?', req.link[0].id, function (err, rows, fields) {

                if (err)
                    throw err;
                else {
                    req.link[0].isViewed = 0;
                    next();
                }
            });



        }




    },

    updateOne: function (req, res, next) {

        //console.log('to update : ' + req.body.id);
        connexion.query('UPDATE link SET url = ?, sender = ?, genre = ?, author = ?, title = ? WHERE id = ?',
                [req.body.url, req.body.sender, req.body.genre, req.body.author, req.body.title, req.body.id], function (err, row, field) {

            if (err) {

                console.log(err);

            } else {


                req.body.mediaId = req.body.id;
                next();
            }


        });






    }

};




