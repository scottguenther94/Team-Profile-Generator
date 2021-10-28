const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const create = require('./src/page-template')

const teamArr = []

function runPrompts() {
    console.log("Who's on your team?")
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "Please provide the manager's name.",
                name: "manName"
            },
            {
                type: "input",
                message: "Please provide the manager's ID number.",
                name: "manId"
            },
            {
                type: "input",
                message: "Please provide the manager's email address.",
                name: "manEmail"
            },
            {
                type: "input",
                message: "Please provide the manager's office number",
                name: "offNumber"
            },
            {
                type: "list",
                message: "Who's next?",
                choices: ["Intern", "Engineer", "That's everyone"],
                name: "nextMember"
            }
        ]).then(answers => {
            const manager = new Manager(answers.manName, answers.manId, answers.manEmail, answers.offNumber);
            teamArr.push(manager);
            if (answers.nextMember === "Intern") {
                addIntern()
            } else if (answers.nextMember === "Engineer") {
                addEngineer()
            } else {
                finalize()
            }
        })

    }
    function addEngineer() {
        inquirer.prompt([ 
            {
                type: "input",
                message: "Please provide the engineer's name.",
                name: "engName"
            },
            {
                type: "input",
                message: "Please provide the engineer's ID number.",
                name: "engId"
            },
            {
                type: "input",
                message: "Please provide the engineer's email address.",
                name: "engEmail"
            },
            {
                type: "input",
                message: "Please provide the engineer's github account",
                name: "gitAccount"
            },
            {
                type: "list",
                message: "Who's next?",
                choices: ["Intern", "Engineer", "That's everyone"],
                name: "nextMember"
            }

        ]).then(answers =>{
            const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.gitAccount);
            teamArr.push(engineer);
            if (answers.nextMember === "Intern") {
                addIntern()
            } else if (answers.nextMember === "Engineer") {
                addEngineer()
            } else {
                finalize()
            }

        })

    }
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "Please provide the intern's name.",
                name: "intName"
            },
            {
                type: "input",
                message: "Please provide the intern's ID number.",
                name: "intId"
            },
            {
                type: "input",
                message: "Please provide the intern's email address.",
                name: "intEmail"
            },
            {
                type: "input",
                message: "Please provide the intern's acedemic university.",
                name: "university"
            },
            {
                type: "list",
                message: "Who's next?",
                choices: ["Intern", "Engineer", "That's everyone"],
                name: "nextMember"
            }
        ]).then(answers => {
            const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.university);
            teamArr.push(intern);
            if (answers.nextMember === "Intern") {
                addIntern()
            } else if (answers.nextMember === "Engineer") {
                addEngineer()
            } else {
                finalize()
            }
        })

    }
addManager()
}
function finalize() {    
    fs.writeFileSync(path.join('./dist', 'team.html'), create(teamArr), "utf-8");
    console.log("Successfully created file team.html in ./dist");
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to see your team page html?",
            choices: ["Yes", "No"],
            name: "response"
        }
    ]).then(answer => {
        if (answer.response == "Yes") {
            console.log(fs.readFileSync('./dist/team.html', 'utf-8'));
        } 
        console.log("Thank you for adding your team!");
    })
};

runPrompts();