const Employee = require("./employee");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name,id,"Manager");
        this.officeNumber = officeNumber;
    }
   getRole() {
       return "Manager"; 
   }
}

module.exports = Manager;

function managerPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "office-number",
            message: "What is your office number?",
        },
       
    ])
}

