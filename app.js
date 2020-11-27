// require('dotenv').config()
// const express = require('express');
const { gql, ApolloServer } = require('apollo-server');

// const app = express();

const typeDefs = gql`
    type Book {
        title: String
        id: String
        author: String
    }

    # A query is the graphs entry point.
    # @returns {Array} books - Retutns an array of books.
    type Query {
        books:[Book]
    }
`;

// This could be the data from a database
const iwe = [
    {
        title: "The Coder",
        id: 1,
        author: "Tobi Ajibade"
    },
    {
        title: "The algrithms",
        id: 2,
        author: "Shade Will"
    }
];

// Resolver - tells the apollo server how to fetch the data for a particular data types

const resolvers = {
    Query: {
        books: () => iwe
    }
}


//Initialize an instance of apollo server

const server = new ApolloServer({ typeDefs, resolvers });



//app should listen on port 7000 or use the one in the env file
const PORT = process.env.PORT || 7000;


server.listen().then(({ url }) => {
    console.log("server running at ", url)
})
// app.listen(PORT, () => {
//     console.log(`Server running on ${PORT} with a ✔✨✨ speed.`);
// });