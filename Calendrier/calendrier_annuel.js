let today = new Date(2021,1,11)





function calendrier(today){
    let aujourdhui = new Date()
    
    // Jours fériés 2021
    // **********************************
    const joursferies2021=[
        [1], //janvier
        [], //février
        [5], //mars
        [2,4,5], //avril
        [1,8,13,23,24], //mai
        [29], //juin
        [14], //juillet
        [15], //aout
        [], //sep
        [],  //oct
        [1,11], //nov 
        [25], //dec 
    ];
    const joursferies2022=[
        [1], //janvier
        [], //février
        [5], //mars
        [15,17,18], //avril
        [1,8,26], //mai
        [5,6,29], //juin
        [14], //juillet
        [15], //aout
        [], //sep
        [],  //oct
        [1,11], //nov 
        [25], //dec
    ]
    const jourferieannee= new Array();
    jourferieannee[2021] = joursferies2021;
    jourferieannee[2022] = joursferies2022;
    // ************************************************* 
    // Vacances 2021
    // *************************************************
    const vacances2021=[
        [1,2,3,4,5,6,7,8,9,10],  //jan
        [22,23,24,25,26,27,26], //fev
        [], //mar
        [6,7,8,9,10,11,12,13,14,15,16,17,18],  //avr
        [],  //mai
        [],  //juin
        [3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],  //juil
        [1,2,3,4,5,6,7,8],  //aout
        [13,14,15,16,17,18,19],  //sept
        [25,26,27,28,29,30,31],  //oct
        [2,3,4,5,6,7], //nov
        [13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31], //décembre
    ]

    const vacances2022=[  // ATTENTION EXEMPLE !!!! Il faut vérifier les dates
        [1,2,3,4,5,6,7,8,9,10],  //jan
        [22,23,24,25,26,27,26], //fev
        [], //mar
        [6,7,8,9,10,11,12,13,14,15,16,17,18],  //avr
        [],  //mai
        [],  //juin
        [3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],  //juil
        [1,2,3,4,5,6,7,8],  //aout
        [13,14,15,16,17,18,19],  //sept
        [25,26,27,28,29,30,31],  //oct
        [2,3,4,5,6,7], //nov
        [13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31], //décembre
    ]
    const vacances = new Array();
    vacances[2021]=vacances2021;
    vacances[2022]=vacances2022;

    // console.log('jour férié ' + jourferieannee[2022][10][0]);
    // console.log('jour férié ' + joursferies2022[4][2]);

    // *************************************
    // Fonction comparant les dates : retourne true si identique
    //-------------------------------------
    function memedate(d1,d2) {
            
        let a1 = d1.getFullYear();
        let m1 = d1.getMonth();
        let j1 = d1.getDate();

        let a2 = d2.getFullYear();
        let m2 = d2.getMonth();
        let j2 = d2.getDate();

        if (a1==a2 && m1==m2&&j1==j2){
            return true;
        }else{return false;}
    }
    //**************************************
    // console.log(' mêmes dates ? ' +  memedate(aujourdhui,today));

  

    //**************************************** */
    // retourne le mois en texte
    //--------------------------------------------
    function texte_mois (mydate){
        return mydate.toLocaleDateString('fe-FR',{
            month:'long'    
        });
    };
    //***************************************** */


    // document.getElementById('datelocalelongue').innerHTML=
    //     'On considère la date : '+datelocalelongue + 
    //     '<br>Calendrier du mois de ' + texte_mois(today);

    
    //******************************************* */
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
    //*********************************************** */

    let mois = texte_mois(today);
    console.log(mois);

    // *****************************************
    // Fonction Etat du jour : vacences, férié, etc
    // -------------
    function etat(date, jour){
        // date : de la fonction calendrier
        
        let année = date.getFullYear();
        let m = date.getMonth();


        if (jourferieannee[année][date.getMonth()].includes(jour)==true){
            return 'F'; //férié
        }
        if (vacances[année][date.getMonth()].includes(jour)==true){
            return 'V'; //vacances
        }
        if (vacances[année][date.getMonth()].includes(jour)==false &&
        jourferieannee[année][date.getMonth()].includes(jour)==false){
            return 'N'; //normal
        }
        if(jour==today.getDate()&& memedate(aujourdhui,today)==true && jourferieannee[année][date.getMonth()].includes(jour)==true){
            return 'Af';
        }
        if(memedate(aujourdhui,jour)==true &&vacances[année][date.getMonth()].includes(jour)==true){
        // if(jour==today.getDate()&& memedate(aujourdhui,today)==true &&vacances[année][date.getMonth()].includes(jour)==true){
            return 'Av';
        }else{
            //AN aujourd'hui et normal
        }
       


    }
    console.log('ETAT mois : '+texte_mois(today) +' '+ etat(today,2));



    // Remplissage du calendrier
    //----------------------------------------
    // document.getElementById('mois').innerHTML=texte_mois(today) +' '+ today.getFullYear();
    document.querySelector('.mois.'+mois).innerHTML=texte_mois(today) +' '+ today.getFullYear();


    let d = document.querySelectorAll('.jour.'+mois);
    let jour = 0;
    let pj = premierjour(today);
    let dj = dernierjour(today);
    let djp= dernierjourmoisprecedant(today);
    let contenu =0;
    // let pdj = precdernierjour(today);
    let saut=0;

    let found=false;
    let foundvac=false;
    // console.log('found :'+found)

    jour = 2-premierjour(today)
    // console.log('jour '+jour);
    if (jour==1){
        saut=-7;
    }else{
        saut=0;
    }
    

    for(var i = 0; i< d.length;i++){
        jour=i-pj+2+saut;

        //mois précédent
        //---------------
        if (jour<1){   
            contenu=djp+jour;
            // d[i].innerHTML="<div style=\"color:gray\">" + contenu + "</div>";
            d[i].innerHTML="<div class=\"autremois\">" + contenu + "</div>";
        
        }
        //mois en cours
        //--------------
        if(0<jour && jour<(dj+1)){

            switch(etat(today, jour)){
                case 'V' : 
                    d[i].innerHTML="<div class=\"vacances\">"+jour+"</div>";
                    break;
                case 'F' : 
                    d[i].innerHTML="<div class=\"ferie\">" +jour + "</div>";
                    break;
                case 'N' :
                    d[i].innerHTML=jour;
                    break;
                case 'Av' :
                    d[i].innerHTML="<div class=\"Av\">"+jour+"</div>";
                    break;
                case 'Af' :
                    d[i].innerHTML="<div class=\"Af\">"+jour+"</div>";
                    break;
                case 'An' :
                    d[i].innerHTML="<div class=\"An\">"+jour+"</div>";
                    break;
            }



            // // si c'eest les vacances
            // foundvac=vacances2021[today.getMonth()].includes(jour);
            // if (foundvac==true){
            //     d[i].innerHTML="<div class=\"vacances\">0</div>";
            // }
            
            // //Si c'est un jour férié
            // // ---------------------
            // found=jourferieannee[2021][today.getMonth()].includes(jour);    
            // if (found ==true){
            //     if(jour==today.getDate()&& memedate(aujourdhui,today)==true){
            //         d[i].innerHTML="<div class=\"ferie today\">" + jour + "</div>";
            //     }else{
            //     d[i].innerHTML="<div class=\"ferie\">" + jour + "</div>"; }
            // }else{
            //     //Si c'est aujourd'hui
            //     //-------------------
            //     if(jour==today.getDate()&& memedate(aujourdhui,today)==true){
            //         d[i].innerHTML="<div class=\"today;\">" + jour + "</div>";
            //         // d[i].innerHTML="<div style=\"box-shadow: 0 0 7px 7px #0011ff83;\">" + jour + "</div>";
            //     }else{d[i].innerHTML=jour;} 
            // }        
        }
        //mois suivant
        //-------------
        if (jour> dj){
            contenu=jour-dj;
            d[i].innerHTML="<div class=\"autremois\">" + contenu + "</div>";  
        }

    } return true;
}

 
let janvier = new Date(2021,0,1)
 console.log('calendrier statut : '+calendrier(janvier));
