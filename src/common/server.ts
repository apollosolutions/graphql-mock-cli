import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';

const getApolloServer = (sdl: string) =>
  new ApolloServer({
    introspection: true,
    schema: addMocksToSchema({
      schema: makeExecutableSchema({typeDefs: sdl})
    })
  });

export const startServer = async (sdl: string, port: number) => {
  const server = getApolloServer(sdl);
  return startStandaloneServer(server, {
    listen: { port },
  });
};

