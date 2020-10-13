//query selectors
const booksContainer = document.querySelector(".books-container");
const bookSearch = document.getElementById("book-search");
const currentPage = document.querySelector(".current-page");
const pageTitle = document.querySelector(".page-title");

//event listeners
bookSearch.addEventListener("keyup", searchForBooks);
readURL();

//read URL
function readURL() {
  if (window.location.search == "") {
    currentPage.innerHTML = "Catalogue";
    pageTitle.innerHTML = "Catalogue";
    catalogueDisplay(BOOKS);
  } else if (window.location.search.split("=")[0].includes("author")) {
    var obj = window.location.search.split("=")[1].split("%20");
    var authorName = "";
    for (let i = 0; i < obj.length; i++) {
      const element = obj[i];
      authorName = authorName + element + " ";
    }
    authorName = authorName.replace(/\s+/g, " ").trim();
    var authorsToDisplay = BOOKS.filter((book) =>
      book.author.includes(authorName)
    );
    currentPage.innerHTML = authorName;
    pageTitle.innerHTML = authorName;
    catalogueDisplay(authorsToDisplay);
  } else if (window.location.search.split("=")[0].includes("genre")) {
    var obj = window.location.search.split("=")[1].split("%20");
    var genre = "";
    for (let i = 0; i < obj.length; i++) {
      const element = obj[i];
      genre = genre + element + " ";
    }
    genre = genre.replace(/\s+/g, " ").trim();
    var genresToDisplay = BOOKS.filter(
      (book) => book.genre.filter((item) => item.includes(genre))[0]
    );
    currentPage.innerHTML = genre;
    pageTitle.innerHTML = genre;
    catalogueDisplay(genresToDisplay);
  }
}

//catalogue display
function catalogueDisplay(books) {
  for (
    let i = 0, ctr = 0;
    i < Math.ceil(books.length / 6);
    i = i + 1, ctr = ctr + 6
  ) {
    var bookList = document.createElement("ul");
    bookList.classList.add("row", "row-content", "align-items-center");
    bookList.id = "row-" + String(i + 1);
    booksContainer.appendChild(bookList);
    for (let j = ctr; j < ctr + 6; j++) {
      var book = books[j];
      var bookListItem = document.createElement("li");
      bookListItem.classList.add("col-6", "col-md-2", "books-catalogue-div");
      bookList.appendChild(bookListItem);
      bookListItem.innerHTML = `<div class="books-catalogue-img-div"><img src="${book.image}" alt="${book.title}" class="img-thumbnail img-fluid"/></div><div class="books-catalogue-details"><span class="font-weight-bold">${book.title}</span><br /><span>${book.author}</span><br /><span class="text-success font-weight-bold">Rs. ${book.price}</span><span><i class="fa fa-plus-circle fa-lg add-to-cart float-right"></i></span></div>`;
      if (j === books.length - 1) {
        break;
      }
    }
  }
}

//book search
function searchForBooks(event) {
  event.preventDefault();
  booksContainer.innerHTML = "";
  var searchWord = bookSearch.value;

  var titlesToDisplay = BOOKS.filter((book) =>
    book.title.toLowerCase().includes(searchWord.toLowerCase())
  ).sort((a, b) => {
    if (
      a.title.toLowerCase().indexOf(searchWord.toLowerCase()) <
      b.title.toLowerCase().indexOf(searchWord.toLowerCase())
    ) {
      return -1;
    } else if (
      a.title.toLowerCase().indexOf(searchWord.toLowerCase()) >
      b.title.toLowerCase().indexOf(searchWord.toLowerCase())
    ) {
      return 1;
    } else {
      return 0;
    }
  });

  var publishersToDisplay = BOOKS.filter((book) =>
    book.publisher.toLowerCase().includes(searchWord.toLowerCase())
  );

  var genresToDisplay = BOOKS.filter(
    (book) =>
      book.genre.filter((genre) =>
        genre.toLowerCase().includes(searchWord.toLowerCase())
      )[0]
  );

  var authorsToDisplay = BOOKS.filter((book) =>
    book.author.toLowerCase().includes(searchWord.toLowerCase())
  );

  var booksToDisplay = [];
  booksToDisplay = booksToDisplay.concat(
    titlesToDisplay,
    publishersToDisplay,
    genresToDisplay,
    authorsToDisplay
  );

  catalogueDisplay(booksToDisplay);
}
