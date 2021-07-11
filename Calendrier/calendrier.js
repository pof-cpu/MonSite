// let today = new Date()

let today = new Date(2021,3,10);
let aujourdhui = new Date()


function WithoutTime(dateTime) {
    let date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
}


// console.log('aujourd\'hui :' + aujourdhui);
// console.log('today :' + today);
// console.log(aujourdhui.getTime()==today.getTime());



// console.log(aujourdhui.getDate());
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

aujourdhui = WithoutTime(aujourdhui);
today = WithoutTime(today);


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
    return new Date(mydate.getFullYear(), mydate.getMonth(), 1).getDay();
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

// Jours fériés de Avril
const avrilferie=[2,4,5]



// Remplissage du calendrier
//----------------------------------------
document.getElementById('mois').innerHTML=texte_mois(today) +' '+ today.getFullYear();

let d = document.querySelectorAll(".jour");
let jour = 0;
let pj = premierjour(today);
let dj = dernierjour(today);
let djp= dernierjourmoisprecedant(today);
let contenu =0;
// let pdj = precdernierjour(today);
let saut=0;

console.log('Mois en cours ' + texte_mois(today));
console.log('premier jour ' + pj);
console.log('dernier jour ' + dj);
console.log('dernier mois précédent ' + djp);

jour = 2-premierjour(today)
console.log('jour '+jour);
if (jour==1){
    saut=-7;
}else{
    saut=0;
}
 

for(var i = 0; i< d.length;i++){
    jour=i-premierjour(today)+2+saut;

    //mois précédent
    if (jour<1){   
        contenu=djp+jour;
        d[i].innerHTML="<span style=\"color:gray\">" + contenu + "</span>";
    
    }
    //mois en cours
    if(0<jour && jour<(dj+1)){
        //aujourd'hui
        if (aujourdhui.getTime()==today.getTime()){
            if (jour==today.getDate()){
            d[i].innerHTML="<div style=\"box-shadow: 0 0 7px 7px #0011ff83;\">" + jour + "</div>";
            }else {
            d[i].innerHTML=jour;
        }
    }else{
        d[i].innerHTML=jour;
    }

    }
    //mois suivant
    if (jour> dj){
        contenu=jour-dj;
        d[i].innerHTML="<span style=\"color:gray\">" + contenu + "</span>";
        
    }
}

 console.log(datelocale);
