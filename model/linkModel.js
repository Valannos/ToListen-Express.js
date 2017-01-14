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

    addOne: function (req, res) {


        connexion.query('INSERT INTO file SET ?', req.body, function (err, rows, fields) {

            if (err) {

                throw err;
            }


            console.log('Insert successful');
            res.redirect('/save/savelinks');



        });



    },

    deleteOne: function (req, res, next) {

        connexion.query('DELETE FROM link WHERE id = ?', [req.params.id], function (err, rows, fields) {
            if (err) {
                throw err;
            } else {
                res.redirect('/save/savelinks');
            }




        });

    }

};




