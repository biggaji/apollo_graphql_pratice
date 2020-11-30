// require('dotenv').config()
// const express = require('express');
const { gql, ApolloServer } = require('apollo-server');

// const app = express();

const typeDefs = gql`
    # Object types
    type Book {
        title: String
        id: Int
        author: Author
    }

    type Author {
        name: String
        id: Int
        books: [Book]
    }

    # A query is the graphs entry point.
    # @returns {Array} books - Returns an array of books.
    type Query {
        "A book query"
        books:[Book] 
        """
        A author type returns array
        """
        authors: [Author]
        book(id: Int): Book

        author(id: Int): Author
    }

    type Mutation {
        addBook(data:AddBookInput) : Book
    }

    # A special type of object
    input AddBookInput {
        title: String
        id: Int
    }
`;


// Interface - should be in a schema 
// interface MutationResponse {
//     code: String!
//     success: Boolean!
//     message: String!
// }

// " Implementation of the Mutation Response on the addBook type """
// type AddBookMutationResponse {
//     code: String!
//     success: Boolean!
//     message: String!
//     book: Book
// }

// This could be the data from a database
const iwe = [
    {
        title: "The Coder",
        id: 1
    },
    {
        title: "The algorithms",
        id: 1
    },
    {
        title: "Ass holes",
        id: 1
    },
    {
        title: "The Grannies",
        id: 2
    },
    {
        title: "Older the berries, Sweeter the Juice",
        id: 2
    },
    {
        title: "Sugar Daddy",
        id: 2
    }
];

const authors = [
    {
        name: "Tobi Ajibade",
        id: 1
    },
    {
        name: "Shade Will",
        id: 2
    }
]

// Resolver - tells the apollo server how to fetch the data for a particular data types

const resolvers = {
    Query: {
        books: () => iwe,
        authors: () => authors,
        book: (_, args, context) => {
            return iwe.find(bk => { return bk.id === args.id });
        },
        author: (_, args, context) => {
            return authors.find(author => author.id === args.id);
        }
    },
    Book: {
        author: (parent) => {
            return authors.find(author => author.id === parent.id);
        }
    },
    Author: {
        books: (parent) => {
            return iwe.find(books => books.id === parent.id);
        }
    },
    Mutation: {
        addBook: (_, args, context) => {
            return args.data;
            // TODO check if book already exist
        }
    }
}


//Initialize an instance of apollo server

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }) => ({ req, res }) });



//app should listen on port 7000 or use the one in the env file
const PORT = process.env.PORT || 7000;


server.listen().then(({ url }) => {
    console.log("server running at ", url)
})
// app.listen(PORT, () => {
//     console.log(`Server running on ${PORT} with a ✔✨✨ speed.`);
// });