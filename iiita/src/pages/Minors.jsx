import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const sideLinks = [
  ["overview", "Overview"],
  ["eligibility", "Eligibility"],
  ["science-happiness", "Science of Happiness"],
  ["mathematical-analysis", "Mathematical Analysis"],
  ["biological-data", "Biological Data Analytics"],
  ["physics", "Frontiers in Physics"],
  ["entrepreneurship", "Entrepreneurship & Innovation"],
  ["economics-finance", "Economics & Finance"],
  ["faq", "FAQ"],
];

const programs = [
  {
    id: "science-happiness",
    title: "Science of Happiness (MDM)",
    description:
      "This MDM promotes research, training, education, and practices of well-being through the science and philosophy of happiness. It focuses on nurturing positive emotions, holistic well-being, community growth, family well-being, and individual thriving.",
    courses: [
      "Introduction to Science of Happiness (CS2501)",
      "Understanding Domains of Happiness (CS2502)",
      "Happiness Indices (CS2503)",
      "Assessment of Happiness (CS2504)",
      "Independent Study on Science of Happiness (CS2505)",
    ],
  },
  {
    id: "mathematical-analysis",
    title: "Mathematical Analysis (MDM)",
    description:
      "This programme develops strong foundations in real analysis, topology, differential geometry, measure theory, and functional analysis with focus on rigorous mathematical reasoning and advanced analytical methods.",
    courses: [
      "Real Analysis (AS2511)",
      "Introduction to Topology (AS2512)",
      "Differential Geometry of Curves and Surfaces (AS2513)",
      "Measure Theory (AS2514)",
      "Functional Analysis (AS2515)",
    ],
  },
  {
    id: "biological-data",
    title: "Biological Data Analytics (MDM)",
    description:
      "This programme introduces students to genomics, proteomics, sequencing, cheminformatics, systems biology, and molecular structure prediction using computational and analytical approaches.",
    courses: [
      "Proteomics and Genomics (AS2501)",
      "Next Generation Sequencing (AS2502)",
      "Cheminformatics for Engineers (AS2503)",
      "Systems Biology and Modeling (AS2504)",
      "Molecular Structure Prediction (AS2505)",
    ],
  },
  {
    id: "physics",
    title: "Frontiers in Physics (MDM)",
    description:
      "This programme exposes students to advanced topics in light-matter interaction, space-time physics, magnetic materials, quantum materials, and green energy technologies.",
    courses: [
      "Light Matter Interaction (AS2516)",
      "Physics of Space and Time (AS2517)",
      "Magnetic Materials and Applications (AS2518)",
      "Quantum Materials & Devices (AS2519)",
      "Green Energy Physics (AS2520)",
    ],
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship & Innovation (MDM)",
    description:
      "This programme builds entrepreneurial thinking, innovation capability, business planning, finance understanding, and corporate entrepreneurship skills for students interested in start-ups and innovation-driven careers.",
    courses: [
      "Fundamentals of Entrepreneurship (MS2501)",
      "Social Entrepreneurship (MS2502)",
      "Entrepreneurial Finance (MS2503)",
      "Innovation Management (MS2504)",
      "Managing Corporate Entrepreneurship (MS2505)",
    ],
  },
  {
    id: "economics-finance",
    title: "Economics & Finance for Engineers (MDM)",
    description:
      "This programme helps engineering students understand economic systems, money and banking, business environments, start-up economics, and digital economy models.",
    courses: [
      "Indian Economics (MS2506)",
      "Money and Banking (MS2507)",
      "Economics of Business Environment (MS2508)",
      "Start-Up Economics (MS2509)",
      "Digital Economics (MS2510)",
    ],
  },
];

export default function Minors() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-blue-200">
            <HashLink to="/" className="hover:text-white">
              Home
            </HashLink>{" "}
            /{" "}
            <HashLink to="/programs" className="hover:text-white">
              Programs
            </HashLink>{" "}
            / Minor Programs
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Minor Programs
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-100">
            Explore interdisciplinary academic pathways designed to broaden
            student learning, strengthen research orientation, and support
            holistic development.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[280px_1fr]">
          <aside>
            <nav className="sticky top-24 space-y-1 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              {sideLinks.map(([id, label]) => (
                <HashLink
                  smooth
                  key={id}
                  to={`#${id}`}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  {label}
                </HashLink>
              ))}
            </nav>
          </aside>

          <div className="space-y-10">
            <ContentBlock id="overview" title="Program Overview">
              <p>
                Minor Programs provide students with interdisciplinary academic
                enrichment pathways across wellness, mathematics, biological
                data analytics, physics, entrepreneurship, innovation, economics,
                and finance. These programmes help students broaden their
                knowledge, strengthen analytical thinking, and gain exposure to
                emerging academic and professional domains.
              </p>
            </ContentBlock>

             <ContentBlock id="eligibility" title="Eligibility">
              <ul className="list-disc space-y-2 pl-6">
                <li>Open to students who have completed the first year of their programme.</li>
                <li>Minimum CGPA threshold, typically 7.0, as notified each cycle.</li>
                <li>No active academic backlog at the time of application.</li>
                <li>Honours requires faculty endorsement and a statement of interest.</li>
              </ul>
            </ContentBlock>

            {programs.map((program) => (
              <ContentBlock
                key={program.id}
                id={program.id}
                title={program.title}
              >
                <p>{program.description}</p>
                <CourseList courses={program.courses} />
              </ContentBlock>
            ))}

            <ContentBlock id="faq" title="Frequently Asked Questions">
              <FAQ
                question="Who can apply for Minor Programs?"
                answer="Students may apply as per the eligibility criteria and academic rules notified by the institute."
              />
              <FAQ
                question="Are Minor Programs credit-bearing?"
                answer="Yes, Minor Programs are structured academic pathways and follow the institute's credit framework."
              />
              <FAQ
                question="Where can students get more details?"
                answer="Students should refer to official institute circulars and programme handbooks for detailed eligibility, course structure, and application timelines."
              />
            </ContentBlock>
          </div>
        </div>
      </section>
    </>
  );
}

function ContentBlock({ id, title, children }) {
  return (
    <div id={id} className="scroll-mt-28">
      <h3 className="mb-4 text-2xl font-bold text-slate-900">{title}</h3>
      <div className="leading-relaxed text-slate-600">{children}</div>
    </div>
  );
}

function CourseList({ courses }) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-2">
      {courses.map((course) => (
        <div
          key={course}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <h4 className="font-bold text-slate-900">{course}</h4>
        </div>
      ))}
    </div>
  );
}

function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-3 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-slate-900"
      >
        {question}
        <span className="text-xl text-blue-700">{open ? "−" : "+"}</span>
      </button>

      {open && <div className="px-5 pb-4 text-slate-600">{answer}</div>}
    </div>
  );
}