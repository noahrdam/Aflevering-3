let contentElement = document.getElementById("0");

console.log(contentElement);

const mainContentElement = document.getElementById("main-content-area");

console.log(mainContentElement);

mainContentElement.removeChild(contentElement);



fetchContent("/albums.json").then((data) => {
  for (let i = 0; i < data.length; i++) {
    let elementToInsert = contentElement.cloneNode(true);
    elementToInsert.id = data[i].genre;

    let albumNameToInsert = "<h1 class='title'>" + data[i].albumName + "</h1>";
    let albumcoverToInsert = "<img src='" + data[i].albumcover + "'>";
    let artistNameToInsert = "<p class='inner-content'>" + data[i].artistName + "</p>";
    let genreToInsert = "<p class='inner-content genre'>" + data[i].genre + "</p>";
    let artistWebsiteToInsert = "<a href='"+data[i].artistWebsite+"'> <p class='inner-content'>" + data[i].artistWebsite + "</p> </a>";
    let productionYearToInsert = "<p class='inner-content'>" + data[i].productionYear + "</p>";
  

    let trackListToInsert = "<div class = 'inner-content'>"
    for (let t = 0; t < data[i].trackList.length; t++) {
      let trackNameToInsert = data[i].trackList[t].trackTitle; 
      trackListToInsert += "<p>" + trackNameToInsert + "</p>";

    }
trackListToInsert += "<div>";

    
    let htmlToInsert =
    albumNameToInsert + albumcoverToInsert + artistNameToInsert + genreToInsert + artistWebsiteToInsert + productionYearToInsert + trackListToInsert; 

    elementToInsert.innerHTML = htmlToInsert;

    mainContentElement.appendChild(elementToInsert);

    console.log("element added with id: " + elementToInsert.id);
  }
});


//Magi - det taler vi om senere!!
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
