// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, employeeId, email) {
        this._name = name;
        this._employeeId = employeeId;
        this._email = email;
    }

    getName() {
        return this._name;
    }

    getId() {
        return this._employeeId;
    }

    getEmail() {
        return this._email;
    }

    getRole () {
        return ("Employee")
    }
};

module.exports = Employee