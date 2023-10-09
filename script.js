
function Album(albumName, artistName, artistWebsite, productionYear, trackList, genre) {
    this.albumName = albumName;
    this.artistName = artistName;
    this.artistWebsite = artistWebsite;
    this.productionYear = productionYear;
    this.trackList = trackList;
    this.genre = genre;
}


let contentElement = document.getElementById("0");

const mainContentElement = document.getElementById("main-content-area");

mainContentElement.removeChild(contentElement);


fetchContent("/albums.json").then((data) => {
    for (let i = 0; i < data.length; i++) {
        let elementToInsert = contentElement.cloneNode(true);
        elementToInsert.id = i;

        let headingToInsert = "<h1 class='title'>" + data[i].albumName + "</h1>";

        let contentToInsert = "";

        if (data[i].author == "Foo Bar") {
            contentToInsert = "<p class='inner-content'>CENSORED</p>";
        } else {
            contentToInsert = "<p class='inner-content'>" + data[i].content + "</p>";
        }

        let authorToInsert = "<p class='author'>" + data[i].author + "</p>";

        if (data[i].author == "John Doe") {
            authorToInsert = "<p class='author'>Annonymous</p>";
        }

        let contactToInsert =
            "<p class='contact'>" +
            "<a href='mailto:" +
            data[i].email +
            "'>" +
            data[i].email +
            "</a>" +
            "</p>";

        let htmlToInsert =
            headingToInsert + contentToInsert + authorToInsert + contactToInsert;

        elementToInsert.innerHTML = htmlToInsert;

        mainContentElement.appendChild(elementToInsert);

        console.log("element added with id: " + elementToInsert.id);
    }
});

//Magi - (Lånt fra Thomas)
async function fetchContent(url) {
    let request = await fetch(url);
    let json = await request.json();
    return json;
}