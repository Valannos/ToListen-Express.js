var db = require('../db');
var Sequelize = require('sequelize');


 var Link = db.define('link', {
    name: {
        type : Sequelize.STRING,
        allowNull: false
    },
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }

});

module.exports = Link;
