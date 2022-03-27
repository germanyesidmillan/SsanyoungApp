'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
let data = [
  {name:'Rexton G4', createdAt: new Date(), updatedAt: new Date()},
  {name:'Korando', createdAt: new Date(), updatedAt: new Date()},
  {name:'Tivoli', createdAt: new Date(), updatedAt: new Date()},
  
];

     await queryInterface.bulkInsert('Cars', data , {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('Cars', null, {});
  }
};
