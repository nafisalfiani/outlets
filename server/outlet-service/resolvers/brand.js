const { Brand, Outlet } = require('../models/index');

const resolvers = {
    Query: {
     async getBrand ({ include : Outlet }) {
      return Brand.findAll()
    }
  }
}

// static getList(req, res) {
//     User.findAll({ include : Profile })
//     .then(result => {
//         res.send(result);
//     })
//     .catch(err => {
//         res.send (err);
//     })
// }

module.exports = { resolvers };