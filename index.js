first = 0;
wn = 0;
ws = '';
dir = 0;
function start(){
    size = screen.width;
    if(size < 760){
        location.href = "index2.html";
    }
}
function load2(){
    document.getElementById("direction").style.display = "block";
    document.getElementById("direction").style.opacity = 1;
    document.getElementById("showname").innerHTML = ws;
    document.getElementById("showname").style.display = "block";
    document.getElementById("showname").style.opacity = 1;
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
     if(first == 1){
     document.getElementById("d").remove();
     }
     first = 1;
     text = "<div id="+"\""+"d"+"\""+"class="+"\""+"dd"+"\""+"></div>";
     dd.insertAdjacentHTML("beforeend",text);
     for(var a=0;a<last;a++){
        text = "https://matsuoka18.github.io/grandparents/pic/"+jsondata[a]+".jpg";
        console.log(text);
        textdata = "<img src="+"\""+text+"\""+">";
        console.log(textdata);
        d.insertAdjacentHTML("beforeend",textdata);

        
        // 画像のURL
const imageUrl = text;

// 画像の向きを取得する関数
async function getImageOrientation(imageUrl) {
  const image = new Image();
  image.src = imageUrl;

  await image.decode();

  const orientation = image.width > image.height ? 'landscape' : 'portrait';
  return orientation;
}

// 画像の向きを取得して表示する例
getImageOrientation(imageUrl)
  .then((orientation) => {
    console.log('Image orientation:', orientation);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


     }
     loadings();
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
    loading();
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
    if(wn == 1){
       ws = "旧松尾邸";
       setTimeout(load2,2000);
    }else if(wn == 2){

    }else if(wn == 3){

    }


}
function p2(){
    loading();
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
    if(wn == 1){
        ws = "八ヶ岳";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p3(){
    loading();
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
    if(wn == 1){
        ws = "西鎌倉幼稚園";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p4(){
    loading();
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
    if(wn == 1){
        ws = "西鎌倉小学校";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p5(){
    loading();
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
    if(wn == 1){
        ws = "新松尾邸";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p6(){
    loading();
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
    if(wn == 1){
        ws = "スキー場";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p7(){
    loading();
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
    if(wn == 1){
        ws = "ははその森";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p8(){
    loading();
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
    if(wn == 1){
        ws = "場所不明";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p9(){
    loading();
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
    if(wn == 1){
        ws = "羽田空港";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p10(){
    loading();
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
    if(wn == 1){
        ws = "旧旧松尾邸";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p11(){
    loading();
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
    if(wn == 1){
        ws = "観泉寺幼稚園";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p12(){
    loading();
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
    if(wn == 1){
        ws = "井の頭幼稚園";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p14(){
    loading();
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
    if(wn == 1){
        ws = "結婚式";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p15(){
    loading();
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
    if(wn == 1){
        ws = "消防博物館";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p16(){
    loading();
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
    if(wn == 1){
        ws = "吉祥寺周辺";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p17(){
    loading();
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
    if(wn == 1){
        ws = "東京おもちゃ美術館";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p18(){
    loading();
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
    if(wn == 1){
        ws = "トトロの森";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p19(){
    loading();
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
    if(wn == 1){
        ws = "祖父母家（父）";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p20(){
    loading();
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
    if(wn == 1){
        ws = "祖父母家（母）";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p21(){
    loading();
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
    if(wn == 1){
        ws = "駅・車内";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p22(){
    loading();
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
    if(wn == 1){
        ws = "浅草など";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}

function p23(){
    loading();
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
    if(wn == 1){
        ws = "東京のプール";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p24(){
    loading();
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
    if(wn == 1){
        ws = "鎌倉";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}

function p25(){
    loading();
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
    if(wn == 1){
        ws = "江ノ島";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p26(){
    loading();
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
    if(wn == 1){
        ws = "辻堂海浜公園";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}

function p27(){
    loading();
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
    if(wn == 1){
        ws = "鎌倉芸術館";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p28(){
    loading();
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
    if(wn == 1){
        ws = "動物園";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}

function p29(){
    loading();
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
    if(wn == 1){
        ws = "森永辻堂工場";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}

function p30(){
    loading();
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
    if(wn == 1){
        ws = "サッカー";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p31(){
    loading();
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
    if(wn == 1){
        ws = "小田原の公園";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}

function p32(){
    loading();
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
    if(wn == 1){
        ws = "ディズニー";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}

function p33(){
    loading();
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
    if(wn == 1){
        ws = "伊豆";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p34(){
    loading();
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
    if(wn == 1){
        ws = "東京都美術館・上野動物園";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p35(){
    loading();
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
    if(wn == 1){
        ws = "国立科学博物館";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p36(){
    loading();
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
    if(wn == 1){ミュージアム
        ws = "ドラえもんミュージアム";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p37(){
    loading();
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 37;
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
    if(wn == 1){
        ws = "品川アクアパーク";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p38(){
    loading();
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 38;
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
    if(wn == 1){
        ws = "日産車体";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function p39(){
    loading();
    url = "https://script.google.com/macros/s/AKfycbzpMEmB0nhtWY1g0af1GQOIbUvm81PD7q4ndHsKD89YzlS05Glr5PLa5fOOkry_PqY/exec";
    n = 39;
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
    if(wn == 1){
        ws = "ムーミン展";
        setTimeout(load2,2000);
     }else if(wn == 2){
 
     }else if(wn == 3){
 
     }
}
function place(){
    document.getElementById("show").innerHTML = "Place";
    document.getElementById("show").style.display = "block";
    document.getElementById("show").style.opacity = 1;
    document.getElementById("div").style.display = "block";
    document.getElementById("div").style.opacity = 1;
    wn = 1;
}
function people(){
    document.getElementById("show").innerHTML = "People";
    document.getElementById("show").style.display = "block";
    document.getElementById("show").style.opacity = 1;
    document.getElementById("div").style.display = "block";
    document.getElementById("div").style.opacity = 1;
    wn = 2;
}
function eventt(){
    document.getElementById("show").innerHTML = "Event";
    document.getElementById("show").style.display = "block";
    document.getElementById("show").style.opacity = 1;
    document.getElementById("div").style.display = "block";
    document.getElementById("div").style.opacity = 1;
    wn = 3;
}
let time;
function loading(){

        time = setInterval(function(){
            $(".direction").animate({
                opacity:0
            },{
                'duration':1000
            })
            $(".direction").animate({
                opacity:1
            },{
                'duration':0
            })
        },1000)
    }

function loadings(){
    clearInterval(time)
}