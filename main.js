import projectComponent from './src/projectComponent.js';
import projectDesktopComponent from './src/projectDesktopComponent.js';
import projectsPopup from './src/projectsPopup.js';
import projectsData from './src/projectsData.js';

const navbar = document.querySelector('#nav-bar');
const closeBtn = document.querySelector('#close-btn');
const popup = document.querySelector('#popup');
const navLinks = Array.from(document.querySelectorAll('.menu-link'));
const projectsGrid = document.querySelector('.project-grid');
const projectsGridDesktop = document.querySelector('.project-grid-desktop');
const projectsCont = document.querySelector('.projects-cont');

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
  <h1 class="projects-h1">
    Projects
  </h1>
  ${projectsListItems}
`;

projectsGridDesktop.innerHTML = `
  <div class="project-large-item">
    <h1 class="projects-desktop-h1">
      Projects
    </h1>
  </div>
  ${projectDesktopComponent(projectsData[0], 'large')}
  ${projectDesktopComponent(projectsData[1], 'small')}
  <div class="grid-background">
  </div>
  ${projectDesktopComponent(projectsData[2], 'small')}
  ${projectDesktopComponent(projectsData[3], 'small')}
  ${projectDesktopComponent(projectsData[4], 'medium')}
  <div class="grid-background-2">
  </div>
  <div class="grid-background-3">
  </div>
  <div class="grid-background-4">
  </div>
  ${projectDesktopComponent(projectsData[5], 'small')}
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