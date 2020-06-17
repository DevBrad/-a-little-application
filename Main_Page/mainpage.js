const welcome_section = document.querySelector(".welcome_section");
const container_presentation = document.querySelector(".section_presentation");

function showElementOnPageLoad() {
  setTimeout(() => {
    welcome_section.style.visibility = "visible";
    welcome_section.classList.add("welcomeStyle");
  }, 2000);
  hideWelcomeElement();
}

function hideWelcomeElement() {
  setTimeout(() => {
    welcome_section.style.visibility = "hidden";
  }, 8000);
}
