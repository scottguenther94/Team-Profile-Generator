const Manager = require('../lib/Manager')

test("Is manager constructor an object", () => {
    const object = new Manager();
    expect(typeof(object)).toBe("object");
  });