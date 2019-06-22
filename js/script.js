function mobileOpenMenu() {
  document.getElementById("menu-content").style.display = "block";
}
function mobileCloseMenu() {
  document.getElementById("menu-content").style.display = "none";
}

function bannerIndex() {
  var date = new Date();
  if (date.getHours() > 6 && date.getHours() < 18) {
    var day = document.getElementById("image-home");
    day.classList.add("dayIndex");
  } else {
    var night = document.getElementById("image-home");
    night.classList.add("nightIndex");
  }
}

window.onload = function() {
  bannerIndex();
}
