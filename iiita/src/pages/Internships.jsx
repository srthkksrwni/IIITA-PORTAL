import React from "react";
import { Link } from "react-router-dom";

const internshipPrograms = [
  {
    title: "Course Internship",
    duration: "One Semester",
    desc: "Click to view detailed guidelines and eligibility criteria.",
  },
  {
    title: "Research Internship / Project / Thesis",
    duration: "Academic / Research Based",
    desc: "Click to view detailed guidelines and eligibility criteria.",
  },
  {
    title: "Student Exchange Program with SCES",
    duration: "Semester Exchange",
    desc: "Click to view detailed guidelines and eligibility criteria.",
  },
  {
    title: "Regular Internship",
    duration: "Summer / Winter",
    desc: "Click to view detailed guidelines and eligibility criteria.",
  },
];

const applySteps = [
  {
    title: "Contact Faculty Members",
    desc: "Students should directly contact faculty members through email. For faculty details, applicants are advised to visit the individual academic department pages.",
  },
  {
    title: "Online Registration",
    desc: "After receiving consent from the prospective supervisor, students are required to register online along with the consent of the supervisor.",
  },
  {
    title: "Accommodation",
    desc: "IIIT Allahabad provides hostel accommodation to interns who wish to pursue the internship in physical mode, subject to availability. Students may also arrange lodging and boarding outside the campus on their own.",
  },
  {
    title: "Fee Refund Policy",
    desc: "If a student is unable to join after registration, refund of the registration fee may be admissible after deduction of 30% plus applicable service charges. Other fees shall be reimbursed as per institute rules.",
  },
];

export default function Internships() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-blue-200">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Internships
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
                IIITA Internship Programs
              </span>

              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                Internship Opportunities at IIIT Allahabad
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-blue-100">
                The Indian Institute of Information Technology Allahabad
                invites dedicated undergraduate and postgraduate students across
                India to apply for internship opportunities combining academic
                excellence with practical research exposure.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://internship.iiita.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                >
                  Apply Now
                </a>

                
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-200">
                IIITA Campus
              </p>
              <h3 className="text-2xl font-bold">
                Indian Institute of Information Technology Allahabad
              </h3>
              <p className="mt-4 text-blue-100">
                Academic, research, semester exchange, summer and winter
                internship opportunities under newly introduced categories.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Types of Internship Programs
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Explore Internship Categories
            </h2>
            <p className="mt-3 text-slate-600">
              Explore academic, research and semester exchange opportunities
              offered by IIIT Allahabad.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {internshipPrograms.map((program) => (
              <div
                key={program.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {program.duration}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-3 text-slate-600">{program.desc}</p>

                <span className="mt-5 inline-flex font-semibold text-blue-700">
                  View details →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm md:p-10">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
              Important Notes
            </span>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-6">
                <h3 className="font-bold text-blue-900">Programs A, B and C</h3>
                <p className="mt-2 text-slate-700">
                  The portal is open for registration. Programme start and end
                  dates shall be aligned with the IIITA Academic Calendar.
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-6">
                <h3 className="font-bold text-blue-900">
                  Program D: Summer Internship
                </h3>
                <p className="mt-2 text-slate-700">
                  Summer internship of 6–8 weeks is a benchmark internship
                  programme of IIIT Allahabad and is scheduled to begin from
                  17/04/2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
              How to Apply
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Application Procedure
            </h2>
            <p className="mt-3 text-slate-600">
              Follow the complete application procedure carefully before
              submitting your registration.
            </p>
          </div>

          <div className="space-y-5">
            {applySteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-900 to-blue-700 p-8 text-white">
            <h3 className="text-2xl font-bold">Ready to apply?</h3>
            <p className="mt-3 max-w-2xl text-blue-100">
              Register through the official internship portal after obtaining
              consent from the prospective supervisor.
            </p>

            <a
              href="https://internship.iiita.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}