function generateMarkdown(data) {
  return `

  [![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://shields.io/)

# ${data.title}
## ${data.name}
## Description
${data.description}
## Table of Contents
  - [Installation!](#installation)

  - [Usage!](#usage)
  
  - [License!](#license)

  - [Contributing!](#contributing)

  - [Tests!](#tests)

  - [Questions?](#author)

## Installation:
${data.installation}
## Usage:
To run this application, use ${data.usage}
## License:
${data.license}
## Contributing:
${data.contributing}
## Tests:
${data.tests}
## Author:
Feel free to reach out to me with questions!

GitHub: [${data.name}](https://github.com/${data.name})

`;
}

module.exports = generateMarkdown;
