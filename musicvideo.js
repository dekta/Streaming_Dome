

const showClickedVideo = () => {

    let data = localStorage.getItem('music2')
    let { videoId } = JSON.parse(data);
    console.log('data:', data);


    let iframe = document.createElement('iframe');

    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    iframe.width = "100%"
    iframe.height = " 100%"
    iframe.setAttribute('allowfullscreen',true);
    

    let video_div = document.getElementById("container");
    video_div.append(iframe);
}

let body = document.querySelector("body");
body.onload = showClickedVideo();


