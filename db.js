const {Sequelize} = require("sequelize");
const config = require('./config/config');

module.exports.db = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password, {
        host: config.development.host,
        dialect: 'mysql',
    }
);
