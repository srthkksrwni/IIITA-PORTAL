import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const sideLinks = [
  ["overview", "Overview"],
  ["program-structure", "Program Structure"],
  ["eligibility", "Eligibility"],
  ["research-focus", "Research Focus"],
  ["application", "Application"],
  ["benefits", "Benefits"],
  ["faq", "FAQ"],
];

const highlights = [
  "Advanced academic pathway for high-performing students",
  "Research-oriented learning with faculty guidance",
  "Specialized coursework beyond regular degree requirements",
  "Transcript-recognised Honours distinction",
];

const steps = [
  ["Check eligibility", "Review CGPA, academic standing, and departmental criteria."],
  ["Submit interest", "Apply through the notified academic process within the announced window."],
  ["Faculty review", "Faculty members review academic preparedness and research interest."],
  ["Honours enrolment", "On approval, the Honours track is added to the student's academic plan."],
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
            / Honours Programs
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Honours Programs
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-100">
            A focused academic pathway for students who wish to pursue advanced
            coursework, research exposure, and deeper disciplinary expertise.
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
                Honours Programs are designed for students who want to go beyond
                the standard curriculum and develop advanced academic depth in
                their chosen discipline. The programme encourages research-based
                learning, specialized coursework, faculty mentorship, and
                independent academic exploration.
              </p>
            </ContentBlock>

            <ContentBlock id="program-structure" title="Program Structure">
              <div className="grid gap-5 md:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <h4 className="font-bold text-slate-900">{item}</h4>
                  </div>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock id="eligibility" title="Eligibility">
              <ul className="list-disc space-y-2 pl-6">
                <li>Open to students meeting the institute-notified academic criteria.</li>
                <li>Minimum CGPA requirement as announced for the respective cycle.</li>
                <li>No active academic backlog at the time of application.</li>
                <li>Faculty endorsement may be required for research-oriented tracks.</li>
              </ul>
            </ContentBlock>

            <ContentBlock id="research-focus" title="Research Focus">
              <p>
                The Honours pathway supports students in developing research
                aptitude through advanced study, project-based learning,
                literature exploration, analytical thinking, and close interaction
                with faculty mentors.
              </p>
            </ContentBlock>

            <ContentBlock id="application" title="Application Process">
              <div className="space-y-5">
                {steps.map(([title, text], index) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{title}</h4>
                      <p className="mt-1 text-slate-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock id="benefits" title="Benefits">
              <ul className="list-disc space-y-2 pl-6">
                <li>Advanced academic recognition through Honours distinction.</li>
                <li>Stronger preparation for higher studies and research careers.</li>
                <li>Opportunity to work closely with faculty mentors.</li>
                <li>Enhanced academic profile for internships, placements, and postgraduate applications.</li>
              </ul>
            </ContentBlock>

            <ContentBlock id="faq" title="Frequently Asked Questions">
              <FAQ
                question="Who can apply for Honours Programs?"
                answer="Students can apply as per the eligibility criteria and academic rules notified by the institute."
              />
              <FAQ
                question="Is the Honours Program research-oriented?"
                answer="Yes, the Honours pathway usually includes advanced coursework, faculty-guided learning, and research-oriented academic activities."
              />
              <FAQ
                question="Will Honours be reflected on the transcript?"
                answer="Yes, successful completion of the Honours requirements may be reflected as per the institute's academic rules."
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