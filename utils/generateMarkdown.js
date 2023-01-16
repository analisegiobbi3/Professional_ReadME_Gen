
// got license badge info through this link https://shields.io/category/license
function renderLicenseBadge(license) {
  if (license != 'No License'){
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`  
  }else{
    return '';
  }
}


//License information found through this link https://docs.github.com/en/rest/licenses?apiVersion=2022-11-28
function renderLicenseLink(license) {
  if (license != 'No License'){
    return `[${license}](http://choosealicense.com/licenses/${license}/)`
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return n/a to indicate that there is no license 
function renderLicenseSection(license) {
  if (license != 'No License'){
    return `${renderLicenseLink(license)}`
  }else{
    return `n/a`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Contact](#contact)

  ---

  ## [Description](#table-of-contents)
  ${data.description}

  ## [Installation](#table-of-contents)
  ${data.installation}

  ## [Usage](#table-of-contents)
  ${data.usage}

  ## [License](#table-of-contents)
  ${renderLicenseSection(data.license)}

  ## [How to Contribute](#table-of-contents)
  ${data.contributing}

  ## [Tests](#table-of-contents)
   ${data.tests}

   ---
  ## [Contact](#table-of-contents)

  [Github](http://github.com/${data.username})

  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
