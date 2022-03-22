'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Outlet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Outlet.belongsTo(models.Brand)
    }
  }
  Outlet.init({
    name: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your outlet name"
        }
      }
    },
    picture: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your picture"
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your address"
        }
      }
    },
    longitude: {
      type: DataTypes.FLOAT,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your longitude"
        }
      }
    },
    picture: {
      type: DataTypes.FLOAT,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your latitude"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Outlet',
  });
  return Outlet;
};