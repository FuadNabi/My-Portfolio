const navbar = document.querySelector("#nav-bar");
const closeBtn = document.querySelector("#close-btn");
const popup = document.querySelector("#popup");
const navLinks = Array.from(document.querySelectorAll(".menu-link"));

navbar.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);


function openMenu() {
  toggleMenu();
}

function closeMenu() {
  toggleMenu();
}

function toggleMenu() {
  popup.classList.toggle("open")
}