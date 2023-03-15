// REQUIRES CONSTRUCTOR FILE
const Employee = require('../Lib/Engineer');


// creates the Engineer object  
test('Engineer object', () => {
    const engineer = new Engineer('MARIO', 24, 'ItsaME@gmail.com', 'PeachFTW');
    
    expect(engineer.github).toEqual(expect.any(String));
});

// checks for Engineer github name
test('Engineer github name', () => {
    const engineer = new Engineer('MARIO', 24, 'ItsaME@gmail.com', 'PeachFTW');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// checks for Engineer role 
test('Role of employee', () => {
    const engineer = new Engineer('MARIO', 24, 'ItsaME@gmail.com', 'PeachFTW');

    expect(engineer.getRole()).toEqual("Engineer");
});