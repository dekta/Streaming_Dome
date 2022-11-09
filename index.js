import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

// window.addEventListener('scroll',() => {

//     if(window.scrollY >= 50){
//         navbar_div.classList.add("active_navbar")
//         navbar_div.classList.add("active_navbar a")
//     }
//     else{
//         navbar_div.classList.remove("active_navbar")
//     }
// })
window.onscroll = function() {myFunction()};
var sticky = navbar_div.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar_div.classList.add("sticky")
    } else {
        navbar_div.classList.remove("sticky");
    }
  }