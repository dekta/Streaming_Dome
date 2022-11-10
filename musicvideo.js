
let data = JSON.parse(localStorage.getItem('music0'))
const showClickedVideo = () => {

    
    let  videoId  = (data.video_id);
    let titleId = (data.title);
    
    console.log('data:', data);
    


    let iframe = document.createElement('iframe');

    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    iframe.width = "100%"
    iframe.height = " 100%"
    iframe.setAttribute('allowfullscreen',true);


    let songname = document.createElement("h1");
    songname.innerText = titleId
    songname.id = "title"
    

    let video_div = document.getElementById("container");
    video_div.append(iframe);
    let video_details = document.getElementById("video_details")
    video_details.append(songname)
}



let body = document.querySelector("body");
body.onload = showClickedVideo();


