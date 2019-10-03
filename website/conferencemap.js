var container, loader, runtime, spec, view;

// Show the page that contains the conference map
function showConferenceMap() {
  showElementsByClassName("header");
  showElementsByClassName("footer");
  updateMap();
  document.getElementById("ConferenceMap").style.display = "block";
}

// Initialize the conference map visualization elements
function initConferenceMap() {
  container = document.querySelector("#conference-map");
  loader = vega.loader();
  runtime = null;
  spec = null;
  view = null;
}

// Load the data from the specified url
function loadMap(url) {
  if(!url && view) view.finalize(), container.innerHTML = "";
  if(!url) return;

  loader
    .load(url)
    .then(updateMap)
    .catch(function(err) { console.error(err, err.stack); });
}

// Process the loaded spec and update the size of the map
function updateMap(data) {
  if(data) spec = JSON.parse(data);

  // Get the width and height of the page
  var element = document.getElementsByClassName("body")[0];
  var width = element.clientWidth;
  var height = element.clientHeight;

  // Set the width and height of the spec
  spec.width = width;
  spec.height = height;

  // Visualize the resulting map
  visualize(spec);
}

// Visualize the map using Vega and handle interactions
function visualize(spec) {
  if (view) view.finalize(); // finalize existing view
  view = new vega.View(runtime = vega.parse(spec));
  view.logLevel(vega.Warn)
    .renderer("svg")
    .initialize("#conference-map")
    .hover()
    .run();

  view.addSignalListener("selected", function(name, data) {
    if(data.tab) openTab(null, data.tab);
  })
}