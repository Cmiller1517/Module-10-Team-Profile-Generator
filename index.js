const inquirer = require("inquirer")
const fs = require("fs")

// ------ TEAM MEMBER PROFILES-----//
const Manager = require("./Lib/Manager");
const Engineer = require("./Lib/Engineer");
const Intern = require("./Lib/Intern");
const Employee = require("./Lib/Employee");

// --- Generates the HTML based on input- -//
const generateHTML = require("./src/generateHTML");

// ---- TEAM HOLDING ----//
const team = []

// - Add Manager - //

const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the Manager of your team?",
        },
        {
            type: "input",
            name: "ID",
            message: "What is the employee ID of the Manager?",
        },
        {
            type: "input",
            name: "Email",
            message: "What is the email of the Manager?",
        },
        {
            type: "input",
            name: "Office",
            message: "What is the office number of the Manager?",
        },
    ])
        .then(managerData => {
            const { name, id, email, officeNumber } = managerData;
            const manager = new Manager(name, id, email, officeNumber);

            team.push(manager);
        })
};

// Function of Employee prompts
const addEmployee = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employees role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?",

        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employees ID.",

        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employees email.",

        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employees github username.",
            when: (input) => input.role === "Engineer",

        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the interns school",
            when: (input) => input.role === "Intern",

        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAdd } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

            }
            else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

            }

            team.push(employee);

            if (confirmAdd) {
                return addEmployee(team);

            }
            else {
                return team;
            }
        })
};

// Function to create HTML page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } 
        else {
            console.log("Your team profile has been successfully created!")
        }
    })
}; 

// Function to initialize app
const initApp = () => {
    addManager()
        .then(addEmployee)
        .then(team => { 
            return pageHTML(team);

    })
        .then(pageHTML => {
            return writeFile(pageHTML);

  })};

  initApp();