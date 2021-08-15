//Regular Expression 
// patten Matching Technique

let re;
let str;


re =/hello/;
re = /Hello/;
re = /hello /i;

console.log(re);

console.log(re.source);

str = 'Hello World';
str = "Again Hello World"
str = "ello wold";
str = "sdfHellosds World";
str = "Again Hello World Hello"
str = "world";
str = "Again Hello World Hello"


//exec() - Returns result in array or null

let result = re.exec(str);

//test() - true/false

result = re.test(str);

//match() - Return array or null

result = str.match(re)

// search() - Returns index of the first match or -1
str = "Again Hello World Hello"
str = "world";
result = str.search(re);

//replace( ) - Return new string

str = "Again Hello World Hello"
let newstr = str.replace(re,'Fakhrul ');
console.log(newstr);

console.log(result);
