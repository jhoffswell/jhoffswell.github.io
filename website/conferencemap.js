var container, loader, runtime, spec, view;

// Show the page that contains the conference map
function showConferenceMap() {
  showElementsByClassName("header");
  showElementsByClassName("footer");
  document.getElementById("ConferenceMap").style.display = "block";
}

function renderMap() {
  var view;

  fetch('website/resources/data/map.vg.json')
    .then(res => res.json())
    .then(spec => updateSize(spec))
    .then(spec => render(spec))
    .then(view => addListener(view))
    .catch(err => console.error(err));

  function render(spec) {
    view = new vega.View(vega.parse(spec), {
      renderer:  'canvas',
      container: '#conference-map',
      hover:     true
    });
    return view.runAsync();
  }

  function addListener(view) {
    view.addSignalListener("selected", function(name, data) {
      if(data.tab) openTab(null, data.tab);
    })
  }

  function updateSize(spec) {
    var element = document.getElementsByClassName("body")[0];
    var width = element.clientWidth;
    var height = element.clientHeight - 10;
    spec.width = width;
    spec.height = height;
    return spec;
  }
  
}