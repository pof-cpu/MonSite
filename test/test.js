console.log('Fichier javascrit chargé : test.js' )


const mycalendrier=document.querySelector('.calendrier');
const mytext=document.querySelector('.text');
 mycalendrier.addEventListener('click',()=>{
     console.log('ok');
     mytext.classList.toggle('is-visible');
    
 })