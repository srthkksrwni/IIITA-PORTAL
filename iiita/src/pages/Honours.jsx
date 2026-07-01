import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const sideLinks = [
  ["overview", "Overview"],
  ["basket", "12 Credit Basket"],
  ["semester-plan", "Semester Plan"],
  ["outcomes", "Mandatory Outcomes"],
  ["faq", "FAQ"],
];

const courses = [
  {
    sno: "1",
    title: "Self-Study Course",
    remarks:
      'As finalized by the Honors supervisor in the chosen field of research. The course may be titled "Research Practices and Tools" and shall conclude with problem/research domain identification and relevant literature survey.',
    credits: "02 / 2-0-0-0",
    semester: "3rd Semester",
  },
  {
    sno: "2",
    title: "Advanced Domain-Specific Two Online/Offline Courses",
    remarks:
      "Two advanced courses decided by the Honors Supervisor. One course may be laboratory-intensive or laboratory-only with rigorous hands-on work on relevant software, simulation, or hardware tools.",
    credits: "02 / 1-0-0-1 + 02 / 1-0-0-1",
    semester: "4th Semester",
  },
  {
    sno: "3",
    title: "Research Project & Experimentation",
    remarks:
      "Project implementation, findings, presentation, and report based on the chosen research problem.",
    credits: "02 / 0-4-0-0",
    semester: "5th Semester",
  },
  {
    sno: "4",
    title: "Dissertation",
    remarks:
      "Effective attainment of mandated research outcomes and communication of results. Dissertation and experimentation period may be extended beyond the 6th semester until the mandated outcome is demonstrably attained.",
    credits: "02 / 0-4-0-0",
    semester: "6th Semester",
  },
];

export default function Honours() {
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
            / Honors by Research
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Honors by Research
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-100">
            An optional research-focused honors pathway for B.Tech programmes,
            designed to encourage early research engagement and tangible
            research outcomes.
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
                The optional Honors basket carries a total of 12 credits across
                four semesters, starting from the 3rd semester of the UG
                programme and continuing formally through the 6th semester.
                Honors by Research emphasizes research and the award is based on
                demonstrated research outcomes rather than only completion of
                credit requirements.
              </p>
            </ContentBlock>

            <ContentBlock id="basket" title="Honors by Research — 12 Credit Optional Basket">
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-blue-50 text-slate-900">
                    <tr>
                      <th className="p-4">S. No.</th>
                      <th className="p-4">Course Title</th>
                      <th className="p-4">Remarks</th>
                      <th className="p-4">Credits / L-T-P-S</th>
                      <th className="p-4">Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses.map((course) => (
                      <tr key={course.title} className="border-t border-slate-200">
                        <td className="p-4 font-semibold text-blue-700">
                          {course.sno}
                        </td>
                        <td className="p-4 font-bold text-slate-900">
                          {course.title}
                        </td>
                        <td className="p-4 text-slate-600">{course.remarks}</td>
                        <td className="p-4 text-slate-600">{course.credits}</td>
                        <td className="p-4 text-slate-600">{course.semester}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ContentBlock>

            <ContentBlock id="semester-plan" title="Semester-wise Structure">
              <div className="grid gap-5 md:grid-cols-2">
                {courses.map((course) => (
                  <div
                    key={course.semester}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      {course.semester}
                    </span>
                    <h4 className="mt-4 text-lg font-bold text-slate-900">
                      {course.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {course.remarks}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-blue-700">
                      Credits: {course.credits}
                    </p>
                  </div>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock id="outcomes" title="Mandatory Research Outcomes">
              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
                <p className="font-semibold text-slate-800">
                  For successful completion of Honors by Research, enrolled
                  students must demonstrate at least one of the following
                  tangible research outcomes:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
                  <li>
                    At least one accepted research publication in a Tier I/II or
                    A*/A indexed domain-specific conference of repute.
                  </li>
                  <li>
                    At least one relevant publication in an SCI journal.
                  </li>
                  <li>One granted patent.</li>
                </ul>

                <p className="mt-4 text-sm text-slate-600">
                  The list of acceptable conferences and journals may be drawn by
                  the respective department.
                </p>
              </div>
            </ContentBlock>

            <ContentBlock id="faq" title="Frequently Asked Questions">
              <FAQ
                question="When does Honors by Research begin?"
                answer="It begins from the 3rd semester of the UG programme and formally spans from the 3rd to the 6th semester."
              />
              <FAQ
                question="How many credits does the Honors basket carry?"
                answer="The optional Honors basket carries a total of 12 credits."
              />
              <FAQ
                question="Is the award based only on completing credits?"
                answer="No. Honors by Research emphasizes research outcomes, and the award is based on mandated tangible research outcomes."
              />
              <FAQ
                question="What is required for successful completion?"
                answer="Students must demonstrate at least one accepted Tier I/II or A*/A conference publication, one SCI journal publication, or one granted patent."
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