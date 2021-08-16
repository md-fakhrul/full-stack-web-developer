var student = {
    name:"fakhrul",
    age:"26",
    hometown:"Dhaka"
};

var student_json = JSON.stringify(student);//object to json
console.log(student_json);//this is output json


var student_new = JSON.parse(student_json);  //json to object
console.log(student_new);//this is output object