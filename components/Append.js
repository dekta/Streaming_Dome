
const Append1= (data) => {
    //console.log(data)
    const wrap = document.getElementById("wrap_cont-1")
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
const Append2= (data) => {
    //console.log(data)
    const wrap = document.getElementById("wrap_cont-2")
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
const Append3= (data) => {
    //console.log(data)
    const wrap = document.getElementById("wrap_cont-3")
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

export  {Append1,Append2,Append3}