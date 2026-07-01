import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

import { scienceOfHappiness } from "../data/scienceOfHappinessData";
import { mathematicalAnalysis } from "../data/mathematicalAnalysis";
import { biologicalDataAnalytics } from "../data/biologicalDataAnalytics";
import { medicalDiagnosticsTherapeuticTechnology } from "../data/medicalDiagnosticsTherapeuticTechnology";
import { frontiersInPhysics } from "../data/frontiersInPhysics";
import { entrepreneurshipInnovation } from "../data/entrepreneurshipInnovation";
import { economicsFinanceForEngineers } from "../data/economicsFinanceForEngineers";

const programs = [
  scienceOfHappiness,
  mathematicalAnalysis,
  biologicalDataAnalytics,
  medicalDiagnosticsTherapeuticTechnology,
  frontiersInPhysics,
  entrepreneurshipInnovation,
  economicsFinanceForEngineers,
];

const sideLinks = [
  ["overview", "Overview"],
  ["eligibility", "Eligibility"],
  ...programs.map((program) => [program.id, program.title]),
  ["faq", "FAQ"],
];

export default function Minors() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-blue-200">
            <HashLink to="/" className="hover:text-white">Home</HashLink>{" "}
            /{" "}
            <HashLink to="/programs" className="hover:text-white">Programs</HashLink>{" "}
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
                enrichment pathways across wellness, mathematics, biological data
                analytics, medical diagnostics, physics, entrepreneurship,
                innovation, economics, and finance.
              </p>
            </ContentBlock>

            <ContentBlock id="eligibility" title="Eligibility">
              <ul className="list-disc space-y-2 pl-6">
                <li>Open to students as per institute-notified academic rules.</li>
                <li>Minimum CGPA requirement as notified for the respective cycle.</li>
                <li>No active academic backlog at the time of application.</li>
                <li>Students should refer to official circulars for final eligibility.</li>
              </ul>
            </ContentBlock>

            {programs.map((program) => (
              <ContentBlock key={program.id} id={program.id} title={program.title}>
                <p>{program.objective}</p>
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
                answer="Students should refer to official institute circulars and programme handbooks."
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
    <div className="mt-6 space-y-5">
      {courses.map((course) => (
        <div
          key={course.code}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="mb-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            {course.code}
          </div>

          <h4 className="mb-3 text-xl font-bold text-slate-900">
            {course.title}
          </h4>

          {course.objective && (
            <p className="mb-4 text-slate-600">{course.objective}</p>
          )}

          {course.contents?.length > 0 && (
            <>
              <h5 className="mb-2 font-bold text-slate-900">Course Contents</h5>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-slate-600">
                {course.contents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {course.learningOutcomes?.length > 0 && (
            <>
              <h5 className="mb-2 font-bold text-slate-900">Learning Outcomes</h5>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-slate-600">
                {course.learningOutcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {course.references?.length > 0 && (
            <>
              <h5 className="mb-2 font-bold text-slate-900">References</h5>
              <ul className="list-disc space-y-2 pl-6 text-sm text-slate-500">
                {course.references.map((ref) => (
                  <li key={ref}>{ref}</li>
                ))}
              </ul>
            </>
          )}
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