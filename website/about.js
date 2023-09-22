// Show the main page for the website: about & recent
function showAbout() {
  showElementsByClassName("header");
  showElementsByClassName("footer");
  document.getElementById("About").style.display = "flex";
}

// Initialize the contents for the about block
function initAbout() {
  var block = document.getElementById("publicationblock");

  block.appendChild(getPublicationBlock("Dupo"));
  block.appendChild(getPublicationBlock("Socrates"));
  block.appendChild(getPublicationBlock("WhatsNext"));

  var extraBlock = getPublicationBlock("DataPilot");
  extraBlock.className += " small-only";
  block.appendChild(extraBlock);  

  var block = document.getElementById("resourceblock");
  var names = Object.keys(resources);
  for (var i = 0; i < names.length; i++) {
    block.appendChild(getResourceButton(names[i]));
  }
}