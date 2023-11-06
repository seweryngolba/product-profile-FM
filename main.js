const hamburgerMenu = document.querySelector(".ham-menu");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".categories");
const overlay = document.querySelector(".overlay");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const productQuantity = document.querySelector(".product-quanitity");
const addBtn = document.querySelector(".add-button");
const cart = document.querySelector(".cart");
const cartProducts = document.querySelector(".cart-products");
const cartDisplay = document.querySelector(".cart-display");
const empty = document.querySelector(".empty");

let counter = 0;
let cartItems = 0;

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  overlay.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
});

plus.addEventListener("click", () => {
  counter++;
  productQuantity.textContent = counter;
});

minus.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    productQuantity.textContent = counter;
  }
});

addBtn.addEventListener("click", () => {
  if (counter === 0) {
    cartProducts.style.display = "none";
  } else {
    cartItems += counter;
    cartProducts.style.display = "block";
    cartProducts.textContent = cartItems;
  }
});

cart.addEventListener("click", () => {
  if (cartDisplay.style.display === "flex") {
    cartDisplay.style.display = "none";
  } else {
    cartDisplay.style.display = "flex";
  }
});
