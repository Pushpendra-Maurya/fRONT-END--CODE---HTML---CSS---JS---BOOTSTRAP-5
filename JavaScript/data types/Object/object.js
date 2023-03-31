var intro = {};
console.log(typeof(intro));



// object creation code here 

var a = {
    firstName : "Pushpendra",
    lastName: "Maurya",
    age: 25
};

console.log(a);
console.log(typeof(a));


// how to access element 

// 1- by property name             very Important this Property 
var fname  =a["firstName"]

var lname  = a['lastName']

var age = a['age']


console.log(fname)
console.log(lname)
console.log(age)



// 2- by dot operator           Littile Bit Important 

var firstName = a.firstName;

var lastName = a.lastName;

var  age = a.age;

console.log(firstName);
console.log(lastName);
console.log(age);