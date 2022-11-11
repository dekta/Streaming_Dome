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
// swiper()
// let line1_wrapper = document.querySelector(".swiper-wrapper")
const RandomVideos = async () => {
    try{
        const API_KEY = 'AIzaSyAvXhy8R1ZBKbFsxM1eRSteQ-PcdlQ5NU0'
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&key=${API_KEY}`)
        let data = await res.json()
        console.log(data.items)
        let actual = data.items
        Append(actual)
        console.log(actual)
    }
    catch(err){
        console.log(err)
    }
}
RandomVideos();

// const Append = (data) =>{
//     data.forEach((el)=>{
//         let div = document.createElement("div")
//         div.setAttribute("class","swiper-slide");
//         let img = document.createElement('img');
//         img.src = el.snippet.thumbnails
//         div.append(div)
//         line1_wrapper.append(div)
//     })
// }

let p=document.querySelector(".login");
p.onclick=()=>{

    console.log(1)
    window.location.href="login.html";
}