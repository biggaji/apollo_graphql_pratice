const { gql } = require('apollo-server');

const typeDefs = gql`
    "Author type"
    type Author {
        full_name:String!
        author_id:String!
        avatar:String!
        email:String!
        username:String!
        follower:Int
        following:Int
        location:String!
        twitter_handle:String
        instagram_handle:String
        facebook_handle:String
        books: [Book]
    }

    "Book type"
    type Book {
        bookid:String!
        book_poster:String
        title:String
        date_created:String
        date_revised:String
        author:Author
    }

    "Avatar type"
    type Avatar {
        size: AvatarSize
        avatar:String
    }

    "Enum for avatar sizes"
    enum AvatarSize {
        SMALL
        MEDIUM
        LARGE
    }

    "Query type"
    type Query{
        author(authorid:String!): Author
        book(bookid:String): Book
        avatar(size:AvatarSize): Avatar
    }

    type Mutation {
        create_author(email:String!,full_name:String!,username:String,password:String!): Author
        create_book(title:String!) : Book
    }
`;

module.exports = {
    typeDefs
}