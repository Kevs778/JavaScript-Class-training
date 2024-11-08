let person = {
    first_name: "Bob",
    age: 23,
    student: true,
    eyeColor: "brown",
    cashOnHand: 150,
    married: false,
    homeAddress: {
    street: "25 Elm st.",
    city: "Akron", 
    state: "Ohio",
    zip: 54321
}
}

console.log(person)
// {first_name: "Bob"}
console.log(person.firstName); //Bob
console.log(person.age);//23
console.log(person.student);

// in an object, there is no idex, no position number or order; contrast w array:
let fruits = ['apple', 'banna', 'cherry'];
//challenge get the apple and the cherry
console.log(fruits [0]);
console.log(fruits [2]);

//you can also use the square bracket syntax to get values from object:
console.log(person["firstName"])//bob
console.log(person["age"])//23
console.log(person["student"]);

//change (set) values of existing object
// use = to assign a value (not:)
//age++ increments age by 1
person.age++; // age goes up by 1
console.log(person.age) //23
// give Bob 20 bucks
console.log(person.cashOnHand); //150
person.cashOnHand += 20;
console.log(person.cashOnHand); //170
//Bo graduated! Flip the student boolean to false
person.student = false;
console.log(person.student);
//drilling to homeAddress property to get its value:
//get the city and state only:
console.log(person.homeAddress.city, person.homeAddress.state);