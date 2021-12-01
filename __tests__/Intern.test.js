const Intern = require('../lib/Intern.js')

test('creates intern', ( ) => {
  const intern = new Intern('Intern1', 12345, 'Intern1@intern.com', 'internSchool');

  

  expect(intern.name).toBe("Intern1")
  expect(intern.getRole()).toBe("Intern")
  expect(intern.id).toBe(12345)
  expect(intern.email).toBe("Intern1@intern.com")
  expect(intern.school).toBe('internSchool')
});