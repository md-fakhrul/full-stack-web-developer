var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);
        jsonData(data)
       
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send()


function jsonData(json_obj){
    //console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    console.log(js_obj);

    for (x in js_obj.person){
        var person = js_obj.person;
        //console.log(js_obj.person[x])
        for (y in person[x]){
            console.log(person[x][y]);
        }
    }
    

}