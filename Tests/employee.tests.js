// REQUIRES CONSTRUCTOR FILE
const Employee = require('../Lib/Employee');

// Creates the object//
test('creates an employee object', () => {
    const employee = new Employee('Chad', 32, 'notmyemail@gmail.com', 'ChadBroChill');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// ---Checks the NAME
test('Employee Name', () => {
    const employee = new Employee('Chad', 32, 'notmyemail@gmail.com', 'ChadBroChill');

    expect(employee.getName()).toEqual(expect.any(String));
});

// checks the Employee ID 
test('Employee ID', () => {
    const employee = new Employee('Chad', 32, 'notmyemail@gmail.com', 'ChadBroChill');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// checks for Employee Email
test('Employee Email', () => {
    const employee = new Employee('Chad', 32, 'notmyemail@gmail.com', 'ChadBroChill');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// checks for Employee Role
test('Role of Employee', () => {
    const employee = new Employee('Chad', 32, 'notmyemail@gmail.com', 'ChadBroChill');

    expect(employee.getRole()).toEqual("Employee");
}); 