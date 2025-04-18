// Show the page that lists publications
function showPublications() {
  showElementsByClassName("header");
  showElementsByClassName("footer");
  document.getElementById("Publications").style.display = "flex";
}

// Initialize the list of publications
function initPublications() {
  var pubsblock = document.getElementById("pubsblock");
  var currentYear;

  var names = Object.keys(publications);
  for (var i = 0; i < names.length; i++) {
    var info = publications[names[i]];

    // Do not show talks in the publication list
    if(info['type'] == 'talk') continue;
    
    // Add year subheading as needed
    var year = info.year;
    if(year != currentYear) {
      currentYear = year;
      var yearBlock = createElement("h2", {class: "year"}, year);
      pubsblock.appendChild(yearBlock);
    }

    var block = getPublicationBlock(names[i]);
    pubsblock.appendChild(block);
  }
}

function getPublicationBlock(name) {
  var info = publications[name];

  var extraTag = "";
  if(info.title.length > 85) extraTag += " longTitle";
  if(info.authors.length > 95) extraTag += " longAuthors";
  if(info.booktitle.length > 85) extraTag += " longAuthors";

  var div = createElement("div", {class: "publication" + extraTag});
  createPubImageBlock(div, info, name);   // Paper thumbnail

  // Create a div to hold the paper info
  var paper = createElement("div", {class: "paper"});
  div.appendChild(paper);

  // Fill in the talk information
  if(info['type'] == 'talk') {
    createPubTitleBlock(paper, info, name); // Paper title
    createPubShortVenueBlock(paper, info);  // Paper venue (short)
    createTalkLinksBlock(paper, info, name); // Paper links
    return div;
  }

  // Fill in the paper information
  createPubTitleBlock(paper, info, name); // Paper title
  createPubAuthorBlock(paper, info);      // Paper authors
  createPubLongVenueBlock(paper, info);   // Paper venue (long)
  createPubShortVenueBlock(paper, info);  // Paper venue (short)
  createPubLinksBlock(paper, info, name); // Paper links

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
  var options = {class: "venue short"};
  var content =  " " + info.conference + " " + info.year + ".";
  div.appendChild(createElement("p", options, content));
}

function createPubLongVenueBlock(div, info) {
  var options = {class: "venue long"};
  var content = " " + info.booktitle + ", " + info.year + ".";
  div.appendChild(createElement("p", options, content));
}

function createTalkLinksBlock(div, info, name) {
  var links = div.appendChild(document.createElement("p"));
  links.className = "links";

  // Display other supplemental information
  for (var i = 0; i < info.supplemental.length; i++) {
    var supplement = info.supplemental[i];
    var toShow = {
      "Video Preview": {"name": "Preview", "icon": "eye"},
      "Video":         {"name": "Video",   "icon": "film"},
      "Talk":          {"name": "Talk",    "icon": "film"},
      "GitHub":        {"name": "Code",    "icon": "github"},
      "Website":       {"name": "Website", "icon": "link"}
    };

    if(toShow.hasOwnProperty(supplement.name)) {
      var show = toShow[supplement.name];
      var options = {class: "link noselect", href: supplement.link};
      links.appendChild(createIconElement(show.icon, "a", options, show.name));
    }
  }

  // Display the BibTeX box
  var options = {
    class: "link bib noselect",
    onclick: "showBibTeX(event, '" + name + "')"};
  links.appendChild(createIconElement("quote-left", "a", options, "BibTeX"));
}

function createPubLinksBlock(div, info, name) {
  var links = div.appendChild(document.createElement("p"));
  links.className = "links";

  // Show the best paper award info
  if(info.award) links.appendChild(createIconElement("trophy", "a", {class: "award noselect"}, info.award));

  // Link to the PDF
  var link = info.paper;
  var options = {class: "pdf noselect", href: link};
  links.appendChild(createIconElement("file-text", "a", options, "PDF", link));

  // Link to the DOI
  var options = {class: "link noselect", href: info.doi};
  links.appendChild(createIconElement("search", "a", options, "DOI"));

  // Display other supplemental information
  for (var i = 0; i < info.supplemental.length; i++) {
    var supplement = info.supplemental[i];
    var toShow = {
      "Video Preview": {"name": "Preview", "icon": "eye"},
      "Video":         {"name": "Video",   "icon": "film"},
      "Talk":          {"name": "Talk",    "icon": "film"},
      "GitHub":        {"name": "Code",    "icon": "github"},
      "Website":       {"name": "Website", "icon": "link"}
    };

    if(toShow.hasOwnProperty(supplement.name)) {
      var show = toShow[supplement.name];
      var options = {class: "link noselect", href: supplement.link};
      links.appendChild(createIconElement(show.icon, "a", options, show.name));
    }
  }

  // Display the BibTeX box
  var options = {
    class: "link bib noselect",
    onclick: "showBibTeX(event, '" + name + "')"};
  links.appendChild(createIconElement("quote-left", "a", options, "BibTeX"));
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
  var bibtex = info.type == "thesis" ? getBibTeXThesis(info) : getBibTeXProceedings(info);
  return bibtex;
}

function getBibTeXThesis(info) {
  var str = "@PhdThesis{";
  str += info.id + ",\n";
  str += "  title = {" + info.title + "},\n";
  str += "  author = {" + info.authors + "},\n";
  str += "  school = {" + info.school + "},\n";
  str += "  year = {" + info.year + "},\n";
  str += "  doi = {" + info.doi + "},\n";
  str += "}";
  return str;
}

function getBibTeXProceedings(info) {
  var str = "@inproceedings{";
  str += info.id + ",\n";
  str += "  title = {" + info.title + "},\n";
  str += "  author = {" + info.authors + "},\n";
  str += "  booktitle = {" + info.booktitle + "},\n";
  str += "  year = {" + info.year + "},\n";
  str += "  doi = {" + info.doi + "},\n";
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
    src.parentNode.parentNode.removeChild(document.getElementById(divid));
  } else {
    src.className += " selected";
    var div = createElement("div", {class: "bibtex", id: divid});
    src.parentNode.parentNode.append(div);

    // Add the bibtex contents
    div.append(createElement("pre", null, getBibTeXString(publications[type])));
  }
}