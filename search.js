import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let data = JSON.parse(localStorage.getItem('searchvideo'))
Append(data)
const wrap = document.getElementById("searchvideo")
const Append= (data) => {
    console.log(data)
    
    data.forEach(({snippet,id:{videoId}})=>{
        //console.log(snippet)
        let div = document.createElement('div')
        div.setAttribute('class','slide')
        let thumbnail = document.createElement('img')
        thumbnail.src = snippet.thumbnails.high.url
        thumbnail.setAttribute('class','images')
        div.append(thumbnail)

        div.onclick = () => {
            let data = {
                snippet : snippet,   
                videoId:videoId,    
            };

            data = JSON.stringify(data)
            //console.log(data)
            localStorage.setItem('c_video',data)
            window.location.href = "video_detail.html"
           
        }
        wrap.append(div)

    });
   
}