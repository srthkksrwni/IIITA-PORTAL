import React from "react";
import { Link } from "react-router-dom";

const coreValues = [
  [
    "💙",
    "Care First",
    "Every decision begins with the well-being of the student.",
  ],
  [
    "🌈",
    "Inclusion",
    "Equitable access and dignity for every learner, including our Divyangjan students.",
  ],
  [
    "🔬",
    "Excellence",
    "High standards in academics, mentorship and service delivery.",
  ],
  [
    "🤝",
    "Integrity",
    "Confidentiality, fairness and transparency in all that we do.",
  ],
  [
    "🌍",
    "Global Outlook",
    "Opening doors to international exposure and lifelong networks.",
  ],
  [
    "🌱",
    "Sustainability",
    "Building a greener campus and a more responsible generation.",
  ],
];

const roles = [
  {
    image: "../../public/pavan sir.jpg",
    name: "Prof. Pavan Chakraborty",
    designation: "Dean — Academic Affairs",
    text: "Provides academic oversight for curriculum planning, credit transfer, and academic monitoring, while supporting student enrichment and holistic academic growth in collaboration with the office.",
  },
  {
    image: "../../public/kp sir.jpg",
    name: "Prof. Krishna Pratap Singh",
    designation: "Dean — Students' Affairs",
    text: "Co-anchors student engagement, mentorship, and developmental initiatives across the institute, working to foster a vibrant and supportive student ecosystem.",
  },
  {
    image: "../../public/Sonali Maam.jpg",
    name: "Prof. Sonali Agarwal",
    designation: "Professor-in-Charge (SHG-ICMW)",
    text: "Leads and coordinates key student initiatives, including enrolment, mentorship, Minor and Honours programmes, internships, mobility, inclusive support, mental wellness, and Welfare & Ecological Council activities.",
  },
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

          <p className="max-w-3xl text-lg text-blue-100 leading-relaxed md:text-justify">
            The Office of Students' Holistic Growth, Inclusive Care and Mental
            Wellness (SHG-ICMW) serves as a dedicated platform for fostering academic
            enrichment, mentorship, student mobility, inclusion, and well-being,
            bringing diverse support systems together under one coordinated and
            caring framework.
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
              <p className="text-slate-600 leading-relaxed md:text-justify">
                To nurture the holistic development of every IIITA student by
                providing integrated support in academics, mentorship, wellness,
                inclusion, and mobility, enabling them to thrive personally,
                socially, and professionally.
              </p>
            </div>

            <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl mb-5">
                🔭
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed md:text-justify">
                To make IIIT Allahabad a national model for holistic student
                development, where every student is supported through academic
                enrichment, mentorship, inclusive care, student mobility, and
                mental wellness, and empowered to thrive academically,
                personally, and socially.
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
              <div className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-md transition">
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
                <li>
                  Provide a single, integrated point of access for all
                  student-development services.
                </li>
                <li>
                  Strengthen academic enrichment through Minor and Honours
                  pathways.
                </li>
                <li>
                  Institutionalise peer, faculty, research, career and industry
                  mentorship.
                </li>
                <li>
                  Expand internships and global mobility for every eligible
                  student.
                </li>
                <li>
                  Deliver proactive, confidential mental-wellness support.
                </li>
                <li>
                  Ensure full accessibility and inclusion for Divyangjan
                  students.
                </li>
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
                Professor-in-Charge, (SHG-ICMW) supported by program coordinators,
                counsellors and student volunteers.
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

          <div className="grid gap-8 md:grid-cols-3">
            {roles.map((person) => (
              <div
                key={person.name}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-[380px] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {person.name}
                    </h3>

                    <p className="text-blue-200">{person.designation}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="leading-relaxed text-slate-600">
                    {person.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
