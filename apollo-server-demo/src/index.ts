import { ApolloServer, gql } from 'apollo-server';
const { buildSubgraphSchema } = require('@apollo/subgraph');

const typeDefs = gql`
  input Input {
    username: String
  }

  type User @key(fields: "id") {
    id: ID!
    username: String
    name: String
    mail: String
    age: Int
    extra: ExtraUserInfo
  }

  type ExtraUserInfo {
    bio: String
  }

  type Query {
    getUser(input: Input!): User
  }
`;

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers: {
      Query: {
        getUser(parent, args, context) {
          return {
            id: 2,
            username: args.input.username,
            name: 'Glenn',
            mail: 'glew@redpill-linpro.com',
            age: 33,
            extra: args.input.username,
          };
        },
      },
      ExtraUserInfo: {
        bio: (parent, args, context) => {
          console.log('fra parent', parent);
          return 'Dette er ekstra informasjon om brukeren';
        },
      },
    },
  }),
});

server.listen(3001);
