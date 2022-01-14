const Engineer = require('../lib/Engineer');

test('Can set the name of employee via constructor method', () => {
    const name = 'Sam'
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name)
})