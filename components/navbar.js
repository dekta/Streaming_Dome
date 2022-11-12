function navbar(){
    return `<div id="left">
    <img src="./images/img.png" alt="">
    <p id="home">Home</p>
    <p id="music">Music</p>
    <p id="movie">Movies</p>
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
<input  type="text" placeholder="🔍  Search for Movies,Shows,Channels etc."  id="search">
<span class="material-symbols-outlined" id="language">translate</span>
<div id="login"><button class="login" ">Login</button></div>
<button id="byplan">Buy Plan</button>
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



  

  export default navbar




