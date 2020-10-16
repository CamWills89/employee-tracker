const connection = require("./db/database");
const cTable = require("console.table");
//import mysql2
const mysql = require("mysql2");

const { mainMenu,
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
    deleteDeptartment, } = require("./lib/queries");

//create the connection
connection.connect((err) => {
  if (err) throw err;
  console.log(
    `====================================================================================`
  );
  console.log("\n WELCOME TO YOUR EMPLOYEE MANAGEMENT SYSTEM \n");
  console.log("connected as id " + connection.threadId + "\n");
  console.log(
    `====================================================================================`
  );
  mainMenu();
});
