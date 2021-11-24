const Manager = require('../lib/Manager.js')

test('creates manager', ( ) => {
  const John = new Manager('John', 35422, 'fake@email.com', 415);

  

  expect(John.name).toBe("John")
  expect(John.getRole()).toBe("Manager")
  expect(John.id).toBe(35422)
  expect(John.email).toBe("fake@email.com")
  expect(John.officeNumber).toBe(415)
});