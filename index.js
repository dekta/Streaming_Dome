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


const user=()=>{
  let otp_num=localStorage.getItem("otp_number");
    console.log(otp_num);

    let appending=document.getElementById("appending");
   
    if(otp_num!=null){
      //addlogo("https://cdn-icons-png.flaticon.com/128/3059/3059416.png");
      document.querySelector(".login").style.display="none";

      let image_div=document.getElementById("login");
      // let image=document.createElement("img");

      // image.style.width="40px";
      // image.style.height="40px";
      // image.style.borderRadius="25px"
      // image.src="https://www.shutterstock.com/image-vector/contacts-icon-vector-sign-on-600w-1260487123.jpg";


      // image_div.append(image);
      let span=document.createElement("span");
      span.setAttribute("class","material-symbols-outlined");
      span.innerText="person";
      span.style.color="white"
      span.style.backgroundColor="#3c3d3c";
      span.style.padding="5px";
      span.style.borderRadius="25px"
      span.style.marginTop="6px"
      image_div.append(span);


      
    }
}
user();

// const addlogo=()=>{
//   let image_div=document.getElementById("login");
//   let image=document.createElement("img");
//   image.src="https://cdn-icons-png.flaticon.com/128/3059/3059416.png";
//   //image.src=el;

//   image_div.append(image);

// }
// addlogo();
