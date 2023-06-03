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

//下から表示させる要素を指定
let $pagetop = $('.scroll');
$(window).on( 'scroll', function () {
  //スクロール位置を取得
  if ( $(this).scrollTop() < 400 ) {
    $pagetop.removeClass('isActive');
  } else {
    $pagetop.addClass('isActive');
  }
});
function next(){
    document.getElementById("all").style.display ="none";
    document.getElementById("all").style.opacity = 0;
    document.getElementById("all2").style.display ="block";
    document.getElementById("all2").style.opacity = 1;
}
function p1(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 1;
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
function p2(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 2;
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
function p3(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 3;
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
function p4(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 4;
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
function p5(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 5;
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
function p6(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 6;
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
function p7(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 7;
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
function p8(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 8;
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
function p9(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 9;
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
function p10(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 10;
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
function p11(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 11;
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
function p12(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 12;
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
function p14(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 13;
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
function p15(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 14;
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
function p16(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 15;
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
function p17(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 16;
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
function p18(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 17;
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
function p19(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 18;
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
function p20(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 19;
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
function p21(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 20;
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
function p22(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 21;
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

function p23(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 22;
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
function p24(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 23;
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

function p25(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 24;
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
function p26(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 25;
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

function p27(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 26;
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
function p28(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 27;
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

function p29(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 28;
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

function p30(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 29;
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
function p31(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 30;
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

function p32(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 31;
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

function p33(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 32;
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
function p34(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 33;
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
function p35(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 35;
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
function p36(){
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 36;
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