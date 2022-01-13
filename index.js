const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require('./templates/pageTemplate');
const teamMembers = [];

function init() {
    function createManager() {
        console.log('Please build your teams profile!')
        inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team manager ID?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team manager email?'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the team manager office number?'
        }
        ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            teamQuestion();
            console.log(teamMembers, answers)
        })
    }

    function teamQuestion() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamOption',
                message: 'What will the new team members role be?',
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        .then(response => {
            switch (response.teamOption) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        })
    }

    function addEngineer() {

    }

    function addIntern() {

    }

    function buildTeam() {
        // Write file here
    }

    createManager();
}


init();