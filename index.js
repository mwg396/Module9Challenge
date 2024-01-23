// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    message: "Table of Contents",
    name: 'tableofContents',
    default: 'Table of Contents',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("tableofContents.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Describe how to install project.",
    name: 'projectInstallation',
    default: 'Project Installation',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("projectInstallation.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Name the project",
    name: 'projectTitle',
    default: 'Project Title',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("projectTitle.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Describe the project.",
    name: 'projectDescription',
    default: 'Project Description',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("projectDescription");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Describe how to contribute.",
    name: 'projectContribution',
    default: 'Project Contribution',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("projectContribution");
        }
        return true;
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
  
    console.log("Task Complete")
});}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
