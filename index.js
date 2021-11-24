const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
let slightTempArr = [];
let eTempArr = [];
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

const inquireQA = ([
  {
    type: 'input',
    name: 'teamManName',
    message: "Please enter the name of the team's Manager"
  },
  {
    type: 'input',
    name: 'teamManID',
    message: "What is the Manager's Employee ID?"
  },
  {
    type: 'input',
    name: 'teamManEmail',
    message: "What is the Manager's Email?"
  },
  {
    type: 'input',
    name: 'teamManOfficeNum',
    message: "What is the office number?"
  },
  {
    type: 'loop',
    name: 'teamArr',
    message: "Great! This has been saved. Would you like to add another employee?",
    questions: [
      {
        type: 'list',
        name: 'teamEmpType',
        message: 'Which type of employee would you like to add?',
        choices: ["Intern", "Engineer"]
      },

      {
        type: 'input',
        name: 'teamEmpName',
        message: 'Please enter a name?',

      },
      {
        type: 'input',
        name: 'teamEmpID',
        message: (answers) => `What is ${answers.teamEmpName}'s Employee ID Number?`,

      },
      {
        type: 'input',
        name: 'engGithub',
        message: (answers) => `Please enter the github username for ${answers.teamEmpName}`,
        when: answers => answers.teamEmpType === "Engineer"
      },
      {
        type: 'input',
        name: 'intSchool',
        message: (answers) => `Please enter the school ${answers.teamEmpName} is attending.`,
        when: answers => answers.teamEmpType === "Intern"
      }
      
    ]
  }




]);


async function inquirerStart() {
  try {
    const response = await inquirer.prompt(inquireQA)
    console.log("Response Received");
    if (response.teamArr) {
      console.log(response.teamArr)
      const temp = response;
      slightTempArr.push(temp);
    }
    console.log(slightTempArr);
  } catch (err) {
    console.log(err)
  }
}

inquirerStart();