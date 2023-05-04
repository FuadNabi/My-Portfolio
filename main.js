import projectComponent from './src/projectComponent.js';
import projectsPopup from './src/projectsPopup.js';
import projectsData from './src/projectsData.js';
import headerLinks from './src/headerNav.js';

const navbar = document.querySelector('#nav-bar');
const closeBtn = document.querySelector('#close-btn');
const popup = document.querySelector('#popup');
const navLinks = Array.from(document.querySelectorAll('.menu-link'));
const projectsGrid = document.querySelector('.project-grid');
const projectsCont = document.querySelector('.projects-cont');
const headerNavigation = document.querySelector('.nav-cont-ul');
const startButton = document.querySelector('.start-btn');
const contact = document.querySelector('#contact-id');

const projectsListItems = projectsData.reduce((previous, current) => `${previous}${projectComponent(current)}`, '');

function toggleMenu() {
  popup.classList.toggle('open');
}

function openMenu() {
  toggleMenu();
}

function closeMenu() {
  toggleMenu();
}

function closePopup(popupCont) {
  popupCont.remove();
}

function openPopup(projectId) {
  const projectData = projectsData.find((data) => data.id === Number(projectId));
  const popupCont = document.createElement('div');

  popupCont.innerHTML = projectsPopup(projectData);

  projectsCont.appendChild(popupCont);
  const projCloseBtn = document.querySelector('.proj-close-btn');
  projCloseBtn.onclick = () => closePopup(popupCont);
}

navLinks.forEach((elem) => {
  elem.addEventListener('click', closeMenu);
});

navbar.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

projectsGrid.innerHTML = `
  ${projectsListItems}
`;

const projectPopupBtns = Array.from(document.querySelectorAll('.project-btn'));

projectPopupBtns.forEach((elem) => {
  elem.addEventListener('click', (event) => openPopup(event.currentTarget.dataset.projectId));
});

const storageKey = 'contactFormLocalData';
const formName = document.querySelector('#user-name');
const formEmail = document.querySelector('#user-email');
const formMsg = document.querySelector('#user-msg');
const formFields = document.querySelectorAll('.input-field');

function loadFromLocalData() {
  const dataLoaded = JSON.parse(localStorage.getItem(storageKey));
  formName.value = dataLoaded.name;
  formEmail.value = dataLoaded.email;
  formMsg.value = dataLoaded.msg;
}

function saveLocalData() {
  const savedData = {
    name: formName.value,
    email: formEmail.value,
    msg: formMsg.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(savedData));
}

window.onload = () => {
  loadFromLocalData();
};

formFields.forEach((field) => {
  field.addEventListener('change', () => {
    saveLocalData();
  });
});

headerNavigation.innerHTML = headerLinks();

startButton.addEventListener('click', () => {
  contact.scrollIntoView({ behavior: 'smooth' });
});