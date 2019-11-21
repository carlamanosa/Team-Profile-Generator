const inquirer = require("inquirer");

function employeePrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
        {

            type: "checkbox",
            name: "employee-type",
            message: "What type of employee are you?",
            choices: ["Manager", "Engineer", "Intern"]

        },
    ])
}

function managerPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "office-number",
            message: "What is your office number?",
        },

    ])
}

function internPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "school"
            message: "What school did you go to?"
        }
    ])
}

function engineerPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "gituser",
            message: "What is your GitHub username?",
        },
    ])
}

module.exports = 