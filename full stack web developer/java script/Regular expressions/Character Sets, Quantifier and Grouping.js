//character Set using Bracket[]

let re;
let str;

re = /h[el]lo/;//Must be one of them inside brackets
re = /[HA]ello/i;
re = /[^ha]ello/i;//anyone excep those inside brackets
re = /^[ha]ello/;//Must stary with h or a
re = /[a-z]ello/;//start small latter 
re = /[A-Z]ello/;//Start upper case
re = /^[A-Z]/;///must be upper case 
re = /[A-za-z]/
re = /[0-9]ello/;
re = /^[0-9]ello/;
re = /[^0-9]ello/;



str = "ho";
str = "Aello";
str = "aello";
str = "tello";
str = "haello";
str = "zello";
str = "34234odfd c"
str ="09ello"





console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}