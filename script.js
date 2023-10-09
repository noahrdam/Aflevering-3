
function Album(albumName, artistName, artistWebsite, productionYear, trackList, genre) {
    this.albumName = albumName;
    this.artistName = artistName;
    this.artistWebsite = artistWebsite;
    this.productionYear = productionYear;
    this.trackList = trackList;
    this.genre = genre;
}

fetch('/albums.json')
    .then(response => response.json())
    .then(response => console.log(response));



// Eksempel på hide and show af genre
let Rock = document.getElementsByClassName("Rock")    
if(Rock.style.display === "none"){
    Rock.style.display = "block";}

else{Rock.style.display ="none"}
   

