var db = require('../db');
var Sequelize = require('sequelize');


module.exports= db.define('genre', {
    label: {
        type : Sequelize.STRING,
        allowNull: false
    },
    id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});
