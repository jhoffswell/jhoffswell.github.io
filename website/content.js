var publications = {
  "Tables": {
    "type": "paper",
    "id": "2019-table-errors",
    "title": "Interactive Repair of Tables Extracted from PDF Documents on Mobile Devices",
    "authors": "Jane Hoffswell AND Zhicheng Liu",
    "booktitle": "ACM Human Factors in Computing Systems (CHI)",
    "conference": "CHI",
    "year": 2019,
    "url": "https://homes.cs.washington.edu/~jhoffs/papers/2019-InteractiveTableRepair-CHI.pdf",
    "paper": "website/resources/papers/2019-InteractiveTableRepair-CHI.pdf",
    "thumbnail": "website/resources/images/tableErrors-thumbnail.png",
    "figure": "website/resources/images/tableErrors-figure.png",
    "figurecaption": "(a) PDF documents often contain rich data tables such as the one shown here. (b) However, techniques for extracting the data from static PDF tables can be error prone (errors are shown in red). In this example, the header has been split into two rows and a whitespace cell is missing in what is now the first row; in the body of the table, several of the data rows have been merged together (e.g., \"Squirrel\" and \"Deer\").",
    "abstract": "PDF documents often contain rich data tables that offer opportunities for dynamic re-appropriation and visualization. We describe a pipeline for extracting, analyzing, and visualizing PDF tables based on existing machine learning and rule-based techniques. Implementing and deploying this pipeline on a corpus of 447 documents with 1,171 tables results in only $11$ tables that are correctly extracted and parsed for dynamic visualization. To improve the results of the automatic table analysis, we first present a taxonomy of errors that arise in the analysis pipeline and discuss the implications of cascading errors on the user experience. We then contribute a system with two lightweight interaction techniques (gesture and toolbar), for viewing, correcting, and visualizing PDF tables on mobile devices. In an evaluation with 17 users involving both a phone and a tablet, participants effectively repaired common errors in 10 tables, with an average time of about 2 minutes per table.",
    "supplemental": []
  },
  "CHIDC": {
    "type": "workshop",
    "id": "2019-chidc",
    "title": "Languages & Visualizations to Enable Effective End User Programming",
    "authors": "Jane Hoffswell",
    "booktitle": "CHI Conference on Human Factors in Computing Systems Extended Abstracts (CHI'19 Extended Abstracts)",
    "conference": "CHI EA",
    "year": 2019,
    "url": "https://homes.cs.washington.edu/~jhoffs/papers/2019-DoctoralConsortium-CHI.pdf",
    "paper": "website/resources/papers/2019-DoctoralConsortium-CHI.pdf",
    "thumbnail": "website/resources/images/chidc-thumbnail.png",
    "figure": "website/resources/images/chidc-figure.png",
    "figurecaption": "A code snippet with in situ visualizations of program variables in Vega: a declarative visualization grammar. Histograms show the distribution of values for array variables, with the count and range shown on hover. The symbol variable is an array of five unique strings representing different companies (<span style=\"font-family:monospace;\">AAPL</span>, <span style=\"font-family:monospace;\">AMZN</span>, <span style=\"font-family:monospace;\">IBM</span>, <span style=\"font-family:monospace;\">GOOG</span>, and <span style=\"font-family:monospace;\">MSFT</span>), one of which occurs less frequently in the dataset than the others (<span style=\"font-family:monospace;\">GOOG</span>). The <span style=\"font-family:monospace;\">indexed_price</span> variable is an array of numbers corresponding to the stock price. Whereas the symbol and indexed_price variables are both arrays of a simple type, the <span style=\"font-family:monospace;\">index_term</span> variable is an array of objects; the histogram is colored orange to differentiate it from the others and shows only the value distribution for the <span style=\"font-family:monospace;\">index_term.price</span> property.",
    "abstract": "Programming requires expertise to employ effectively. My research aims to help end user programmers more effectively author, understand, and reuse code and data through the design of new languages and program visualization tools. New programming languages can raise the level of abstraction to focus on relevant domain-specific details. Improved tools can better align with and enrich end user programmers' mental models. Visualizing program state and behavior promotes program understanding, and can proactively surface surprising or incorrect results. My future work proposes to explore new visualization techniques and languages to facilitate understanding constraint programming systems.<br><h4>thesis statement</h4><p>The design of new languages and program visualization tools that raise the level of abstraction from low-level system details to domain-specific concepts and operations can help end user programmers better <span style=\"font-style:italic;\">author, understand,</span> and <span style=\"font-style:italic;\">reuse</span> code and data.</p>",
    "supplemental": []
  },
  "SetCoLa": {
    "type": "paper",
    "id": "2018-setcola",
    "title": "SetCoLa: High-Level Constraints for Graph Layout",
    "authors": "Jane Hoffswell AND Alan Borning AND Jeffrey Heer",
    "booktitle": "Computer Graphics Forum (Proc. EuroVis)",
    "conference": "EuroVis",
    "year": 2018,
    "url": "https://homes.cs.washington.edu/~jhoffs/papers/2018-SetCoLa-EuroVis.pdf",
    "paper": "website/resources/papers/2018-SetCoLa-EuroVis.pdf",
    "thumbnail": "website/resources/images/setcola-thumbnail.png",
    "figure": "website/resources/images/setcola-figure.png",
    "figurecaption": "The layout for the TLR4 biological system produced using (a) Cerebral (<a class='inline link' href='https://ieeexplore.ieee.org/abstract/document/4658137/'>link</a>), a domain-specific layout tool, as compared to (b) SetCoLa. The layers correspond to the location of the biomolecule within a cell and show immune response outcomes at the bottom of the graph, grouped by molecular function.",
    "abstract": "Constraints enable flexible graph layout by combining the ease of automatic layout with customizations for a particular domain. However, constraint-based layout often requires many individual constraints defined over specific nodes and node pairs. In addition to the effort of writing and maintaining a large number of similar constraints, such constraints are specific to the particular graph and thus cannot generalize to other graphs in the same domain. To facilitate the specification of customized and generalizable constraint layouts, we contribute SetCoLa: a domain-specific language for specifying high-level constraints relative to properties of the backing data. Users identify node sets based on data or graph properties and apply high-level constraints within each set. Applying constraints to node sets rather than individual nodes reduces specification effort and facilitates reapplication of customized layouts across distinct graphs. We demonstrate the conciseness, generalizability, and expressiveness of SetCoLa on a series of real-world examples from ecological networks, biological systems, and social networks.",
    "supplemental": [
      {
        "name": "Reapplication Example (Supplemental)", 
        "link": "website/resources/supplemental/transference.pdf"
      },
      {
        "name": "Code",
        "link": "https://github.com/uwdata/setcola"
      },
      {
        "name": "Website",
        "link": "https://uwdata.github.io/setcola/"
      }
    ]
  },
  "CodeAugmentations": {
    "type": "paper",
    "id": "2018-code-augmentations",
    "title": "Augmenting Code with In Situ Visualizations to Aid Program Understanding",
    "authors": "Jane Hoffswell AND Arvind Satyanarayan AND Jeffrey Heer",
    "booktitle": "ACM Human Factors in Computing Systems (CHI)",
    "conference": "CHI",
    "year": 2018,
    "url": "https://homes.cs.washington.edu/~jhoffs/papers/2018-AugmentingCode-CHI.pdf",
    "paper": "website/resources/papers/2018-AugmentingCode-CHI.pdf",
    "thumbnail": "website/resources/images/augmentations-thumbnail.png",
    "figure": "website/resources/images/augmentations-figure.png",
    "figurecaption": "An line chart of stock prices for 5 companies. Code augmentations visualize the runtime state of program variables to show the underlying data distributions. Interacting with the \"symbol\" histogram filters all other histograms to only show the data values where the \"symbol\" is \"GOOG\" (line 38, hand cursor shown here for clarity; in a real implementation the cursor is hidden mid-interaction to aid chart reading). This interaction shows that \"GOOG\" has missing data for the earlier dates in the dataset (line 24), which results from a later IPO date than the other companies.",
    "abstract": "Programmers must draw explicit connections between their code and runtime state to properly assess the correctness of their programs. However, debugging tools often decouple the program state from the source code and require explicitly invoked views to bridge the rift between program editing and program understanding. To unobtrusively reveal runtime behavior during both normal execution and debugging, we contribute techniques for visualizing program variables directly within the source code. We describe a design space and placement criteria for embedded visualizations. We evaluate our in situ visualizations in an editor for the Vega visualization grammar. Compared to a baseline development environment, novice Vega users improve their overall task grade by about 2 points when using the in situ visualizations and exhibit significant positive effects on their self-reported speed and accuracy.",
    "supplemental": [
      {
        "name": "Video",
        "link": "website/resources/videos/codeAugmentations.mp4"
      }
    ]
  },
  "Triggers": {
    "type": "paper",
    "id": "2017-food-triggers",
    "title": "Supporting Patient-Provider Collaboration to Identify Individual Triggers using Food and Symptom Journals",
    "authors": "Jessica Schroeder AND Jane Hoffswell AND Chia-Fang Chung AND James Fogarty AND Sean Munson AND Jasmine Zia",
    "booktitle": "ACM Computer-Supported Cooperative Work (CSCW)",
    "conference": "CSCW",
    "year": 2017,
    "url": "https://homes.cs.washington.edu/~jhoffs/papers/2017-Triggers-CSCW.pdf",
    "paper": "website/resources/papers/2017-Triggers-CSCW.pdf",
    "thumbnail": "website/resources/images/triggers-thumbnail.png",
    "figure": "website/resources/images/triggers-figure.png",
    "figurecaption": "Healthcare providers sometimes encourage patients to track information such as meals and symptoms to aid diagnoses. Our interactive visualizations allow patients and providers to explore patient-generated data to discover trends and observe which foods are associated with the patient's symptoms. In this view, the user can observe that the severity of the patient's symptoms gets worse as the amount of starch she consumes increases. The user can also hover over a point for more detail. For example, the patient here had moderate symptoms when she consumed a meal with a baguette, which was high in starch.",
    "abstract": "Patient-generated data can allow patients and providers to collaboratively develop accurate diagnoses and actionable treatment plans. Unfortunately, patients and providers often lack effective support to make use of such data. We examine patient-provider collaboration to interpret patient-generated data. We focus on irritable bowel syndrome (IBS), a chronic illness in which particular foods can exacerbate symptoms. IBS management often requires patient-provider collaboration using a patient's food and symptom journal to identify the patient's triggers. We contribute interactive visualizations to support exploration of such journals, as well as an examination of patient-provider collaboration in interpreting the journals. Drawing upon individual and collaborative interviews with patients and providers, we find that collaborative review helps improve data comprehension and build mutual trust. We also find a desire to use tools like our interactive visualizations within and beyond clinic appointments. We discuss these findings and present guidance for the design of future tools.",
    "supplemental": [
      {
        "name": "Interview Protocol",
        "link": "website/resources/supplemental/triggers-interviewProtocol.pdf"
      }
    ]
  },
  "VegaDebugging": {
    "type": "paper",
    "id": "2016-vega-debugging",
    "title": "Visual Debugging Techniques for Reactive Data Visualization",
    "authors": "Jane Hoffswell AND Arvind Satyanarayan AND Jeffrey Heer",
    "booktitle": "Computer Graphics Forum (Proc. EuroVis)",
    "conference": "EuroVis",
    "year": 2016,
    "url": "https://homes.cs.washington.edu/~jhoffs/papers/2016-VegaDebugging-EuroVis.pdf",
    "paper": "website/resources/papers/2016-VegaDebugging-EuroVis.pdf",
    "thumbnail": "website/resources/images/vegaDebugging-thumbnail.png",
    "figure": "website/resources/images/vegaDebugging-figure.png",
    "figurecaption": "Vega's visual debugging techniques allow users to inspect relevant data transformations and dependencies within their specification in the context of the visualization and interaction events. Signal updates are populated in a timeline, on which users can view dependencies (in red): brush depends on cell, start_coords, and end_coords, as shown in the specification above. Users can rewind the visualization to view previous states (in green) and inspect scale encodings as a tooltip in-situ.",
    "abstract": "Interaction is critical to effective visualization, but can be difficult to author and debug due to dependencies among input events, program state, and visual output. Recent advances leverage reactive semantics to support declarative design and avoid the \"spaghetti code\" of imperative event handlers. While reactive programming improves many aspects of development, textual specifications still fail to convey the complex runtime dynamics. In response, we contribute a set of visual debugging techniques to reveal the runtime behavior of reactive visualizations. A timeline view records input events and dynamic variable updates, allowing designers to replay and inspect the propagation of values step-by-step. On-demand annotations overlay the output visualization to expose relevant state and scale mappings in-situ. Dynamic tables visualize how backing datasets change over time. To evaluate the effectiveness of these techniques, we study how first-time Vega users debug interactions in faulty, unfamiliar specifications; with no prior knowledge, participants were able to accurately trace errors through the specification.",
    "supplemental": [
      {
        "name": "Video",
        "link": "website/resources/videos/vegaDebugging.mp4"
      }
    ]
  },
  "ReactiveVega": {
    "type": "paper",
    "id": "2015-reactive-vega-architecture",
    "title": "Reactive Vega: A Streaming Dataflow Architecture for Declarative Interactive Visualization",
    "authors": "Arvind Satyanarayan AND Ryan Russell AND Jane Hoffswell AND Jeffrey Heer",
    "booktitle": "IEEE Trans. Visualization \& Comp. Graphics (Proc. InfoVis)",
    "conference": "InfoVis",
    "year": 2015,
    "url": "https://homes.cs.washington.edu/~jhoffs/papers/2015-ReactiveVega-InfoVis.pdf",
    "paper": "website/resources/papers/2015-ReactiveVega-InfoVis.pdf",
    "thumbnail": "website/resources/images/reactive-vega-architecture.png",
    "figure": "website/resources/images/reactiveVega-figure.png",
    "figurecaption": "The Reactive Vega dataflow graph created from a declarative specification for a interactive index chart of streaming financial data. As streaming data arrives from the Yahoo! Finance API, or as a user moves their mouse pointer across the chart, an update cycle propagates through the graph and triggers an efficient update and re-render of the visualization.",
    "abstract": "We present Reactive Vega, a system architecture that provides the first robust and comprehensive treatment of declarative visual and interaction design for data visualization. Starting from a single declarative specification, Reactive Vega constructs a dataflow graph in which input data, scene graph elements, and interaction events are all treated as first-class streaming data sources. To support expressive interactive visualizations that may involve time-varying scalar, relational, or hierarchical data, Reactive Vega's dataflow graph can dynamically re-write itself at runtime by extending or pruning branches in a data-driven fashion. We discuss both compile- and run-time optimizations applied within Reactive Vega, and share the results of benchmark studies that indicate superior interactive performance to both D3 and the original, non-reactive Vega system.",
    "supplemental": [
      {
        "name": "Software",
        "link": "http://vega.github.io/vega/"
      }
    ]
  },
  "EuroRV3": {
    "type": "workshop",
    "id": "2015-data-flow",
    "title": "Debugging Vega through Inspection of the Data Flow Graph",
    "authors": "Jane Hoffswell AND Arvind Satyanarayan AND Jeffrey Heer",
    "booktitle": "EuroVis Workshop on Reproducibility, Verification, and Validation in Visualization (EuroRV3)",
    "conference": "EuroRV3",
    "year": 2015,
    "url": "https://homes.cs.washington.edu/~jhoffs/papers/2015-DataFlow-EuroRV3.pdf",
    "paper": "website/resources/papers/2015-DataFlow-EuroRV3.pdf",
    "thumbnail": "website/resources/images/eurorv3-thumbnail.png",
    "figure": "website/resources/images/eurorv3-figure.png",
    "figurecaption": "The components of a Vega workflow with related elements colored; (a) the specification, (b) the output visualization, and (c) a simplified representation of the underlying data flow graph.",
    "abstract": "Vega is a declarative visualization grammar that decouples specification from execution to allow users to focus on the visual representation rather than low-level implementation decisions. However, this representation comes at the cost of effective debugging as its execution is obfuscated. By presenting the developer with Vega's data flow graph along with interactive capabilities, we can bridge the gap between specification and execution to enable direct inspection of the connections between each component. This inspection can augment the developer's mental model of the specification, enabling the developer to more easily identify areas of interest and implement changes to the resulting visualization.",
    "supplemental": []
  }
}