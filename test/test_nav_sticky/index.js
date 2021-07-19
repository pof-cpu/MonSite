window.onscroll = function() {fonction_sticky()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function fonction_sticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}