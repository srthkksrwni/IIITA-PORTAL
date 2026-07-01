export const biologicalDataAnalytics = {
  id: "biological-data-analytics",
  title: "Biological Data Analytics (MDM)",

  objective:
    "To provide students with interdisciplinary knowledge of genomics, proteomics, next-generation sequencing, cheminformatics, systems biology, and molecular structure prediction, enabling them to analyze, model, and interpret complex biological data using computational and data-driven approaches. :contentReference[oaicite:0]{index=0}",

  courses: [
    {
      code: "AS2501",
      title: "Proteomics and Genomics",
      objective:
        "To provide fundamental knowledge of molecular biology, biochemistry, genomics, and proteomics, including gene structure, regulation, biomolecules, recombinant protein production, and laboratory techniques. :contentReference[oaicite:1]{index=1}",
      contents: [
        "Central dogma of molecular biology, gene structure, gene expression, gene regulation, genetic code, restriction enzymes, mutagenesis, and DNA sequencing.",
        "Transcriptomics including transcription, RNA modifications, read mapping, differential expression analysis, non-coding RNA, pathway analysis, and Gene Ontology.",
        "Proteomics including translation, post-translational modifications, protein expression, cloning, recombinant DNA technology, and proteomics software tools.",
        "Analytical techniques such as PCR, RT-PCR, ELISA, SDS-PAGE, 2D-PAGE, blotting techniques, RNA-seq, ChIP-seq, DNA microarray, and mass spectrometry.",
      ],
      references: [
        "Freifelder D., Molecular Biology, 5th Edition, 2012.",
        "Berg, Tymoczko, Gatto and Stryer, Biochemistry, 8th Edition, 2015.",
        "Allison A. Lizabeth, Fundamental Molecular Biology, 2nd Edition, 2012.",
        "Watson et al., Molecular Biology of the Gene, 6th Edition, 2008.",
        "Twyman R., Principles of Proteomics, 2013.",
      ],
    },

    {
      code: "AS2502",
      title: "Next Generation Sequencing",
      objective:
        "To develop proficiency in genomic data handling, sequence alignment, genome assembly, and application of data science techniques in omics data analysis. :contentReference[oaicite:2]{index=2}",
      contents: [
        "DNA sequencing technologies, genomic strings, exact matching, homology detection, pairwise sequence alignment, BLAST, metabolomics, and pathway models.",
        "Preprocessing, indexing, Boyer-Moore algorithm, k-mer indexing, approximate matching, edit distance, global and local alignment.",
        "Genome assembly using overlap graphs, shortest common superstring, De Bruijn graphs, Eulerian walks, and modern assembly approaches.",
        "Clustering, dimension reduction, normalization, linear models, logistic regression, hypothesis testing, FDR, permutation testing, bootstrapping, and GEO databases.",
      ],
      references: [
        "Phillip Compeau & Pavel Pevzner, Bioinformatics Algorithms: An Active Learning Approach.",
        "Tiago Antao, Bioinformatics with Python Cookbook.",
        "Luke Alphey, DNA Sequencing: From Experimental Methods to Bioinformatics.",
        "Xinkun Wang, Next-Generation Sequencing Data Analysis.",
      ],
    },

    {
      code: "AS2503",
      title: "Cheminformatics for Engineers",
      objective:
        "To introduce students to computational approaches for chemical data analysis, QSAR/QSPR modeling, reaction network generation, and AI-driven drug discovery. :contentReference[oaicite:3]{index=3}",
      contents: [
        "Chemical databases, file formats, substructure searching, virtual screening, similarity searching, and molecular representations.",
        "QSAR concepts, Hammett and Hansch equations, molecular descriptors, regression models, CoMFA, GRID, and drug activity prediction.",
        "QSPR modeling, partition coefficients, quantum chemical descriptors, DFT, reaction network generation, and cheminformatics software.",
        "Machine learning applications in chemistry and integration of bioinformatics algorithms with chemical data.",
      ],
      references: [
        "Jurgen Bajorath, Cheminformatics: Concepts, Methods and Tools for Drug Discovery.",
        "Johann Gasteiger & Thomas Engel, Cheminformatics.",
        "Andrew R. Leach, Molecular Modelling: Principles and Applications.",
        "Bioinformatics: From Genomes to Drugs, Volumes I & II.",
        "Andrew R. Leach & Valerie J. Gillet, An Introduction to Cheminformatics.",
      ],
    },

    {
      code: "AS2504",
      title: "Systems Biology and Modeling",
      objective:
        "To provide a systems-level understanding of biological processes through mathematical modeling, network analysis, graph theory, and regulatory system simulations. :contentReference[oaicite:4]{index=4}",
      contents: [
        "Biological systems, mathematical modeling, ODE-based models, logistic models, SIR and SIRV models, and parameter estimation.",
        "Biological networks, graph theory, centrality measures, shortest paths, Dijkstra’s algorithm, clustering coefficients, and adjacency matrices.",
        "Mathematical modeling of gene regulation, transcription, translation, metabolic systems, and glucose regulation circuits.",
        "Signaling systems, feedback and feedforward loops, toggle switches, biological oscillators, and repressilators.",
      ],
      references: [
        "Eberhard Voit, A First Course in Systems Biology, 2012.",
        "Uri Alon, An Introduction to Systems Biology, 2006.",
        "James D. Murray, Mathematical Biology: An Introduction, 2007.",
        "Linda Allen, Introduction to Mathematical Biology, 2006.",
      ],
    },

    {
      code: "AS2505",
      title: "Molecular Structure Prediction",
      objective:
        "To provide students with knowledge of biomolecular structures, protein structure prediction, molecular simulation, and AI-based structure prediction techniques. :contentReference[oaicite:5]{index=5}",
      contents: [
        "Protein structure fundamentals, intermolecular forces, protein folding, Levinthal paradox, Ramachandran plots, motifs, folds, and domains.",
        "Structure determination using X-ray crystallography and NMR, homology modeling, threading, fold recognition, and validation methods.",
        "Ab-initio structure prediction, lattice models, random walks, molecular dynamics, force fields, simulated annealing, and structure refinement.",
        "RNA structure prediction, protein validation techniques, VMD visualization, Gromacs simulations, Modeller, RoseTTAFold, and AlphaFold.",
      ],
      references: [
        "Carl Branden & John Tooze, Introduction to Protein Structure.",
        "Thomas E. Creighton, Proteins: Structures and Molecular Properties.",
        "Andrew R. Leach, Molecular Modelling: Principles and Applications.",
        "Stephen Neidle, Principles of Nucleic Acid Structure.",
      ],
    },
  ],
};