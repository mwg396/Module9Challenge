// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {let badge = "";

if(license != "None") {
  badge = "![License Badge](https://shields.io/badge/license-" + license;
}
return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license)
 {let licenseLink ="";
   if (licenseLink = ""){};
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  const sections = ["projectInstallation", "projectTitle", "projectDescription", "projectContribution"];
`;
}

module.exports = generateMarkdown;
