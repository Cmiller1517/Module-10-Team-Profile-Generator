// imports Employee constructor for EMPLOYEE FILE
const Employee = require("./Employee");

// Extends Employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 
        this.school = school; 
    }

    // returns intern school from user input 
    getSchool () {
        return this.school;
    }

    // returns employee role as "Intern"
    getRole () {
        return "Intern";
    }
}


module.exports = Intern; 