let re;
let str;


//poster code

re =/^[0-9]{6}$/;


str = "999556"

//phone number
//01875335487 +8801717555666 8801639777333

re = /^(\+)?(88)?(01)[0-9]{9}$/

str = "+8801875444555"

//Email address
//fakhrul9.learn@edu.com.bd

re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;


str ='fakhrul9.learn@edu.com.bd'

console.log(re.test(str));