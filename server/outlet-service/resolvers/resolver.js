const { Brand, Outlet, Product } = require('../models/index');
const geolib = require('geolib');

const resolvers = {
  Query: {
    async getOutlets() {
      const outlets = await Outlet.findAll()

      const monasLoc = {
        'latitude': -6.1751790639028705,
        'longitude': 106.8272278996774,
      };
      for (let i = 0; i < outlets.length; i++) {
        const outletLoc = {
          'latitude': outlets[i].latitude,
          'longitude': outlets[i].longitude,
        };

        outlets[i].distance = geolib.convertDistance(geolib.getDistance(monasLoc, outletLoc, 1000)) +' km';
      }

      return outlets
    },
    async getProducts() {
      return await Product.findAll()
    },
    // Eager Loading.
    async getBrands() {
      temp = await Brand.findAll({
        include : [
          { model : Outlet }
      ]
      })

      console.log(temp);
      return temp
    },
  },

  Mutation: {
    async createBrand(root, args) {
      const payload = {
        name: args.input.name,
        logo: args.input.logo,
        banner: args.input.banner,
        createdAt: Date(),
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
        createdAt: Date(),
        BrandId: +args.input.BrandId
      };

      return await Outlet.create(payload, {include: Brand});
    },

    async createProduct(root, args) {
      const payload = {
        name: args.input.name,
        picture: args.input.picture,
        price: args.input.price,
        createdAt: Date(),
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
        updatedAt: Date(),
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
        updatedAt: Date(),
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
        updatedAt: Date(),
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