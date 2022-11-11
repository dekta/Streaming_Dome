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
