module.exports = function (sequelize, Sequelize) {
    return sequelize.define('LocalValidation', {
        email_address: Sequelize.STRING,
        domain: Sequelize.STRING,
        valid_syntax: Sequelize.BOOLEAN,
    }, {
        createdAt: 'created_at',
        updatedAt: false,
    });
};
