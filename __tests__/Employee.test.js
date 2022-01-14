const Employee = require('../lib/Employee');

test('Can set the name of employee via constructor method', () => {
    const name = 'Sam'
    const employee = new Employee(name);
    expect(employee.name).toBe(name)
})