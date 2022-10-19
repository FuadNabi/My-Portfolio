function projectTechnologies(technologies) {
  let result = '';
  technologies.forEach((tech) => {
    result = `${result}<li class="proj-popup-li">${tech}</li>\n`;
  });
  return result;
}
function projectImages(images) {
  let result = '';
  images.forEach((image) => {
    result = `${result}<img src="${image}" alt="">\n`;
  });
  return result;
}
export default (projectData) => `
  <div class="proj-popup">
    <div class="proj-popup-background">
      <button class="proj-close-btn">
      <img src="images/Union.png" alt="">
      </button>
      <h3 class="proj-popup-title">${projectData.name}</h3>
      <ul class="proj-popup-ul">
        ${projectTechnologies(projectData.technologies)}
      </ul>
      <div class="proj-popup-imgs">
        <img class="proj-main-img" src="${projectData.images.mobile[0]}" alt="">
        <div class="proj-small-imgs">
          ${projectImages(projectData.images.mobile)}
        </div>
      </div>
      <div class="popup-text-btns">
        <p class="proj-description">
          ${projectData.description}
        </p>
        <div class="popup-btns">
          <button class="proj-popup-btn"><a href="${projectData.liveVersionLink}">See live</a><img src="images/popup-live.png" alt=""></button>
          <button class="proj-popup-btn"><a href="${projectData.linkToSource}">See source</a><img src="images/popup-source.png" alt=""></button>
        </div>
      </div>
      <div class="popup-proj-movement">
        <a href="#" class="previous-project-btn movement-text"><img src="images/previous-icon.png" alt=""> Previous project</a>
        <a href="#" class="next-project-btn movement-text">Next project <img src="images/next-button.png" alt=""></a>
      </div>
    </div>
  </div>
  `;
