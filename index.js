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
