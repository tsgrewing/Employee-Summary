const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeList = [];
let renderedPage = '';

questions = [
        {
        type: "input",
        message: "What is the employee's name?",
        name: "name"
        },
        {
        type: "input",
        message: "What their employee id?",
        name: "id"
        },
        {
        type: "input",
        message: "What the employee's email address?",
        name: "email"
        },
        {
        type: "list",
        message: "What the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
        default: "Intern",
        name: "role"
        },
        {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
        when: function (answers) {
            answers.role === 'Manager'
            }
        },
        {
        type: 'input',
        message: 'What is their GitHub username?',
        name: 'github',
        when: function (answers) {
            answers.role === 'Engineer'
            }
        },
        {
        type: 'input',
        message: 'What school is their internship thorugh?',
        name: 'school',
        when: function (answers) {
            answers.role === 'Intern'
            }
        },
];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUser() {
    return inquirer.prompt(questions).then(answers => {
        let name = answers.name;
        let email = answers.email;
        let id = answers.id;
        let role = answers.role;
        if (role === 'Manager') {
            var newEmployee = new Manager(name, id, email, role);
        }
        else if (role === 'Engineer') {
            var newEmployee = new Engineer(name, id, email, role);
        }
        else {
            var newEmployee = new Intern(name, id, email, role);
        }
        employeeList.push(newEmployee);
        addAnother();
    });
};

// Prompt user to add another employee
function addAnother () {
    inquirer.prompt(
        {
        type: "confirm", 
        message: "Would you like to add another employee?",
        name: "add",
        default: true
        }
    ).then(answers => {
        if (answers.add) {
            promptUser();
        }
        else {
            writeHTML(render(employeeList));
        }
    })
}

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
function writeHTML(template) {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, template);
}
// Run the program, wait for a response from the user and then write the page once the render function returns the rendered html
promptUser();