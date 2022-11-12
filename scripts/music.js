
// import navbar

import  navbar  from "../components/navbar.js";
console.log('navbar',navbar)

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar(); 

import footer from"../components/footer.js";
let footer_div=document.getElementById("footer")
footer_div.innerHTML=footer()

let home = document.getElementById("home");
home.addEventListener('click',()=>{
    console.log("me")
    window.location.replace("./index.html")
})

var music1 = JSON.parse(localStorage.getItem("music1"))
let slide = document.getElementById('m-c-1-right');

function appendmovies1(data) {
    
    let data_div = document.getElementById("m-c-1-right");
    
    data.forEach(function (el) {
        let div = document.createElement("div");
        div.className="swiper1"

        let img = document.createElement("img");
        img.src = el.img_url

        

        div.append(img);

        data_div.append(div);
    });
}

appendmovies1(music1)

// zee5 originals

var music2 = JSON.parse(localStorage.getItem("music2"))



function appendmovies2(data) {
    let data_div = document.getElementById("m-container-2");
    
    data.forEach(function (el) {
        let div = document.createElement("div");
        div.className= "swiper-slide"

        let img = document.createElement("img");
        img.src = el.img_url;
       
        div.append(img);

        data_div.append(div);
    });
}


appendmovies2(music2)

var music3 = JSON.parse(localStorage.getItem("music3"))



function appendmovies3(data) {
    let data_div = document.getElementById("m-container-3");
    
    data.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img_url

        div.append(img);

        data_div.append(div);
    });
}



appendmovies3(music3);

var music4 = JSON.parse(localStorage.getItem("music4"))

let data_div = document.getElementById("m-container-4");

function appendmovies4(data) {
 
    
    data.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img_url

        div.append(img);

        data_div.append(div);
    });
}



appendmovies4(music4);

var music5 = JSON.parse(localStorage.getItem("music5"))

function appendmovies5(data) {
    let data_div = document.getElementById("m-container-5");
    
    data.forEach(function (el) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.img_url;


        div.append(img);

        data_div.append(div);
    });
}


appendmovies5(music5)



let watchnow = document.getElementById("watch");
watchnow.onclick = () => {
    window.location.href = './musicvideo.html';
}


let card = document.getElementById("cards");
card.onclick = () => {
    window.location.href = './musicvideo.html';
}



const user=()=>{
    let otp_num=localStorage.getItem("otp_number");
      console.log(otp_num);
  
      //let appending=document.getElementById("appending");
     
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
