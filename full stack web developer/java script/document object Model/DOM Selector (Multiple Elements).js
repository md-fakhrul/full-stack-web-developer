// Multiselector 
// document.getElementsByClassName()
let list = document.getElementsByClassName('sample-class');
list[0].style.background = 'red';
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].textContent = 'Hello World!';


// document.getElementByTagName()

 list = document.getElementsByTagName('li');
 list = document.querySelector('ol').getElementsByTagName('li');


 let lis = Array.from(list);
 lis.forEach(function(item){
     console.log(item)

 });


 // document.querySelectorAll()
// id -> #
// classname -> .
// tagname -> nothing
 list = document.querySelectorAll('ol li');

 list.forEach(function(item){
     console.log(item);
            
 });

 let liodd = document.querySelectorAll('li:nth-child(odd)');
 let liEven = document.querySelectorAll('li:nth-child(even)');

 liodd.forEach(function(item){
     item.style.background="#119";
     item.style.color="#fff";
     
 });

 liEven.forEach(function(item){
    item.style.background="#199";
    item.style.color="#fff";
    
});

  console.log(list);
