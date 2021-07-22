console.log('javascript chargé')

let btn =document.getElementById('btn')
// let btn =document.querySelector("#btn");
let sidebar =document.querySelector(".sidebar");

btn.onclick=function(){
    sidebar.classList.toggle('active');
}
