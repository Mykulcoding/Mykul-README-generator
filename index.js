const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Prompt the user for information
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your repository called?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Provide a description of your application:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use. Add screenshot.',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Choose your project license.',
            name: 'license',
            choices: [
                { value: 'Apache' },
                { value: 'GNU' },
                { value: 'MIT' },
                { value: 'BSD 2' },
                { value: 'BSD 3' },
                { value: 'None' },
            ]
        },
        {
            type: 'input',
            message: 'List your collaborators',
            name: 'credits',

        },
        {
            type: 'input',
            message: 'How would you test this project?',
            name: 'test',
        },

        {
            type: 'input',
            message: 'Enter your GitHub username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Provide where application is deployed?',
            name: 'deploy',
        },
    ])
    .then((answers) => {
        console.log(answers);

        // Generate README content using the answers
        const content = generateMarkdown(answers);

        // Writing the content to mykulREADME.md file
        fs.writeFile('mykulREADME.md', content, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('README.md has been successfully generated!');
            }
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.error(error);
        } else {
            // Something else went wrong
        }
    });
