let nav = document.querySelector("nav");
let menuBtn = document.querySelector(".menu");
let closeMenuBtn = document.querySelector(".menu-close");
let overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  nav.classList.add("nav-show");
  overlay.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  nav.classList.remove("nav-show");
  overlay.style.display = "none";
});
