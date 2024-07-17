// Open & close the cart
var cart = document.querySelector(".cart");
function open_cart() {
  cart.classList.add("active");
}
function close_cart() {
  cart.classList.remove("active");
}

// Add item in cart
var all_product_json;
var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];
function addToCart(id, btn) {
  product_cart.push(all_product_json[id]);
  btn.classList.add("active");
  console.log(product_cart);
  getCartItems();
}
let count_item = document.querySelector(".count_item")
let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_heaad = document.querySelector(".price_cart_heaad")
let price_cart_total = document.querySelector(".price_cart_total");
function getCartItems() {
  let total_price = 0;
  let items_c = "";
  for (let i = 0; i < product_cart.length; i++) {
    items_c += `
            <div class="item_cart">
          <img src="${product_cart[i].img}" alt="" />
          <div class="content">
            <h4>${product_cart[i].name}</h4>
            <p class="price_cart">$${product_cart[i].price}</p>
          </div>
          <button onclick="removeFromCart(${i})" class="delete_item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
    `;
    total_price += product_cart[i].price
  }
  items_in_cart.innerHTML = items_c;

  count_item.innerHTML = product_cart.length
  price_cart_heaad.innerHTML = "$" + total_price

  count_item_cart.innerHTML = `(${product_cart.length}Item in Cart)`;
  price_cart_total.innerHTML = "$" + total_price;
  

}

function removeFromCart(index) {
  product_cart.splice(index, 1);
  getCartItems();
  let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].classList.remove("active")
    product_cart.forEach(product => {
      if (product.id == i) {
        addToCartButtons[i].classList.add("active")
      }
    })
  }
}
