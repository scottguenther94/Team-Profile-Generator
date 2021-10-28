const Intern = require('../lib/Intern');

test("Is intern constructor an object", () => {
    const object = new Intern();
    expect(typeof(object)).toBe("object");
  });