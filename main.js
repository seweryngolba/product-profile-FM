const hamburgerMenu = document.querySelector(".ham-menu");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".categories");
const overlay = document.querySelector(".overlay");

hamburgerMenu.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  overlay.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
});
