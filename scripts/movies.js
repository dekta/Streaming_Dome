import  navbar  from "../components/navbar.js";
console.log(navbar)
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar(); 

function slider(){
    const arr=[
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5228525/cover/1920x7701789cd01c98a4b098ff87b399b61530c3e52cc15ff174f4689cc1ebefe5b40ff.jpg",
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246147/cover/1920x77061cfc501b93f489b971525bcc03d06c2.jpg",
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227565/cover/1920x7704ce388d5a6e74dac8ad9255657da588f.jpg",
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5243021/cover/1920x770a9d390ff517b482d9e051723d481ba1c.jpg",
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5206274/cover/1920x770485283887ce04c66a91f3e5dc0e20747.jpg",
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5238458/cover/1920x77043938dce63e545c69b5c8f76f8381d18.jpg",
        "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-19144/cover/0019144cover1012146238.jpg"

    ];
    let i=0;
    let div=document.getElementById("slider_div");
    let img=document.createElement("img");
    img.src=arr[0]
    img.style.width="90%"
    div.append(img);
    i=i+1;

    setInterval(function(){
        if(i==7){
            i=0;
        }
        else{
            img.src=arr[i];
            i++
            div.append(img)
        }
    },3500)
}
slider()

const movie_data=[
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51248/portrait/1920x770cac95b31db724e7eae3dd3401aad05a2.jpg",
        name:"Dial 100",
        
    },
    
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51560/portrait/1920x770087ff5f6d15f44f98b6a27adc7130aac.jpg",
        name:"Helmet",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-369273/portrait/1920x7707c47b251e254462c80266717d90ba9be.jpg",
        name:"Silence...Can You Hear It?",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z573699/portrait/1920x77025b1b234a8ca480cae0f64c2e006f9e3.jpg",
        name:"36  Farmhouse",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z51134/portrait/1920x7705ba0721ce7f4418aa2eb3de2c6863c90.jpg",
        name:"State of Siege: Temple Attack",
       
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-0-1z562203/portrait/1920x770f86e37b3d5cd4766b4327cbb2b4608cc.jpg",
        name:"Antim: The Final Truth",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3187/portrait/1920x770d8a19e87180644a0a983d40116ef6baf.jpg",
        name:"Kori Khala",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z531922/portrait/1920x770f0c7e8ef8cbf47a8a5a8ac68dcedca73.jpg",
        name:"Jodhya Akbar",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3021/portrait/1920x7707464fcdbe7e54788aaf8031570f41c52.jpg",
        name:"Jiban Sathi",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-22/portrait/1920x770b68edeee6eed47febe62bc6035d1dc1c.jpg",
        name:"RannaGhar",
        
    },
{
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z541514/portrait/1920x770a7f0b1b166ad4c27b6ccaeb8eec085ba.jpg",
        name:"Pilu",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3252/portrait/1920x770e86f02452ead429587c85e0a3e1fbc85.jpg",
        name:"Amader Ei Poth Jodi na Sesh Hoy",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3103/portrait/1920x770f9184713291d4a60a13420e3c6bc9c27.jpg",
        name:"Aparajita Apu",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3121/portrait/1920x77026b50f0fc02f4193a1417677ec00b009.jpg",
        name:"Mithai",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3328/portrait/1920x770611fdd1bb6a842938b3bc32c09a826d8.jpg",
        name:"Sorbojaya",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3493/portrait/1920x770e95592d66bc04e4e89b807cbf6e37184.jpg",
        name:"Uma",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z587354/portrait/1920x770d654eabf22fc4471aaa4e04da5828833.jpg",
        name:"Lakki kakima",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z587360/portrait/1920x770ce1b009d79e24e6f995f91987203e1f7.jpg",
        name:"Didi Number 1",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3731/portrait/1920x770a7fc19d082c444dba4ec7aaf78e4e4cc.jpg",
        name:"DadaGiri Unlimited",
        
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_321,h_482,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-2887/portrait/1920x7704bd494eaa6f5459e9a4a9d4232cd95ca.jpg",
        name:"Jomuna Dhaki",
        
    },
   
    
    
  
]

