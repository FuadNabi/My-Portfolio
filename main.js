const navbar = document.querySelector('#nav-bar');
const closeBtn = document.querySelector('#close-btn');
const popup = document.querySelector('#popup');
const navLinks = Array.from(document.querySelectorAll('.menu-link'));

function toggleMenu() {
  popup.classList.toggle('open');
}

function openMenu() {
  toggleMenu();
}

function closeMenu() {
  toggleMenu();
}

navLinks.forEach((elem) => {
  elem.addEventListener('click', closeMenu);
});
navbar.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);