const inquirer = require('inquirer');
const fs = require('fs');
// const callGenerateMarkdown = require('./utils/generateMarkdown')

inquirer
    .prompt([
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
    ])
    .then((answers) => {
        const readmePageContent = generateMarkdown(answers);
        fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('You have successfully generated a README')
        )
    })

// got license badge info through this link https://shields.io/category/license
function renderLicenseBadge(license) {
    if (license != 'No License'){
      return `![license badge](https://img.shields.io/badge/license-${license}-blue)`  
    }else{
      return '';
    }
  }
  
  
  //License information found through this link https://docs.github.com/en/rest/licenses?apiVersion=2022-11-28
  function renderLicenseLink(license) {
    if (license != 'No License'){
      return `[${license}](https://choosealicense.com/licenses/${license})`
    }else{
      return '';
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license != 'No License'){
      return ` ##[License] (#Table of Contents)
      The following licenses are used in this application: 
      ${renderLicenseLink(license)}`
    }else{
      return '';
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
    # ${data.title}
  
    ## Description
    ${data.description}
  
    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [How to Contribute](#how-to-contribute)
    5. [Tests](#tests)
  
    ---
  
    ## Installation(#Table of Contents)
    ${data.installation}
  
    ## Usage(#Table of Contents)
    ${data.usage}
  
    ## License(#Table of Contents)
    ${renderLicenseSection(data.license)}
    ${renderLicenseBadge(data.license)}
  
    ## How to Contribute(#Table of Contents)
    ${data.contributing}
  
    ## Tests(#Table of Contents)
     ${data.tests}
  
     ---
  
    [Github](http://github.com/${data.username})
    [Email: ${data.email}]
  
  `;
  }
  
  module.exports = generateMarkdown;
  

