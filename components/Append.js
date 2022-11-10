
const Append = (data) => {
    //console.log(data)
    const cont = document.getElementById('cont')
    cont.innerHTML = null;
    data.forEach(({snippet,id:{videoId}})=>{
        //console.log(snippet)
        let div = document.createElement('div')
        div.setAttribute('class','box')
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
           window.location.href ='video_details.html'
           
        }
        cont.append(div)

    });
   
}
export default Append