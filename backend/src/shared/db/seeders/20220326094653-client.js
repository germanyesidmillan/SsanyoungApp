'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:*/
    let data =[
      {name:'German', email:'german@gmail.com',phone:3004657598,carid:1,cityid:2 ,createdAt: new Date(), updatedAt: new Date()},
    ]
     await queryInterface.bulkInsert('Clients', data, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
