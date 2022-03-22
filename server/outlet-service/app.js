const { ApolloServer } = require('apollo-server');
const { resolvers } = require('../outlet-service/resolvers/resolver');
const { typeDefs } = require('./type-defs/schema');

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
