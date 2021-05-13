module.exports = function (sequelize, Sequelize) {
    return sequelize.define('EvaValidation', {
        email_address: {
            type: Sequelize.STRING,
            unique: true,
            primaryKey: true,
        },
        domain: Sequelize.STRING,
        valid_syntax: Sequelize.BOOLEAN,
        disposable: Sequelize.BOOLEAN,
        webmail: Sequelize.BOOLEAN,
        deliverable: Sequelize.BOOLEAN,
        catch_all: Sequelize.BOOLEAN,
        gibberish: Sequelize.BOOLEAN,
    }, {
        createdAt: 'created_at',
        updatedAt: false,
    });
};
