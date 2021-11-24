class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
  }

getName = function() { console.log(this.name)}

getId = function() {console.log(this.id)}

getEmail = function() {console.log(this.Email)}

getRole(){
  return Employee
}
}








module.exports = Employee;