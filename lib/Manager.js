// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, employeeId, email, officeNumber) {
        super(name, employeeId, email);
        this._officeNumber = officeNumber;
        this._role = "Manager"
    }
    
    getOffice() {
        return this._officeNumber;
    }

    getRole() {
        return this._role;
    }
}

module.exports = Manager