import navbar from "../components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let home = document.getElementById("home");
home.addEventListener("click",()=>
    window.location.href = "index.html"
)

const show = ()=>{
    let data = localStorage.getItem('c_video')
    let {videoId,snippet}= JSON.parse(data)
    //console.log(videoId)
    //embedding a video usinfg iframe HTML element
    let iframe = document.createElement('iframe')
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    iframe.width = '100%'
    iframe.height = '100%'
    iframe.setAttribute('allowfullscreen',true)
   
    let div = document.createElement('div')
    div.setAttribute('class',"title")
    div.innerText = snippet.title


    let v_div = document.getElementById('video_details')
    v_div.append(iframe,div)
}
show()