'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
         allowNull: false
      },
      email: {
        type: Sequelize.STRING,
         allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
         allowNull: false
      },
      carid: {
        type: Sequelize.INTEGER,
         allowNull: false,
        references: {
          model: "Cars",
          key: "id",
        }
      },
      cityid: {
        type: Sequelize.INTEGER,
         allowNull: false,
        references: {
          model: "Cities",
          key: "id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clients');
  }
};