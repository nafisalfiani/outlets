const { Brand } = require('../models/index');

const resolvers = {
    Query: {
     async getBrand () {
      return Brand.findAll()
    }
  }
}

module.exports = { resolvers };