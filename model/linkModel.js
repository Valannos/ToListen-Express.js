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

        connexion.query('INSERT INTO link SET ?', req.body, function (err, rows, fields) {

            if (err) {

                throw err;
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
    }
};




