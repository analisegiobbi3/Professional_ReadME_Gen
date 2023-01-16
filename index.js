//creates constants for the inquirer package, fs write to file, and the secondary file containing markdown
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// questions needed to create the readme
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
        choices: ['No License', 'agpl', 'gpl-3.0', 'lgpl-3.0', 'apache', 'agpl-3.0', 'mpl-2.0', 'bsl-1.0', 'mit', 'unlicense']
        // choices: ['No License', 'MIT License', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'GNU Affero General Public License v3.0', 'The Unlicense', 'Apache License 2.0', 'GNU General Public License v3.0'],
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

// this function grabs teh answers from the questions and puts them into the readme file using the markdown function
function init() {
    return inquirer.prompt(questions)
    .then((answers) =>{
        const readmePageContent = generateMarkdown(answers);
        //adds the new readme file to a folder called output
        fs.writeFile('./output/README.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('You have successfully generated a README')
        )
    })
}

// Function call to initialize app
init();
