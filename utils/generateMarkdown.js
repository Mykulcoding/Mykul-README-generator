// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

This project is licensed under the [${data.license} License](https://opensource.org/licenses/${data.license}).

## Contributing

${data.credits}

## Tests

${data.test}

## Questions

If you have any questions or need further assistance, feel free to reach out:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

${data.deploy ? `**Deployed Application:** [${data.deploy}](${data.deploy})` : ''}
`;
}

module.exports = generateMarkdown;  