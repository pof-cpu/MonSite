console.log("fichier javasript chargé : " + File.name);

//    let d=document.querySelector(".nav-link");
//    d.classList.toggle('.nav-link', false);
//    d.classList.toggle('.nav-active', false);

var navlink = document.querySelector(".navbar");

// var burger = document.querySelector(".burger");

// burger.addEventListener('click',()=>{
//     console.log('ok');})
// navlink.classList.toggle('not-visible');


let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");

item1.onclick=function(){
    window.open("index.html");
};
item2.onclick=function(){
    // location.href="meteo.html";
    window.open("meteo.html");
};
item3.onclick=function(){
  window.open("javascript.html");
};
item4.onclick=function(){
  window.open("../test/Menu déroulant/test_menu_deroulant.html");
};
item5.onclick=function(){
  window.open("../test/Menu déroulant2/menu_deroulant2.html");
};
// item2.addEventListener('mouseover',()=>{
//     item2.classList.toggle('survol');
// });
