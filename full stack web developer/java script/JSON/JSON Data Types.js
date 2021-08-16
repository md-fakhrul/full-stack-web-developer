//string
//number
//object(json object)
//array
//boolean
//null


//doesn't Support undefined,data,function

var person = {
    name:"kamal",
    age:35,
    hometown: "Dhaka",
    married: 'false',
    dob:1989-09-09,
    test_null: null,
    test_undefined: undefined,
    greet: function() {
        console.log(`hello ${this.name}`);
    }
    
}
//person.greet();
var person_json = JSON.stringify(person);
console.log(person_json);