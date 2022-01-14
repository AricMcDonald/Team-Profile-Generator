const Manager = require('../lib/Engineer');

test('Can set the name of employee via constructor method', () => {
    const name = 'Sam'
    const manager = new Manager(name);
    expect(manager.name).toBe(name)
})