// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown  from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const license = [
    'MIT',
    'Apache',
    'GPL',
  ];
const questions = [{
    type: 'input',
    message: 'What is the title of project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Description?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'installation instuctions:',
    name: 'installation',
  },
  {
    type: 'input ',
    message: 'usage information?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'license?',
    name: 'license',
    choices:license
  },
  {
    type: 'input',
    message: 'contribution guidelines',
    name: 'contributing',
  }, 
  {
    type: 'input ',
    message: 'test instructions',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Github Username',
    name: 'Questions',
  }, 
  {
    type: 'input',
    message: 'email address',
    name: 'questions',
  }, 
];
  inquirer.prompt(questions).then((response)=>{
    console.log (response)
    const markDown = generateMarkdown(response)
    writeToFile(markDown)
  })

// TODO: Create a function to write README file
function writeToFile(data) {fs.writeFile('README.md', data, (err) =>
    err ? console.log(err) : console.log('Successfully created ReadMe.MD!')
  );}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
