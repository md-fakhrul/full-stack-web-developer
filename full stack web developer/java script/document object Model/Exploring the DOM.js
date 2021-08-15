let val;

// val = this.document;
// val = window.document;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.doctype;
val = document.domain;
val = document.characterSet;
val = document.URL;
val = document.location;
val = document.forms;
val = document.contentType; 
val = document.forms[0].method;
val = document.forms[0].action;

val = document.images;
val = document.scripts[0];
val = document.scripts[0].getAttribute('src');

links = document.links;
let linkArr = Array.from(links);

linkArr.forEach(function(link) {
    console.log(link.getAttribute('src'));

});


console.log(val);