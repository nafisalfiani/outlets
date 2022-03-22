const { gql } = require('apollo-server');

const typeDefs = gql`
  type Brand {
    id: ID
    name: String
    logo: String
    banner: String
    createdAt: String
    updatedAt: String
    Outlets: [Outlet]
  }

  input BrandInput {
    id: ID
    name: String
    logo: String
    banner: String
  }

  type Outlet {
    id: ID
    name: String
    picture: String
    address: String
    longitude: String
    latitude: String
    distance: String
    createdAt: String
    updatedAt: String
    BrandId: ID
  }

  input OutletInput {
    id: ID
    name: String
    picture: String
    address: String
    longitude: String
    latitude: String
    BrandId: ID
  }

  type Product {
    id: ID
    name: String
    picture: String
    price: Int
    createdAt: String
    updatedAt: String
    BrandId: ID
  }

  input ProductInput {
    id: ID
    name: String
    picture: String
    price: Int
    BrandId: ID
  }

  type Query {
    getBrands: [Brand]
    getOutlets: [Outlet]
    getProducts: [Product]
  }

  type Mutation {
    createBrand(input: BrandInput!): Brand
    createOutlet(input: OutletInput!): Outlet
    createProduct(input: ProductInput!): Product
    updateBrand(input: BrandInput!): Brand
    updateOutlet(input: OutletInput!): Outlet
    updateProduct(input: ProductInput!): Product
    deleteBrand(id: Int!): Brand
    deleteOutlet(id: Int!): Outlet
    deleteProduct(id: Int!): Product
  }
`;


module.exports = { typeDefs }