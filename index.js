import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
import Append from "./components/append.js"

// import Append from "./components/Append.js"
// let content_div = document.getElementById("content");
// content_div.innerHTML = Append()
// window.addEventListener('scroll',() => {

//     if(window.scrollY >= 50){
//         navbar_div.classList.add("active_navbar")
//         navbar_div.classList.add("active_navbar a")
//     }
//     else{
//         navbar_div.classList.remove("active_navbar")
//     }
// })
// window.onscroll = function() {myFunction()};
// var sticky = navbar_div.offsetTop;
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar_div.classList.add("sticky")
//     } else {
//         navbar_div.classList.remove("sticky");
//     }
//   }

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.5,
     spaceBetween: 10,
    speed: 400,
    centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 4000,
      },
    
  });

