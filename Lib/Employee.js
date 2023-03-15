// --- EMPTY EMPLOYEE CONSTRUCTOR-----//
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returns name 
    getName () {
        return this.name;
    }

    // returns ID 
    getId () {
        return this.id;
    }   

    // returns email 
    getEmail () {
        return this.email;
    }

    // returns Employee role
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 