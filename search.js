import navbar from "./components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let search = document.getElementById("search");

search.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        let input = document.getElementById('search').value;
        console.log(input)
        searchVideos(input)
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

let data = JSON.parse(localStorage.getItem('searchvideo'))
const wrap = document.getElementById("searchvideo")
const Append= (data) => {
    wrap.innerHTML = null
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
Append(data)