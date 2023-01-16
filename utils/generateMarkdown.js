
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

// If a license is chosen, the link to info on the license is added to the readme
// If there is no license, return n/a to indicate that there is no license 
function renderLicenseSection(license) {
  if (license != 'No License'){
    return `${renderLicenseLink(license)}`
  }else{
    return `n/a`;
  }
}

// function uses markdown to create a readme based on the inputs
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

  For information on other liceneses, please visit
  [choosealicense.com](https://choosealicense.com/)

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
