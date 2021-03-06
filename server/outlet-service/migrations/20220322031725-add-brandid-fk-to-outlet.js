'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Outlets', 'BrandId', {
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
    await queryInterface.removeColumn('Outlets', 'BrandId', {})
  }
};
