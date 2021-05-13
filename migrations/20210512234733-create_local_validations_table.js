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
            domain: Sequelize.STRING,
            valid_syntax: Sequelize.BOOLEAN,
            created_at: Sequelize.DATE,
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('LocalValidations')
    }
};
