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
                throw err;
            else {
                req.allLinks = rows;
                next();
            }
        });
    },

    addOne: function (req, res, next) {

        console.log(req.body);
        connexion.query('INSERT INTO link SET ?', req.body, function (err, rows, fields) {

            if (err) {

                console.log(err);
            } else {

                next();
            }
        });
    },

    deleteOne: function (req, res, next) {

        connexion.query('DELETE FROM link WHERE id = ?', [req.params.id], function (err, rows, fields) {
            if (err) {
                throw err;
            } else {
                console.log('Entry deleted');
                next();
            }
        });
    },
    getById: function (req, res, next) {

        connexion.query('SELECT * FROM link WHERE id = ?', [req.params.id], function (err, rows, fields) {

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




    }

};




