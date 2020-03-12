function showDetails(tab) {
  showElementsByClassName("header");
  showElementsByClassName("footer");

  var details = document.getElementById("Details");
  details.style.display = "flex";

  // Hide all of the previous elements except for the desired tab
  var content = details.getElementsByClassName("paper-details");
  for(var i = 0; i < content.length; i++) {
    var ID = content[i].id;
    content[i].style.display = (ID == tab) ? "block" : "none";
  }
}

function initDetails() {
  Object.keys(publications).forEach(createDetailsPage);
}

function createDetailsPage(name) {
  var info = publications[name];

  // Get the details block
  var details = document.getElementById("Details");
  var block = details.getElementsByClassName("center")[0];

  // Create a new div
  var div = createElement("div", {id: name, class: "paper-details"});
  block.appendChild(div);

  createHeaderBlock(div, info);          // Create the header block
  createFigureBlock(div, info);          // Create the figure and caption
  createAbstractBlock(div, info);        // Create the abstract block
  createMaterialsBlock(div, info, name); // Create the materials block
  createCitationBlock(div, name);        // Create the citation block
}

function createHeaderBlock(div, info) {
  // Create the paper title and author list
  div.appendChild(createElement("h2", null, info.title));
  div.appendChild(createElement("h3", null, getAuthorsHTML(info.authors)));
  if(info.award) div.appendChild(createIconElement("trophy", "h3", {class: "award noselect"}, info.award));
}

function createFigureBlock(div, info) {
  // Create the container
  var container = createElement("div", {class: "figure"});
  div.appendChild(container);

  // Create the figure and caption
  container.appendChild(createElement("img", {src: info.figure}));
  container.appendChild(createElement("p", null, info.figurecaption));
}

function createAbstractBlock(div, info) {
  // Create the container
  var container = createElement("div", {class: "abstract"});
  div.appendChild(container);

  // Create the section title and abstract content
  container.appendChild(createElement("h4", null, "abstract"));
  container.appendChild(createElement("p", {class: "paper-abstract"}, info.abstract));
}

function createMaterialsBlock(div, info, name) {
  // Create the container
  var container = createElement("div", {class: "materials"});
  div.appendChild(container);

  // Create the section title
  container.appendChild(createElement("h4", null, "materials"));

  // For each listed material, create a link element and separator
  var defaults = [{name: "PDF", link: info.paper}, {name: "DOI", link: info.doi}];
  var materials = defaults.concat(info.supplemental);
  for (var i = 0; i < materials.length; i++) {
    var content = materials[i].name;
    var link = materials[i].link;
    
    // Creat the main link
    var options = {class: "link", href: link};
    container.appendChild(createElement("a", options, content));
    
    // Create the spearator
    var options = {style: "color:#B27300; display:inline;"};
    container.appendChild(createElement("p", options, " | "));
  }

  // Create the bibtex link
  var options = {
    class: "link bibtex-text noselect",
    onclick: "showBibTeX(event, '" + name + "')"};
  container.appendChild(createElement("a", options, "BibTeX"));
}

function createCitationBlock(div, name) {
  // Create the container
  var container = createElement("div", {class: "citation"});
  div.appendChild(container);

  // Create the section title and citation
  container.appendChild(createElement("h4", null, "citation"));
  container.appendChild(getPublicationBlock(name, false));
}