'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your product name"
        }
      }
    },
    picture: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your product picture"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your price"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};