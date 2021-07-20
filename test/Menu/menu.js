console.log('Fichier javascript chargé');

let burger = document.getElementById('myBurger')
let bar = document.getElementById('myBar');
let navbar = document.getElementById('navbar');

bar.style.height="0em";
bar.style.transform='translateY(-3cm)';

let myVar=false;

burger.addEventListener('click',()=>{
    if(myVar == false){
    bar.style.height="100%";

    bar.style.transform='translateY(0cm)';
    bar.style.transition="1s";
    console.log('ok') ;
    myVar=true;
    }else{
        bar.style.height="0em";
        bar.style.transform='translateY(-3cm)';
        bar.style.transition="1s";
        myVar=false;
    }

});




// navbar.style.height='2em';
// bar.style.width='80%';
// console.log(window.innerWidth);

// if (window.innerWidth > 500){
//     bar.style.display ="none";
    
   
// }else{ bar.style.display ="block";    
//     }

//     burger.addEventListener('click',()=>{
//         bar.style.transform= 'translateY(0cm)';
//         }
//     );

// bar.style.transform= 'translateY(-3cm)';

// burger.addEventListener('click',()=>{
//     if(bar.style.display==="none"){
//         bar.style.display = "block";
//     }else {bar.style.display = "none";}
// });







// function deplace(bar){
//     bar.style.transform= 'translateY(0cm)';
//     bar.style.transition='1s';

// }


// burger.addEventListener('click',()=>{
//         if(bar.style.display==="none"){
//             bar.style.display = "block";
//             if (bar.style.display === "block"){
//                 bar.style.transform= 'translateY(0cm)';
//                 bar.style.transition='1s';;}
//         }else{bar.style.display = "none";}
    
//        console.log('ok') ;
//     })


// burger.addEventListener('click',()=>{
//     if (visible == false){
//         bar.style.display = "block";
//         bar.style.transform= 'translateY(0cm)';
//         bar.style.transition='1s';
//         visible = true;
//     } else{
//         bar.style.transform= 'translateY(-3cm)';
//         bar.style.transition='1s';
//         visible = false;
//     }
//    console.log('ok') ;
// })



// bar.style.display ="none";
// bar.style.transform= 'translateY(-3cm)';
// burger.addEventListener('click',()=>{
//     if(bar.style.display==="none"){
//         bar.style.display = "block";
//         bar.style.transform= 'translateY(0cm)';
//     }else{bar.style.display = "none";}

//    console.log('ok') ;
// })