localStorage.setItem("movies", JSON.stringify(movie_data));
let data = JSON.parse(localStorage.getItem("movies"));

function appendMovies() {
  let data_div =document.getElementById("movie_detail");
    
  data_div.innerHTML = null;
data.forEach(function (el) {
    // console.log(el)
    let div = document.createElement("div");
    div.setAttribute("class","images")
    let name = document.createElement("p");
    name.innerHTML = `Name- ${el.name}`;

    let img = document.createElement("img");
    img.id = "poster";
    img.src = el.img_url;


    div.append(img, name);
    data_div.append(div);
  });
}
appendMovies()


const latest_movie=[
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5230436/portrait/1920x770cd5550fd6fe64ed19f73339697501913a1ebe2567d824021883c08f193544046.jpg",
        name:"Tripling-Season 3",
    },

    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246147/portrait/1920x7703c6105c0047c4e98848e930ff18b4e38.jpg",
        name:"Tadka",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234688/portrait/1920x770b60b8550ec184b5eae16b5b5a3ae4579301be9f1145b4c46a2a8ea62adf5b37a.jpg",
        name:"Bimbisara",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5199975/portrait/1920x77017b071bf12e24de89ab2650e35568fae.jpg",
        name:"Mukhbir",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5250010/portrait/1920x77080d48a43c1374c8bb5ea0f857e7b153a.jpg",
        name:"Mei Hoom Moosa",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-6-4z5238217/portrait/1920x770ef5a39864c5c4f2c85e7fb77157efedc.jpg",
        name:"Five Six Seven Eight"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246218/portrait/1920x770ce7e33711cd5458cae3fe8360e5a8078.jpg",
        name:"Guru Shishyaru"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246084/portrait/1920x7706643570fad7d4b018eb8ee595ee8f66a.jpg",
        name:"Bai Ji Kuttange"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5228525/portrait/1920x7701789cd01c98a4b098ff87b399b61530c3e52cc15ff174f4689cc1ebefe5b40ff.jpg",
        name:"Raksha Bandhan"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5238929/portrait/1920x770db79ed4e5ed947ca879038eacb99074d.jpg",
        name:"Antardhaan"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227557/portrait/1920x7708e66f35ad8484172a0796c13f18922c4.jpg",
        name:"Karthikeya 2"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5245916/portrait/1920x770c0fdbd8443b64b9dbe01494470c361bb.jpg",
        name:"Amrapali"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234572/portrait/1920x7703636d7977b034f10a5def35c95ba9242.jpg",
        name:"Spider-Man:No Way Home Extended Version"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5226617/portrait/1920x770c0fb8727e1894eb3aba1cf889861317c.jpg",
        name:"Captain"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5227125/portrait/1920x770a68536cd3f1049089c07fab87c76482d.jpg",
        name:"The Gandhi Murder"
    },
      {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234581/portrait/1920x770e7575188954d4331afbc52df724a21dd.jpg",
        name:"Agantuk"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5226633/portrait/1920x770294f8b508d214358b45a1fa0beae30f5.jpg",
        name:"Lal Jose"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5215329/portrait/1920x77091eec50955ae4e4c900f95666d758e9b.jpg",
        name:"Timepass 3"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5226610/portrait/1920x7709e36e0e7f6c84b4a96289b0f321c5d43.jpg",
        name:"Minions The Rise of Guru"
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5206541/portrait/1920x7703c0a13556ad947dca8424144c3f19077b3ca91677ded48b8961a9c88d627b156.jpg",
        name:"Vikrant Rona"
    },
  

]

localStorage.setItem("latestmovies", JSON.stringify(latest_movie));
var latest_data = JSON.parse(localStorage.getItem("latestmovies"));

