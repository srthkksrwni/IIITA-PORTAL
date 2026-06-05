import React, { useState } from "react";
import { Link } from "react-router-dom";

const sections = [
  ["about", "About the Council"],
  ["mission", "Mission"],
  ["vision", "Vision"],
  ["projects", "Current Projects & Green Initiatives"],
  ["waste", "Waste Management"],
  ["water", "Water Conservation"],
  ["energy", "Energy Conservation"],
  ["trees", "Tree Plantation"],
  ["volunteers", "Student Volunteers"],
  ["achievements", "Events & Achievements"],
  ["faq", "FAQ"],
];

export default function Ecological() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-blue-200 mb-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Ecological Council
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welfare & Ecological Council
          </h1>

          <p className="max-w-3xl text-lg text-blue-100 leading-relaxed">
            A student-led movement for a greener, kinder campus — and a more
            responsible generation of engineers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-10">
          <aside>
            <nav className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm space-y-1">
              {sections.map(([id, title]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  {title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-10">
            <ContentBlock id="about" title="About the Council">
              <p>
                The Welfare & Ecological Council brings together students,
                faculty and staff to advance sustainability and welfare on
                campus. Officered by the Professor-in-Charge, it channels
                student energy into tangible environmental action.
              </p>
            </ContentBlock>

            <ContentBlock id="mission" title="Mission">
              <p>
                To embed ecological responsibility into campus life and student
                culture, reducing our footprint while building skills and values
                for a sustainable future.
              </p>
            </ContentBlock>

            <ContentBlock id="vision" title="Vision">
              <p>
                A model green campus where sustainability is everyone's habit
                and students lead the change they wish to see in the world.
              </p>
            </ContentBlock>

            <ContentBlock id="projects" title="Current Projects & Green Initiatives">
              <ul className="list-disc pl-6 space-y-2">
                <li>Campus-wide segregation and composting.</li>
                <li>Rainwater harvesting and water-use audits.</li>
                <li>Energy-efficiency drives and renewable pilots.</li>
                <li>Native-species plantation and biodiversity mapping.</li>
              </ul>
            </ContentBlock>

            <ContentBlock id="waste" title="Waste Management">
              <p>
                Source-segregation, composting of organic waste and responsible
                e-waste handling, supported by student monitors and awareness
                drives.
              </p>
            </ContentBlock>

            <ContentBlock id="water" title="Water Conservation">
              <p>
                Rainwater harvesting, leak audits and behaviour campaigns to
                reduce campus water consumption.
              </p>
            </ContentBlock>

            <ContentBlock id="energy" title="Energy Conservation">
              <p>
                Efficient lighting, smart scheduling and renewable-energy
                pilots, tracked through periodic energy audits.
              </p>
            </ContentBlock>

            <ContentBlock id="trees" title="Tree Plantation">
              <p>
                Regular plantation drives with native species, plus adoption
                programmes that let students nurture and track their trees.
              </p>
            </ContentBlock>

            <ContentBlock id="volunteers" title="Student Volunteers">
              <p>
                The council runs on student leadership — volunteers organise
                drives, audits and campaigns, gaining real-world project and
                leadership experience.
              </p>
            </ContentBlock>

            <ContentBlock id="achievements" title="Events & Achievements">
              <ul className="list-disc pl-6 space-y-2">
                <li>Annual Green Campus Week with talks and drives.</li>
                <li>Thousands of saplings planted and maintained.</li>
                <li>Measurable reductions in campus waste to landfill.</li>
              </ul>
            </ContentBlock>

            <ContentBlock id="faq" title="Frequently Asked Questions">
              <FAQ
                question="How can I join the council?"
                answer="Sign up through the office or attend any open drive — volunteers are always welcome, no experience needed."
              />

              <FAQ
                question="Do I get recognition for volunteering?"
                answer="Yes — active volunteers receive certificates and recognition that reflect leadership and community contribution."
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
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <div className="text-slate-600 leading-relaxed">{children}</div>
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