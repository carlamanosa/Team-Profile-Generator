const Employee = require("./employee");
const axios = require("axios");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(github) {
    super(name,id,"Engineer");
    this.github = github;
} 
async getGitHub(){
    const userInfo = await promptUser();
    const username = userInfo.gituser;
    const github = await gitHubInfo(username);
    return github;
}
getRole(){
    return "Engineer";
}
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
async function gitHubInfo(username) {
    try {
      const queryUrl = `https://api.github.com/users/${username}`;
      const response = await axios.get(queryUrl)
      const user = response.data.html_url;
      return user;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = Engineer;