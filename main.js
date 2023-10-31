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

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  overlay.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
});

let counter = 0;

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
    cartProducts.style.display = "block";
    cartProducts.textContent = counter;
  }
});
