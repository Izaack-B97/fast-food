const mysql = require('promise-mysql');

const dbConfig = {
    host     : 'us-cdbr-east-03.cleardb.com',
    database : 'heroku_46f94c86154795d',
    user     : 'bbd8b081006742',
    password : 'e11b9099'
};

// Local credentials
// const connection = mysql.createConnection({
//     host: 'localhost',
//     database: 'fast_food_v2',
//     user: 'root',
//     password: ''
// });

// Production credentials
let connection = mysql.createConnection( dbConfig );                 

const getConnection = () => {
    
    // handle disconnect database
    const statusDatabaseConnection = connection._rejectionHandler0.connection.state;
    console.log( statusDatabaseConnection );
    if ( statusDatabaseConnection === 'disconnected' ) connection = mysql.createConnection( dbConfig );
    // end handle disconnect database

    return connection;
};

module.exports = {
    getConnection
};