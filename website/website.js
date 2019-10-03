function init() {
  if(location.hash == "") location.hash = "#" + "About"; 

  // Set the size of the page
  document.documentElement.scrollTop = document.body.scrollTop = 0;
  window.onresize = function() { setDisplayType(); };
  setDisplayType();

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

// Get the width of the page
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

// Set the display type for the page
function setDisplayType() {
  document.body.className = getWidth() < 1000 ? "mobile" : "";
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