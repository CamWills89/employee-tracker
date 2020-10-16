const connection = require("../db/database");
// import inquirer
const inquirer = require("inquirer");

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
        "View all employees by department",
        "View all employees by manager",
        "View department budget",
        "Add employee",
        "Add role",
        "Add department",
        "Update employee role",
        "Update employee manager",
        "Delete employee",
        "Delete employee role",
        "Delete department",
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
          break;
        case "View all employees by department":
          viewAllEmpByDept();
          break;
        case "View all employees by manager":
          viewAllEmpByManager();
          break;
        case "View department budget":
          viewDeptartmentBudget();
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

        case "Exit":
          connection.end();
          break;
        default:
          mainMenu();
      }
    });
}

const viewAllEmployees = () => {
  const sql = `SELECT employee.id, employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title AS 'Job Title', 
              department.department_name AS 'Department',role.salary AS 'Salary' FROM employee 
               LEFT JOIN role ON employee.role_id = role.id 
               LEFT JOIN department ON role.department_id = department.id;`;
  //  CONCAT (manager/employee.first_name, " ", manager/employee.last_name) AS manager
  // LEFT JOIN employee.manager ON employee.manager_id = manager.id;
  const params = [];
  connection.query(sql, params, (err, res) => {
    if (err) throw err;
    console.table("\n All Employees \n", res, "\n");

    mainMenu();
  });
};
const viewAllDepartments = () => {
  const sql = `SELECT * FROM department`;
  const params = [];
  connection.query(sql, params, (err, res) => {
    if (err) throw err;
    console.table("\n All Departments \n", res, "\n");

    mainMenu();
  });
};

const viewAllEmpRoles = () => {
  const sql = `SELECT role.id, role.title, role.salary AS Salary, 
                department.department_name AS Department 
               FROM role INNER JOIN department ON 
                role.department_id = department.id`;
  const params = [];
  connection.query(sql, params, (err, res) => {
    if (err) throw err;
    console.table("\n All Employee Roles \n", res, "\n");

    mainMenu();
  });
};

const viewAllEmpByDept = () => {
  const sql = `SELECT employee.first_name AS 'First Name', 
               employee.last_name AS 'Last Name', 
               department.department_name AS 'Department'
               FROM employee 
               LEFT JOIN role ON employee.role_id = role.id 
               LEFT JOIN department ON role.department_id = department.id;`;
  const params = [];
  connection.query(sql, params, (err, res) => {
    if (err) throw err;
    console.table("\n All Employee Roles by Department\n", res, "\n");

    mainMenu();
  });
};

const viewAllEmpByManager = () => {
  const sql = ``;
  const params = [];
  connection.query(sql, params, (err, res) => {
    if (err) throw err;
    console.table("\n All Employee by Manager \n", res, "\n");
    mainMenu();
  });
};

const viewDeptartmentBudget = () => {
  const sql = `SELECT department_id AS id, 
               department_name AS Department,
               SUM(salary) AS Budget
               FROM role 
               JOIN department ON role.department_id = department.id 
               GROUP BY department_id;`;
  const params = [];
  connection.query(sql, params, (err, res) => {
    if (err) throw err;
    console.table("\n View all Department's Budgets \n", res, "\n");

    mainMenu();
  });
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
  deleteDeptartment,
};
