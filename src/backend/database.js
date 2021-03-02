const mysql = require('promise-mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'fast_food',
    user: 'root',
    password: ''
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};