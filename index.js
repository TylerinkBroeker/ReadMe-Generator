var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: "input",
        message: "What is your user name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe the project.",
        name: "description"
    },
    {
        type: "input",
        message: "Installation?",
        name: "installation",
        default: "npm install"
    },
    {
        type: "input",
        message: "Usage?",
        name: "usage"
    },
    {
        type: "list",
        message: "What kind of license will your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "Contributing?",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests?",
        name: "tests"
    }
];

function init() {
    inquirer
    .prompt(questions)
    .then(function(response){
    console.log(response);
    fs.writeFile("ReadMe.md", generateMarkdown(response), (err)=>{
        if(err) 
        {console.log(err)}
        else {
            console.log("success!");
        }

    })
})
}

init();
