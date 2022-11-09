function navbar(){

    return `<div id="left">
    <img src="./images/S.png" alt="">
    <p>Home</p>
    <p>Tv Shows</p>
    <p>Movies</p>
    <div id="dropdown">
        <span class="material-symbols-outlined" class="dropdown">apps</span>
        <div class="dropdown-content">
            <p>Web Series</p>
            <p>News</p>
            <p>Eduauraa</p>
            <p>Premium</p>
            <p>Live Tv</p>
            <p>Music</p>
            <p>Rent</p>
            <p>Kids</p>
            <p>Videos</p>
            <p>Channel</p> 
        </div>
    </div>
</div>
<div id="right">
    <input  type="text" placeholder="Search for Movies,Shows,Channels etc."  id="search">
    <span class="material-symbols-outlined">translate</span>
    <span class="material-symbols-outlined">person</span>
    <button>Buy Plan</button>
    <span class="material-symbols-outlined"> menu</span>
</div>`
    
}

export default navbar;