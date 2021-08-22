// Fetch API
// Fetch API uses JavaScript Promise

// console.log(window);

// Arrow Function 



document.getElementById("get-data").addEventListener('click',getData);

function getData() {
    fetch("http://api.icndb.com/jokes/random")
    //Arrow function
    .then(res=>res.json())
    .then(data =>{console.log(data);})
    .then(err =>{console.log(err);})
}

        // .then(function (res) {
        //     // console.log(res.json());
        //     return res.json();

        //  })
//          .then(function (data){
//              console.log(data);
//          })
//          .catch(function(err){
//              console.log(err);
//          })
// }