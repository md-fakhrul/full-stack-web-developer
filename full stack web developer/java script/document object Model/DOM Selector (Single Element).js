//document.getElementId()

let val;

val = document.getElementById('document-title');
val = document.getElementById('document-title').id;




//changing Style

document.getElementById('document-title').style.background="#777";
document.getElementById('document-title').style.color="#fff";
document.getElementById('document-title').style.padding="5px";
document.getElementById('document-title').style.display="block";
document.getElementById('document-title').textContent="New text";
document.getElementById('document-title').innerHTML="<i>Fakhril</i>";

val = document.getElementById('document-title');

val.innerHTML = "<i><b>this is text</i></b>";
val.style.background="#911"



//document.querySelector()

val = document.querySelector('ol');
val = document.querySelector('ul li');

val.style.background = 'red';
val.style.background = 'White';

val = document.querySelector('li:last-child');//last child call
val = document.querySelector('li:nth-child(2)');// n  child
console.log(val);
