const navbar = document.querySelector('#nav-bar');
const closeBtn = document.querySelector('#close-btn');
const popup = document.querySelector('#popup');

function toggleMenu() {
  popup.classList.toggle('open');
}

function openMenu() {
  toggleMenu();
}

function closeMenu() {
  toggleMenu();
}

navbar.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);