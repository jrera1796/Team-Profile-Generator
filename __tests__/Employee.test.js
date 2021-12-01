const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')
const Manager = require('../lib/Manager.js')

describe('Creates new employees', () =>{
  test('New Manager', () => {
    new Manager('Dave', 123, 'Dave@manager.com', 555-5555);
  });
  test('New Intern', () => {
    new Intern('Not_Steve', 213, 'NotSteve@intern.com', 'internschool');
  });
  test('New Engineer', () => {
    new Engineer('Steve', 321, 'Engineer@engineer.com', 'engine1');
  });
  
});

  


