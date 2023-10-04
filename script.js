
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

