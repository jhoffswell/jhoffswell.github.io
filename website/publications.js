// Show the page that lists publications
function showPublications() {
  showElementsByClassName("header");
  showElementsByClassName("footer");
  document.getElementById("Publications").style.display = "flex";
}

// Initialize the list of publications
function initPublications() {
  var pubsblock = document.getElementById("pubsblock");
  var workblock = document.getElementById("workblock");

  var names = Object.keys(publications);
  for (var i = 0; i < names.length; i++) {
    var info = publications[names[i]];
    var block = getPublicationListBlock(names[i]);
    ((info.type == "paper") ? pubsblock : workblock).appendChild(block);
  }
}

function getPublicationListBlock(name, includeLinks) {
  if(includeLinks == undefined) includeLinks = true;
  var info = publications[name];
  var div = createElement("div", {class: "publication"});

  createPubImageBlock(div, info, name);   // Paper thumbnail

  // Create a div to hold the paper info
  var paper = createElement("div", {class: "paper"});
  div.appendChild(paper);

  // Fill in the paper information
  createPubTitleBlock(paper, info, name); // Paper title
  createPubAuthorBlock(paper, info);      // Paper authors
  createPubLongVenueBlock(paper, info);   // Paper venue (long)

  // Add links according if specified
  if(includeLinks) createPubLinksBlock(paper, info, name);

  return div;
}

function createPubImageBlock(div, info, name) {
  var options = {
    class: "link", 
    href: "#" + name, 
    src: info.thumbnail, 
    onclick: "openTab(event,'" + name + "')"};
  div.appendChild(createElement("img", options));
}

function createPubTitleBlock(div, info, name) {
  var options = {
    class: "title link",
    href: "#" + name,
    onclick: "openTab(event,'" + name + "')"};
  var content = info.title + ".";
  var title = createElement("p", options, content);
  div.appendChild(title);
}

function createPubAuthorBlock(div, info) {
  var options = {class: "authors"};
  var content = getAuthorsHTML(info.authors) + ".";
  var authors = createElement("p", options, content);
  div.appendChild(authors);
}

function createPubShortVenueBlock(div, info) {
  var options = {class: "venue"};
  var content =  " " + info.conference + " " + info.year + ".";
  div.appendChild(createElement("p", options, content));
}

function createPubLongVenueBlock(div, info) {
  var options = {class: "venue"};
  var content = " " + info.booktitle + ", " + info.year + ".";
  div.appendChild(createElement("p", options, content));
}

function createPubLinksBlock(div, info, name) {
  div.appendChild(createElement("p", {style: "color:gray"}, " | "));
  div.appendChild(createElement("a", {class: "pdf", href: info.paper}, "PDF"));
  div.appendChild(createElement("p", {style: "color:gray"}, " | "));

  var options = {
    class: "link bibtex-text noselect",
    onclick: "showBibTeX(event, '" + name + "')"};
  div.appendChild(createElement("a", options, "BibTeX"));
}

function getAuthorsHTML(authors) {
  var ME = "Jane Hoffswell";
  var authors = authors.split(" AND ");
  var string = " ";
  for (var i = 0; i < authors.length; i++) {
    string += (authors[i] == ME) ? "<span class='jane'>" + ME + "</span>" : authors[i];
    string += (i < authors.length - 1)  ? ", " : "";
  }
  return string;
}

function getBibTeXString(info) {
  var str = "@inproceedings{";
  str += info.id + ",\n";
  str += "  title = {" + info.title + "},\n";
  str += "  author = {" + info.authors + "},\n";
  str += "  booktitle = {" + info.booktitle + "},\n";
  str += "  year = {" + info.year + "},\n";
  str += "  url = {" + info.url + "},\n";
  str += "}";
  return str;
}

function showBibTeX(evt, type) {
  var loc = location.hash;
  var src = evt.srcElement;
  var classname = src.className;
  var divid = "BibTeX-" + type + "-" + loc;

  if(classname.indexOf("selected") !== -1) {
    src.className = classname.replace(" selected", "");
    src.parentNode.removeChild(document.getElementById(divid));
  } else {
    src.className += " selected";
    var div = createElement("div", {class: "bibtex", id: divid});
    src.parentNode.append(div);

    // Add the bibtex contents
    div.append(createElement("pre", null, getBibTeXString(publications[type])));
  }
}