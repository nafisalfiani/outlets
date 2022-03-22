const { ApolloServer } = require('apollo-server');
const { resolvers } = require('../outlet-service/resolvers/brand');
const { typeDefs } = require('./type-defs/brand');

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
