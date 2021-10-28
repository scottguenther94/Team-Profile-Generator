const Employee = require('../lib/Employee');

test("Is employee constructor an object", () => {
    const object = new Employee();
    expect(typeof(object)).toBe("object");
  });