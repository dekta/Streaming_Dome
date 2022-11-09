
var music1 = JSON.parse(localStorage.getItem("music1"))
let slide = document.getElementById('m-c-1-right');

function appendmovies1(data) {
    
    let data_div = document.getElementById("m-c-1-right");
    
    data.forEach(function (el) {
        let div = document.createElement("div");
        div.className="music"

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
        div.id = "cards"

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



function appendmovies4(data) {
    let data_div = document.getElementById("m-container-4");
    
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




