const Engineer = require('../lib/Engineer.js')

test('creates engineer', ( ) => {
  const engineer = new Engineer('Engineer1', 54321, 'Engineer1@engineer.com', 'engine1');

  

  expect(engineer.name).toBe("Engineer1")
  expect(engineer.getRole()).toBe("Engineer")
  expect(engineer.id).toBe(54321)
  expect(engineer.email).toBe("Engineer1@engineer.com")
  expect(engineer.github).toBe('engine1')
});