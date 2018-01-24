function init() {
  if(location.hash == '') location.hash = "#" + "Home"; 
  showTab();
}

function openTab(evt, tab) {
  location.hash = "#" + tab;
  showTab();
}

function showTab() {
  var tab = location.hash.replace("#", "");
  
  var tabs = document.getElementsByTagName("li");
  for(var i = 0; i < tabs.length; i++) {
    if(tabs[i].innerText.replace(" ", "") == tab) {
      tabs[i].className = "active";
    } else {
      tabs[i].className = null;
    }
  }

  var content = document.getElementsByClassName("main");
  for(var i = 0; i < content.length; i++) {
     content[i].style.display = "none";
  }
  document.getElementById(tab).style.display = "block";
}