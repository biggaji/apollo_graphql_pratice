require('dotenv').config();
const { gql, ApolloServer } = require('apollo-server');
const cookieParser = require('cookie-parser');

const { resolvers } = require('./graphqlServer/resolvers');
const { typeDefs } = require('./graphqlServer/schema');

//Initialize an instance of apollo server

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }) => ({ req, res }) });

// server.applyMiddleware(cookieParser);

//app should listen on port 7000 or use the one in the env file
const PORT = process.env.PORT || 7000;


server.listen().then(({ url }) => {
    console.log("server running at ", url)
});
