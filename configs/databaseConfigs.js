const { Pool } = require('pg');

//Instanciate a new pool Connection

const databaseConnection = new Pool({
    host: process.env.DBHOST,
    database: process.env.DB,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT
});

// Export it out

module.exports = {
    db: databaseConnection
}