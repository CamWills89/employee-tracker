//import mysql2
const mysql = require('mysql2');

// Create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: '',
  database: 'employees'
});

  module.exports = db;