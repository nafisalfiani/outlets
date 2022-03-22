'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Outlets', 'BrandId', {
      type: Sequelize.INTEGER,
      references: {
        model: "Brands",
        key: "id"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Outlets', 'BrandId', {})
  }
};
