// db.js
const mysql = require('mysql2');
import type { Connection } from 'mysql2';

const connection: Connection = mysql.createConnection({
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

/*

    // app.js
    const connection = require('./db');

    // Example: Select data
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log('Users:', results);
    });

    // Close the connection when done (in a real application, manage connection pooling)
    // connection.end(); // Don't call this directly after queries in a long-running app

	*/
