// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const callGenerateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a project description: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation intstructions: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how this project is used: ',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution instructions:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide testing instructions: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select your license: ',
        choices: ['No License', 'MIT License', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'GNU Affero General Public License v3.0', 'The Unlicense', 'Apache License 2.0', 'GNU General Public License v3.0'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: ',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmePageContent = generateMarkdown(data);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init();
