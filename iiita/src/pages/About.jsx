import React from "react";
import { Link } from "react-router-dom";

const coreValues = [
  ["💙", "Care First", "Every decision begins with the well-being of the student."],
  ["🌈", "Inclusion", "Equitable access and dignity for every learner, including our Divyangjan students."],
  ["🔬", "Excellence", "High standards in academics, mentorship and service delivery."],
  ["🤝", "Integrity", "Confidentiality, fairness and transparency in all that we do."],
  ["🌍", "Global Outlook", "Opening doors to international exposure and lifelong networks."],
  ["🌱", "Sustainability", "Building a greener campus and a more responsible generation."],
];

const roles = [
  ["🏛️", "Dean — Academic Affairs", "Provides academic oversight for Minor and Honours programmes, curriculum design, credit transfer and academic monitoring; partners with the office on enrichment pathways."],
  ["🎓", "Dean — Students' Affairs", "Co-anchors student welfare, mentorship and wellness initiatives; the Professor-in-Charge reports jointly to this office and the Director."],
  ["👩‍💼", "Professor-in-Charge", "Leads and coordinates all encompassing activities — enrolment, mentorship, internships, mobility, Divyangjan facilitation, mental well-being and the Welfare & Ecological Council."],
];

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-blue-200 mb-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / About
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About the Office
          </h1>

          <p className="max-w-3xl text-lg text-blue-100 leading-relaxed">
            Bringing together academic enrichment, mentorship, mobility,
            inclusion and wellness under one coordinated, caring roof —
            established by Office Order in January 2026.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl p-8 bg-green-50 border border-green-200 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-5">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To nurture every IIITA student as a whole person — advancing
                academic excellence, emotional well-being, inclusion and global
                readiness through coordinated, compassionate and student-centred
                support.
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-5">
                🔭
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To make IIIT Allahabad a national model for holistic student
                development, where no student is left behind and every student
                is empowered to thrive academically, personally and socially.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold uppercase tracking-wide text-sm">
              What Guides Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreValues.map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-blue-700 font-semibold uppercase tracking-wide text-sm">
                Direction
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">
                Objectives & Strategic Goals
              </h2>

              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Objectives
              </h4>
              <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-6 mb-8">
                <li>Provide a single, integrated point of access for all student-development services.</li>
                <li>Strengthen academic enrichment through Minor and Honours pathways.</li>
                <li>Institutionalise peer, faculty, research, career and industry mentorship.</li>
                <li>Expand internships and global mobility for every eligible student.</li>
                <li>Deliver proactive, confidential mental-wellness support.</li>
                <li>Ensure full accessibility and inclusion for Divyangjan students.</li>
              </ul>

              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Strategic Goals 2026–2028
              </h4>
              <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-6">
                <li>100% mentor coverage for all enrolled students within two years.</li>
                <li>Double international exchange and internship placements.</li>
                <li>Achieve a measurable rise in student well-being and satisfaction indices.</li>
                <li>Certify the campus against recognised accessibility standards.</li>
              </ul>
            </div>

            <div>
              <span className="text-blue-700 font-semibold uppercase tracking-wide text-sm">
                How We Operate
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">
                Office Structure & Governance
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6">
                The Office operates under the authority of the Director, IIIT
                Allahabad, and works in close coordination with the Dean
                Academic Affairs and Dean Students' Affairs. It is led by the
                Professor-in-Charge, supported by program coordinators,
                counsellors, an accessibility officer and student volunteers.
              </p>

              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Governance Framework
              </h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                A standing advisory committee — chaired by the
                Professor-in-Charge and including both Deans, faculty
                coordinators and student representatives — reviews policy,
                monitors outcomes and approves new initiatives each semester.
              </p>

              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Reporting Structure
              </h4>
              <p className="text-slate-600 leading-relaxed">
                The Professor-in-Charge reports to the Director, IIITA, along
                with the Dean Students' Affairs, and coordinates
                programmatically with the Dean Academic Affairs, as mandated by
                Office Order F.No. IIIT-A/RO/029/2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold uppercase tracking-wide text-sm">
              Roles & Responsibilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Who Does What
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roles.map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-4">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}