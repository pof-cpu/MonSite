// let today = new Date()

let today = new Date(2021,0,1);

let aa = today.getFullYear();
let mm = today.getMonth();
let jj = today.getDate();

let datelocale = today.toLocaleDateString('fr-FR');
let datelocalelongue = today.toLocaleDateString('fr-FR',{
    weekday:'long',
    year : 'numeric',
    month:'long',
    day: 'numeric'
});

let aout = new Date(2021,7,1);

// document.write(datelocale);
document.getElementById('année').innerHTML=aa;
document.getElementById('datelocale').innerHTML=datelocale;
document.getElementById('datelocalelongue').innerHTML='Aujourd\'hui : '+datelocalelongue;


let aaout = aout.getFullYear();
let maout = aout.getMonth();

// Premier jour du mois en cours
// --------------------------------------
var p_jour = new Date(aa,mm,1).getDay(); 
// console.log('premier jour est '+p_jour);

// dernier jour du mois en cours
// --------------------------------------
var d_jour = new Date(aa,mm+1,0).getDay();
// console.log('dernier jour est '+d_jour);

// fonction retournant le 1er jour
// -------------------------------------
function premierjour(mydate){
    return (new Date(aa,mm,1).getDay());
}
// console.log('1er jour fonction '+ premierjour(today));

// Fonction retournant le Dernier jour du mois
// --------------------------------------
function dernierjour(mydate){
    return (new Date(aa,mm+1,0).getDate());
}
// console.log('dernier jour fonction '+ dernierjour(today));

//Fonction retournant le dernier jour du précédant mois
//---------------------------------------
function precdernierjour(mydate){
    return (new Date(aa,mm,0).getDate());
}
// console.log('mois dernier dernier jour fonction '+ precdernierjour(today));

// Remplissage du calendrier
//----------------------------------------
var d = document.querySelectorAll(".jour");
var jour = 0;
var debut = 0;
var pdj = precdernierjour(today);
var vraijour = 0;
var dj = dernierjour(today);

console.log(
    'precdernierjour '+pdj + 
    '\nDebut' + debut
    )

for(var i = 0; i< d.length;i++){
    debut = premierjour(today);
    jour = i+premierjour(today)+1-7;  
    
    if (jour<1){
        vraijour=pdj+jour;
        // console.log(jour + '|' + vraijour);
        d[i].innerHTML=vraijour;
    }   
    
    if (0<jour && jour<dj+1){
         d[i].innerHTML=i+premierjour(today)+1-7;
    }
    if (jour>dj){
        d[i].innerHTML = 35-i;
    }   

   
}

// d[i].innerHTML=i+premierjour(today)+1-7;

//    if (0< jour < dernierjour(today)-2) {
//     d[i].innerHTML=i+premierjour(today)+1-7;
//     console.log('i : ' + i + ' | jour : ' + jour + ' | '+ (precdernierjour(today) + jour));
//    }
    
 


 console.log(datelocale);
