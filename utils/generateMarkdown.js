
// got license badge info rthrough this link https://shields.io/category/license
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

  ## Installation(#table-of-contents)

  ## Usage(#table-of-contents)

  ## License(#table-of-contents)

  ## How to Contribute(#table-of-contents)

  ## Tests(#table-of-contents)

  [Github]
  [Email]

`;
}

module.exports = generateMarkdown;
