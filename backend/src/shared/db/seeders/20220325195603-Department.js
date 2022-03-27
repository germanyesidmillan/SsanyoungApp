'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
    let data = [
      {name:'Antioquia', createdAt: new Date(), updatedAt: new Date()},
      {name:'Bogotá D.C.', createdAt: new Date(), updatedAt: new Date()},
      {name:'Valle del Cauca', createdAt: new Date(), updatedAt: new Date()},
    ];
     await queryInterface.bulkInsert('Departments', data, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Departments', null, {});
  }
};
