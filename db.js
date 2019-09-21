var sequilize = require('sequelize');
module.exports = new sequilize.Sequelize('tolisten_express_js', 'postgres', 'postgres', {
    host : 'localhost',
    dialect : 'postgres'
    });
    
