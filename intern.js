const Employee = require("./employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(school) {
        super(name,id,"Intern");
        this.school = school;
    }
    getSchool() {
        return inquirer.prompt([
            {
                type: "input",
                name: "school",
                message: "Where did you go to school?",
            },

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;

