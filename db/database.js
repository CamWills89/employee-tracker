const mysql = require('mysql2');

require("dotenv").config();

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "employees",
});

module.exports = connection;
