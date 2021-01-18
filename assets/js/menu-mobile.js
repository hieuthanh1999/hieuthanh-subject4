var menu = document.getElementById("menu");
var btn = document.getElementById("mobile");
var exit = document.getElementById("mobile-exit");
btn.onclick = function() {
  menu.style.display = "block";
  btn.style.display ="none";
  exit.style.display="block";
}
exit.onclick = function() {
  menu.style.display = "none";
  btn.style.display ="block";
  exit.style.display="none";
}
// if(exit.style.display="block")
// {
//   menu.style.display = "block";
//   exit.style.display="none";
//   btn.style.display ="none";
// }
// else{

// }