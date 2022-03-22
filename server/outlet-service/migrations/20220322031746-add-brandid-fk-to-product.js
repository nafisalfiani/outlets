'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Products', 'BrandId', {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Brands"
        },
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Products', 'BrandId', {})
  }
};
