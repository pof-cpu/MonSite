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

// retourne le mois en texte
function texte_mois (mydate){
    return mydate.toLocaleDateString('fe-FR',{
        month:'long'    
    });
};



document.getElementById('datelocalelongue').innerHTML=
    'On considère la date : '+datelocalelongue + 
    '<br>Calendrier du mois de ' + texte_mois(today);

// fonction retournant le 1er jour
// -------------------------------------
function premierjour(mydate){
    return mydate.getDay();
}
// fonction retournant le Dernier jour
// -------------------------------------
function dernierjour(mydate){
    return new Date(mydate.getFullYear(), mydate.getMonth()+1,0).getDate();
}
// fonction retournant le Dernier jour du mois précédant
// -------------------------------------
function dernierjourmoisprecedant(mydate){
    return new Date(mydate.getFullYear(), mydate.getMonth(),0).getDate();
}

// Remplissage du calendrier
//----------------------------------------
let d = document.querySelectorAll(".jour");
let jour = 0;
let pj = premierjour(today);
let dj = dernierjour(today);
let djp= dernierjourmoisprecedant(today);
// let pdj = precdernierjour(today);

console.log('Mois en cours ' + texte_mois(today));
console.log('premier jour ' + pj);
console.log('dernier jour ' + dj);
console.log('dernier mois précédent ' + djp);


for(var i = 0; i< d.length;i++){
    jour=i-premierjour(today)+2;
    if (jour<1){
    d[i].innerHTML=djp-(7-pj)+i+1;
    
    }
    if(0<jour && jour<(dj+1)){
        d[i].innerHTML=jour;
    }
    if (jour> dj){
        d[i].innerHTML=jour-dj;
    }
}

 console.log(datelocale);
