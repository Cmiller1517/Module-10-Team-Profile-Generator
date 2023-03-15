// REQUIRES CONSTRUCTOR FILE
const Intern = require('../Lib/Intern');

// ntern object  
test('Intern object', () => {
    const intern = new Intern('PEACH', 24, 'HelplessHeroin@gmail.com', 'MARIO FTW');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// checks for Intern school
test('intern school', () => {
    const intern = new Intern('PEACH', 24, 'HelplessHeroin@gmail.com', 'MARIO FTW');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// checks for Intern role
test('role of employee', () => {
    const intern = new Intern('PEACH', 24, 'HelplessHeroin@gmail.com', 'MARIO FTW');

    expect(intern.getRole()).toEqual("Intern");
}); 