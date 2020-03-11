function init() {
  if(location.hash == "") location.hash = "#" + "About"; 

  // Initialize the page elements
  initAbout();
  initPublications();
  initDetails();

  // Create the map visualization
  initConferenceMap();
  loadMap("website/resources/data/map.vg.json");

  // Show the page content
  showTab();
}

// Open a particular tab
function openTab(evt, tab) {
  location.hash = "#" + tab;
  showTab();
}

function showTab() {
  var tab = location.hash.replace("#", "");
  
  document.documentElement.scrollTop = document.body.scrollTop = 0;
  hideElementsByClassName("main");
  updateMenuStatus(tab);
  
  switch(tab) {
    case "About":
      showAbout();
      break;
    case "CurriculumVitae":
      showCurriculumVitae();
      break;
    case "Publications":
      showPublications();
      break;
    case "ConferenceMap":
      showConferenceMap();
      break;
    default:
      var info = publications[tab];
      if(!info) location.hash = "#About";
      if(info) showDetails(tab);
  }
}

// Update the display status of the menu items
function updateMenuStatus(tab) {
  var tabs = document.getElementsByClassName("menuitem");
  for(var i = 0; i < tabs.length; i++) {
    var content = tabs[i].textContent.replace(/\W/g, "");
    tabs[i].className = "menuitem";
    if(content == tab) tabs[i].className += " selected";
  }
}

function showElementsByClassName(classname) {
  var content = document.getElementsByClassName(classname);
  for(var i = 0; i < content.length; i++) {
    content[i].style.display = "block";
  }
}

function hideElementsByClassName(classname) {
  var content = document.getElementsByClassName(classname);
  for(var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
}

function createElement(type, options, content) {
  var element = document.createElement(type);
  if(content) element.innerHTML = content;
  Object.keys((options || {})).forEach(o => element.setAttribute(o, options[o]));
  return element;
}

function createIconElement(icon, type, options, content) {
  var span = document.createElement("a");
  span.className = "iconelement";
  if(options.href) span.setAttribute("href", options.href);

  var iconElement = createElement("span", {class: "fa fa-" + icon + " icon"});
  span.appendChild(iconElement);

  var element = document.createElement(type);
  if(content) element.innerHTML = content;
  Object.keys((options || {})).forEach(o => element.setAttribute(o, options[o]));
  span.appendChild(element);

  return span;
}