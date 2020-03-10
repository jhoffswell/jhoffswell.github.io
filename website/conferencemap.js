var container, loader, runtime, spec, view;
var visited = [];

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
  if(view) {
    view.finalize(); // finalize existing view
    return;
  }
  view = new vega.View(runtime = vega.parse(spec));
  view.logLevel(vega.Warn)
    .renderer("svg")
    .initialize("#conference-map")
    .hover()
    .run();

  setPaths();

  view.addSignalListener("point", function(name, data) {
    setPaths();
  });

  view.addSignalListener("selected", function(name, data) {
    if(data.tab) openTab(null, data.tab);
  });

  view.addSignalListener("showTravel", function(name, data) {
    getPaths();
  });
}

function getPaths() {
  if(visited.length > 0) return setPaths();

  // Get the paths
  var marks = document.getElementById("conference-map").getElementsByTagName("path");
  for (var i = 0; i < marks.length; i++) {
    var mark = marks[i];
    if(!mark.__data__) {
      continue;
    } else {
      var datum = mark.__data__.datum;
      if(datum && datum.type && datum.type == "Feature") {
        if(datum.year) visited.push(mark.__values__.d);
      }
    }
  }

  console.log("visited:", visited)
  if(visited.length > 0) setPaths();
}

function setPaths() {
  console.log("setting them...")
  var signals = ["canadaPath", "costaRicaPath", "mexicoPath"];
  var clips = document.getElementsByTagName("clipPath");
  var startingPoint = 7;
  for (var i = 0; i < clips.length; i++) {
    view.signal(signals[i], visited[i]);
    spec.signals[7+i].value = visited[i];
    clips[i].innerHTML = "<path d='" + visited[i] + "'></path>";
  }
  // view.signal("mexicoPath", visited[1]);
  visualize(spec);
  
}