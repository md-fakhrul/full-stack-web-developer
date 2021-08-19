//Asynchronous programing 
//ajax = Asynchronous javascript and xml
//Get data without loading the page

document.getElementById('get_data').addEventListener('click', loadData);

function loadData(){
    //console.log('button click');

    let xhr = new XMLHttpRequest();
    
    //open

    xhr.open('GET', 'data.txt',true);
    xhr.onload = function() {
        //http statuses
        //200:"ok"
        //403:"Forbidden"
        //404:"Not Found"

        if (this.status===200){
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`

        }
    }

    xhr.send();
    //console.log(xhr);

}