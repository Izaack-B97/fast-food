const mysql = require('promise-mysql');
// FIXME: Local credentials
// const connection = mysql.createConnection({
//     host: 'localhost',
//     database: 'fast_food_v2',
//     user: 'root',
//     password: ''
// });

// TODO: Production credentials
const connection = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    database: 'heroku_4579a1601e9c76e',
    user: 'b03a0c3f9a191c',
    password: '6036bc41'
});


const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};