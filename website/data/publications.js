var publications = {
  "Aligned": {
    "type": "paper",
    "doi": "https://doi.org/10.1109/TVCG.2024.3456378",
    "id": "2024-aligned",
    "title": "How Aligned are Human Chart Takeaways and LLM Predictions? A Case Study on Bar Charts with Varying Layouts",
    "authors": "Huichen Will Wang AND Jane Hoffswell AND Sao Myat Thazin Thane AND Victor S. Bursztyn AND Cindy Xiong Bearfield",
    "booktitle": "IEEE Trans. Visualization \& Comp. Graphics (Proc. VIS)",
    "conference": "VIS",
    "year": 2024,
    "url": "https://jhoffswell.github.io/website/resources/papers/2024-Aligned-VIS.pdf",
    "paper": "website/resources/papers/2024-Aligned-VIS.pdf",
    "thumbnail": "website/resources/images/Aligned-thumbnail.png",
    "figure": "website/resources/images/Aligned-figure.png",
    "figurecaption": "Our case study includes three experiments. In Experiment 1, we varied the LLM, decoding temperature, chart specification, and prompting strategy, and identified optimal configurations to elicit LLM chart takeaways for both zero-shot and one-shot settings. In Experiment 2, we generated takeaways using optimal configurations and examined whether LLMs’ comparisons are perceptually sensitive to bar arrangement like humans are. In Experiment 3, we examined whether LLMs’ comparisons are insensitive to data and context like humans are.",
    "abstract": "Large Language Models (LLMs) have been adopted for a variety of visualizations tasks, but how far are we from perceptually aware LLMs that can predict human takeaways? Graphical perception literature has shown that human chart takeaways are sensitive to visualization design choices, such as spatial layouts. In this work, we examine the extent to which LLMs exhibit such sensitivity when generating takeaways, using bar charts with varying spatial layouts as a case study. We conducted three experiments and tested four common bar chart layouts: vertically juxtaposed, horizontally juxtaposed, overlaid, and stacked. In Experiment 1, we identified the optimal configurations to generate meaningful chart takeaways by testing four LLMs, two temperature settings, nine chart specifications, and two prompting strategies. We found that even state-of-the-art LLMs struggled to generate semantically diverse and factually accurate takeaways. In Experiment 2, we used the optimal configurations to generate 30 chart takeaways each for eight visualizations across four layouts and two datasets in both zero-shot and one-shot settings. Compared to human takeaways, we found that the takeaways LLMs generated often did not match the types of comparisons made by humans. In Experiment 3, we examined the effect of chart context and data on LLM takeaways. We found that LLMs, unlike humans, exhibited variation in takeaway comparison types for different bar charts using the same bar layout. Overall, our case study evaluates the ability of LLMs to emulate human interpretations of data and points to challenges and opportunities in using LLMs to predict human chart takeaways.",
    "supplemental": []
  },
  "Explanations": {
    "type": "short paper",
    "doi": "",
    "id": "2024-explanations",
    "title": "Representing Charts as Text for Language Models: An In-Depth Study of Question Answering for Bar Charts",
    "authors": "Victor S. Bursztyn AND Jane Hoffswell AND Shunan Guo AND Eunyee Koh",
    "booktitle": "IEEE VIS Short Papers",
    "conference": "VIS",
    "year": 2024,
    "url": "https://jhoffswell.github.io/website/resources/papers/2024-Explanations-VIS.pdf",
    "paper": "website/resources/papers/2024-Explanations-VIS.pdf",
    "thumbnail": "website/resources/images/Explanations-thumbnail.png",
    "figure": "website/resources/images/Explanations-figure.png",
    "figurecaption": "We explore two main tasks related to chart-grounded Q&A: question answering (QA) and visual explanation generation (VEG). QA leverages templated domain facts (DF) from the chart’s CSV file, whereas VEG relies on visual context (VC) from its JSON file. In the first fine-tuning step, the charts’ underlying text files are injected into the language models (LMs). We then fine-tune the QA and VEG steps on 90% of the charts, with 10% held out for testing during our evaluation in §4. To understand the robustness of our LMs to natural language variation, we also perform a question paraphrasing task to rephrase our template-generated questions more naturally.",
    "abstract": "Machine Learning models for chart-grounded Q&A (CQA) often treat charts as images, but performing CQA on pixel values has proven challenging. We thus investigate a resource overlooked by current ML-based approaches: the declarative documents describing how charts should visually encode data (i.e., chart specifications). In this work, we use chart specifications to enhance language models (LMs) for chart-reading tasks, such that the resulting system can robustly understand language for CQA. Through a case study with 359 bar charts, we test novel fine tuning schemes on both GPT-3 and T5 using a new dataset curated for two CQA tasks: question-answering and visual explanation generation. Our text-only approaches strongly outperform vision-based GPT-4 on explanation generation (99% vs. 63% accuracy), and show promising results for question-answering (57-67% accuracy). Through in-depth experiments, we also show that our text-only approaches are mostly robust to natural language variation.",
    "supplemental": []
  },
  "Aletheia": {
    "type": "paper",
    "doi": "https://doi.org/10.1145/3672539.3686353",
    "id": "2024-aletheia",
    "title": '"The Data Says Otherwise" — Towards Automated Fact-checking and Communication of Data Claims',
    "authors": "Yu Fu AND Shunan Guo AND Jane Hoffswell AND Victor S. Bursztyn AND Ryan Rossi AND John Stasko",
    "booktitle": "ACM Symposium on User Interface Software and Technology (UIST)",
    "conference": "UIST",
    "year": 2024,
    "url": "https://jhoffswell.github.io/website/resources/papers/2024-Aletheia-UIST.pdf",
    "paper": "website/resources/papers/2024-Aletheia-UIST.pdf",
    "thumbnail": "website/resources/images/Aletheia-thumbnail.png",
    "figure": "website/resources/images/Aletheia-figure.png",
    "figurecaption": "Aletheia’s interface. Users enter textual content and select/upload a reference dataset in Input View (A). The backend then detects data claims, retrieves corresponding data evidence, and verifies them. The fact-checking results are presented in Result View (B), utilizing color codings to signify their verdicts: accurate, inaccurate, and unverifiable. Users click on the highlighted data claims to access the Evidence View (C). This view contains the designed data evidence presentation and interactions.",
    "abstract": "Fact-checking data claims requires data evidence retrieval and analysis, which can become tedious and intractable when done manually. This work presents Aletheia, an automated fact-checking prototype designed to facilitate data claims verification and enhance data evidence communication. For verification, we utilize a pre-trained LLM to parse the semantics for evidence retrieval. To effectively communicate the data evidence, we design representations in two forms: data tables and visualizations, tailored to various data fact types. Additionally, we design interactions that showcase a real-world application of these techniques. We evaluate the performance of two core NLP tasks with a curated dataset comprising 400 data claims and compare the two representation forms regarding viewers’ assessment time, confidence, and preference via a user study with 20 participants. The evaluation offers insights into the feasibility and bottlenecks of using LLMs for data fact-checking tasks, potential advantages and disadvantages of using visualizations over data tables, and design recommendations for presenting data evidence.",
    "supplemental": [
      {
        "name": "arXiv",
        "link": "https://arxiv.org/abs/2409.10713"
      }
    ]
  },
  "DataPictorial": {
    "type": "poster",
    "doi": "https://doi.org/10.1145/3672539.3686353",
    "id": "2024-datapictorial",
    "title": "Data Pictorial: Deconstructing Raster Images for Data-Aware Animated Vector Posters",
    "authors": "Tongyu Zhou AND Gromit Yeuk-Yin Chan AND Shunan Guo AND Jane Hoffswell AND Chang Xiao AND Victor S. Bursztyn AND Eunyee Koh",
    "booktitle": "Adjunct Proceedings of ACM UIST",
    "conference": "UIST",
    "year": 2024,
    "url": "https://jhoffswell.github.io/website/resources/papers/2024-DataPictorial-UIST.pdf",
    "paper": "website/resources/papers/2024-DataPictorial-UIST.pdf",
    "thumbnail": "website/resources/images/DataPictorial-thumbnail.png",
    "figure": "website/resources/images/DataPictorial-figure.png",
    "figurecaption": "Our pipeline for Data Pictorial: a static raster poster is decomposed into cropped, labeled components that are converted to SVG elements. Bindings are then established between the metadata of an input data table, the image labels, and SVG properties to construct a data-aware vectorized poster that dynamically cycles through data values via SMIL animation.",
    "abstract": "To support data integration into pictorials, we propose Data Pictorial, a pipeline that deconstructs a raster image into SVG objects whose attributes are contextualized in data. This process is achieved by cropping objects of interest using zero-shot detection, converting them into quantized bitmaps, and tracing the results as SVG paths. The technique then provides suggestions for binding the SVG objects and properties with data fields, affording the flexibility to automatically modify and animate the SVG based on the mapping. The resultant data-aware vector hypermedia can be potential candidates for real-time data inspection and personalization, all while maintaining the aesthetic of the original pictorial.",
    "supplemental": []
  },
  "MobileInteraction": {
    "type": "short paper",
    "doi": "https://doi.org/10.2312/evs.20241057",
    "id": "2024-mobile",
    "title": "Interaction Techniques for Exploratory Data Visualization on Mobile Devices",
    "authors": "Luke S. Snyder AND Ryan A. Rossi AND Eunyee Koh AND Jeffrey Heer AND Jane Hoffswell",
    "booktitle": "EuroVis Short Papers",
    "conference": "EuroVis",
    "year": 2024,
    "url": "https://jhoffswell.github.io/website/resources/papers/2024-MobileInteraction-EuroVis.pdf",
    "paper": "website/resources/papers/2024-MobileInteraction-EuroVis.pdf",
    "thumbnail": "website/resources/images/MobileInteraction-thumbnail.png",
    "figure": "website/resources/images/MobileInteraction-figure.png",
    "figurecaption": "Interactions for mobile exploratory data visualization: (A) a stacked bar chart of US population data by age, with the menu opened on the right; (B) the user drags along both axes to INSPECT the data via a tooltip; (C) the user drags along the x-axis to INSPECT and taps to SELECT the states with the highest population (CA, FL, NY, TX); (D) to aid comparison, the user double taps to FOCUS on the selected marks and drags along both axes to further INSPECT them; (E) to return to the initial view from Step 1, the user shakes their device to RESET, and taps the AGGREGATE button to show the MAX(population) for each age group; the user then taps the age < 10 mark; (F) to INSPECT the selected mark in the original context, the user taps the AGGREGATE button again to return to the unaggregated view, which shows that CA has the largest population for age < 10.",
    "abstract": "The ubiquity and on-the-go availability of mobile devices makes them central to many tasks such as interpersonal communication and media consumption. However, despite the potential of mobile devices for on-demand exploratory data visualization, existing mobile interactions are difficult, often using highly custom interactions, complex gestures, or multi-modal input. We synthesize limitations from the literature and outline four motivating principles for improved mobile interaction: leverage ubiquitous modalities, prioritize discoverability, enable rapid in-context data exploration, and promote graceful recovery. We then contribute thirteen interaction candidates and conduct a formative study with twelve participants who experienced our interactions in a testbed prototype. Based on these interviews, we discuss design considerations and tradeoffs from four main themes: precise and rapid inspection, focused navigation, single-touch and fixed orientation interaction, and judicious use of motion.",
    "supplemental": [
      {
        "name": "arXiv", 
        "link": "https://doi.org/10.48550/arXiv.2404.11602"
      },
      {
        "name": "Video",
        "link": "https://osf.io/u9mtd"
      },
      {
        "name": "Supplemental Materials (OSF)", 
        "link": "https://osf.io/e2ng8/"
      }
    ]
  },
  "InsightRecommendation": {
    "type": "paper",
    "doi": "https://doi.org/10.1109/BigData59044.2023.10386099",
    "id": "2023-insightrecommendation",
    "title": "Visual Insight Recommendation: From Ranking Insight Visualizations to Insight Types",
    "authors": "Camille Harris AND Ryan A. Rossi AND Sana Malik AND Jane Hoffswell AND Fan Du AND Tak Yeon Lee AND Eunyee Koh AND Handong Zhao",
    "booktitle": "IEEE International Conference on Big Data (BigData)",
    "conference": "BigData",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-InsightRecommendation-BigData.pdf",
    "paper": "website/resources/papers/2023-InsightRecommendation-BigData.pdf",
    "thumbnail": "website/resources/images/InsightRecommendation-thumbnail.png",
    "figure": "website/resources/images/InsightRecommendation-figure.png",
    "figurecaption": "SpotLight is a web-based system for visual insight recommendation that automatically recommends visualizations for the most relevant insights in the data: (a) insights are automatically discovered; (b) insights are grouped into rows, scored, and ranked based on the insight-type; (c) these rows are then globally ranked and sorted; (d) users can interactively query recommendations through attribute filters; and (e) users can bookmark the most important insights.",
    "abstract": "Visualization recommendation systems make understanding data more accessible to users of all skill levels by automatically generating visualizations for users to explore. However, most existing visualization recommendation systems focus on ranking all possible visualizations based on the attributes or encodings, which makes it difficult to find the most interesting or relevant insights. We therefore introduce a novel class of visualization recommendation systems that automatically rank and recommend both groups of related insights and the most important insights within each group. Our approach combines results across different learning-based methods to discover insights automatically and generalizes to a variety of attribute types (e.g., categorical, numerical, and temporal), including non-trivial combinations of these attribute types. We then implemented a new insight-centric visualization recommendation system, SpotLight, which ranks annotated visualizations in visual insight groups. Finally, we conducted a user study which showed that users are able to quickly understand and find relevant insights in unfamiliar data.",
    "supplemental": []
  },
  "DataCockpit": {
    "type": "short paper",
    "doi": "https://doi.org/10.1109/BigData59044.2023.10386133",
    "id": "2023-datacockpit",
    "title": "DataCockpit: A Toolkit for Data Lake Navigation and Monitoring Utilizing Quality and Usage Information",
    "authors": "Arpit Narechania AND Surya Chakraborty AND Shivam Agarwal AND Atanu R Sinha AND Ryan A. Rossi AND Fan Du AND Jane Hoffswell AND Shunan Guo AND Eunyee Koh AND Alex Endert AND Shamkant Navathe",
    "booktitle": "IEEE International Conference on Big Data (BigData)",
    "conference": "BigData",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-DataCockpit-BigData.pdf",
    "paper": "website/resources/papers/2023-DataCockpit-BigData.pdf",
    "thumbnail": "website/resources/images/DataCockpit-thumbnail.png",
    "figure": "website/resources/images/DataCockpit-figure.png",
    "figurecaption": "Visual Monitoring Tool: the Data Lake View lists all datasets in the data lake; the Dataset View provides additional information (e.g., a preview) about a specific dataset (a), corresponding quality and usage scores (b), temporal evolution of these scores (c), and an interactive visualization showing attribute and record-level quality and usage information (d).",
    "abstract": "Modern organizations amass their datasets into centralized repositories called data lakes, affording analytics as needed. The resultant scale and complexity of these data lakes, however, can make data navigation and monitoring challenging for users. We present DataCockpit, a Python toolkit that leverages datasets, usage logs, and associated meta-data to provision data usage and quality characteristics. DataCockpit computes these characteristics for each attribute (e.g., number of times it was queried for subsequent use in downstream applications) and record (e.g., number of non-missing, valid values) and aggregates them at the level of datasets. We develop a visual monitoring tool, powered by DataCockpit, and demonstrate how it can assist data / system administrators as well as end-users to effectively navigate and monitor a data lake. DataCockpit and the monitoring tool are available as open source software for developers to build custom monitoring applications on top of data lakes.",
    "supplemental": [
      {
        "name": "Video Preview",
        "link": "https://youtu.be/T-TbsqpNX5M"
      },
      {
        "name": "Talk",
        "link": "https://youtu.be/o0Hc0O2uqNI"
      },
      {
        "name": "GitHub",
        "link": "https://github.com/datacockpit-org"
      },
    ]
  },
  "Chatbots": {
    "type": "short paper",
    "doi": "https://doi.org/10.1109/BigData59044.2023.10386335",
    "id": "2023-chatbots",
    "title": "On Chatbots for Visual Exploratory Data Analysis",
    "authors": "Brodrick Stigall AND Ryan A. Rossi AND Jane Hoffswell AND Xiang Chen AND Shunan Guo AND Fan Du AND Eunyee Koh AND Kelly Caine",
    "booktitle": "IEEE International Conference on Big Data (BigData)",
    "conference": "BigData",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-Chatbots-BigData.pdf",
    "paper": "website/resources/papers/2023-Chatbots-BigData.pdf",
    "thumbnail": "website/resources/images/Chatbots-thumbnail.png",
    "figure": "website/resources/images/Chatbots-figure.png",
    "figurecaption": "Pre- and post-survey ratings for six usefulness questions and four questions about the utility of particular visual EDA chatbot features (1: Strongly Disagree to 7: Strongly Agree). The circle size shows the number of ratings, the black line shows the mean score for each question, and the arrows denote the amount and direction of change between pre-and post-survey. Overall, participants generally had an increased positive perception of the utility of the proposed chatbot features.",
    "abstract": "Analyzing data and creating effective visualizations often requires extensive domain expertise. For users with less experience, it can be difficult to know how to get started with exploratory data analysis (EDA) and how to approach the code. Chatbots can reduce the gap between analysis outcomes and user expectations by leveraging multi-turn conversations to provide a more natural interface between the user and computer-agent. To inform the design of future visual EDA chatbots, we conduct a survey and interview study with ten potential users. Our results suggest that users want a visual EDA chatbot that can make exploratory data analysis easier, while also augmenting their knowledge of visualization and analysis techniques. Between the initial survey and post-interview questionnaire, we saw increased optimism overall for the usefulness and anticipated analytic ease of visual EDA chatbots. Based on these results, we identify four key design guidelines: future visual EDA chatbots should (1) understand the user’s data and intent, (2) respond with useful visualizations, (3) leverage the history of the visualizations and data, and (4) produce verifiable and shareable analysis processes.",
    "supplemental": []
  },
  "Dupo": {
    "type": "paper",
    "doi": "https://doi.org/10.1109/TVCG.2023.3326583",
    "id": "2023-dupo",
    "title": "Dupo: A Mixed-Initiative Authoring Tool for Responsive Visualization",
    "authors": "Hyeok Kim AND Ryan Rossi AND Jessica Hullman AND Jane Hoffswell",
    "booktitle": "IEEE Trans. Visualization \& Comp. Graphics (Proc. VIS)",
    "conference": "VIS",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-Dupo-VIS.pdf",
    "paper": "website/resources/papers/2023-Dupo-VIS.pdf",
    "thumbnail": "website/resources/images/Dupo-thumbnail.png",
    "figure": "website/resources/images/Dupo-figure.png",
    "figurecaption": "Selective design outcomes from the user study with six expert responsive visualization authors. Participants provided their own visualizations for use in the study. For anonymization purposes, we replaced participants’ data sets while maintaining the cardinality and data type, edited the text content but preserved annotation length, and altered the color schemes. A star icon indicates an edit from the recommendations, a pencil icon denotes a manual edit made by a participant, and a cursor icon represents a manual edit using direct manipulation.",
    "abstract": "Designing responsive visualizations for various screen types can be tedious as authors must manage multiple chart~versions across design iterations. Automated approaches for responsive visualization must take into account the user's need for agency in exploring possible design ideas and applying customizations based on their own goals. We design and implement Dupo, a mixed-initiative approach to creating responsive visualizations that combines the agency afforded by a manual interface with automation provided by a recommender system. Given an initial design, users can browse automated design suggestions for a different screen type and make edits to a chosen design, thereby supporting quick prototyping and customizability. Dupo employs a two-step recommender pipeline that first suggests significant design changes (Exploration) followed by more subtle changes (Alteration). We evaluated Dupo with six expert responsive visualization authors. While creating responsive versions of a source design in Dupo, participants could reason about different design suggestions without having to manually prototype them, and thus avoid prematurely fixating on a particular design. This process led participants to create designs that they were satisfied with but which they had previously overlooked.",
    "supplemental": [
      {
        "name": "arXiv", 
        "link": "https://doi.org/10.48550/arXiv.2308.05136"
      },
      {
        "name": "Video",
        "link": "https://youtu.be/NpFMUXXeaK0"
      },
      {
        "name": "Supplemental Material", 
        "link": "https://see-mike-out.github.io/dupo-supplementary/index.html"
      },
      {
        "name": "Demo System", 
        "link": "https://see-mike-out.github.io/dupo-public/"
      },
    ]
  },
  "Socrates": {
    "type": "paper",
    "doi": "https://doi.org/10.1109/TVCG.2023.3327363",
    "id": "2023-socrates",
    "title": "Socrates: Data Story Generation via Adaptive Machine-Guided Elicitation of User Feedback",
    "authors": "Guande Wu AND Shunan Guo AND Jane Hoffswell AND Gromit Yeuk-Yin Chan AND Ryan Rossi AND Eunyee Koh",
    "booktitle": "IEEE Trans. Visualization \& Comp. Graphics (Proc. VIS)",
    "conference": "VIS",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-Socrates-VIS.pdf",
    "paper": "website/resources/papers/2023-Socrates-VIS.pdf",
    "thumbnail": "website/resources/images/Socrates-thumbnail.png",
    "figure": "website/resources/images/Socrates-figure.png",
    "figurecaption": "The prototype interface for Socrates consists of four views. (A) The Story Preference View shows the system-generated questions and user-provided feedback. (B) The Data Story Flow View presents a flowchart representing the structure of the data story, as well as alternative facts that could be added to the data story. Each node represents a fact, and the width encodes the score of the narrative transition between the two connected facts. Some facts' descriptions are hidden due to the limited space. The user can hover over a fact to view the detailed description and choose whether to add it to the story. (C) The Interesting Facts View presents all the potential facts from the dataset. This view provides a filter panel and search bar to help the user explore the facts. (D) The Story Preview allows the user to scroll through the generated data story",
    "abstract": "Visual data stories can effectively convey insights from data, yet their creation often necessitates intricate data exploration, insight discovery, narrative organization, and customization to meet the communication objectives of the storyteller. Existing automated data storytelling system, however, tends to overlook the importance of user customization during the data story authoring process, limiting the system’s ability to create tailored narratives that reflect the user’s intentions. We present a novel data story generation workflow that leverages adaptive machine-guided elicitation of user feedback to customize the story. Our approach employs an adaptive plug-in module for existing story generation systems, which incorporates user feedback through interactive questioning based on the conversation history and dataset. This adaptability refines the system’s understanding of the user’s intentions, ensuring the final narrative aligns with their goals. We demonstrate the feasibility of our approach through the implementation of an interactive prototype Socrates. Through a quantitative user study with 18 participants that compares our method to a state-of-the-art data story generation algorithm, we show that Socrates produces more relevant stories with a larger overlap of insights compared to human-generated stories. We also demonstrate the usability of Socrates via interviews with three data analysts and highlight areas of future work.Soc",
    "supplemental": []
  },
  "PaperToPlace": {
    "type": "paper",
    "doi": "https://doi.org/10.1145/3586183.3606832",
    "id": "2023-papertoplace",
    "title": "PaperToPlace: Transforming Instruction Documents into Spatialized and Context-Aware Mixed Reality Experiences",
    "authors": "Chen Chen AND Cuong Nguyen AND Jane Hoffswell AND Jennifer Healey AND Trung Bui AND Nadir Weibel",
    "booktitle": "ACM Symposium on User Interface Software and Technology (UIST)",
    "conference": "UIST",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-PaperToPlace-UIST.pdf",
    "paper": "website/resources/papers/2023-PaperToPlace-UIST.pdf",
    "thumbnail": "website/resources/images/PaperToPlace-thumbnail.png",
    "figure": "website/resources/images/PaperToPlace-figure.png",
    "figurecaption": 'Overview of PaperToPlace: (a) The author creates an MR experience by taking a snapshot of a paper document, with an optional ML-supported pipeline for associating key objects with each instruction step; (b) The consumer can browse the spatialized instruction steps using a hand menu; (c) The step is placed at an optimal location to minimize context switching and prevent occlusion of important interaction areas (e.g., not occluding the touchpad while setting the time on a microwave); (d) The consumer can "pinch-and-drag" the step to refine the system placement. Steps (b - d) show the first-person MR view.',
    "abstract": "While paper instructions are a mainstream medium for sharing knowledge, consuming such instructions and translating them into activities can be inefficient due to the lack of connectivity with the physical environment. We propose PaperToPlace, a novel workflow comprising an authoring pipeline, which allows the authors to rapidly transform and spatialize existing paper instructions into an MR experience, and a consumption pipeline, which computationally places each instruction step at an optimal location that is easy to read and does not occlude key interaction areas. Our evaluation of the authoring pipeline with 12 participants demonstrates the usability of our workflow and the effectiveness of using a machine learning based approach to help extract the spatial locations associated with each step. A second within-subjects study with another 12 participants demonstrates the merits of our consumption pipeline to reduce context-switching effort by delivering individual segmented instruction steps and offering hands-free affordances.",
    "supplemental": [
      {
        "name": "Video Preview",
        "link": "https://youtu.be/sjmiDHqtU_Q"
      },
      {
        "name": "Video",
        "link": "https://youtu.be/FjmWRu2qH0w"
      },
    ]
  },
  "WhatsNext": {
    "type": "short paper",
    "doi": "https://doi.org/10.1109/VL-HCC57772.2023.00033",
    "id": "2023-whatsNext",
    "title": "WhatsNext: Guidance-enriched Exploratory Data Analysis with Interactive, Low-Code Notebooks",
    "authors": "Chen Chen AND Jane Hoffswell AND Shunan Guo AND Ryan Rossi AND Gromit Yeuk-Yin Chan AND Fan Du AND Eunyee Koh AND Zhicheng Liu",
    "booktitle": "IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC)",
    "conference": "VL/HCC",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-WhatsNext-VLHCC.pdf",
    "paper": "website/resources/papers/2023-WhatsNext-VLHCC.pdf",
    "thumbnail": "website/resources/images/WhatsNext-thumbnail.png",
    "figure": "website/resources/images/WhatsNext-figure.png",
    "figurecaption": "The interface and sample use case of WhatsNext. The core UI features are a new, no-code interaction panel that recommends follow-up questions (A) and the analysis thread visualization of the exploration structure (B); the user can quickly generate new notebook cells (2-6, orange) by selecting recommended follow-up questions (2-6, green). Other simple interactions allow the user to explore, delete, and restore cells from the analysis history (C-E).",
    "abstract": "Computational notebooks such as Jupyter are popular for exploratory data analysis and insight finding. Despite the module-based structure, notebooks visually appear as a single thread of interleaved cells containing text, code, visualizations, and tables, which can be unorganized and obscure users' data analysis workflow. Furthermore, users with limited coding expertise may struggle to quickly engage in the analysis process. In this work, we design and implement an interactive notebook framework, WhatsNext, with the goal of supporting low-code visual data exploration with insight-based user guidance. In particular, we (1) re-design a standard notebook cell to include a recommendation panel that suggests possible next-step exploration questions or analysis actions to take, and (2) create an interactive, dynamic tree visualization that reflects the analytic dependencies between notebook cells to make it easy for users to see the structure of the data exploration threads and trace back to previous steps.",
    "supplemental": [
      {
        "name": "arXiv", 
        "link": "https://doi.org/10.48550/arXiv.2308.09802"
      }
    ]
  },
  "PredictiveInvestigative": {
    "type": "poster",
    "doi": "https://doi.org/10.1145/3543873.3587317",
    "id": "2023-predictiveInvestigative",
    "title": "Augmenting Visualizations with Predictive and Investigative Insights to Facilitate Decision Making",
    "authors": "Md Main Uddin Rony AND Fan Du AND Ryan Rossi AND Jane Hoffswell AND Niyati Chhaya AND Iftikhar Burhanuddin AND Eunyee Koh",
    "booktitle": "Companion Proceedings of the ACM Web Conference",
    "conference": "WebConf Companion",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-PredictiveInvestigative-WebConf.pdf",
    "paper": "website/resources/papers/2023-PredictiveInvestigative-WebConf.pdf",
    "thumbnail": "website/resources/images/PredictiveInvestigative-thumbnail.png",
    "figure": "website/resources/images/PredictiveInvestigative-figure.png",
    "figurecaption": "Overview of the different types of insights.",
    "abstract": "Many people find it difficult to comprehend basic charts on the web, let alone make effective decisions from them. To address this gap, several ML models aim to automatically detect useful insights from charts and narrate them in a simpler textual format. However, most of these solutions can only detect basic factual insights (a.k.a. descriptive insights) that are already present in the chart, which may help with chart comprehension, but not decision-making. In this work, we study whether more advanced predictive and investigative insights can help users understand what will happen next and what actions they should take. These advanced insights can help decision-makers better understand the reasons behind anomaly events, predict future unfolding trends, and recommend possible actions for optimizing business outcomes. Through a study with 18 participants, we found that predictive and investigative insights lead to more insights recorded by users on average and better effectiveness ratings.",
    "supplemental": []
  },
  "StyleRecommendation": {
    "type": "poster",
    "doi": "https://doi.org/10.1145/3543873.3587300",
    "id": "2023-styleRecommendation",
    "title": "A ML-based Approach for HTML-based Style Recommendation",
    "authors": "Ryan Aponte AND Ryan Rossi AND Shunan Guo AND Jane Hoffswell AND Nedim Lipka AND Chang Xiao AND Gromit Yeuk-Yin Chan AND Eunyee Koh AND Nesreen Ahmed",
    "booktitle": "Companion Proceedings of the ACM Web Conference",
    "conference": "WebConf Companion",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-StyleRecommendation-WebConf.pdf",
    "paper": "website/resources/papers/2023-StyleRecommendation-WebConf.pdf",
    "thumbnail": "website/resources/images/StyleRecommendation-thumbnail.png",
    "figure": "website/resources/images/StyleRecommendation-figure.png",
    "figurecaption": "Our approach is trained on a large corpus of HTML documents, that is, marketing emails as shown in (A). Every HTML document is then decomposed into HTML fragments and a set of entities are extracted from each (B).",
    "abstract": "Given a large corpus of HTML-based emails (or websites, posters, documents) collected from the web, how can we train a model capable of learning from such rich heterogeneous data for HTML-based style recommendation tasks such as recommending useful design styles or suggesting alternative HTML designs? To address this new learning task, we first decompose each HTML document in the corpus into a sequence of smaller HTML fragments where each fragment may consist of a set of HTML entities such as buttons, images, textual content (titles, paragraphs) and stylistic entities such as background-style, font-style, button-style, among others. From these HTML fragments, we then derive a single large heterogeneous hypergraph that captures the higher-order dependencies between HTML fragments and entities in such fragments, both within the same HTML document as well as across the HTML documents in the corpus. We then formulate this new HTML style recommendation task as a hypergraph representation learning problem and propose an approach to solve it. Our approach is able to learn effective low-dimensional representations of the higher-order fragments that consist of sets of heterogeneous entities as well as low-dimensional representations of the individual entities themselves. We demonstrate the effectiveness of the approach across several design style recommendation tasks. To the best of our knowledge, this work is the first to develop an ML-based model for the task of HTML-based email style recommendation.",
    "supplemental": []
  },
  "SpotLight": {
    "type": "poster",
    "doi": "https://doi.org/10.1145/3543873.3587302",
    "id": "2023-spotlight",
    "title": "SpotLight: Visual Insight Recommendation",
    "authors": "Camille Harris AND Ryan Rossi AND Sana Malik AND Jane Hoffswell AND Fan Du AND Tak Yeon Lee AND Eunyee Koh AND Handong Zhao",
    "booktitle": "Companion Proceedings of the ACM Web Conference",
    "conference": "WebConf Companion",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-SpotLight-WebConf.pdf",
    "paper": "website/resources/papers/2023-SpotLight-WebConf.pdf",
    "thumbnail": "website/resources/images/SpotLight-thumbnail.png",
    "figure": "website/resources/images/SpotLight-figure.png",
    "figurecaption": "SpotLight is a web-based system for visual insight recommendation that automatically recommends visualizations for the most relevant insights in the data: (a) insights are automatically discovered; (b) insights are grouped into rows, scored, and ranked based on the insight-type; (c) these rows are then globally ranked and sorted; (d) users can interactively query recommendations through attribute flters; and (e) users can bookmark the most important insights.",
    "abstract": "Visualization recommendation systems make understanding data more accessible to users of all skill levels by automatically generating visualizations for users to explore. However, most existing visualization recommendation systems focus on ranking all possible visualizations based on the attributes or encodings, which makes it difficult to find the most relevant insights. We therefore introduce a novel class of insight-based visualization recommendation systems that automatically rank and recommend groups of related insights as well as the most important insights within each group. Our approach combines results from different learning-based methods to discover insights automatically and generalizes to a variety of attribute types (e.g., categorical, numerical, and temporal), including non-trivial combinations of these attribute types. To demonstrate the utility of this approach, we implemented a insight-centric visualization recommendation system, SpotLight, and conducted a user study with twelve participants, which showed that users are able to quickly find and understand relevant insights in unfamiliar data.",
    "supplemental": []
  },
  "DataPilot": {
    "type": "paper",
    "doi": "https://doi.org/10.1145/3544548.3581509",
    "id": "2023-datapilot",
    "title": "DataPilot: Utilizing Quality and Usage Information for Subset Selection during Visual Data Preparation",
    "authors": "Arpit Narechania AND Fan Du AND Atanu R. Sinha AND Ryan A. Rossi AND Jane Hoffswell AND Shunan Guo AND Eunyee Koh AND Shamkant B. Navathe AND Alex Endert",
    "booktitle": "ACM Human Factors in Computing Systems (CHI)",
    "conference": "CHI",
    "year": 2023,
    "url": "https://jhoffswell.github.io/website/resources/papers/2023-DataPilot-CHI.pdf",
    "paper": "website/resources/papers/2023-DataPilot-CHI.pdf",
    "thumbnail": "website/resources/images/DataPilot-thumbnail.png",
    "figure": "website/resources/images/DataPilot-figure.png",
    "figurecaption": "The DataPilot user interface showing Step 1 (Review Raw Data) of the three-step workflow. Users can inspect the list of dataset attributes (A. Attribute View), inspect quality and usage dimension scores for an attribute (B. Attribute Detail View), visualize attribute distributions and navigate dataset records (C. Data View), incrementally filter records by attribute values (D. Attribute Filter View), incrementally filter attributes and records by both quality (E. Quality Filters View) and usage dimensions (F. Usage Filters View) to reduce the search space, get a visual summary of this filtered dataset (G. Minimap View), and explicitly select attributes (A. Attribute View) and records (automatically selected based on filters) for the desired subset.",
    "abstract": "Selecting relevant data subsets from large, unfamiliar datasets can be difficult. We address this challenge by modeling and visualizing two kinds of auxiliary information: (1) quality – the validity and appropriateness of data required to perform certain analytical tasks; and (2) usage – the historical utilization characteristics of data across multiple users. Through a design study with 14 data workers, we integrate this information into a visual data preparation and analysis tool, DataPilot. DataPilot presents visual cues about “the good, the bad, and the ugly” aspects of data and provides graphical user interface controls as interaction affordances, guiding users to perform subset selection. Through a study with 36 participants, we investigate how DataPilot helps users navigate a large, unfamiliar tabular dataset, prepare a relevant subset, and build a visualization dashboard.We find that users selected smaller, effective subsets with higher quality and usage, and with greater success and confidence.",
    "supplemental": []
  },
  "VisualizationMAR": {
    "type": "paper",
    "doi": "https://doi.org/10.1109/TVCG.2022.3209348",
    "id": "2022-uncertainty-visualization-mar",
    "title": "Evaluating the Use of Uncertainty Visualisations for Imputations of Data Missing At Random in Scatterplots",
    "authors": "Abhraneel Sarma AND Shunan Guo AND Jane Hoffswell AND Ryan Rossi AND Fan Du AND Eunyee Koh AND Matthew Kay",
    "booktitle": "IEEE Trans. Visualization \& Comp. Graphics (Proc. VIS)",
    "conference": "VIS",
    "year": 2022,
    "url": "https://jhoffswell.github.io/website/resources/papers/2022-VisualizationMAR-VIS.pdf",
    "paper": "website/resources/papers/2022-VisualizationMAR-VIS.pdf",
    "thumbnail": "website/resources/images/VisualizationMAR-thumbnail.png",
    "figure": "website/resources/images/VisualizationMAR-figure.png",
    "figurecaption": "Experiment results for the mean estimation tasks: posterior probability densities, mean and 95% credible intervals for bias and precision for an average participant in each representation condition (left). We compare the difference in bias and precision compared to the baseline (right) and estimate the probability of improvement for each representation condition.",
    "abstract": "Most real-world datasets contain missing values yet most exploratory data analysis (EDA) systems only support visualising data points with complete cases. This omission may potentially lead the user to biased analyses and insights. Imputation techniques can help estimate the value of a missing data point, but introduces additional uncertainty. In this work, we investigate the effects of visualising imputed values in charts using different types of uncertainty visualisation techniques---no imputation, mean, 95% confidence intervals, probability density plots, gradient intervals and hypothetical outcome plots. We focus on scatterplots, which is a commonly used chart type, and conduct a crowdsourced study with 202 participants. We measure users' bias and precision in performing two tasks---estimating average and detecting trend---and their self-reported confidence in performing these tasks. When estimating averages, uncertainty representations may reduce bias but at the cost of decreasing precision. When estimating trend, only hypothetical outcome plots may lead to a small probability of reducing bias while increasing precision. Participants in every uncertainty representation were less certain about their response when compared to the baseline. Our results point towards potential trade-offs in using uncertainty encodings for datasets with a large number of missing values.",
    "award": "Best Paper Honorable Mention",
    "supplemental": [
      {
        "name": "Supplemental Materials (OSF)", 
        "link": "https://osf.io/q4y5r/"
      }
    ]
  },
  "ComparisonConundrum": {
    "type": "paper",
    "doi": "https://doi.org/10.1109/TVCG.2022.3209456",
    "id": "2022-comparison-conundrum",
    "title": "Comparison Conundrum and the Chamber of Visualizations: An Exploration of How Language Influences Visual Design",
    "authors": "Aimen Gaba AND Vidya Setlur AND Arjun Srinivasan AND Jane Hoffswell AND Cindy Xiong",
    "booktitle": "IEEE Trans. Visualization \& Comp. Graphics (Proc. VIS)",
    "conference": "VIS",
    "year": 2022,
    "url": "https://jhoffswell.github.io/website/resources/papers/2022-ComparisonConundrum-VIS.pdf",
    "paper": "website/resources/papers/2022-ComparisonConundrum-VIS.pdf",
    "thumbnail": "website/resources/images/ComparisonConundrum-thumbnail.png",
    "figure": "website/resources/images/ComparisonConundrum-figure.png",
    "figurecaption": "Four comparison utterances from our design space with varying cardinalities for the comparison entities (1-1, 1-n, n-m, n) and different levels of concreteness (explicit and implicit). Each of these comparison utterances was included in our online survey in which participants ranked their preference for the different visualization types; the most preferred visualization(s) have a colored border.",
    "abstract": "The language for expressing comparisons is often complex and nuanced, which makes supporting natural language-based visual comparison a non-trivial task. To better understand how people reason about comparisons in natural language, we explore a design space of utterances for comparing data entities. We identified different parameters of comparison utterances that indicate what is being compared (i.e., data variables and attributes) as well as how these parameters are specified (i.e., explicitly or implicitly). We conducted a user study with sixteen data visualization experts and non-experts to investigate how they designed visualizations for comparisons in our design space. Based on the rich set of visualization techniques observed, we extracted key design features from the visualizations and synthesized them into a subset of sixteen representative visualization designs for our design space. We then conducted a follow-up study to cross-validate user preferences for the sixteen representative visualizations corresponding to utterances in our design space. Findings from these studies suggest guidelines and future directions for designing natural language interfaces and recommendation tools to better support natural language comparisons in the context of visual analysis.",
    "supplemental": [
      {
        "name": "Supplemental Materials (OSF)", 
        "link": "https://osf.io/zp6kh/?view_only=dfcf6012d3654fd99884ae8523e4f1aa"
      }
    ]
  },
  "ARShopping": {
    "type": "short paper",
    "doi": "https://doi.org/10.1109/VIS54862.2022.00033",
    "id": "2022-arshopping",
    "title": "ARShopping: In-Store Shopping Decision Support Through Augmented Reality and Immersive Visualization",
    "authors": "Bingjie Xu AND Shunan Guo AND Eunyee Koh AND Jane Hoffswell AND Ryan Rossi AND Fan Du",
    "booktitle": "IEEE VIS Short Papers",
    "conference": "VIS",
    "year": 2022,
    "url": "https://jhoffswell.github.io/website/resources/papers/2022-ARShopping-VIS.pdf",
    "paper": "website/resources/papers/2022-ARShopping-VIS.pdf",
    "thumbnail": "website/resources/images/ARShopping-thumbnail.png",
    "figure": "website/resources/images/ARShopping-figure.png",
    "figurecaption": "A comparison of product detection and glyph placement results with (a) marker detection only and (b) marker+object detection.",
    "abstract": "Online shopping gives customers boundless options to choose from, backed by extensive product details and customer reviews, all from the comfort of home; yet, no amount of detailed, online information can outweigh the instant gratification and hands-on understanding of a product that is provided by physical stores. However, making purchasing decisions in physical stores can be challenging due to a large number of similar alternatives and limited accessibility of the relevant product information (e.g., features, ratings, and reviews). \rv{In this work, we present ARShopping: a web-based prototype to visually communicate detailed product information from an online setting on portable smart devices (e.g., phones, tablets, glasses)}, within the physical space at the point of purchase. This prototype uses augmented reality (AR) to identify products and display detailed information to help consumers make purchasing decisions that fulfill their needs while decreasing the decision-making time. In particular, we use a data fusion algorithm to improve the precision of the product detection; we then integrate AR visualizations into the scene to facilitate comparisons across multiple products and features. We designed our prototype based on interviews with 14 participants to better understand the utility and ease of use of the prototype.",
    "award": "Best Short Paper Honorable Mention",
    "supplemental": []
  },
  "PersonalizedVisualization": {
    "type": "short paper",
    "doi": "https://doi.org/10.1109/VIS54862.2022.00026",
    "id": "2022-personalized",
    "title": "Let's Get Personal: Exploring the Design of Personalized Visualizations",
    "authors": "Beleicia Bullock AND Shunan Guo AND Eunyee Koh AND Ryan Rossi AND Fan Du AND Jane Hoffswell",
    "booktitle": "IEEE VIS Short Papers",
    "conference": "VIS",
    "year": 2022,
    "url": "https://jhoffswell.github.io/website/resources/papers/2022-PersonalizedVisualization-VIS.pdf",
    "paper": "website/resources/papers/2022-PersonalizedVisualization-VIS.pdf",
    "thumbnail": "website/resources/images/PersonalizedVisualization-thumbnail.png",
    "figure": "website/resources/images/PersonalizedVisualization-figure.png",
    "figurecaption": "An overview of the personalized visualizations corpus based on the (a) personalized attributes contained in the article, (b) granularity, and (c) resulting codes for different publications.",
    "abstract": "Media outlets often publish visualizations that can be personalized based on users' demographics, such as location, race, and age. However, the design of such personalized visualizations remains underexplored. In this work, we contribute a design space analysis of 47 public-facing articles with personalized visualizations to understand how designers structure content, encourage exploration, and present insights. We find that articles often lack explicit exploration suggestions or instructions, data notices, and personalized visual insights. We then outline three trajectories for future research: (1) explore how users choose to personalize visualizations, (2) examine how exploration suggestions and examples impact user interaction, and (3) investigate how personalization influences user insights.",
    "supplemental": []
  },
  "ViSRE": {
    "type": "paper",
    "doi": "https://doi.org/10.1109/VISSOFT55257.2022.00010",
    "id": "2022-visre",
    "title": "ViSRE: A Unified Visual Analysis Dashboard for Proactive Cloud Outage Management",
    "authors": "Paula Kayongo AND Jane Hoffswell AND Shiv Saini AND Shaddy Garg AND Eunyee Koh AND Haoliang Wang AND Tom Jacobs",
    "booktitle": "IEEE Working Conference on Software Visualization",
    "conference": "VISSOFT",
    "year": 2022,
    "url": "https://jhoffswell.github.io/website/resources/papers/2022-ViSRE-VISSOFT.pdf",
    "paper": "website/resources/papers/2022-ViSRE-VISSOFT.pdf",
    "thumbnail": "website/resources/images/ViSRE-thumbnail.png",
    "figure": "website/resources/images/ViSRE-figure.png",
    "figurecaption": "The ViSRE interface includes five components: (A) The code change timeline; (B) The threshold configuration drawer; (C) The causal metric directed acyclic graph with (D) enhanced node glyphs showing the raw and predicted values in two half arcs; (E) The horizon charts of the raw metric values with an interactive bounding box corresponding to the region visualized in the causal graph; (F) The probability overview chart for long-range values with an interactive bounding box corresponding to the region visualized in the horizon chart. In this example, metric glyphs on the causal graph show increased load and error count and reduced user satisfaction (#apdex) in a 30-minute analysis interval. At the beginning of the analysis period, the grey color in the left half of the #apdex node glyph indicates an anomalous metric value. The outage prediction value on the right half of the #apdex node indicates that an outage is likely within 30 minutes. Hovering over a region of high outage probability in the glyph generates the code change timeline (A). Later in the analysis period, a spike in server errors (#5xx) results in an outage, visualized in the left arc of the #5xx glyph that transitions from blue to red. The probability overview chart (F) shows a period of high outage prediction around June 26th; brushing this region updates the horizon chart to visualize the corresponding metric values, which show extended periods of threshold violation for client errors (#4xx) interspersed with shorter periods for server errors (#5xx).",
    "abstract": "Efficient outage detection and remediation is crucial for effectively operating cloud computing systems. To remediate outages, system engineers must quickly identify the causal relationships between metrics and correlate events across multiple monitoring tools. In practice, this process largely remains reactive due to the complexity and general lack of interpretability within such monitoring environments. This work presents ViSRE: an integrated visual analytics system that integrates causal and predictive models with interactive visualizations to aid in proactive cloud outage management. We develop enhanced node representations for our causal graph representation to support system engineers in performing root cause analysis and reasoning about causality chains in multi-dimensional temporal data. We report the results of a quantitative assessment of the proposed predictive models, which show good performance guarantees. To evaluate and refine our system, we conduct a study with six cloud system engineers who verify that our proposed techniques can support proactive cloud maintenance by intuitively displaying temporal relationships between predicted and raw data. By correlating and presenting data from disparate sources, ViSRE also reduces context switching costs and reduces the time spent on manually correlating events during remediation of time-critical outages.",
    "supplemental": []
  },
  "CODAS": {
    "type": "workshop",
    "doi": "https://doi.org/10.2312/eurova.20221082",
    "id": "2022-codas-ba-report-authoring",
    "title": "CODAS: Integrating Business Analytics and Report Authoring",
    "authors": "Zhuohao Zhang AND Sana Malik AND Shunan Guo AND Jane Hoffswell AND Ryan Rossi AND Fan Du AND Eunyee Koh",
    "booktitle": "EuroVis Workshop on Visual Analytics (EuroVA)",
    "conference": "EuroVA",
    "year": 2022,
    "url": "https://jhoffswell.github.io/website/resources/papers/2022-CODAS-EuroVA.pdf",
    "paper": "website/resources/papers/2022-CODAS-EuroVA.pdf",
    "thumbnail": "website/resources/images/CODAS-thumbnail.png",
    "figure": "website/resources/images/CODAS-figure.png",
    "figurecaption": "An overview of the report authoring workflow: (A) Explore data using initial static dashboards from business analysts; (B) Author interactive data-driven reports using CODAS; (C) Share the final report with stakeholders using a shareable link.",
    "abstract": "Business analysts create rich dashboards to find data insights and subsequently communicate these findings with data-driven reports that combine visualization screenshots and descriptive text. Conventional analytics reports convey findings statically and passively, which suffers from limited interactivity and adaptability to data changes. There is therefore a need to facilitate authoring of interactive reports in business analytics. To better support the needs of business analysts, we developed CODAS: a report authoring tool that allows analysts to transform dashboards into interactive, web-based reports through a no-coding user interface and a workflow that is compatible to business analysts' existing data analytics pipelines. CODAS supports authoring multiple levels of interactions, organizing story elements, and generating the final artifact. Through our case studies with two expert analysts, we discuss the usefulness of our system and report our findings on analysts' report authoring workflow. Our findings suggest that CODAS enables business analysts to create interactive, data-driven reports comfortably, and can complement their exisitng data analytics workflow without extra learning effort.",
    "supplemental": []
  },
  "ReportAuthoring": {
    "type": "workshop",
    "doi": "https://doi.org/10.2312/eurova.20221076",
    "id": "2022-ba-report-authoring",
    "title": "Understanding Business Analysts' Needs for Data Report Authoring",
    "authors": "Zhuohao Zhang AND Sana Malik AND Shunan Guo AND Jane Hoffswell AND Ryan Rossi AND Fan Du AND Eunyee Koh",
    "booktitle": "EuroVis Workshop on Visual Analytics (EuroVA)",
    "conference": "EuroVA",
    "year": 2022,
    "url": "https://jhoffswell.github.io/website/resources/papers/2022-ReportAuthoring-EuroVA.pdf",
    "paper": "website/resources/papers/2022-ReportAuthoring-EuroVA.pdf",
    "thumbnail": "website/resources/images/ReportAuthoring-thumbnail.png",
    "figure": "website/resources/images/ReportAuthoring-figure.png",
    "figurecaption": "Based on formative interviews with fifteen professional business analysts, we propose five design guidelines for developing effective authoring tools for business analysts creating interactive, data-driven reports: (1) Complement busniess analysts' current workflows; (2) Enable GUI-based creation of data-driven reports; (3) Preserve interactivity of the visualizations; (4) Support customized narratives and flexible links to visualizations; (5) Include out-of-the-box methods to generate dynamic insights.",
    "abstract": "Business analysts often create static, data-driven reports to summarize and communicate findings from marketing dashboards. However, the requirements and workflow for creating data-driven reports in business analytics have not been fully investigated. In this work, we interviewed fifteen professional analysts to understand their unique needs for data-driven report authoring and identify gaps between their goals, technical skills, and existing reporting tools. Our findings suggest eight fundamental takeaways for report authoring, such as the need for persistent interactive experiences combined with more robust narrative authoring for linking story pieces and customizing the narrative layout. Based on these interviews, we synthesize the results into five design guidelines to direct future analytic reporting tools.",
    "supplemental": []
  },
  "Cicero": {
    "type": "paper",
    "doi": "https://doi.org/10.1145/3491102.3517455",
    "id": "2022-cicero-responsive-grammar",
    "title": "Cicero: A Declarative Grammar for Responsive Visualization",
    "authors": "Hyeok Kim AND Ryan Rossi AND Fan Du AND Eunyee Koh AND Shunan Guo AND Jessica Hullman AND Jane Hoffswell",
    "booktitle": "ACM Human Factors in Computing Systems (CHI)",
    "conference": "CHI",
    "year": 2022,
    "url": "https://jhoffswell.github.io/website/resources/papers/2022-CiceroResponsiveGrammar-CHI.pdf",
    "paper": "website/resources/papers/2022-CiceroResponsiveGrammar-CHI.pdf",
    "thumbnail": "website/resources/images/ciceroResponsiveGrammar-thumbnail.png",
    "figure": "website/resources/images/ciceroResponsiveGrammar-figure.png",
    "figurecaption": "Thirteen responsive visualization use cases reproduced using Cicero. The blue- and gray-bordered views are the desktop and mobile versions, respectively. The mobile versions of the Oil Spills case are from (1) the original article and (2) the version suggested by Hoffswell et al. [13]. Full size images are included in the Supplemental Material.",
    "abstract": "Designing responsive visualizations can be cast as applying transformations to a source view to render it suitable for a different screen size. However, designing responsive visualizations is often tedious as authors must manually apply and reason about candidate transformations. We present Cicero, a declarative grammar for concisely specifying responsive visualization transformations which paves the way for more intelligent responsive visualization authoring tools. Cicero's flexible specifier syntax allows authors to select visualization elements to transform, independent of the source view's structure. Cicero encodes a concise set of actions to encode a diverse set of transformations in both desktop-first and mobile-first design processes. Authors can ultimately reuse design-agnostic transformations across different visualizations. To demonstrate the utility of Cicero, we develop a compiler to an extended version of Vega-Lite, and provide principles for our compiler. We further discuss the incorporation of Cicero into responsive visualization authoring tools, such as a design recommender.",
    "supplemental": [
      {
        "name": "arXiv",
        "link": "https://doi.org/10.48550/arXiv.2203.08314"
      },
      {
        "name": "Twitter",
        "link": "https://twitter.com/hyeok__kim/status/1506395763928096770"
      },
      {
        "name": "Talk",
        "link": "https://youtu.be/2sawlX9PsBQ"
      },
      {
        "name": "Supplemental Materials (OSF)", 
        "link": "https://osf.io/eg4xq"
      },
      {
        "name": "Example Gallery", 
        "link": "https://see-mike-out.github.io/cicero-supplemental/"
      }
    ]
  },
  "VisGNN": {
    "type": "paper",
    "doi": "https://doi.org/10.1145/3485447.3512001",
    "id": "2022-visgnn-personalized-recommendation",
    "title": "VisGNN: Personalized Visualization Recommendation via Graph Neural Networks",
    "authors": "Fayokemi Ojo AND Ryan A. Rossi AND Jane Hoffswell AND Shunan Guo AND Fan Du AND Sungchul Kim AND Chang Xiao AND Eunyee Koh",
    "booktitle": "ACM The Web Conference (WebConf)",
    "conference": "WebConf",
    "year": 2022,
    "url": "https://jhoffswell.github.io/website/resources/papers/2022-PersonalizedVisualizationVisGNN-WebConf.pdf",
    "paper": "website/resources/papers/2022-PersonalizedVisualizationVisGNN-WebConf.pdf",
    "thumbnail": "website/resources/images/PersonalizedVisualizationVisGNN-thumbnail.png",
    "figure": "website/resources/images/PersonalizedVisualizationVisGNN-figure.png",
    "figurecaption": "VisGNN aggregates embeddings from the neighboring visual-configurations and data-attributes. The resulting embeddings are then transformed, stored, and updated for use in the next layer.",
    "abstract": "In this work, we develop a Graph Neural Network (GNN) framework for the problem of personalized visualization recommendation. The GNN-based framework first represents the large corpus of datasets and visualizations from users as a large heterogeneous graph. Then, it decomposes a visualization into its data and visual components, and then jointly models each of them as a large graph to obtain embeddings of the users, attributes (across all datasets in the corpus), and visual-configurations. From these user-specific embeddings of the attributes and visual-configurations, we can predict the probability of any visualization arising from a specific user. Finally, the experiments demonstrated the effectiveness of using graph neural networks for automatic and personalized recommendation of visualizations to specific users based on their data and visual (design choice) preferences. To the best of our knowledge, this is the first such work to develop and leverage GNNs for this problem.",
    "supplemental": []
  },
  "Framework": {
    "type": "paper",
    "doi": "https://doi.org/10.1109/TVCG.2021.3114814",
    "id": "2021-recommendation-framework",
    "title": "An Evaluation-Focused Framework for Visualization Recommendation Algorithms",
    "authors": "Zehua Zeng AND Phoebe Moh AND Fan Du AND Jane Hoffswell AND Tak Yeon Lee AND Sana Malik AND Eunyee Koh AND Leilani Battle",
    "booktitle": "IEEE Trans. Visualization \& Comp. Graphics (Proc. VIS)",
    "conference": "VIS",
    "year": 2021,
    "url": "https://jhoffswell.github.io/website/resources/papers/2021-RecommendationFramework-VIS.pdf",
    "paper": "website/resources/papers/2021-RecommendationFramework-VIS.pdf",
    "thumbnail": "website/resources/images/recommendationFramework-thumbnail.png",
    "figure": "website/resources/images/recommendationFramework-figure.png",
    "figurecaption": "Illustration of the visualization design space and the enumeration step of a hybrid recommendation algorithm, using movies data as an example. The user's current visualization is at n0.",
    "abstract": "Although we have seen a proliferation of algorithms for recommending visualizations, these algorithms are rarely compared with one another, making it difficult to ascertain which algorithm is best for a given visual analysis scenario. Though several formal frameworks have been proposed in response, we believe this issue persists because visualization recommendation algorithms are inadequately specified from an evaluation perspective. In this paper, we propose an evaluation-focused framework to contextualize and compare a broad range of visualization recommendation algorithms. We present the structure of our framework, where algorithms are specified using three components: (1) a graph representing the full space of possible visualization designs, (2) the method used to traverse the graph for potential candidates for recommendation, and (3) an oracle used to rank candidate designs. To demonstrate how our framework guides the formal comparison of algorithmic performance, we not only theoretically compare five existing representative recommendation algorithms, but also empirically compare four new algorithms generated based on our findings from the theoretical comparison. Our results show that these algorithms behave similarly in terms of user performance, highlighting the need for more rigorous formal comparisons of recommendation algorithms to further clarify their benefits in various analysis scenarios.",
    "award": "Best Paper Honorable Mention",
    "supplemental": [
      {
        "name": "Supplemental Materials (OSF)", 
        "link": "https://osf.io/txqsu/?view_only=17a4bbf7239547f18305584c842c5a3c"
      }
    ]
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
    "url": "https://jhoffswell.github.io/website/resources/JaneHoffswell-Dissertation.pdf",
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
    "url": "https://jhoffswell.github.io/website/resources/papers/2020-ResponsiveVisualization-CHI.pdf",
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
        "name": "Talk",
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
    "url": "https://jhoffswell.github.io/website/resources/papers/2019-InteractiveTableRepair-CHI.pdf",
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
    "url": "https://jhoffswell.github.io/website/resources/papers/2019-DoctoralConsortium-CHI.pdf",
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
    "url": "https://jhoffswell.github.io/website/resources/papers/2018-SetCoLa-EuroVis.pdf",
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
    "url": "https://jhoffswell.github.io/website/resources/papers/2018-AugmentingCode-CHI.pdf",
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
    "url": "https://jhoffswell.github.io/website/resources/papers/2017-Triggers-CSCW.pdf",
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
    "url": "https://jhoffswell.github.io/website/resources/papers/2016-VegaDebugging-EuroVis.pdf",
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
        "link": "website/resources/supplemental/vegaDebugging-interviewProtocol.pdf"
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
    "url": "https://jhoffswell.github.io/website/resources/papers/2015-ReactiveVega-InfoVis.pdf",
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
    "url": "https://jhoffswell.github.io/website/resources/papers/2015-DataFlow-EuroRV3.pdf",
    "paper": "website/resources/papers/2015-DataFlow-EuroRV3.pdf",
    "thumbnail": "website/resources/images/eurorv3-thumbnail.png",
    "figure": "website/resources/images/eurorv3-figure.png",
    "figurecaption": "The components of a Vega workflow with related elements colored; (a) the specification, (b) the output visualization, and (c) a simplified representation of the underlying data flow graph.",
    "abstract": "Vega is a declarative visualization grammar that decouples specification from execution to allow users to focus on the visual representation rather than low-level implementation decisions. However, this representation comes at the cost of effective debugging as its execution is obfuscated. By presenting the developer with Vega's data flow graph along with interactive capabilities, we can bridge the gap between specification and execution to enable direct inspection of the connections between each component. This inspection can augment the developer's mental model of the specification, enabling the developer to more easily identify areas of interest and implement changes to the resulting visualization.",
    "supplemental": []
  }
}