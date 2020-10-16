const connection = require('./db/database');
// import inquirer
const inquirer = require("inquirer");
// import console.table
const cTable = require("console.table");
//import mysql2
const mysql = require("mysql2");
//used to keep my password safe in a .env file that is not exported with the project

//create the connection
connection.connect((err) => {
  if (err) throw err;
  console.log(`====================================================================================`);
  console.log("\n WELCOME TO EMPLOYEE TRACKER \n");
  console.log("connected as id " + connection.threadId + "\n");
  console.log(`====================================================================================`);
  mainMenu();
});

// Main menu function
function mainMenu() {
  // Prompt user to choose an option
  inquirer
    .prompt({
      name: "main",
      type: "list",
      message: "MAIN MENU",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by role",
        "View all employees by manager",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
        "Update employee manager",
        "Delete employee",
        "Delete employee role",
        "Delete department",
        "View department budget",
        "Exit",
      ],
    })
    .then((answer) => {
      // Switch case depending on user option
      switch (answer.main) {
        case "View all employees":
          viewAllEmployees();
          break;
        case "View all employees by department":
          viewAllEmpByDept();
          break;
        case "View all employees by role":
          viewAllEmpByRole();
          break;
        case "View all employees by manager":
          viewAllEmpByManager();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "Add role":
          addEmpRole();
          break;
        case "Add department":
          addDeptartment();
          break;
        case "Update employee role":
          updateEmpRole();
          break;
        case "Update employee manager":
          updateEmpManager();
          break;
        case "Delete employee":
          deleteEmployee();
          break;
        case "Delete employee role":
          deleteRole();
          break;
        case "Delete department":
          deleteDeptartment();
          break;
        case "View department budget":
          viewDeptartmentBudget();
          break;
        case "Exit":
          connection.end();
          break;
        default:
          mainMenu();
      }
    });
}

//inquierer prompt. we can destruct the .then response
//.then({location})
//connection.query("SELECT FROM shops WHERE ?" ({location})

//theres a way to combine to fields into one
//SELECT title. CONCAT(firstName, " ",  LastName) AS author_name
//you can take the AS out if you want

//calculator values too
//SELECT prducts.*, price * quantity AS `stock value` (the`` backticks are for column names, so i can ad a space) FROM products
