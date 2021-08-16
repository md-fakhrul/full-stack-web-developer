// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object

var person1 = {
    "name": "Rahim",
    "age": 25,
    "hometown": "Dhaka",
    "married": false
};

var person2 = {
    name: "Karim",
    age: 35,
    hometown: "Chittagong",
    married: true
};

 var person_new = JSON.stringify(person1)
var person_ob = JSON.parse(person_new)
console.log(person_new);
console.log(person_ob);

console.log(person2);
 console.log(person1);
