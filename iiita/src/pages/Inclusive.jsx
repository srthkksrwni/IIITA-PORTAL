import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const sideLinks = [
  ["statement", "Accessibility Statement"],
  ["support", "Support Services"],
  ["divyangjan", "Divyangjan Support"],
  ["facilities", "Available Facilities & Infrastructure"],
  ["assistive", "Assistive Technologies"],
  ["request", "Request for Assistance"],
  ["policies", "Policies"],
  ["faq", "FAQ"],
];

export default function Inclusive() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-blue-200">
            <HashLink to="/" className="hover:text-white">
              Home
            </HashLink>{" "}
            / Inclusive Care
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Inclusive Care
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-100">
            An accessible, dignified and equitable IIITA for every student —
            with dedicated support for our Divyangjan community.
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
                  to={`/inclusive#${id}`}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  {label}
                </HashLink>
              ))}
            </nav>
          </aside>

          <div className="space-y-10">
            <ContentBlock id="statement" title="Accessibility Statement">
              <p>
                IIIT Allahabad is committed to ensuring that students with
                disabilities have equal access to education, facilities and
                opportunities. We continually work to remove physical, digital
                and attitudinal barriers, in line with national accessibility
                standards and the Rights of Persons with Disabilities Act.
              </p>
            </ContentBlock>

            <ContentBlock id="support" title="Support Services">
              <ul className="list-disc space-y-2 pl-6">
                <li>Dedicated Divyangjan support coordinator.</li>
                <li>Note-takers, readers and scribes for academics and exams.</li>
                <li>Accessible learning materials in multiple formats.</li>
                <li>Individualised support plans for each student.</li>
              </ul>
            </ContentBlock>

            <ContentBlock id="divyangjan" title="Divyangjan Support">
              <p>
                From admission to graduation, our team provides end-to-end,
                personalised support — coordinating accommodations, technology,
                mobility and well-being so every Divyangjan student can focus on
                learning and growth.
              </p>
            </ContentBlock>

            <ContentBlock
              id="facilities"
              title="Available Facilities & Infrastructure"
            >
              <ul className="list-disc space-y-2 pl-6">
                <li>Ramps, lifts and barrier-free pathways across campus.</li>
                <li>Accessible washrooms and hostel accommodation.</li>
                <li>Reserved, accessible seating in classrooms and labs.</li>
                <li>Clear signage and wayfinding support.</li>
              </ul>
            </ContentBlock>

            <ContentBlock id="assistive" title="Assistive Technologies">
              <ul className="list-disc space-y-2 pl-6">
                <li>Screen readers and screen-magnification software.</li>
                <li>Speech-to-text and text-to-speech tools.</li>
                <li>Captioning and accessible document conversion.</li>
                <li>Adaptive input devices on request.</li>
              </ul>
            </ContentBlock>

            <ContentBlock id="request" title="Request for Assistance">
              <p>
                Students can request accommodations or assistance at any time
                through the office. Requests are handled confidentially and
                reviewed promptly, with a support plan agreed together with the
                student.
              </p>

              <HashLink
                to="/contact"
                className="mt-4 inline-flex rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Request Assistance →
              </HashLink>
            </ContentBlock>

            <ContentBlock id="policies" title="Policies">
              <p>
                Our inclusion policies cover reasonable accommodation,
                examination support, confidentiality and grievance redressal, all
                aligned with statutory requirements and reviewed annually.
              </p>
            </ContentBlock>

            <ContentBlock id="faq" title="Frequently Asked Questions">
              <FAQ
                question="How do I register for Divyangjan support?"
                answer="Contact the office through the Request for Assistance form or email; the coordinator will arrange a confidential meeting to build your support plan."
              />

              <FAQ
                question="Are accommodations available for exams?"
                answer="Yes — extra time, scribes, accessible formats and quiet rooms are available as appropriate."
              />

              <FAQ
                question="Is my information kept private?"
                answer="Yes. All disability-related information is handled with strict confidentiality and shared only as needed to provide support."
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