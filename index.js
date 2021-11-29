const inquirer = require('inquirer');
const fs = require("fs");
const { genManagerCard, genEngineerCards, genInternCards } = require("./src/genCard")

const genHTML = require('./src/genHTML');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

const inquireQA = ([
  {
    type: 'input',
    name: 'managerName',
    message: "Please enter the name of the team's Manager"
  },
  {
    type: 'input',
    name: 'managerID',
    message: "What is the Manager's Employee ID?"
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the Manager's Email?"
  },
  {
    type: 'input',
    name: 'officeNum',
    message: "What is the office number?"
  },
  {
    type: 'loop',
    name: 'employees',
    message: "Great! This has been saved. Would you like to add another employee?",
    questions: [
      {
        type: 'list',
        name: 'type',
        message: 'Which type of employee would you like to add?',
        choices: ["Intern", "Engineer"]
      },

      {
        type: 'input',
        name: 'empName',
        message: 'Please enter a name?',

      },
      {
        type: 'input',
        name: 'empId',
        message: (answers) => `What is ${answers.empName}'s Employee ID Number?`,

      },
      {
        type: 'input',
        name: 'empEmail',
        message: (answers) => `What is ${answers.empName}'s Email?`,

      },
      {
        type: 'input',
        name: 'engGithub',
        message: (answers) => `Please enter the github username for ${answers.empName}`,
        when: answers => answers.type === "Engineer"
      },
      {
        type: 'input',
        name: 'intSchool',
        message: (answers) => `Please enter the school ${answers.empName} is attending.`,
        when: answers => answers.type === "Intern"
      }

    ]
  }




]);


inquirer.prompt(inquireQA).then((response) => {


  const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.officeNum)
  const employees = response.employees
  const engineers = []
  const interns = []

  for(let i = 0; i < employees.length; i++) {
      const e = employees[i]
      if (e.type === "Engineer") {
          const engineer = new Engineer(e.empName, e.empId, e.empEmail, e.engGithub)
          engineers.push(engineer)
      } else if (e.type === "Intern") {
          const intern = new Intern(e.empName, e.empId, e.empEmail, e.intSchool)
          interns.push(intern)
      }
  }
  const managerCard = genManagerCard(manager)
  const engineerCards = genEngineerCards(engineers)
  const internCards = genInternCards(interns)
  

  const html = genHTML(managerCard, engineerCards, internCards)
  fs.writeFile('./dist/index.html', html, (err) =>
    err ? console.error(err) : console.log('Index.html has been created.')
  );
})










