function navbar(){
    return `<div id="left">
    <img src="./images/S.png" alt="">
    <p id="home">Home</p>
    <p>Music</p>
    <p>Movies</p>
    <div id="dropdown">
        <span class="material-symbols-outlined" class="dropdown">apps</span>
        <div class="dropdown-content">
            <p>Web Series</p>
            <p>News</p>
            <p>Eduauraa</p>
            <p>Premium</p>
            <p>Live Tv</p>
            <p>Tv Shows</p>
            <p>Rent</p>
            <p>Kids</p>
            <p>Videos</p>
            <p>Channel</p> 
        </div>
    </div>
</div>
<div id="right">

    <button>Buy Plan</button>
    <span class="material-symbols-outlined"> menu</span>
</div>`
    
}
let navbar_div = document.getElementById("navbar");
window.onscroll = function() {myFunction()};
var sticky = navbar_div.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar_div.classList.add("sticky")
    } else {
        navbar_div.classList.remove("sticky");
    }
  }


