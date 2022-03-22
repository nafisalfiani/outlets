'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'BrandId', {
      type: Sequelize.INTEGER,
      references: {
        model: "Brands",
        key: "id"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'BrandId', {})
  }
};
