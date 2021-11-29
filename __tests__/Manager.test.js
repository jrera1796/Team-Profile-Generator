const Manager = require('../lib/Manager.js')

test('creates manager', ( ) => {
  const manager = new Manager('John', 35422, 'John@manager.com', 555-5555);

  

  expect(manager.name).toBe("John")
  expect(manager.getRole()).toBe("Manager")
  expect(manager.id).toBe(35422)
  expect(manager.email).toBe("John@manager.com")
  expect(manager.officeNumber).toBe(555-5555)
});