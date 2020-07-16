// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, employeeId, email, school) {
        super(name, employeeId, email);
        this._school = school;
    }
    
    getSchool() {
        return this._school;
    }

    getRole() {
        return ("Intern");
    }
}