var db = require('../db');
var Sequelize = require('sequelize');



var Author = db.define('author', {
    firstName: {
        type : Sequelize.STRING,
        allowNull: true
    },
    lastName: {
        type : Sequelize.STRING,
        allowNull: false
    },
    id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});


module.exports = Author;
