// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, employeeId, email, github) {
        super(name, employeeId, email);
        this._github = github;
    }
    
    getGithub() {
        return this._github;
    }

    getRole() {
        return ("Engineer");
    }
}