// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
function renderLicenseBadge(license) {
  if (!license) {
      return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
function renderLicenseLink(license) {
  const licenses = {
      MIT: 'https://opensource.org/licenses/MIT',
      Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
      GPL: 'https://www.gnu.org/licenses/gpl-3.0.html'
      // Add more licenses as needed
  };

  return licenses[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
function renderLicenseSection(license) {
  if (!license) {
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Tests
${tests}
`;
}
// function generateReadmeMarkdown(title, description, installation, usage, tests) {
//   return `
// # ${title}

// ## Description
// ${description}

// ## Installation
// ${installation}

// ## Usage
// ${usage}

// ## Tests
// ${tests}
// `;
// }

export default generateMarkdown;
