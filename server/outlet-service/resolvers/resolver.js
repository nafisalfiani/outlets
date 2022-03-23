const { Brand, Outlet, Product } = require('../models/index');
const geolib = require('geolib');
const { resolvers: scalarResolvers } = require('graphql-scalars');

function getDistance(lat, long) {
  const monasLoc = {
    'latitude': -6.1751790639028705,
    'longitude': 106.8272278996774,
  };

  const outletLoc = {
    'latitude': lat,
    'longitude': long,
  };

  let dist = geolib.getDistance(monasLoc, outletLoc, 1);
  let distInKm = geolib.convertDistance(dist, 'km') +' km';

  return distInKm
}

const resolvers = {
  ScalarName: scalarResolvers,

  Query: {
    async getOutlets() {
      let outlets = await Outlet.findAll()
      for (let i = 0; i < outlets.length; i++) {
        outlets[i].distance = getDistance(outlets[i].latitude, outlets[i].longitude)
      }

      outlets.sort((a,b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0))

      return outlets
    },
    async getProducts() {
      return await Product.findAll()
    },

    // eager loading
    async getBrands() {
      temp = await Brand.findAll({
        include : [
          { model : Outlet }
      ]
      })
    
      for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].Outlets.length; j++) {
          temp[i].Outlets[j].distance = getDistance(temp[i].Outlets[j].latitude, temp[i].Outlets[j].longitude)
        }
  
        temp[i].Outlets.sort((a,b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0))
      }
      return temp
    },
  },

  Mutation: {
    async createBrand(root, args) {
      const payload = {
        name: args.input.name,
        logo: args.input.logo,
        banner: args.input.banner,
        createdAt: new Date(),
      };

      return await Brand.create(payload);
    },

    async createOutlet(root, args) {
      const payload = {
        name: args.input.name,
        picture: args.input.picture,
        address: args.input.address,
        longitude: args.input.longitude,
        latitude: args.input.latitude,
        createdAt: new Date(),
        BrandId: +args.input.BrandId
      };

      return await Outlet.create(payload, {include: Brand});
    },

    async createProduct(root, args) {
      const payload = {
        name: args.input.name,
        picture: args.input.picture,
        price: args.input.price,
        createdAt: new Date(),
        BrandId: +args.input.BrandId
      };
      console.log(args.input.brandId, '>>>>args');

      return await Product.create(payload);
    },

    async updateBrand(root, args) {
      const payload = {
        name: args.input.name,
        logo: args.input.logo,
        banner: args.input.banner,
        updatedAt: new Date(),
      };

      const brand =  await Brand.update(payload, {
        where: { id : args.input.id },
        returning: true
      });

      return brand[1][0];
    },

    async updateOutlet(root, args) {
      const payload = {
        name: args.input.name,
        picture: args.input.picture,
        address: args.input.address,
        longitude: args.input.longitude,
        latitude: args.input.latitude,
        updatedAt: new Date(),
      };

      const outlet = await Outlet.update(payload, {
        where : { id : args.input.id },
        returning: true
      });

      return outlet[1][0];
    },

    async updateProduct(root, args) {
      const payload = {
        name: args.input.name,
        picture: args.input.picture,
        price: args.input.price,
        updatedAt: new Date(),
      };

      const product = await Product.update(payload, {
        where : { id : args.input.id },
        returning: true
      });

      return product[1][0];
    },

    async deleteBrand(root, args) {
      return await Brand.destroy({
        where : {id : args.id}
      });
    },

    async deleteOutlet(root, args) {
      return await Outlet.destroy({
        where : {id : args.id}
      });
    },

    async deleteProduct(root, args) {
      return await Product.destroy({
        where : {id : args.id}
      });
    }
  }
}

module.exports = { resolvers };