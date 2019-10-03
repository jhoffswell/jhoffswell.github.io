// Show the page that contains the curriculum vitae
function showCurriculumVitae() {
  hideElementsByClassName("header");
  hideElementsByClassName("footer");
  document.getElementById("CurriculumVitae").style.display = "block";
}