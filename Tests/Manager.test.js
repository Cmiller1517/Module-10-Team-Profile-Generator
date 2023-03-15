// REQUIRES CONSTRUCTOR FILE
const Manager = require('../Lib/Manager');

// Manager object 
test('Manager object', () => {
    const manager = new Manager('BOWSER', 100, 'BigTimeShell@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// checks for Manager role
test('gets role of employee', () => {
    const manager = new Manager('BOWSER', 100, 'BigTimeShell@gmail.com', 1);

    expect(manager.getRole()).toEqual("Manager");
}); 