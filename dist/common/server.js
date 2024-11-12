import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
const getApolloServer = (sdl) => new ApolloServer({
    introspection: true,
    schema: addMocksToSchema({
        schema: makeExecutableSchema({ typeDefs: sdl })
    })
});
export const startServer = async (sdl, port) => {
    const server = getApolloServer(sdl);
    return startStandaloneServer(server, {
        listen: { port },
    });
};
