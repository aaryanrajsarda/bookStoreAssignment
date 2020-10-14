const addToCart = document.getElementsByClassName("add-to-cart");

for (let i = 0; i < addToCart.length; i++) {
  const item = addToCart[i];
  item.addEventListener("click", shoppingCart);
}

function shoppingCart(event) {
  event.preventDefault();
  var id = event.target.id;
  if (event.target.className.includes("fa-plus-circle")) {
    BAG.push(BOOKS.filter((book) => book.id == id)[0]);
    event.target.className = "fa fa-trash fa-lg add-to-cart float-right";
  } else {
    for (let i = 0; i < BAG.length; i++) {
      const element = BAG[i];
      if (element.id == id) {
        BAG.splice(i, 1);
        event.target.className =
          "fa fa-plus-circle fa-lg add-to-cart float-right";
      }
    }
  }
  window.sessionStorage.setItem("bag", JSON.stringify(BAG));
  console.log(JSON.parse(window.sessionStorage.getItem("bag")));
}
