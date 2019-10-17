const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const employee = require("./employee");
const engineer = require("./engineer");
const intern = require("./intern");
const manager = require("./manager");

async function employeePrompt () {
    var employees = []
    let managerAnswers = await managerPrompt();
    let i = 0;
    while ( i < parseInt(managerAnswers.employeesNum)){
        let employeetype = await employeePrompt(i);
        console.log(employeetype)
        switch(employeetype.Role) {
            case "Intern":
              employeeAnswers = await internPrompt(i);
              break;
            case "Engineer":
              employeeAnswers = await engineerQuestions(i);
              break;
             }
        i++;
    }
    
    
}
askSomeQuestions();

