function projectTechnologies(technologies) {
  let result = '';

  technologies.forEach((tech) => {
    result = `${result}<li class="project-li">${tech}</li>\n`;
  });

  return result;
}

export default (projectData) => `
    <div class="project-cont project-number-${projectData.id}">
      <img src="${projectData.images.mobile[0]}" alt="Project picture" class="project-img">
      <div class="project-info">
        <h3 class="project-names">
          ${projectData.name}
        </h3>
        <ul class="project-lang">
          ${projectTechnologies(projectData.technologies)}
        </ul>
        <button data-project-id=${projectData.id} class="project-btn">
          See this project <span class="project-btn-icon"><i class="fa-solid fa-arrow-right-long"></i></span>
        </button>
      </div>
    </div>
  `;
