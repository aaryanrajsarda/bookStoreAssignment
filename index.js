const authorImg = document.getElementsByClassName("author-img");
const emojiImg = document.getElementsByClassName("emoji");
const signInButton = document.getElementById("sign-in");

for (let i = 0; i < authorImg.length; i++) {
  const author = authorImg[i];
  author.addEventListener("click", searchByAuthor);
}

for (let i = 0; i < emojiImg.length; i++) {
  const genre = emojiImg[i];
  genre.addEventListener("click", searchByGenre);
}

signInButton.addEventListener("submit", login);

function searchByAuthor(event) {
  event.preventDefault();
  var authorName = this.alt;
  window.location.href =
    window.location.protocol +
    "//" +
    window.location.hostname +
    ":" +
    window.location.port +
    "/catalogue.html?author=" +
    authorName;
}

function searchByGenre(event) {
  event.preventDefault();
  var genre = this.dataset.genre;
  window.location.href =
    window.location.protocol +
    "//" +
    window.location.hostname +
    ":" +
    window.location.port +
    "/catalogue.html?genre=" +
    genre;
}

function login(event) {
  event.preventDefault();
  console.log(event.target);
}
