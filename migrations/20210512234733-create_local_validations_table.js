'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('LocalValidations', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email_address: {
                type: Sequelize.STRING,
                unique: true,
            },
            domain: {
                type: Sequelize.STRING,
            },
            valid_syntax: {
                type: Sequelize.BOOLEAN,
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('LocalValidations')
    }
};
