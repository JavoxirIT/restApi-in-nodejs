// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // Or your MySQL host
    user: 'root', // Your MySQL username
    password: 'your_password', // Your MySQL password
    database: 'your_database_name', // The database you want to connect to
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;
