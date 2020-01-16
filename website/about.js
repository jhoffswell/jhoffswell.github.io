// Show the main page for the website: about & recent
function showAbout() {
  showElementsByClassName("header");
  showElementsByClassName("footer");
  document.getElementById("About").style.display = "flex";
}

// Initialize the contents for the about block
function initAbout() {
  var block = document.getElementById("publicationblock");
  block.appendChild(getRecentPublicationBlock("Responsive"));
  block.appendChild(getRecentPublicationBlock("SetCoLa"));
  block.appendChild(getRecentPublicationBlock("CodeAugmentations"));
}

function getRecentPublicationBlock(name) {
  var info = publications[name];
  var div = createElement("div", {class: "recent"});

  createPubImageBlock(div, info, name);   // Paper thumbnail

  // Create a div to hold the paper info
  var paper = createElement("div", {class: "paper"});
  div.appendChild(paper);

  // Fill in the paper information
  createPubTitleBlock(paper, info, name); // Paper title
  createPubAuthorBlock(paper, info);      // Paper authors
  createPubShortVenueBlock(paper, info);  // Paper venue (short)
  
  paper.appendChild(createElement("p", {style: "color:gray"}, " | "));
  paper.appendChild(createElement("a", {class: "pdf", href: info.paper}, "PDF"));

  return div;
}