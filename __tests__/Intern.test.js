const Intern = require('../lib/Engineer');

test('Can set the name of employee via constructor method', () => {
    const name = 'Sam'
    const intern = new Intern(name);
    expect(intern.name).toBe(name)
})