function load2(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    fetch(url,{
    "method":"GET",
    "mode":"cors"
    })
    .then(response =>{
    if(response.ok){
    return response.json();
    }
    })
    .then(resJson =>{
    jsondata = resJson;
     last = jsondata.length;
     console.log("last:"+last);
     console.log(jsondata);
     for(var a=0;a<last;a++){
        text = "https://matsuoka18.github.io/grandparents/pic/"+jsondata[a]+".jpg";
        console.log(text);
        textdata = "<img src="+"\""+text+"\""+">";
        console.log(textdata);
        d.insertAdjacentHTML("beforeend",textdata);
     }
    })
    .catch(error=>{
    console.log("error");
    })
    }
function load(){
    n = document.getElementById("text").value;
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    number = 2;
    data = [{
        "text":n
    }]
    params = {
     "method":"post",
     "mode":"no-cors",
     "Content-Type":"application/json",
     "body":JSON.stringify(data)

    }
    fetch(url,params);
    setTimeout(load2,2000);
}