export const medicalDiagnosticsTherapeuticTechnology = {
  id: "medical-diagnostics",
  title: "Medical Diagnostics & Therapeutic Technology (MDM)",

  objective:
    "To provide students with foundational knowledge of human physiology, biomedical instrumentation, BioMEMS, medical imaging, tissue engineering, and therapeutic technologies used in modern healthcare and biomedical research.",

  courses: [
    {
      code: "AS2506",
      title: "Basics of Human Anatomy & Physiology",
      objective:
        "To introduce students to the structural organization of the human body, organ systems, and physiological functions of major organs and systems.",
      contents: [
        "Appendicular skeleton: scapula, humerus, radius, ulna, hip joint, femur, ankle, and foot.",
        "Principal muscles: deltoid, biceps, triceps, respiratory muscles, abdominal muscles, and gluteal muscles.",
        "Systemic physiology including nervous system, neuromuscular system, circulatory system, respiratory system, and cardiovascular system.",
      ],
      references: [
        "Arthur C. Guyton, Textbook of Medical Physiology, 8th Edition, Prism Books & W.B. Saunders Company, 1991.",
        "W. F. Ganong, Review of Medical Physiology, 17th Edition, Prentice-Hall, 1995.",
      ],
    },

    {
      code: "AS2507",
      title: "Biomedical Instrumentation",
      objective:
        "To introduce students to biomedical devices, physiological signal acquisition, and practical considerations involved in physiological measurements.",
      contents: [
        "Origins of ECG, multi-lead ECG systems, ECG analysis, heart rate, and heart rate variability (HRV).",
        "Brain function, EEG waves, significance of EEG signals, EEG electrode placement, noise sources, and mitigation techniques.",
        "Cardiac action potentials, EEG measurements, precautions during measurements, and basic biomedical signal analysis.",
      ],
      references: [
        "R. S. Khandpur, Handbook of Biomedical Instrumentation, 3rd Edition, PHI Publications.",
        "Carr Brown, Introduction to Biomedical Equipment Technology, PHI Publications.",
        "J. G. Webster, Encyclopedia of Medical Devices and Instrumentation, Volumes I–IV, PHI Publications.",
      ],
    },

    {
      code: "AS2508",
      title: "BioMEMS & Nanotechnology",
      objective:
        "To provide an overview of micro- and nano-scale biomedical devices, their design principles, fabrication methods, and healthcare applications.",
      contents: [
        "Micro- and nano-scale domains, scaling laws, MEMS materials, fabrication processes, devices, and applications.",
        "Micro Total Analysis Systems (µTAS), fluid control components, sample handling, separation techniques, detection systems, and PCR applications.",
        "Implantable devices, neural interfaces, microsurgical tools, microneedles, drug delivery systems, MEMS metrology, and packaging.",
      ],
      references: [
        "Chang Liu, Foundations of MEMS, Prentice Hall, 2006.",
        "Marc Madou, Fundamentals of Microfabrication, CRC Press, 2002.",
        "Albert Folch, Introduction to BioMEMS, CRC Press, 2012.",
      ],
    },

    {
      code: "AS2509",
      title: "Medical Imaging",
      objective:
        "To familiarize students with the physics, instrumentation, and signal generation mechanisms used in modern medical imaging systems.",
      contents: [
        "Ultrasound imaging: wave propagation, scattering, absorption, attenuation, and pulse-echo imaging.",
        "Optical Coherence Tomography (OCT) and Michelson-Morley interferometer principles.",
        "X-ray imaging instrumentation and attenuation mechanisms in biological tissues.",
        "MRI fundamentals including angular momentum, nuclear magnetic moment, Zeeman effect, Larmor precession, T1, T2, T2* relaxation, chemical shift, and free induction decay.",
      ],
      references: [
        "Bushberg et al., The Essential Physics of Medical Imaging, 3rd Edition, Lippincott Williams & Wilkins.",
        "Webb, The Physics of Medical Imaging, CRC Press, 1988.",
      ],
    },

    {
      code: "AS2510",
      title: "Tissue Engineering & Gene Therapy",
      objective:
        "To provide students with an introduction to biomaterials, tissue engineering principles, gene therapy concepts, and interactions between materials and biological systems.",
      contents: [
        "Classification of biomaterials and evolution of biomaterial science.",
        "Physico-chemical and mechanical properties of biomaterials including elasticity, toughness, strength, hardness, fatigue, and wear resistance.",
        "Natural polymers, degradable polymers, surface treatments, and advanced biomaterial case studies.",
        "Cell-biomaterial interactions, biocompatibility, tissue organization, stem cell engineering, and host integration mechanisms.",
      ],
      references: [
        "Lanza, Langer & Vacanti, Principles of Tissue Engineering, Academic Press, 3rd Edition, 2007.",
        "Palsson & Bhatia, Tissue Engineering, Pearson Prentice Hall, 2003.",
        "Buddy D. Ratner et al., Biomaterials Science: An Introduction to Materials in Medicine, 2nd Edition.",
      ],
    },
  ],
};