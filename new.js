// Class using new keyword
class Person {
    constructor(fName, lName, salary){
        this.firstName = fName;
        this.lastName = lName;
        this.salary = salary;
    }
}

// New object of Person class
const heroPerson = new Person("Hero", "the superstar", 50000);
console.log(heroPerson.salary);