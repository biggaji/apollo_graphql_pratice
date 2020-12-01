// const _ = require('lodash');
const { db } = require('../configs/databaseConfigs');
const { genuuid } = require('../utils/genuuid');

const resolvers = {
    Query: {
        author: async (_, { authorid }, context) => {
            try {
                const data = await db.query("SELECT * FROM author WHERE authorid= $1", [authorid]);
                return data.rows[0];
            } catch (err) {
                return err;
            }
        },
        book: async (_, args, context) => {
            try {
                const { bookid } = args;
                const book = await db.query('SELECT * FROM book WHERE bookid = $1', [bookid]);
                return book.rows[0];
            } catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        create_author: async (_, args, context) => {
            try {
                const { email, full_name, username, password } = args;
                const authorid = await genuuid();
                const data = await db.query("INSERT INTO author (authorid,email,full_name,username,password) VALUES ($1,$2,$3,$4,$5) RETURNING *", [authorid, email, full_name, username, password]);
                return data.rows[0];
            } catch (error) {
                return error;
            }
        },
        create_book: async (_, args, context) => {
            try {
                const { title } = args;
                const bookid = await genuuid();
                // Still under construction
            } catch (error) {
                return error;
            }
        }
    }
}

module.exports = {
    resolvers
}