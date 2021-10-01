var publications = {
  "Framework": {
    "type": "paper",
    "doi": "https://doi.org/10.1109/TVCG.2021.3114814",
    "id": "2021-recommendation-framework",
    "title": "An Evaluation-Focused Framework for Visualization Recommendation Algorithms",
    "authors": "Zehua Zeng AND Phoebe Moh AND Fan Du AND Jane Hoffswell AND Tak Yeon Lee AND Sana Malik AND Eunyee Koh AND Leilani Battle",
    "booktitle": "(to appear in) IEEE Trans. Visualization \& Comp. Graphics",
    "conference": "VIS",
    "year": 2021,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/papers/2021-RecommendationFramework-VIS.pdf",
    "paper": "website/resources/papers/2021-RecommendationFramework-VIS.pdf",
    "thumbnail": "website/resources/images/recommendationFramework-thumbnail.png",
    "figure": "website/resources/images/recommendationFramework-figure.png",
    "figurecaption": "Illustration of the visualization design space and the enumeration step of a hybrid recommendation algorithm, using movies data as an example. The user's current visualization is at n0.",
    "abstract": "Although we have seen a proliferation of algorithms for recommending visualizations, these algorithms are rarely compared with one another, making it difficult to ascertain which algorithm is best for a given visual analysis scenario. Though several formal frameworks have been proposed in response, we believe this issue persists because visualization recommendation algorithms are inadequately specified from an evaluation perspective. In this paper, we propose an evaluation-focused framework to contextualize and compare a broad range of visualization recommendation algorithms. We present the structure of our framework, where algorithms are specified using three components: (1) a graph representing the full space of possible visualization designs, (2) the method used to traverse the graph for potential candidates for recommendation, and (3) an oracle used to rank candidate designs. To demonstrate how our framework guides the formal comparison of algorithmic performance, we not only theoretically compare five existing representative recommendation algorithms, but also empirically compare four new algorithms generated based on our findings from the theoretical comparison. Our results show that these algorithms behave similarly in terms of user performance, highlighting the need for more rigorous formal comparisons of recommendation algorithms to further clarify their benefits in various analysis scenarios.",
    "award": "Best Paper Honorable Mention",
    "supplemental": []
  },
  "Dissertation": {
    "type": "thesis",
    "doi": "http://hdl.handle.net/1773/45922",
    "id": "2020-hoffswell-dissertation",
    "title": "Languages and Visualization Tools for Data-Centric End-User Programming of Interactive Visualization Designs",
    "authors": "Jane Hoffswell",
    "booktitle": "PhD Thesis from the University of Washington",
    "school": "University of Washington",
    "year": 2020,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/JaneHoffswell-Dissertation.pdf",
    "paper": "website/resources/JaneHoffswell-Dissertation.pdf",
    "thumbnail": "website/resources/images/dissertation-thumbnail.png",
    "figure": "",
    "figurecaption": "",
    "abstract": "Visualizations can facilitate data exploration and communication of insights. While many tools exist to support the design of interactive visualizations, the development process relies heavily on the user's domain and programming expertise. To facilitate interactive visualization design, improved tools should better align with and enrich the user's mental model. This dissertation contributes three projects to help end-user programmers more effectively author, understand, and reuse both code and data to design interactive visualizations. To this end, this dissertation explores (1) the design of customized graph layouts, (2) the development and debugging process for interactive visualizations, and (3) the synchronization and customization of multiple visualization versions for responsive visualization design.<br><br>Across these projects, this dissertation explores how new techniques that raise the level of abstraction can help users focus on the domain-specific concepts of interest, while deferring low-level implementation details to the underlying system. A crucial step in this process is to identify and communicate actionable information to the end user. To accomplish this goal, this dissertation contributes three sets of formative interviews with potential users to identify unique challenges and design opportunities for the given domain. These interviews illustrate the disconnect between users' expectations and the functionality provided by existing systems or development workflows, and further highlight the types of tangential, low-level information that systems should hide from the user's view to improve the development process. While this information may be useful for completely or accurately representing the program behavior, such details can unnecessarily complicate the program understanding or debugging process.<br><br>Motivated by these challenges and interviews, this dissertation contributes new programming languages and program visualization tools to better help end-user programmers understand the underlying system behavior. These approaches raise the level of abstraction to reflect the user's unique domain expertise and obfuscate unnecessary system details. To this end, the proposed techniques aim to communicate relevant and actionable information to the user, and better prioritize the user's most important development tasks.<br><br>This dissertation first contributes SetCoLa: a domain-specific language for custom graph layout that leverages high-level constraints to encode the user's domain knowledge. SetCoLa facilitates code authoring and reuse by reducing the number of user-authored constraints by one to two orders of magnitude. However, the declarative nature of this language requires users to map between their high-level input and the system-produced output to debug or interpret the behavior. To explore the unique challenges and novel solutions for program understanding of declarative languages, this dissertation next turns to Vega: a declarative grammar for interactive visualization design. This dissertation then contributes a series of three projects for program understanding in Vega, which evolve to address the unique development needs of users at different stages in the development process. These techniques support (1) low-level system development via a data flow graph visualization, (2) debugging interactions with visualizations of contextually relevant details, and (3) unobtrusively revealing details of the runtime behavior during both normal execution and debugging. Whereas Vega focuses on the design of a single interactive visualization, responsive visualizations require designers to develop multiple concurrent designs that adapt based on the screen size or interactive capabilities of the end user's device. To support this process, this dissertation contributes four design guidelines and a set of core system features for a responsive visualization design system that supports simultaneous editing and device-specific customizations.<br><br>For each of these projects, this dissertation further contributes evaluations of this work via user studies or reproductions of real-world examples. The user evaluations demonstrate the utility of the proposed approaches for improving how end users interact with and understand the system functionality, whereas the reproductions illustrate the flexibility and expressiveness of the proposed techniques. Overall, this dissertation aims to better understand people and to help people better understand systems. This dissertation contributes novel techniques to support end-user programmers in developing, understanding, and debugging custom interactive visualization designs, and suggests new avenues for future work.",
    "supplemental": []
  },
  "Responsive": {
    "type": "paper",
    "doi": "https://doi.org/10.1145/3313831.3376777",
    "id": "2020-responsive-visualization",
    "title": "Techniques for Flexible Responsive Visualization Design",
    "authors": "Jane Hoffswell AND Wilmot Li AND Zhicheng Liu",
    "booktitle": "ACM Human Factors in Computing Systems (CHI)",
    "conference": "CHI",
    "year": 2020,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/papers/2020-ResponsiveVisualization-CHI.pdf",
    "paper": "website/resources/papers/2020-ResponsiveVisualization-CHI.pdf",
    "thumbnail": "website/resources/images/responsive-thumbnail.png",
    "figure": "website/resources/images/responsive-figure.png",
    "figurecaption": "Desktop (left) and mobile (right) visualizations from the New York Times article “The Places in the U.S. Where Disaster Strikes Again and Again” [A13]. This example demonstrates responsive techniques that: (A) resize the view to compress the width; (B) reposition content (e.g., axes, labels, and title); (C) remove unnecessary labels; (D) modify the text and axis labels to reduce complexity; and (E) add new line marks to annotate the bars.",
    "abstract": "Responsive visualizations adapt to effectively present information based on the device context. Such adaptations are essential for news content that is increasingly consumed on mobile devices. However, existing tools provide little support for responsive visualization design. We analyze a corpus of 231 responsive news visualizations and discuss formative interviews with five journalists about responsive visualization design. These interviews motivate four central design guidelines: enable simultaneous cross-device edits, facilitate device-specific customization, show cross-device previews, and support propagation of edits. Based on these guidelines, we present a prototype system that allows users to preview and edit multiple visualization versions simultaneously. We demonstrate the utility of the system features by recreating four real-world responsive visualizations from our corpus.",
    "award": "Best Paper Award",
    "supplemental": [
      {
        "name": "Twitter",
        "link": "https://twitter.com/janehoffswell/status/1255594695591211008"
      },
      {
        "name": "Blog Post",
        "link": "https://research.adobe.com/news/designing-responsive-visualizations/"
      },
      {
        "name": "Presentation",
        "link": "https://youtu.be/EcqJxoK0nng"
      },
      {
        "name": "Video",
        "link": "website/resources/videos/responsive-videofigure.mp4"
      },
      {
        "name": "Interview Questions", 
        "link": "website/resources/supplemental/responsive-interview.pdf"
      },
      {
        "name": "Example Gallery", 
        "link": "website/resources/supplemental/responsive-supplemental/index.html"
      }
    ]
  },
  "Tables": {
    "type": "paper",
    "doi": "https://doi.org/10.1145/3290605.3300523",
    "id": "2019-table-errors",
    "title": "Interactive Repair of Tables Extracted from PDF Documents on Mobile Devices",
    "authors": "Jane Hoffswell AND Zhicheng Liu",
    "booktitle": "ACM Human Factors in Computing Systems (CHI)",
    "conference": "CHI",
    "year": 2019,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/papers/2019-InteractiveTableRepair-CHI.pdf",
    "paper": "website/resources/papers/2019-InteractiveTableRepair-CHI.pdf",
    "thumbnail": "website/resources/images/tableErrors-thumbnail.png",
    "figure": "website/resources/images/tableErrors-figure.png",
    "figurecaption": "(a) PDF documents often contain rich data tables such as the one shown here. (b) However, techniques for extracting the data from static PDF tables can be error prone (errors are shown in red). In this example, the header has been split into two rows and a whitespace cell is missing in what is now the first row; in the body of the table, several of the data rows have been merged together (e.g., \"Squirrel\" and \"Deer\").",
    "abstract": "PDF documents often contain rich data tables that offer opportunities for dynamic re-appropriation and visualization. We describe a pipeline for extracting, analyzing, and visualizing PDF tables based on existing machine learning and rule-based techniques. Implementing and deploying this pipeline on a corpus of 447 documents with 1,171 tables results in only 11 tables that are correctly extracted and parsed for dynamic visualization. To improve the results of the automatic table analysis, we first present a taxonomy of errors that arise in the analysis pipeline and discuss the implications of cascading errors on the user experience. We then contribute a system with two lightweight interaction techniques (gesture and toolbar), for viewing, correcting, and visualizing PDF tables on mobile devices. In an evaluation with 17 users involving both a phone and a tablet, participants effectively repaired common errors in 10 tables, with an average time of about 2 minutes per table.",
    "supplemental": [
      {
        "name": "Video Preview",
        "link": "website/resources/videos/tables-preview.mp4"
      },
      {
        "name": "Video",
        "link": "website/resources/videos/tables-videofigure.mp4"
      },
      {
        "name": "Supplemental Materials", 
        "link": "website/resources/supplemental/tables-supplemental.zip"
      }
    ]
  },
  "CHIDC": {
    "type": "workshop",
    "doi": "https://doi.org/10.1145/3290607.3299067",
    "id": "2019-chidc",
    "title": "Languages & Visualizations to Enable Effective End User Programming",
    "authors": "Jane Hoffswell",
    "booktitle": "CHI Conference on Human Factors in Computing Systems Extended Abstracts (CHI'19 Extended Abstracts)",
    "conference": "CHI EA",
    "year": 2019,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/papers/2019-DoctoralConsortium-CHI.pdf",
    "paper": "website/resources/papers/2019-DoctoralConsortium-CHI.pdf",
    "thumbnail": "website/resources/images/chidc-thumbnail.png",
    "figure": "website/resources/images/chidc-figure.png",
    "figurecaption": "A code snippet with in situ visualizations of program variables in Vega: a declarative visualization grammar. Histograms show the distribution of values for array variables, with the count and range shown on hover. The symbol variable is an array of five unique strings representing different companies (<span style=\"font-family:monospace;\">AAPL</span>, <span style=\"font-family:monospace;\">AMZN</span>, <span style=\"font-family:monospace;\">IBM</span>, <span style=\"font-family:monospace;\">GOOG</span>, and <span style=\"font-family:monospace;\">MSFT</span>), one of which occurs less frequently in the dataset than the others (<span style=\"font-family:monospace;\">GOOG</span>). The <span style=\"font-family:monospace;\">indexed_price</span> variable is an array of numbers corresponding to the stock price. Whereas the symbol and indexed_price variables are both arrays of a simple type, the <span style=\"font-family:monospace;\">index_term</span> variable is an array of objects; the histogram is colored orange to differentiate it from the others and shows only the value distribution for the <span style=\"font-family:monospace;\">index_term.price</span> property.",
    "abstract": "Programming requires expertise to employ effectively. My research aims to help end user programmers more effectively author, understand, and reuse code and data through the design of new languages and program visualization tools. New programming languages can raise the level of abstraction to focus on relevant domain-specific details. Improved tools can better align with and enrich end user programmers' mental models. Visualizing program state and behavior promotes program understanding, and can proactively surface surprising or incorrect results. My future work proposes to explore new visualization techniques and languages to facilitate understanding constraint programming systems.<br><h4>thesis statement</h4><p>The design of new languages and program visualization tools that raise the level of abstraction from low-level system details to domain-specific concepts and operations can help end user programmers better <span style=\"font-style:italic;\">author, understand,</span> and <span style=\"font-style:italic;\">reuse</span> code and data.</p>",
    "supplemental": [
      {
        "name": "Poster", 
        "link": "website/resources/supplemental/chidc-poster.pdf"
      }
    ]
  },
  "SetCoLa": {
    "type": "paper",
    "doi": "https://doi.org/10.1111/cgf.13440",
    "id": "2018-setcola",
    "title": "SetCoLa: High-Level Constraints for Graph Layout",
    "authors": "Jane Hoffswell AND Alan Borning AND Jeffrey Heer",
    "booktitle": "Computer Graphics Forum (Proc. EuroVis)",
    "conference": "EuroVis",
    "year": 2018,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/papers/2018-SetCoLa-EuroVis.pdf",
    "paper": "website/resources/papers/2018-SetCoLa-EuroVis.pdf",
    "thumbnail": "website/resources/images/setcola-thumbnail.png",
    "figure": "website/resources/images/setcola-figure.png",
    "figurecaption": "The layout for the TLR4 biological system produced using (a) Cerebral (<a class='inline link' href='https://ieeexplore.ieee.org/abstract/document/4658137/'>link</a>), a domain-specific layout tool, as compared to (b) SetCoLa. The layers correspond to the location of the biomolecule within a cell and show immune response outcomes at the bottom of the graph, grouped by molecular function.",
    "abstract": "Constraints enable flexible graph layout by combining the ease of automatic layout with customizations for a particular domain. However, constraint-based layout often requires many individual constraints defined over specific nodes and node pairs. In addition to the effort of writing and maintaining a large number of similar constraints, such constraints are specific to the particular graph and thus cannot generalize to other graphs in the same domain. To facilitate the specification of customized and generalizable constraint layouts, we contribute SetCoLa: a domain-specific language for specifying high-level constraints relative to properties of the backing data. Users identify node sets based on data or graph properties and apply high-level constraints within each set. Applying constraints to node sets rather than individual nodes reduces specification effort and facilitates reapplication of customized layouts across distinct graphs. We demonstrate the conciseness, generalizability, and expressiveness of SetCoLa on a series of real-world examples from ecological networks, biological systems, and social networks.",
    "supplemental": [
      {
        "name": "Video Preview",
        "link": "website/resources/videos/setcola-preview.m4v"
      },
      {
        "name": "GitHub",
        "link": "https://github.com/uwdata/setcola"
      },
      {
        "name": "Website",
        "link": "https://uwdata.github.io/setcola/"
      },
      {
        "name": "Reapplication Example (Supplemental)", 
        "link": "website/resources/supplemental/setcola-supplemental.pdf"
      }
    ]
  },
  "CodeAugmentations": {
    "type": "paper",
    "doi": "https://doi.org/10.1145/3173574.3174106",
    "id": "2018-code-augmentations",
    "title": "Augmenting Code with In Situ Visualizations to Aid Program Understanding",
    "authors": "Jane Hoffswell AND Arvind Satyanarayan AND Jeffrey Heer",
    "booktitle": "ACM Human Factors in Computing Systems (CHI)",
    "conference": "CHI",
    "year": 2018,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/papers/2018-AugmentingCode-CHI.pdf",
    "paper": "website/resources/papers/2018-AugmentingCode-CHI.pdf",
    "thumbnail": "website/resources/images/augmentations-thumbnail.png",
    "figure": "website/resources/images/augmentations-figure.png",
    "figurecaption": "An line chart of stock prices for 5 companies. Code augmentations visualize the runtime state of program variables to show the underlying data distributions. Interacting with the \"symbol\" histogram filters all other histograms to only show the data values where the \"symbol\" is \"GOOG\" (line 38, hand cursor shown here for clarity; in a real implementation the cursor is hidden mid-interaction to aid chart reading). This interaction shows that \"GOOG\" has missing data for the earlier dates in the dataset (line 24), which results from a later IPO date than the other companies.",
    "abstract": "Programmers must draw explicit connections between their code and runtime state to properly assess the correctness of their programs. However, debugging tools often decouple the program state from the source code and require explicitly invoked views to bridge the rift between program editing and program understanding. To unobtrusively reveal runtime behavior during both normal execution and debugging, we contribute techniques for visualizing program variables directly within the source code. We describe a design space and placement criteria for embedded visualizations. We evaluate our in situ visualizations in an editor for the Vega visualization grammar. Compared to a baseline development environment, novice Vega users improve their overall task grade by about 2 points when using the in situ visualizations and exhibit significant positive effects on their self-reported speed and accuracy.",
    "supplemental": [
      {
        "name": "Video Preview",
        "link": "website/resources/videos/codeAugmentations-preview.mp4"
      },
      {
        "name": "Video",
        "link": "website/resources/videos/codeAugmentations-videofigure.mp4"
      },
      {
        "name": "Supplemental Materials", 
        "link": "website/resources/supplemental/codeAugmentations-supplemental.zip"
      }
    ]
  },
  "Triggers": {
    "type": "paper",
    "doi": "https://doi.org/10.1145/2998181.2998276",
    "id": "2017-food-triggers",
    "title": "Supporting Patient-Provider Collaboration to Identify Individual Triggers using Food and Symptom Journals",
    "authors": "Jessica Schroeder AND Jane Hoffswell AND Chia-Fang Chung AND James Fogarty AND Sean Munson AND Jasmine Zia",
    "booktitle": "ACM Computer-Supported Cooperative Work (CSCW)",
    "conference": "CSCW",
    "year": 2017,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/papers/2017-Triggers-CSCW.pdf",
    "paper": "website/resources/papers/2017-Triggers-CSCW.pdf",
    "thumbnail": "website/resources/images/triggers-thumbnail.png",
    "figure": "website/resources/images/triggers-figure.png",
    "figurecaption": "Healthcare providers sometimes encourage patients to track information such as meals and symptoms to aid diagnoses. Our interactive visualizations allow patients and providers to explore patient-generated data to discover trends and observe which foods are associated with the patient's symptoms. In this view, the user can observe that the severity of the patient's symptoms gets worse as the amount of starch she consumes increases. The user can also hover over a point for more detail. For example, the patient here had moderate symptoms when she consumed a meal with a baguette, which was high in starch.",
    "abstract": "Patient-generated data can allow patients and providers to collaboratively develop accurate diagnoses and actionable treatment plans. Unfortunately, patients and providers often lack effective support to make use of such data. We examine patient-provider collaboration to interpret patient-generated data. We focus on irritable bowel syndrome (IBS), a chronic illness in which particular foods can exacerbate symptoms. IBS management often requires patient-provider collaboration using a patient's food and symptom journal to identify the patient's triggers. We contribute interactive visualizations to support exploration of such journals, as well as an examination of patient-provider collaboration in interpreting the journals. Drawing upon individual and collaborative interviews with patients and providers, we find that collaborative review helps improve data comprehension and build mutual trust. We also find a desire to use tools like our interactive visualizations within and beyond clinic appointments. We discuss these findings and present guidance for the design of future tools.",
    "supplemental": [
      {
        "name": "Interview Protocol (Supplemental)",
        "link": "website/resources/supplemental/triggers-interviewProtocol.pdf"
      }
    ]
  },
  "VegaDebugging": {
    "type": "paper",
    "doi": "https://doi.org/10.1111/cgf.12903",
    "id": "2016-vega-debugging",
    "title": "Visual Debugging Techniques for Reactive Data Visualization",
    "authors": "Jane Hoffswell AND Arvind Satyanarayan AND Jeffrey Heer",
    "booktitle": "Computer Graphics Forum (Proc. EuroVis)",
    "conference": "EuroVis",
    "year": 2016,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/papers/2016-VegaDebugging-EuroVis.pdf",
    "paper": "website/resources/papers/2016-VegaDebugging-EuroVis.pdf",
    "thumbnail": "website/resources/images/vegaDebugging-thumbnail.png",
    "figure": "website/resources/images/vegaDebugging-figure.png",
    "figurecaption": "Vega's visual debugging techniques allow users to inspect relevant data transformations and dependencies within their specification in the context of the visualization and interaction events. Signal updates are populated in a timeline, on which users can view dependencies (in red): brush depends on cell, start_coords, and end_coords, as shown in the specification above. Users can rewind the visualization to view previous states (in green) and inspect scale encodings as a tooltip in-situ.",
    "abstract": "Interaction is critical to effective visualization, but can be difficult to author and debug due to dependencies among input events, program state, and visual output. Recent advances leverage reactive semantics to support declarative design and avoid the \"spaghetti code\" of imperative event handlers. While reactive programming improves many aspects of development, textual specifications still fail to convey the complex runtime dynamics. In response, we contribute a set of visual debugging techniques to reveal the runtime behavior of reactive visualizations. A timeline view records input events and dynamic variable updates, allowing designers to replay and inspect the propagation of values step-by-step. On-demand annotations overlay the output visualization to expose relevant state and scale mappings in-situ. Dynamic tables visualize how backing datasets change over time. To evaluate the effectiveness of these techniques, we study how first-time Vega users debug interactions in faulty, unfamiliar specifications; with no prior knowledge, participants were able to accurately trace errors through the specification.",
    "supplemental": [
      {
        "name": "Video",
        "link": "website/resources/videos/vegaDebugging.mp4"
      },
      {
        "name": "Historical Debugging Approach (Supplemental)",
        "link": "website/resources/supplemental/vegaDebugging-historical.pdf"
      },
      {
        "name": "Interview Protocol (Supplemental)",
        "link": "website/resources/supplemental/vegaDebugging-historical.pdf"
      }
    ]
  },
  "ReactiveVega": {
    "type": "paper",
    "doi": "https://doi.org/10.1109/TVCG.2015.2467091",
    "id": "2016-reactive-vega-architecture",
    "title": "Reactive Vega: A Streaming Dataflow Architecture for Declarative Interactive Visualization",
    "authors": "Arvind Satyanarayan AND Ryan Russell AND Jane Hoffswell AND Jeffrey Heer",
    "booktitle": "IEEE Trans. Visualization \& Comp. Graphics (Proc. InfoVis '15)",
    "conference": "InfoVis",
    "year": 2016,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/papers/2015-ReactiveVega-InfoVis.pdf",
    "paper": "website/resources/papers/2016-ReactiveVega-InfoVis.pdf",
    "thumbnail": "website/resources/images/reactive-vega-architecture.png",
    "figure": "website/resources/images/reactiveVega-figure.png",
    "figurecaption": "The Reactive Vega dataflow graph created from a declarative specification for a interactive index chart of streaming financial data. As streaming data arrives from the Yahoo! Finance API, or as a user moves their mouse pointer across the chart, an update cycle propagates through the graph and triggers an efficient update and re-render of the visualization.",
    "abstract": "We present Reactive Vega, a system architecture that provides the first robust and comprehensive treatment of declarative visual and interaction design for data visualization. Starting from a single declarative specification, Reactive Vega constructs a dataflow graph in which input data, scene graph elements, and interaction events are all treated as first-class streaming data sources. To support expressive interactive visualizations that may involve time-varying scalar, relational, or hierarchical data, Reactive Vega's dataflow graph can dynamically re-write itself at runtime by extending or pruning branches in a data-driven fashion. We discuss both compile- and run-time optimizations applied within Reactive Vega, and share the results of benchmark studies that indicate superior interactive performance to both D3 and the original, non-reactive Vega system.",
    "supplemental": [
      {
        "name": "Website",
        "link": "http://vega.github.io/vega/"
      }
    ]
  },
  "EuroRV3": {
    "type": "workshop",
    "doi": "https://doi.org/10.2312/eurorv3.20151144",
    "id": "2015-data-flow",
    "title": "Debugging Vega through Inspection of the Data Flow Graph",
    "authors": "Jane Hoffswell AND Arvind Satyanarayan AND Jeffrey Heer",
    "booktitle": "EuroVis Workshop on Reproducibility, Verification, and Validation in Visualization (EuroRV3)",
    "conference": "EuroRV3",
    "year": 2015,
    "url": "https://homes.cs.washington.edu/~jhoffs/website/resources/papers/2015-DataFlow-EuroRV3.pdf",
    "paper": "website/resources/papers/2015-DataFlow-EuroRV3.pdf",
    "thumbnail": "website/resources/images/eurorv3-thumbnail.png",
    "figure": "website/resources/images/eurorv3-figure.png",
    "figurecaption": "The components of a Vega workflow with related elements colored; (a) the specification, (b) the output visualization, and (c) a simplified representation of the underlying data flow graph.",
    "abstract": "Vega is a declarative visualization grammar that decouples specification from execution to allow users to focus on the visual representation rather than low-level implementation decisions. However, this representation comes at the cost of effective debugging as its execution is obfuscated. By presenting the developer with Vega's data flow graph along with interactive capabilities, we can bridge the gap between specification and execution to enable direct inspection of the connections between each component. This inspection can augment the developer's mental model of the specification, enabling the developer to more easily identify areas of interest and implement changes to the resulting visualization.",
    "supplemental": []
  }
}