'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('EvaValidations', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email_address: {
                type: Sequelize.STRING,
                unique: true,
            },
            domain: Sequelize.STRING,
            valid_syntax: Sequelize.BOOLEAN,
            disposable: Sequelize.BOOLEAN,
            webmail: Sequelize.BOOLEAN,
            deliverable: Sequelize.BOOLEAN,
            catch_all: Sequelize.BOOLEAN,
            gibberish: Sequelize.BOOLEAN,
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('EvaValidations')
    }
};
