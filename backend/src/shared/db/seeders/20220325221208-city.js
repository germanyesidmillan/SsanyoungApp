'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/

    let data = [
      {name:'Cali', dpartmentsid: 3, createdAt: new Date(), updatedAt: new Date()},
      {name:'Yumbo', dpartmentsid: 3, createdAt: new Date(), updatedAt: new Date()},
      {name:'Palmira', dpartmentsid: 3, createdAt: new Date(), updatedAt: new Date()},
      {name:'Medellín', dpartmentsid: 1, createdAt: new Date(), updatedAt: new Date()},
      {name:'Bello', dpartmentsid: 1, createdAt: new Date(), updatedAt: new Date()},
      {name:'Itagui', dpartmentsid: 1, createdAt: new Date(), updatedAt: new Date()},
      {name:'Bogotá', dpartmentsid: 2, createdAt: new Date(), updatedAt: new Date()},
      {name:'Usaquén', dpartmentsid: 2, createdAt: new Date(), updatedAt: new Date()},
      {name:'Chapinero', dpartmentsid: 2, createdAt: new Date(), updatedAt: new Date()},
    ];
     await queryInterface.bulkInsert('Cities', data, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
