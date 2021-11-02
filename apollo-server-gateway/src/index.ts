import { readFileSync } from 'fs';
import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';

const supergraphSdl = readFileSync('./src/supergraph.graphql').toString();

const gateway = new ApolloGateway({
  supergraphSdl,
});

const server = new ApolloServer({
  gateway,
});

server.listen(3000);
