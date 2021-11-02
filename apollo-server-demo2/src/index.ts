import { ApolloServer, gql, ApolloError } from 'apollo-server';
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = gql`
  extend type User @key(fields: "id") {
    id: ID! @external
    fnr: String
  }
`;

const fetchfnrByUserId = (id: any) => {
  return {
    fnr: '81549388',
  };
};

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers: {
      User: {
        __resolveReference(user) {
          console.log('her', user);
          return fetchfnrByUserId(user.id);
        },
      },
    },
  }),
});

server.listen(3002);
