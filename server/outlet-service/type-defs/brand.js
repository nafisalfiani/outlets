const { gql } = require('apollo-server');

const typeDefs = gql`
  type Brand {
      id: ID
      name: String
      logo: String
      banner: String
      createdAt: String
      updatedAt: String
  }

  type Query {
      getBrand: [Brand]
  }
`;


module.exports = { typeDefs }