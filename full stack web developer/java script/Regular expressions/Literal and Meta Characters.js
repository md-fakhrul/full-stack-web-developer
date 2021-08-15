    let re;
    let str;

     //Literal Character

    re = /hello/;
    re =/hello/i;
    re = /hell/i;
    re = /llo/i;

//meta character
     
    re = /^hello/i;///must start with
    re = /hello$/i;//must  end with
    re = /^hello$/;// must start and ending 
    re = /^h.llo$/;
    re = /h.llo/;
    re = /h*llo/;//0 more time
    re = /he?llo/;//optional
    re = /hello?/;



    str ="Hello World hello";
    str = "hello hello";
    str = "hallo"
    str = "hillo"
    str = "hillo world";
    str = "hello world"
    str = "hillo"
    str = "hohsdgfcsfdgllo world"
    str = "hello"
    str = "hllo"
    str = "hello?"


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