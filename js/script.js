function mobileOpenMenu() {
  document.getElementById("menu-content").style.display = "block";
}

function mobileCloseMenu() {
 if (window.innerWidth <  767) {
  document.getElementById("menu-content").style.display = "none";
 }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

  var hide = document.getElementsByClassName("hide-navbar")[0]
    hide.classList.remove("hide-navbar-style");
}


// slide
var slideIndex = 1;
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  this.setTimeout(function(){
    showSlides(slideIndex += 1);
  }, 10000);
}

showSlides(slideIndex);
