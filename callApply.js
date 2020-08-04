const normalPerson = {
    firstName: 'Ashiouzzaman',
    lastName: 'Real',
    getFullName: function(){
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    },
    salary: 15000,
    chargeBill: function(chargeAmount, tips, tax){
        this.salary = this.salary - chargeAmount - tips - tax;
        return this.salary;
    }
}


const heroPerson = {
    firstName: "Hero",
    lastName: "Kamal",
    salary: 25000,
}

const heroFriend = {
    firstName: "Hero",
    lastName: "Jamal",
    salary: 25000,
}

//Bind ------------------------------------

// // Binding normalPerson's chargeBill function with heroPerson
// console.log(heroPerson.salary);
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(3000);
// console.log(heroPerson.salary);

// // Binding normalPerson's getFullName function with herofriend
// const heroFriendFullName = normalPerson.getFullName.bind(heroFriend);
// console.log(heroFriendFullName());  

// // Call-----------------------
// normalPerson.chargeBill.call(heroPerson, 1200);
// console.log(heroPerson.salary);

// Apply -------------------------------
normalPerson.chargeBill.apply(heroPerson, [800, 120, 80]);
console.log(heroPerson.salary);