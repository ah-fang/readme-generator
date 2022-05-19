// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(!license) {
    return "";
  }
  var urlName;
  var urlFullLink;
  switch(license) {
    case 'Apache License 2.0':
      urlName = 'Apache_2.0-blue';
      urlFullLink = 'opensource.org/licenses/Apache-2.0'
      break;
    case 'GNU General Public License v3.0':
      urlName = 'GPL_v3-blue';
      urlFullLink = 'www.gnu.org/licenses/gpl-3.0';
      break;
    case 'MIT License':
      urlName = 'MIT-yellow';
      urlFullLink = 'opensource.org/licenses/MIT';
      break;
    case 'BSD 2-Clause "Simplified" License':
      urlName = 'BSD_2--Clause-orange';
      urlFullLink = 'opensource.org/licenses/BSD-2-Clause';
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      urlName = 'BSD_3--Clause-blue';
      urlFullLink = 'opensource.org/licenses/BSD-3-Clause';
      break;
    case 'Boost Software License 1.0':
      urlName = 'Boost_1.0-lightblue';
      urlFullLink = 'www.boost.org/LICENSE_1_0.txt';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      urlName = 'CC0_1.0-lightgrey';
      urlFullLink = 'creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'Eclipse Public License 2.0':
      urlName = 'EPL_1.0-red';
      urlFullLink = 'opensource.org/licenses/EPL-1.0';
      break;
    case 'GNU Affero General Public License v3.0':
      urlName = 'AGPL_v3-blue';
      urlFullLink = 'www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU General Public License v2.0':
      urlName = 'GPL_v2-blue';
      urlFullLink = 'ww.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;
    case 'Mozilla Public License 2.0':
      urlName = 'MPL_2.0-brightgreen';
      urlFullLink = 'opensource.org/licenses/MPL-2.0';
      break;
    case 'The Unlicense':
      urlName = 'Unlicense-blue';
      urlFullLink = 'unlicense.org/';
      break;      
  }
    return `
    [![License](https://img.shields.io/badge/License-${urlName}.svg)](https://${urlFullLink})
    `;
}



// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if(!license) {
//     return "";
//   }
//   return "link";

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return "";
  }
  return `
  ## License
  This project is licensed under the terms of the ${license}
  `;
}

// ${renderLicenseLink(license)}

// TODO: Create a function to generate markdown for README

const generateMarkdown = (readmeJSON) => {
  return `# ${readmeJSON.title}
  ${renderLicenseBadge(readmeJSON.license)}
  ## Description
  ${readmeJSON.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contibuting)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${readmeJSON.installation}
  ## Usage
  ${readmeJSON.usage}
  ${renderLicenseSection(readmeJSON.license)}
  ## Contributing
  ${readmeJSON.contributing}

  ## Tests
  ${readmeJSON.tests}
  ## Questions
  GitHub: (https://www.github.com/${readmeJSON.username})\n
  Email: ${readmeJSON.email}
`;
} 

// [Contributor Covenant](https://www.contributor-covenant.org/)
/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

module.exports = { generateMarkdown };
