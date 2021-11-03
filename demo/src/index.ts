import { ApolloServer, gql } from 'apollo-server';
import { getPosts, getPost } from './services/posts';
import { buildSubgraphSchema } from '@apollo/subgraph';

const typeDefs = gql`
  type Post {
    id: ID!
    title: String
    author: String
    created: String
  }

  type Query {
    getPosts: [Post]
    getPost(id: Int): Post
  }
`;

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs: typeDefs,
    resolvers: {
      Query: {
        getPosts: () => {
          const posts = getPosts();
          return posts;
        },
        getPost: (parent, args, context) => {
          const post = getPost(args.id);
          return post;
        },
      },
    },
  }),
});

server.listen(4005);
