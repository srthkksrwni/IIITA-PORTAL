import React from "react";
import { HashLink } from "react-router-hash-link";

const responsibilityAreas = [
  {
    emoji: "📚",
    title: "Academic Enrichment",
    cards: [
      ["Minor Programs", "Structured cross-disciplinary minors that let students broaden expertise alongside their core degree."],
      ["Honours Programs", "Research-intensive, advanced pathways for high-achieving students seeking depth and distinction."],
      ["Curriculum Support", "Coordination with departments on curriculum design, delivery and continuous improvement."],
      ["Academic Monitoring", "Early-warning systems and periodic reviews to identify and support at-risk students."],
      ["Student Advising", "One-on-one academic advising on course selection, electives and degree planning."],
    ],
  },
  {
    emoji: "🤝",
    title: "Mentorship",
    cards: [
      ["Peer Mentorship", "Trained senior students guiding juniors through academics and campus transition."],
      ["Faculty Mentorship", "Sustained faculty guidance on academics, research direction and personal growth."],
      ["Research Mentorship", "Pairing students with researchers for projects, publications and lab exposure."],
      ["Career Mentorship", "Guidance on placements, higher studies, entrepreneurship and career planning."],
      ["Industry Mentorship", "Connecting students with industry professionals and alumni for real-world insight."],
    ],
  },
  {
    emoji: "🌍",
    title: "Student Mobility",
    cards: [
      ["Semester Exchange", "Study a semester at partner universities in India and abroad."],
      ["International Collaboration", "Joint programmes, MoUs and partnerships that open global doors."],
      ["Credit Transfer", "Seamless recognition of credits earned at partner institutions."],
      ["Summer Schools", "Short-term international academic and cultural immersion programmes."],
      ["International Internships", "Cross-border internship placements with global organisations."],
      ["Research Visits", "Funded short visits to collaborating research groups worldwide."],
    ],
  },
  {
    emoji: "💼",
    title: "Internships",
    cards: [
      ["Circular Internships", "Centrally announced internship circulars with transparent selection."],
      ["Industry Internships", "Placements with leading technology and engineering companies."],
      ["Research Internships", "Lab-based internships at IIITA and partner research institutions."],
      ["International Internships", "Global internship opportunities with visa and logistics support."],
      ["Internship Tracking", "Digital tracking of applications, offers, progress and completion."],
      ["Internship Support", "Mentoring, documentation and stipend/conversion assistance throughout."],
    ],
  },
  {
    emoji: "♿",
    title: "Inclusive Care",
    cards: [
      ["Divyangjan Support", "Dedicated, end-to-end support for students with disabilities."],
      ["Accessibility Services", "Note-takers, readers, scribes and accessible learning materials."],
      ["Assistive Technologies", "Screen readers, magnification, captioning and adaptive devices."],
      ["Academic Accommodations", "Reasonable adjustments to coursework, deadlines and assessment."],
      ["Examination Support", "Extra time, accessible formats and scribe facilities in examinations."],
      ["Campus Accessibility", "Ramps, accessible washrooms, signage and barrier-free navigation."],
    ],
  },
  {
    emoji: "🧠",
    title: "Mental Wellness",
    cards: [
      ["Counselling Services", "Free, confidential individual and group counselling with qualified professionals."],
      ["Stress Management", "Workshops and tools for managing academic pressure and burnout."],
      ["Academic Anxiety Support", "Targeted help for exam stress, performance anxiety and motivation."],
      ["Mental Health Awareness", "Campaigns to destigmatise help-seeking and build a caring culture."],
      ["Crisis Support", "24×7 emergency protocols and immediate response pathways."],
      ["Workshops & Training", "Resilience, mindfulness and peer-support training across campus."],
    ],
  },
  {
    emoji: "🌱",
    title: "Welfare & Ecological Council",
    cards: [
      ["Student Welfare Activities", "Welfare drives, grievance redressal and community-building events."],
      ["Green Campus Programs", "Initiatives that reduce the campus footprint and promote sustainability."],
      ["Environmental Awareness", "Talks, drives and campaigns on ecological responsibility."],
      ["Sustainability Projects", "Student-led projects in energy, water and waste management."],
      ["Community Engagement", "Outreach connecting students with the wider community."],
    ],
  },
];

export default function Responsibilities() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-blue-200">
            <HashLink to="/" className="hover:text-white">
              Home
            </HashLink>{" "}
            / Responsibilities
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Our Responsibilities
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-100">
            A coordinated mandate spanning academics, mentorship, global
            mobility, internships, inclusion, mental wellness and ecological
            welfare.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          {responsibilityAreas.map((area) => (
            <div key={area.title} className="mb-14 last:mb-0">
              <div className="mb-7 text-center">
                <span className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  {area.emoji} Responsibility Area
                </span>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {area.title}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {area.cards.map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <h3 className="mb-3 text-lg font-bold text-slate-900">
                      {title}
                    </h3>
                    <p className="leading-relaxed text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}