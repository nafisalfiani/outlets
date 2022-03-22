const { ApolloServer } = require('apollo-server');
const { resolvers } = require('../outlet-service/resolvers/resolver');
const { typeDefs } = require('./type-defs/schema');
const { typeDefs: scalarTypeDefs } = require('graphql-scalars');

const server = new ApolloServer({
    typeDefs: [
        ...scalarTypeDefs,
        typeDefs,
    ],
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
