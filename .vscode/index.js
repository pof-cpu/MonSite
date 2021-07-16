   console.log("fichier javasript chargé :\'index.js\'")

//    let d=document.querySelector(".nav-link");
//    d.classList.toggle('.nav-link', false);
//    d.classList.toggle('.nav-active', false);

var span = document.querySelector("span");
var classes = span.classList;
span.onclick = function() {
  var result = classes.toggle("c");
  if(result) {
    span.textContent = "'c' added; classList is now '" + classes + "'.";
  } else {
    span.textContent = "'c' removed; classList is now '" + classes + "'.";
  }
}