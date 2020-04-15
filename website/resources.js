// Show the page that contains the curriculum vitae
function showResources() {
  document.getElementById("Resources").style.display = "flex";
}

// Initialize the list of resources
function initResources() {
  var resblock = document.getElementById("resblock");

  var names = Object.keys(resources);
  for (var i = 0; i < names.length; i++) {
    var block = getResourceBlock(names[i]);
    resblock.appendChild(block);
  }
}

function getResourceButton(name) {
  var info = resources[name];
  var options = {class: "resource", href: info.link};
  var div = createElement("a", options);
  div.innerHTML = name + "<span class='fa fa-" + info.icon + "'/>";
  return div;
}

function getResourceBlock(name) {
  var info = resources[name];

  var div = createElement("a", {class: "resource", "href": info.link});
  createResImageBlock(div, info, name);
  
  var content = createElement("div");
  div.appendChild(content);

  createResTitleBlock(content, info, name);
  createResTextBlock(content, info);
  createResDateBlock(content, info);

  return div;
}

function createResImageBlock(div, info, name) {
  var options = {class: "link", href: info.link, src: info.thumbnail};
  div.appendChild(createElement("img", options));
}

function createResTitleBlock(div, info, name) {
  var options = {class: "title link", href: info.link};
  var title = createElement("a", options, name);
  var span = createResIconBlock(title, info);
  div.appendChild(title);
}

function createResIconBlock(div, info) {
  var options = {class: "fa fa-" + info.icon};
  div.appendChild(createElement("span", options));
}

function createResTextBlock(div, info) {
  var options = {class: "text"};
  div.appendChild(createElement("p", options, info.description));
}

function createResDateBlock(div, info) {
  var options = {class: "date"};
  var text = "Last Updated: " + info.date;
  div.appendChild(createElement("p", options, text));
}