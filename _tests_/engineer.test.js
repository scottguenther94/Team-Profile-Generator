const Engineer = require('../lib/Engineer')

test("Is engineer constructor an object", () => {
    const object = new Engineer();
    expect(typeof(object)).toBe("object");
  });