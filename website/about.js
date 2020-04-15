// Show the main page for the website: about & recent
function showAbout() {
  showElementsByClassName("header");
  showElementsByClassName("footer");
  document.getElementById("About").style.display = "flex";
}

// Initialize the contents for the about block
function initAbout() {
  var block = document.getElementById("publicationblock");
  block.appendChild(getPublicationBlock("Responsive"));
  block.appendChild(getPublicationBlock("SetCoLa"));
  block.appendChild(getPublicationBlock("CodeAugmentations"));

  var block = document.getElementById("resourceblock");
  var names = Object.keys(resources);
  for (var i = 0; i < names.length; i++) {
    block.appendChild(getResourceButton(names[i]));
  }
}