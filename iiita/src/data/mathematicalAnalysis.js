export const mathematicalAnalysis = {
  id: "mathematical-analysis",
  title: "Mathematical Analysis (MDM)",

  objective:
    "To develop strong foundations in analysis, topology, differential geometry, measure theory, and functional analysis by studying limits, continuity, differentiability, integration, spaces, mappings, and advanced mathematical structures.",

  courses: [
    {
      code: "AS2511",
      title: "Real Analysis",
      objective:
        "To discuss in detail the concepts of sequence, series, limit, continuity, derivative, and integration for single and multiple variables along with their applications.",
      contents: [
        "Real number system, sequences, convergence, bounded sequences, Cauchy sequences, infinite series, absolute and conditional convergence.",
        "Limit, continuity, uniform continuity, differentiability, mean value theorems, Taylor’s theorem, Taylor’s series, power series, maxima and minima.",
        "Functions of several variables, limit, continuity, differentiability, gradient, directional derivatives, chain rule, Taylor’s theorem, maxima and minima, and Lagrange multipliers.",
        "Riemann integral, fundamental theorems of calculus, improper integrals, and multiple integrals.",
      ],
      references: [
        "K. A. Ross, Elementary Analysis: The Theory of Calculus, Springer, 2nd Edition, 2013.",
        "Walter Rudin, Principles of Mathematical Analysis, McGraw Hill, 3rd Edition, 2023.",
        "S. R. Ghorpade and B. V. Limaye, A Course in Calculus and Real Analysis, Springer, 2006.",
        "S. R. Ghorpade and B. V. Limaye, A Course in Multivariable Calculus and Analysis, Springer, 2010.",
      ],
    },
    {
      code: "AS2512",
      title: "Introduction to Topology",
      objective:
        "To introduce elementary properties of topological spaces and structures defined on them, such as open and closed sets, interiors and boundaries, homeomorphisms, connectedness, and compactness.",
      contents: [
        "Topological spaces, basis for a topology, open and closed sets, continuous functions, and homeomorphism.",
        "Subspace topology, product topology, and quotient topology.",
        "Connectedness, path-connectedness, and compactness.",
        "Countability axioms and separation axioms.",
      ],
      references: [
        "C. Adams and R. Franzosa, Introduction to Topology: Pure and Applied, Pearson-Prentice Hall, 2009.",
        "M. A. Armstrong, Basic Topology, Springer, 2004.",
        "J. R. Munkres, Topology, Prentice-Hall, 2000.",
      ],
    },
    {
      code: "AS2513",
      title: "Differential Geometry of Curves and Surfaces",
      objective:
        "To provide a systematic exposition of the essential concepts of modern differential geometry, primarily focusing on two- and three-dimensional Euclidean space.",
      contents: [
        "Curves in R² and R³: parametrized curves, plane and space curves, curvature and torsion, and Frenet–Serret formula.",
        "Surfaces: smooth surfaces, tangent planes, and first fundamental form.",
        "Curvature and geodesics: normal curvature, second fundamental form, Euler’s theorem, and examples of geodesics.",
      ],
      references: [
        "M. P. Do Carmo, Differential Geometry of Curves and Surfaces, Dover Publications, 2nd Edition, 2016.",
        "Kristopher Tapp, Differential Geometry of Curves and Surfaces, Springer, 2016.",
        "S. Montiel and A. Ros, Curves and Surfaces, American Mathematical Society, 2nd Edition, 2009.",
        "Andrew Pressley, Elementary Differential Geometry, Springer, 2010.",
      ],
    },
    {
      code: "AS2514",
      title: "Measure Theory",
      objective:
        "To develop a fundamental tool for carrying out integration that behaves well with limits and admits a vast class of functions for which Riemann integration is not applicable.",
      contents: [
        "Measurable sets and Lebesgue measure.",
        "Measurable functions.",
        "Lebesgue integral.",
        "The space L₁ of integrable functions.",
        "Fubini’s theorem.",
      ],
      references: [
        "E. M. Stein and R. Shakarchi, Real Analysis: Measure Theory, Integration, and Hilbert Spaces, Princeton University Press, 2005.",
        "H. L. Royden and P. M. Fitzpatrick, Real Analysis, 4th Edition, 2010.",
        "G. D. Barra, Measure Theory and Integration, 2000.",
        "Inder K. Rana, An Introduction to Measure and Integration, American Mathematical Society, 2nd Edition, 2002.",
      ],
    },
    {
      code: "AS2515",
      title: "Functional Analysis",
      objective:
        "To study linear mappings defined on Banach spaces and Hilbert spaces, especially linear functionals on Lp, C[0,1], and sequence spaces, including major theorems such as Hahn-Banach, uniform boundedness, open mapping, and Banach-Steinhaus.",
      contents: [
        "Banach spaces, dimensionality, Hahn-Banach theorem, and uniform boundedness principle.",
        "Open mapping theorem, dual spaces, weak topology, and second dual.",
        "Weak* topology, Hilbert spaces, orthonormal bases, and linear operators.",
        "Adjoint operators, resolvent and spectrum, compact operators, and spectral theorem.",
      ],
      references: [
        "Walter Rudin, Functional Analysis, Tata McGraw-Hill Education, 2006.",
        "Rajendra Bhatia, Notes on Functional Analysis, Hindustan Book Agency.",
        "J. B. Conway, A Course in Functional Analysis, Springer.",
        "Bryan P. Rynne and Martin A. Youngson, Linear Functional Analysis, Springer.",
      ],
    },
  ],
};