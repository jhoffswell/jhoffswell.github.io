// Show the main page for the website: about & recent
function showAbout() {
  showElementsByClassName("header");
  showElementsByClassName("footer");
  document.getElementById("About").style.display = "flex";
}

// Initialize the contents for the about block
function initAbout() {
  var block = document.getElementById("publicationblock");

  // Set the publication limit
  publication_limit = 6;

  // Define important publications to always show
  important = ["ProjectSlideWow"];
  important_count = important.length;

  // Save the chosen publications for later processing
  chosenPublications = []

  // Loop through all publications to choose ones to show
  publicationNames = Object.keys(publications);
  for(var i = 0; i < publicationNames.length; i++) {

    publication_name = publicationNames[i];
    publication = publications[publication_name];

    // Check whether I am a main author on the paper
    authors = publication.authors.split(" AND ");
    author_index = authors.indexOf("Jane Hoffswell");
    main_author = author_index == 0 || author_index == 1 || author_index == authors.length - 1;

    // Check for important publications
    important_publication = important.includes(publication_name);
    if (important_publication) {
      important_count--;
    }
    extra_space = chosenPublications.length + important_count < publication_limit

    // Add the publication to the list of chosen publications
    if ((main_author || important_publication) && extra_space) {
      chosenPublications.push(publicationNames[i]);
    }

    // Stop looking after 6 publications are chosen
    if (chosenPublications.length == publication_limit) {
      break;
    }
  }

  // Reset the important count
  important_count = important.length;

  // Create the publication blocks
  for(var i = 0; i < chosenPublications.length; i++) {

    publication_name = chosenPublications[i];

    // Create the basic publication block
    var publicationBlock = getPublicationBlock(publication_name);

    // Determine if the publication is important
    important_publication = important.includes(publication_name);
    important_index = important.indexOf(publication_name);
    top_three = important_count <= 3 || important_index < 3;
    top_four = important_count <= 4 || important_index < 4;

    // Determine the class name for the publication block
    if(i + important_count < 3 || (important_publication && top_three)) {
      className = "";
    } else if (i + important_count < 4 || (important_publication && top_four)) {
      className = " small-only extra-large";
    } else {
      className = " extra-large";
    }
    publicationBlock.className += className;

    // Add the publication block to the page
    block.appendChild(publicationBlock);
  }

  var block = document.getElementById("resourceblock");
  var names = Object.keys(resources);
  for (var i = 0; i < names.length; i++) {
    block.appendChild(getResourceButton(names[i]));
  }
}