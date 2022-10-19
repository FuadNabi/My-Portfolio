import projectComponent from './projectComponent.js';
import projectDesktopComponent from './projectDesktopComponent.js';
import projectsPopup from './projectsPopup.js';

const navbar = document.querySelector('#nav-bar');
const closeBtn = document.querySelector('#close-btn');
const popup = document.querySelector('#popup');
const navLinks = Array.from(document.querySelectorAll('.menu-link'));
const projectsGrid = document.querySelector('.project-grid');
const projectsGridDesktop = document.querySelector('.project-grid-desktop');
const projectsCont = document.querySelector('.projects-cont');
const projectsData = [
  {
    id: 1,
    name: 'Project name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured: 'project-1-featured',
    images: {
      mobile: ['images/Rectangle 21.jpg', 'images/Rectangle 21.jpg', 'images/Rectangle 21.jpg', 'images/Rectangle 21.jpg'],
      desktop: ['images/project-1.png', 'images/project-1.png', 'images/project-1.png', 'images/project-1.png'],
    },
    technologies: ['HTML/CSS', 'Ruby and Rails', 'Javascript'],
    liveVersionLink: '#',
    linkToSource: '#',
  },
  {
    id: 2,
    name: 'Project name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured: 'project-2-featured',
    images: {
      mobile: ['images/Rectangle 22.jpg', 'images/Rectangle 22.jpg', 'images/Rectangle 22.jpg', 'images/Rectangle 22.jpg'],
      desktop: ['images/Rectangle 22.jpg', 'images/Rectangle 22.jpg', 'images/Rectangle 22.jpg', 'images/Rectangle 22.jpg'],
    },
    technologies: ['HTML/CSS', 'Ruby and Rails', 'Javascript'],
    liveVersionLink: '#',
    linkToSource: '#',
  },
  {
    id: 3,
    name: 'Project name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured: 'project-3-featured',
    images: {
      mobile: ['images/Rectangle 23.jpg', 'images/Rectangle 23.jpg', 'images/Rectangle 23.jpg', 'images/Rectangle 23.jpg'],
      desktop: ['images/3-project.png', 'images/3-project.png', 'images/3-project.png', 'images/3-project.png'],
    },
    technologies: ['HTML/CSS', 'Ruby and Rails', 'Javascript'],
    liveVersionLink: '#',
    linkToSource: '#',
  },
  {
    id: 4,
    name: 'Project name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured: 'project-4-featured',
    images: {
      mobile: ['images/Rectangle 24.jpg', 'images/Rectangle 24.jpg', 'images/Rectangle 24.jpg', 'images/Rectangle 24.jpg'],
      desktop: ['images/4-projcet.png', 'images/4-projcet.png', 'images/4-projcet.png', 'images/4-projcet.png'],
    },
    technologies: ['HTML/CSS', 'Ruby and Rails', 'Javascript'],
    liveVersionLink: '#',
    linkToSource: '#',
  },
  {
    id: 5,
    name: 'Project name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured: 'project-5-featured',
    images: {
      mobile: ['images/Rectangle 25.jpg', 'images/Rectangle 25.jpg', 'images/Rectangle 25.jpg', 'images/Rectangle 25.jpg'],
      desktop: ['images/5-project.png', 'images/5-project.png', 'images/5-project.png', 'images/5-project.png'],
    },
    technologies: ['HTML/CSS', 'Ruby and Rails', 'Javascript'],
    liveVersionLink: '#',
    linkToSource: '#',
  },
  {
    id: 6,
    name: 'Project name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    featured: 'project-6-featured',
    images: {
      mobile: ['images/Rectangle 26.jpg', 'images/Rectangle 26.jpg', 'images/Rectangle 26.jpg', 'images/Rectangle 26.jpg'],
      desktop: ['images/project-6.png', 'images/project-6.png', 'images/project-6.png', 'images/project-6.png'],
    },
    technologies: ['HTML/CSS', 'Ruby and Rails', 'Javascript'],
    liveVersionLink: '#',
    linkToSource: '#',
  },
];
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