import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const resources = [
  {
    icon: "📋",
    title: "Forms",
    items: [
      "Mentorship registration",
      "Internship application",
      "Exchange application",
      "Accommodation request",
      "Feedback form",
    ],
  },
  {
    icon: "⬇️",
    title: "Downloads",
    items: [
      "Program handbooks",
      "Brochures",
      "Wellness toolkit",
      "Calendars",
      "Templates",
    ],
  },
  {
    icon: "📜",
    title: "Policies",
    items: [
      "Inclusion & accessibility policy",
      "Credit-transfer policy",
      "Internship-credit policy",
      "Confidentiality policy",
    ],
  },
  {
    icon: "🧭",
    title: "Guidelines",
    items: [
      "Mentor & mentee guidelines",
      "Exchange guidelines",
      "Internship conduct",
      "Honours research norms",
    ],
  },
  {
    icon: "📕",
    title: "Student Handbooks",
    items: [
      "Holistic-growth handbook",
      "First-year survival guide",
      "Wellness handbook",
      "Mobility handbook",
    ],
  },
  {
    icon: "📚",
    title: "Academic Resources",
    items: [
      "Minor/Honours catalogues",
      "Credit framework",
      "Advising resources",
      "Study-skills material",
    ],
  },
  {
    icon: "💚",
    title: "Wellness Resources",
    items: [
      "Self-help guides",
      "Crisis contacts",
      "Mindfulness library",
      "Awareness material",
    ],
  },
  {
    icon: "🌍",
    title: "Exchange Resources",
    items: [
      "Partner list",
      "Funding directory",
      "Visa checklist",
      "Pre-departure guide",
    ],
  },
  {
    icon: "💼",
    title: "Internship Resources",
    items: [
      "CV templates",
      "Interview prep",
      "Circular archive",
      "Stipend & credit forms",
    ],
  },
];

export default function Resources() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-blue-200">
            <HashLink to="/" className="hover:text-white">
              Home
            </HashLink>{" "}
            / Resources
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Student Resources
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-100">
            Everything in one place — forms, policies, guidelines, handbooks and
            curated resources for every part of your journey.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              FAQ
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Resource FAQs
            </h2>
          </div>

          <FAQ
            question="Where do I submit completed forms?"
            answer="Submit through the student portal, or email the relevant cell. Each form lists its submission route at the top."
          />
          <FAQ
            question="Are these resources accessible?"
            answer="Yes — documents are provided in accessible formats; request an alternative format anytime through Inclusive Care."
          />
          <FAQ
            question="How often are policies updated?"
            answer="Policies are reviewed at least annually by the advisory committee; the latest version is always published here."
          />
        </div>
      </section>
    </>
  );
}

function ResourceCard({ resource }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
        {resource.icon}
      </div>

      <h3 className="mb-4 text-xl font-bold text-slate-900">
        {resource.title}
      </h3>

      <ul className="mb-5 list-disc space-y-2 pl-5 text-slate-600">
        {resource.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <HashLink
        to="/resources"
        className="font-semibold text-blue-700 hover:text-blue-900"
      >
        Open library →
      </HashLink>
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