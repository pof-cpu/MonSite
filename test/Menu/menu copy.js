console.log('Fichier javascript chargé');

let burger = document.getElementById('myBurger')
let bar = document.getElementById('myBar');

bar.style.display ="none";
bar.style.transform= 'translateY(-3cm)';

function deplace(bar){
    bar.style.transform= 'translateY(0cm)';
    bar.style.transition='1s';

}


burger.addEventListener('click',()=>{
        if(bar.style.display==="none"){
            bar.style.display = "block";
            if (bar.style.display === "block"){
                bar.style.transform= 'translateY(0cm)';
                bar.style.transition='1s';;}
        }else{bar.style.display = "none";}
    
       console.log('ok') ;
    })


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

