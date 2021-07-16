   console.log("fichier javasript chargé :\'index.js\'")

//    let d=document.querySelector(".nav-link");
//    d.classList.toggle('.nav-link', false);
//    d.classList.toggle('.nav-active', false);

var navlink = document.querySelector(".nav-link");

var burger = document.querySelector(".burger");

burger.addEventListener('click',()=>{
    console.log('ok');
    navlink.classList.toggle('not-visible');
})

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");

item1.onclick=function(){
    location.href="index.html";
};
item2.onclick=function(){
    location.href="python.html";
};
// item2.addEventListener('mouseover',()=>{
//     item2.classList.toggle('survole');
// });
