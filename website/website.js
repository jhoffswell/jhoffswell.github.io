var container, loader, renderType, runtime, spec, view;

function init() {
  if(location.hash == '') location.hash = '#' + 'Home'; 

  // Create the visualization
  container = document.querySelector('#conference-map');
  loader = vega.loader();
  renderType = 'svg';
  runtime = null;
  spec = null;
  view = null;

  load('website/resources/data/map.vg.json');

  showTab();
}

function openTab(evt, tab) {
  location.hash = '#' + tab;
  showTab();
}

function showTab() {
  var tab = location.hash.replace('#', '');
  
  var tabs = document.getElementsByClassName('menu');
  for(var i = 0; i < tabs.length; i++) {
    if(tabs[i].innerText.replace(/ /g, '') == tab) {
      tabs[i].className = 'menu selected';
    } else {
      tabs[i].className = 'menu';
    }
  }

  var content = document.getElementsByClassName('main');
  for(var i = 0; i < content.length; i++) {
     content[i].style.display = 'none';
  }
  document.getElementById(tab).style.display = 'block';

  if(tab==='ConferenceMap' && spec) {
    // Update the width and height
    var width = document.getElementById('ConferenceMap').clientWidth;
    var height = document.getElementById('ConferenceMap').clientHeight;

    spec.width = width;
    spec.height = height;

    visualize(spec);
  }
}

/*************************** Paper Details ****************************/

var preContents = {
  'CodeAugmentations': '@inproceedings{2017-code-augmentations,\n  title = {Augmenting Code with In Situ Visualizations to Aid Program Understanding},\n  author = {Jane Hoffswell AND Arvind Satyanarayan AND Jeffrey Heer},\n  booktitle = {ACM Human Factors in Computing Systems (CHI)},\n  year = {2018},\n  url = {https://homes.cs.washington.edu/~jhoffs/papers/2018-AugmentingCode-CHI.pdf},\n}',
  'Triggers': '@inproceedings{2017-food-triggers,\n  title = {Supporting Patient-Provider Collaboration to Identify Individual Triggers using Food and Symptom Journals},\n  author = {Jessica Schroeder AND Jane Hoffswell AND Chia-Fang Chung AND James Fogarty AND Sean Munson AND Jasmine Zia},\n  booktitle = {ACM Computer-Supported Cooperative Work (CSCW)},\n  year = {2017},\n  url = {https://homes.cs.washington.edu/~jhoffs/papers/2017-Triggers-CSCW.pdf},\n}',
  'VegaDebugging': '@article{2016-vega-debugging,\n  title = {Visual Debugging Techniques for Reactive Data Visualization},\n  author = {Jane Hoffswell AND Arvind Satyanarayan AND Jeffrey Heer},\n  journal = {Computer Graphics Forum (Proc. EuroVis)},\n  year = {2016},\n  url = {https://homes.cs.washington.edu/~jhoffs/papers/2016-VegaDebugging-EuroVis.pdf},\n}',
  'ReactiveVega': '@article{2016-reactive-vega-architecture,\n  title = {Reactive Vega: A Streaming Dataflow Architecture for Declarative Interactive Visualization},\n  author = {Arvind Satyanarayan AND Ryan Russell AND Jane Hoffswell AND Jeffrey Heer},\n  journal = {IEEE Trans. Visualization \& Comp. Graphics (Proc. InfoVis)},\n  year = {2016},\n  url = {https://homes.cs.washington.edu/~jhoffs/papers/2015-ReactiveVega-InfoVis.pdf},\n}'
}

function showBibTeX(evt, type) {
  var loc = location.hash;
  if(evt.srcElement.className.indexOf('selected') !== -1) {
    evt.srcElement.className = evt.srcElement.className.replace(' selected', '');
    var element = document.getElementById('BibTeX-' + type + '-' + loc);
    evt.srcElement.parentNode.removeChild(element);
  } else {
    evt.srcElement.className += ' selected';
    var parent = evt.srcElement.parentNode;
    var div = document.createElement('div');
    parent.append(div);
    div.className = 'bibtex';
    div.id = 'BibTeX-' + type + '-' + loc;
    var pre = document.createElement('pre');
    div.append(pre);
    pre.innerHTML = preContents[type];
  }
}

/******************** Conference Map Visualization ********************/

function load(url) {
  if (!url) {
    if (view) view.finalize(), container.innerHTML = '';
    return;
  }

  // load vega spec, then visualize it
  loader.load(url)
    .then(function(data) {
      spec = JSON.parse(data);

      // Update the width and height
      var width = document.getElementById('ConferenceMap').clientWidth;
      var height = document.getElementById('ConferenceMap').clientHeight;

      spec.width = width;
      spec.height = height;

      visualize(spec);
    })
    .catch(function(err) {
      console.error(err, err.stack);
    });
};

function visualize(spec) {
  if (view) view.finalize(); // finalize existing view
  view = new vega.View(runtime = vega.parse(spec));
  view.logLevel(vega.Warn)
    .renderer(renderType)
    .initialize('#conference-map')
    .hover()
    .run();

  view.addSignalListener('selected', function(name, data) {
    if(data.tab) {
      openTab(null, data.tab);
    }
  })
};