function appendMovies1() {
  let data_div1 =document.getElementById("latest_movie");
    
  data_div1.innerHTML = null;
  latest_data.forEach(function (el) {
    // console.log(el)
    let div = document.createElement("div");
    div.setAttribute("class","images")
    let name = document.createElement("p");
    name.innerHTML = `Name- ${el.name}`;

    let img = document.createElement("img");
    img.id = "poster";
    img.src = el.img_url;


    div.append(img, name);
    data_div1.append(div);
  });
}
appendMovies1()

const world_hits=[
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246201/portrait/1920x7702dea4d55e70f414f9e097f1e2d640628.jpg",
        name:"Kung Fu Killer",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5233998/portrait/1920x7708f0bd5fa44b34da6b6b8be4b4513ea46.jpg",
        name:"White Haired Devil lady",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234296/portrait/1920x77079f606804467477a8f845f9cb963a7aa.jpg",
        name:"Wild Cases in the Wild:The Dragon Grottoes",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5233808/portrait/1920x770e1e200eb2ab84c2bb678ee60e3dcf06b243111bceaad490a94d223a2872f5a7a.jpg",
        name:"The Python",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5246204/portrait/1920x770bb38e28e99124e90bd40b3cebb8a8321.jpg",
        name:"Kazakh Khanate:Diamond Sword",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5243021/portrait/1920x770a9d390ff517b482d9e051723d481ba1c.jpg",
        name:"The Green Inferno",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234337/portrait/1920x770ebe9a80656df44c4857284c6ced46c204f0387255abc48ee9f0cffd00744067b.jpg",
        name:"Rishing Shaolin:The Protector",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5233987/portrait/1920x770f349f780a7ec4af788748c6950b542ed.jpg",
        name:"Water Monster",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5238454/portrait/1920x7708daa60274d2d41809008ce701d2bc890.jpg",
        name:"Detective Dee:Dragon Palace",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5233653/portrait/1920x770ef882bb9002d4de0adf9c723d48d0df6.jpg",
        name:"Snow Monster",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234078/portrait/1920x770a0c3a44975b446698fdf002ce05b030b.jpg",
        name:"Marshal Mu Guiying",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234246/portrait/1920x770e3b3d9bb10d047be8953c30109924d87.jpg",
        name:"Snake",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5233982/portrait/1920x770c0b78d049dbb48a6b728580dec399d80.jpg",
        name:"Uncaged",
    },
    {
        img_url:"https://akamaividz2.zee5.com/image/upload/w_231,h_347,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234342/portrait/1920x77070cc39a58673474ab03714d40895f27f.jpg",
        name:"Savage Man",
    },
    
]


localStorage.setItem("world_hits", JSON.stringify(world_hits));
var latest_data = JSON.parse(localStorage.getItem("world_hits"));

function appendMovies2() {
  let data_div2 =document.getElementById("world_hits");
    
  data_div2.innerHTML = null;
  world_hits.forEach(function (el) {
    // console.log(el)
    let div = document.createElement("div");
    div.setAttribute("class","images")
    let name = document.createElement("p");
    name.innerHTML = `Name- ${el.name}`;

    let img = document.createElement("img");
    img.id = "poster";
    img.src = el.img_url;


    div.append(img, name);
    data_div2.append(div);
  });
}
appendMovies2()

// const 

 var  arrows = document.querySelectorAll(".next2");
var  movieLists = document.querySelectorAll("#movie_detail");



arrows.forEach((elem, i) => {    

  i
  
  var itemNumber = movieLists[i].querySelectorAll("img").length;
  var clickCounter = 0;
  if (window.length > 400) {
    
  }
  elem.addEventListener("click", function () {

    const ratio = Math.ceil(window.innerWidth / 220);
    clickCounter++;

    if (itemNumber - (5 + clickCounter)+(5-ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value -260
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  
 

  });

  
// console.log( Math.floor(window.innerWidth/240))
});



