document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    navigation: {
      nextEl: ".next-image",
      prevEl: ".previous-image",
    },
  });

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
  const priceCount = document.querySelector(".price-count");
  const total = document.querySelector(".total");
  const orderSummary = document.querySelector(".order-summary");
  const checkoutBtn = document.querySelector(".checkout-button");
  const deleteProducts = document.querySelector(".delete-icon");

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

  deleteProducts.addEventListener("click", () => {
    cartItems = 0;
    orderSummary.style.display = "none";
    checkoutBtn.style.display = "none";
    empty.style.display = "flex";
    cartProducts.style.display = "none";
    updateCart();
  });

  const updateCart = () => {
    priceCount.textContent = `$125.00 x ${cartItems}`;
    total.textContent = `$${(cartItems * 125).toFixed(2)}`;

    if (cartItems === 0) {
      orderSummary.style.display = "none";
      checkoutBtn.style.display = "none";
      empty.style.display = "flex";
    } else {
      orderSummary.style.display = "flex";
      checkoutBtn.style.display = "block";
      empty.style.display = "none";
    }
  };

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
      return;
    } else {
      cartItems += counter;
      cartProducts.style.display = "block";
      cartProducts.textContent = cartItems;
      updateCart();
    }
  });

  cart.addEventListener("click", () => {
    if (cartDisplay.style.display === "flex") {
      cartDisplay.style.display = "none";
    } else {
      cartDisplay.style.display = "flex";
    }
  });

  updateCart();
});
