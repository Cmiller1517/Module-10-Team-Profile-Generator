// imports Employee constructor for EMPLOYEE FILE
const Employee = require("./Employee");

// Extends Employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    // returns gitHub name from user input 
    getGithub () {
        return this.github;
    }

    // returns employee role as "Engineer"
    getRole () {
        return "Engineer";
    }
}


module.exports = Engineer; 
