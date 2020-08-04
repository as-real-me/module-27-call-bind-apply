const normalPerson = {
    firstName: 'Ashiouzzaman',
    lastName: 'Real',
    getFullName: function(){
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    },
    salary: 15000,
    chargeBill: function(chargeAmount){
        this.salary = this.salary - chargeAmount;
        return this.salary;
    }
}
console.log(normalPerson.getFullName());
console.log(normalPerson.salary);
console.log(normalPerson.chargeBill(1000));
