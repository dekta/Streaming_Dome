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

  const webSeries = async () => {
    try{
        const API_KEY = 'AIzaSyDG7VqVCE8jDmCtRSDyfo5Vn7sqAkOvfg8'
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=webseries&key=${API_KEY}`)
        let data = await res.json()
        console.log(data.items)
        let actual = data.items
        Append1(actual)
        console.log(actual)
    }
    catch(err){
        console.log(err)
    }
}
webSeries ();
const Trending = async () => {
    try{
        const API_KEY = 'AIzaSyDG7VqVCE8jDmCtRSDyfo5Vn7sqAkOvfg8'
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=topMovies&key=${API_KEY}`)
        let data = await res.json()
        console.log(data.items)
        let actual = data.items
        Append2(actual)
        //console.log(actual)
    }
    catch(err){
        console.log(err)
    }
}
Trending ();
const songs = async () => {
    try{
        const API_KEY = 'AIzaSyDG7VqVCE8jDmCtRSDyfo5Vn7sqAkOvfg8'
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=song&key=${API_KEY}`)
        let data = await res.json()
        console.log(data.items)
        let actual = data.items
        Append3(actual)
        //console.log(actual)
    }
    catch(err){
        console.log(err)
    }
}
songs ();

let search = document.getElementById("search");

search.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        let input = document.getElementById('search').value;
        console.log(input)
        searchVideos(input)
         window.location.href = "search.html"
    }
})


const searchVideos = async () => {
    try{
        const API_KEY = 'AIzaSyDxy7-PhsyD674ArK3Io9FWAjBoujle6YI'
        let search = document.getElementById('search').value
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=${API_KEY}`) 
        let data = await response.json()
        let actual = data.items
        console.log(actual)
        localStorage.setItem("searchvideo",JSON.stringify(actual))
    }
    catch(err){
        console.log(err)
    }
}


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
      document.querySelector(".login").style.display="none";

      let image_div=document.getElementById("login");
      
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