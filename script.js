console.log("hello world");

let contentElement = document.getElementById("0");

console.log(contentElement);

const mainContentElement = document.getElementById("main-content-area");

console.log(mainContentElement);

mainContentElement.removeChild(contentElement);

/*
for (let i = 0; i < 10; i++) {
  let elementToInsert = contentElement.cloneNode(true);
  elementToInsert.id = i;
  mainContentElement.appendChild(elementToInsert);
  console.log("element added with id: " + elementToInsert.id);
}
*/

fetchContent("/albums.json").then((data) => {
  for (let i = 0; i < data.length; i++) {
    let elementToInsert = contentElement.cloneNode(true);
    elementToInsert.id = i;

    let headingToInsert = "<h1 class='title'>" + data[i].heading + "</h1>";

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

//Magi - det taler vi om senere!!
async function fetchContent(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
