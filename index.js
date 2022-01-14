const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require('./templates/pageTemplate');
const { resolve } = require('path');
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
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineers name?'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the engineers ID?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineers email?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the engineers GitHub?'
            }
            ])
            .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                teamMembers.push(engineer);
                teamQuestion();
            })
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the interns name?'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the interns ID?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the interns email?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the interns school?'
            }
            ])
            .then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamMembers.push(intern);
                teamQuestion();
            })
    }

    function buildTeam() {
        // Write file here
        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), 'utf-8');
        fs.copyFile('./templates/style.css', './output/style.css', err => {
            if(err) {
                console.log(err)
            }
        });
    }

    createManager();
}


init();