const cartContainer = document.querySelector(".cart-container");

displayCart(JSON.parse(window.sessionStorage.getItem("bag")));

function displayCart(cart) {
  console.log(JSON.parse(window.sessionStorage.getItem("bag")));
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const listItem = document.createElement("li");
    listItem.classList.add("col-12");
    listItem.innerHTML = `<div class='card'>
        <div class='card-body'>
          <div class='row'>
            <div class='col-4'>
              <img src='${item.image}' alt='${item.title}' class='img-thumbnail img-fluid card-img'>
            </div>
            <div class='col-8'>
              <h3 class='card-title'>${item.title}</h3>
              <h5 class='card-subtitle mt-1'>${item.author}</h5>
              <h5 class='card-subtitle mt-1 text-success'>Rs. ${item.price}</h5>
              <p class='card-text'>${item.synopsis}</p>
              <span><i class="fa fa-trash fa-3x remove-from-cart" id="${item.id}"></i></span>
            </div>  
          </div>
        </div>
      </div>`;
    cartContainer.appendChild(listItem);
  }
  var removeFromCart = document.getElementsByClassName("remove-from-cart");
  console.log(removeFromCart);

  for (let i = 0; i < removeFromCart.length; i++) {
    const item = removeFromCart[i];
    item.addEventListener("click", removeItemFromCart);
  }
}

function removeItemFromCart(event) {
  event.preventDefault();
  const cart = JSON.parse(window.sessionStorage.getItem("bag"));
  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    if (cartItem.id == event.target.id) {
      cart.splice(i, 1);
      delete window.sessionStorage.bag;
      window.sessionStorage.setItem("bag", JSON.stringify(cart));
    }
  }
  cartContainer.innerHTML = "";
  displayCart(cart);
}
