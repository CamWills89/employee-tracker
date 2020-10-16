const connection = require("../db/database");
// import inquirer
const inquirer = require("inquirer");
// import console.table
const cTable = require("console.table");

const mysql = require("mysql2");

const path = require("path");

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
        "View all departments",
        "View all roles",
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
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllEmpRoles();
        case "View all employees by department":
          viewAllEmpByDept();
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

const viewAllEmployees = () => {
  connection.query("SELECT * FROM employee", (error, result) => {
    if (error) throw error;
    console.table(result);
    mainMenu();
  });
};
const viewAllDepartments = () => {
  mainMenu();
};

const viewAllEmpRoles = () => {
  mainMenu();
};

const viewAllEmpByDept = () => {
  mainMenu();
};

const viewAllEmpByManager = () => {
  mainMenu();
};

const viewDeptartmentBudget = () => {
  mainMenu();
};

const addEmployee = () => {
  mainMenu();
};

const addEmpRole = () => {
  mainMenu();
};

const addDeptartment = () => {
  mainMenu();
};

const updateEmpRole = () => {
  mainMenu();
};

const updateEmpManager = () => {
  mainMenu();
};

const deleteEmployee = () => {
  mainMenu();
};

const deleteRole = () => {
  mainMenu();
};

const deleteDeptartment = () => {
  mainMenu();
};


module.exports = {
  mainMenu,
  viewAllEmployees,
  viewAllDepartments,
  viewAllEmpRoles,
  viewAllEmpByDept,
  viewAllEmpByManager,
  viewDeptartmentBudget,
  addEmployee,
  addEmpRole,
  addDeptartment,
  updateEmpRole,
  updateEmpManager,
  deleteEmployee,
  deleteRole,
  deleteDeptartment
};
