import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const sideLinks = [
  ["overview", "Program Overview"],
  ["eligibility", "Eligibility"],
  ["apply", "Application Process"],
  ["benefits", "Benefits"],
  ["faq", "FAQ"],
  ["stories", "Stories"],
  ["dates", "Important Dates"],
  ["downloads", "Downloads"],
];

const steps = [
  ["Explore tracks", "Review the available minors and honours streams and their prerequisites."],
  ["Submit application", "Apply through the student portal within the announced window."],
  ["Advisor review", "Your academic advisor reviews fit and feasibility with your core load."],
  ["Enrolment", "On approval, the minor/honours is added to your study plan."],
];

const downloads = [
  "Minor Programs Handbook",
  "Honours Programs Guidelines",
  "Eligibility & Credit Rules",
  "Application Form",
];

export default function Programs() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-blue-200">
            <HashLink to="/" className="hover:text-white">Home</HashLink>{" "}
            / <HashLink to="/programs" className="hover:text-white">Programs</HashLink> / Minor & Honours
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Minor & Honours Programs
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-100">
            Broaden your horizons or go deeper in your passion — flexible
            academic enrichment pathways designed around you.
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
                  to={`/programs#${id}`}
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
                Minor Programs allow students to build structured expertise in a
                discipline beyond their core degree, while Honours Programs
                offer a research-intensive, advanced track for students who want
                to go further. Both are credit-bearing, transcript-recognised
                and designed to fit alongside your primary programme.
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

            <ContentBlock id="apply" title="Application Process">
              <div className="space-y-5">
                {steps.map(([title, text], index) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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
                <li>Interdisciplinary expertise that stands out to employers and graduate schools.</li>
                <li>Transcript recognition of your minor or honours distinction.</li>
                <li>Access to specialised electives, projects and faculty mentorship.</li>
                <li>A pathway into research and advanced study.</li>
              </ul>
            </ContentBlock>

            <ContentBlock id="stories" title="Student Stories">
              <div className="grid gap-6 md:grid-cols-2">
                <QuoteCard
                  name="Aditya Sharma"
                  detail="B.Tech IT, 3rd Year"
                  avatar="AS"
                  quote="The Data Science minor completely changed my placement prospects — I walked into interviews with a portfolio, not just grades."
                />
                <QuoteCard
                  name="Priya Verma"
                  detail="B.Tech ECE, 4th Year"
                  avatar="PV"
                  quote="Honours let me publish my first paper as an undergraduate. My faculty mentor believed in me before I believed in myself."
                />
              </div>
            </ContentBlock>

            <ContentBlock id="dates" title="Important Dates">
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[520px] text-left">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="p-4">Milestone</th>
                      <th className="p-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Application window opens", "15 July 2026"],
                      ["Last date to apply", "05 August 2026"],
                      ["Advisor reviews complete", "20 August 2026"],
                      ["Enrolment confirmed", "25 August 2026"],
                    ].map(([milestone, date]) => (
                      <tr key={milestone} className="border-t border-slate-200">
                        <td className="p-4 text-slate-600">{milestone}</td>
                        <td className="p-4 text-slate-600">{date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ContentBlock>

            <ContentBlock id="downloads" title="Downloads">
              <div className="grid gap-5 md:grid-cols-2">
                {downloads.map((item) => (
                  <HashLink
                    key={item}
                    to="/resources"
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                      📄
                    </div>
                    <div>
                      <b className="text-slate-900">{item}</b>
                      <br />
                      <span className="text-sm text-slate-500">PDF · Download</span>
                    </div>
                  </HashLink>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock id="faq" title="Frequently Asked Questions">
              <FAQ
                question="Can I pursue both a minor and honours?"
                answer="In most cases students choose one to maintain academic balance, but exceptional students may petition the office with advisor support."
              />
              <FAQ
                question="Will it delay my graduation?"
                answer="Programmes are designed to fit within your existing duration. Careful planning with your advisor keeps you on track."
              />
              <FAQ
                question="Is there an additional fee?"
                answer="Minor and Honours programmes follow the institute's standard credit framework with no separate enrolment fee unless notified."
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

function QuoteCard({ quote, avatar, name, detail }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 text-amber-400">★★★★★</div>
      <p className="text-slate-600">“{quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
          {avatar}
        </span>
        <div>
          <b className="block text-slate-900">{name}</b>
          <span className="text-sm text-slate-500">{detail}</span>
        </div>
      </div>
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