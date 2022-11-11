import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
import {Append1,Append2,Append3} from "./components/append.js"



const swiper = new Swiper('#swiper-1', {
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