let février = new Date(2021,1,1)
 console.log('calendrier statut : '+calendrier(février));
let mars = new Date(2021,2,1)
 console.log('calendrier statut : '+calendrier(mars));

let avril = new Date(2021,3,1)
 console.log('calendrier statut : '+calendrier(avril));
let mai = new Date(2021,4,1)
 console.log('calendrier statut : '+calendrier(mai));
let juin = new Date(2021,5,1)
 console.log('calendrier statut : '+calendrier(juin));
let juillet = new Date(2021,6,1)
 console.log('calendrier statut : '+calendrier(juillet));
let août = new Date(2021,7,1)
 console.log('calendrier statut : '+calendrier(août));
let septembre = new Date(2021,8,1)
 console.log('calendrier statut : '+calendrier(septembre));
let octobre = new Date(2021,9,1)
 console.log('calendrier statut : '+calendrier(octobre));
let novembre = new Date(2021,10,1)
 console.log('calendrier statut : '+calendrier(novembre));
let décembre = new Date(2021,11,1)
 console.log('calendrier statut : '+calendrier(décembre));



//  Pour obtenir la date en lettre en Fr
// ********************************************
 let datelocale = today.toLocaleDateString('fr-FR');
 let datelocalelongue = today.toLocaleDateString('fr-FR',{
     weekday:'long',
     year : 'numeric',
     month:'long',
     day: 'numeric'
 });
 
