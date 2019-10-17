const inquirer = require("inquirer");

class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }

    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(id);
    }

    getEmail() {
        console.log()
    }

    getRole() {
        return "Employee";
    }
}

employeePrompt();

module.exports = Employee;

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
