'use strict';
// const geolib = require('geolib');
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your outlet name"
        }
      }
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your picture"
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your address"
        }
      }
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your longitude"
        }
      }
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your latitude"
        }
      }
    },
    BrandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Outlet',
  });

  // Outlet.afterCreate((outlet, options) => {
  //   console.log("data outlet ==>")
  //   console.log( outlet)
  //     return outlet.distance = geolib.convertDistance(geolib.getDistance(monasLoc, outletLoc, 1000), 'km');
  // });

  return Outlet;
};