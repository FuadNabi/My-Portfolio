function projectTechnologies(technologies) {
  let result = '';

  technologies.forEach((tech) => {
    result = `${result}<li class="project-language">${tech}</li>\n`;
  });

  return result;
}

export default (projectData) => `
    <div class="project-cont project-number-${projectData.id}">
      <img src="${projectData.image}" alt="Project picture" class="project-img">
      <div class="project-info">
        <h3 class="project-name">
          ${projectData.name}
        </h3>
        <ul class="project-languages">
          ${projectTechnologies(projectData.technologies)}
        </ul>
        <button data-project-id=${projectData.id} class="project-btn">
          See this project <span class="project-btn-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
        </button>
      </div>
    </div>
  `;
