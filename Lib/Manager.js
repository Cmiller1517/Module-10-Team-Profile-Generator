// imports Employee constructor for EMPLOYEE FILE
const Employee = require("./Employee");

// Extends Employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    // returns employee role as "Manager" 
    getRole () {
        return "Manager";
    }
}


module.exports = Manager; 