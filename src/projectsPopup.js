function projectTechnologies(technologies) {
  let result = '';
  technologies.forEach((tech) => {
    result = `${result}<li class="proj-popup-li">${tech}</li>\n`;
  });
  return result;
}

export default (projectData) => `
  <div class="proj-popup">
    <div class="proj-popup-background">
      <button class="proj-close-btn">
      <img src="images/Union.png" alt="">
      </button>
      <img src="${projectData.image}" class="popup-image">
      <h3 class="proj-popup-title">${projectData.name}</h3>
      <ul class="proj-popup-ul">
        ${projectTechnologies(projectData.technologies)}
      </ul>
      <div class="popup-text-btns">
        <p class="proj-description">
          ${projectData.description}
        </p>
        <div class="popup-btns">
          <a href="${projectData.liveVersionLink}" target= "_blank" class="proj-popup-btn" >See live <span style="display: inherit;"><img src="images/popup-live.png" alt=""></span></a>
          <a href="${projectData.linkToSource}" target= "_blank" class="proj-popup-btn" >See source <span style="display: inherit;"><img src="images/popup-source.png" alt=""></span></a>
        </div>
      </div>
    </div>
  </div>
  `;
