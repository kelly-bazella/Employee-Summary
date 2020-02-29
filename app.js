const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let myTeam = [];

var managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },
  {
    type: "number",
    message: "What is your ID number?",
    name: "idnumber"
  },
  {
    type: "number",
    message: "What is your office number?",
    name: "officenumber"
  }
];

var internQuestions = [
  {
    type: "input",
    message: "What is your employee's name?",
    name: "employeename"
  },
  {
    type: "input",
    message: "What is your employee's email?",
    name: "employeeemail"
  },
  {
    type: "number",
    message: "What is your employee's ID number?",
    name: "employeeId"
  },
  {
    type: "input",
    message: "What school do you go to?",
    name: "internSchool"
  }
];

var engineerQuestions = [
  {
    type: "input",
    message: "What is your employee's name?",
    name: "employeename"
  },
  {
    type: "input",
    message: "What is your employee's email?",
    name: "employeeemail"
  },
  {
    type: "number",
    message: "What is your employee's ID number?",
    name: "employeeId"
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "engineerGithub"
  }
];

var employeeRoleQuestion = [
  {
    type: "list",
    message: "Please select their role below",
    name: "role",
    choices: [
      "Engineer",
      new inquirer.Separator(),
      "Intern",
      new inquirer.Separator(),
      "Done - create team roster"
    ]
  }
];

// functions 
createManager();

function createManager(){
  inquirer.prompt(managerQuestions).then(function(data) {
    console.log(data);
    myTeam.push(data);
    nextRole();
  }) 
};

function createIntern(){
  inquirer.prompt(internQuestions).then(function(answers){
    myTeam.push(answers)
    console.log(answers)
  })
}

function createEngineer(){
  inquirer.prompt(engineerQuestions).then(function(answers){
    myTeam.push(answers)
    console.log(answers)
  })
}

function createTeam(){
  console.log("Your team is being created!")
}

function nextRole(){
  inquirer.prompt(employeeRoleQuestion).then(function(response){
    console.log(response)
    var role = response.role;
    console.log(role);
    switch(role){
      case 'Engineer':
        createEngineer();
        break;
      case 'Intern':
        createIntern();
        break;
      case 'Done - create team roster':
        createTeam();
        break;
    }
  })
}

// switch case to ask the employee questions depending on role chosen




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
