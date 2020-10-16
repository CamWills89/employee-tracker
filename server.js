const db = require('./db/database');
// import inquirer 
const inquirer = require('inquirer'); 
// import console.table
const cTable = require('console.table'); 


//inquierer prompt. we can destruct the .then response
//.then({location})
//connection.query("SELECT FROM shops WHERE ?" ({location})


//theres a way to combine to fields into one
//SELECT title. CONCAT(firstName, " ",  LastName) AS author_name
//you can take the AS out if you want

//calculator values too
//SELECT prducts.*, price * quantity AS `stock value` (the`` backticks are for column names, so i can ad a space) FROM products
