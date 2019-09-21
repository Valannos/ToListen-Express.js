var db = require('../db');
var Sequelize = require('sequelize');
var Link = require('./link.model');
var Author = require('./author.model');

var LinkAuthors = db.define('link_authors', {

});
Link.belongsToMany(Author, {
    through : LinkAuthors
});
Author.belongsToMany(Link, {
    through : LinkAuthors
});
module.exports = LinkAuthors;