function projectTechnologies(technologies, size) {
  let result = '';

  technologies.forEach((tech) => {
    result = `${result}<li class="project-li ${size}-project-lang">${tech}</li>\n`;
  });

  return result;
}

export default (projectData, size) => `
  <div class="project-cont project-number-${projectData.id}">
    <img src="${projectData.images.desktop[0]}" alt="Project picture" class="project-img ${size}-project-img">
    <div class="project-info ${size}-project-info">
      <h3 class="${size}-project-name">
        Project name goes here
      </h3>
      <ul class="project-lang ${size}-project-langs">
        ${projectTechnologies(projectData.technologies, size)}
      </ul>
      <button data-project-id=${projectData.id} class="project-btn">
        See this project<i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  </div>
`;