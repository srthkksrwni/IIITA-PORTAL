import React from "react";

const sideLinks = [
  ["about", "Name & Objectives"],
  ["structure", "Organizational Structure"],
  ["councils", "The Four Councils"],
  ["composition", "Composition"],
  ["selection", "Selection & Eligibility"],
  ["functions", "Functions"],
  ["budget", "Budget & Festivals"],
  ["finance", "Financial Guidelines"],
  ["gbm", "General Body Meeting"],
  ["roles", "Roles & Responsibilities"],
  ["emails", "E-mail IDs"],
  ["termination", "Termination & Amendments"],
];

const objectives = [
  [
    "2.1",
    "A dedicated, accountable governance framework",
    "Create a structured and transparent platform where students actively participate in student affairs with clear roles for leadership development.",
  ],
  [
    "2.2",
    "Streamlined coordination of student activities",
    "Enable organized management of societies, clubs and festivals across Academic & Technical, Cultural, Sports, and Welfare & Ecological councils.",
  ],
  [
    "2.3",
    "Equitable representation & diversity",
    "Ensure fair participation across gender, academic programmes and disciplines, fostering an inclusive student environment.",
  ],
  [
    "2.4",
    "Stronger student–administration connect",
    "Act as a structured communication channel between students and administration led by the Director, Dean SA and Faculty-in-Charges.",
  ],
  [
    "2.5",
    "Engagement, welfare & leadership continuity",
    "Institutionalize mentorship, peer learning and welfare efforts through documented policies, annual appointments and student leadership.",
  ],
];

const councils = [
  {
    title: "Academic & Technical Council",
    tag: "@",
    color: "amber",
    societies: "Geekhaven, Tesla, Gravity",
    festival: "Aparoksha",
    focus: "Academic excellence, technical proficiency and innovation.",
  },
  {
    title: "Cultural Council",
    tag: "C",
    color: "green",
    societies:
      "Films, Dance, Music, Drama, Fine Arts, Literary and cultural societies.",
    festival: "Effervescence",
    focus: "Creativity, artistic expression and cultural inclusivity.",
  },
  {
    title: "Sports Council",
    tag: "S",
    color: "cyan",
    societies: "Spirit, FIT India activities, marathons and sports clubs.",
    festival: "Asmita",
    focus: "Physical wellness, fitness and sporting spirit.",
  },
  {
    title: "Welfare & Ecological Council",
    tag: "We",
    color: "blue",
    societies: "Prayaas and holistic health initiatives.",
    festival: "Welfare & environmental initiatives",
    focus: "Student welfare, inclusivity, sustainability and ecological awareness.",
  },
];

const budget = [
  ["Cultural Council", "30%"],
  ["Sports Council", "30%"],
  ["Academic & Technical Council", "25%"],
  ["Welfare & Ecological Council", "15%"],
];

const roleItems = [
  {
    title: "President",
    points: [
      "Primary student leader and face of the council.",
      "Coordinates council activities and festivals.",
      "Represents the council in institutional meetings.",
      "Submits regular updates to the FIC and Dean SA.",
    ],
  },
  {
    title: "General Secretary",
    points: [
      "Oversees internal coordination among GMs, societies and clubs.",
      "Maintains meeting minutes and documentation.",
      "Handles correspondence with councils, FICs and stakeholders.",
    ],
  },
  {
    title: "Treasurer",
    points: [
      "Maintains accurate income and expenditure records.",
      "Ensures compliance with financial guidelines.",
      "Coordinates vendor contracts and official transactions.",
    ],
  },
  {
    title: "Faculty-in-Charge",
    points: [
      "Acts as faculty advisor and official supervisor.",
      "Approves events, budgets and appointments.",
      "Liaises between council, Dean SA and Director.",
    ],
  },
];

export default function Ecological() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-blue-200">
            <a href="/" className="hover:text-white">Home</a> / Ecological Council
          </div>

          {/* <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Annexure 36.10 · Students' Gymkhana
          </p> */}

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Ecological Council
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-100">
            A structured, transparent and inclusive framework for student
            governance, welfare, ecological awareness and holistic growth at
            IIIT Allahabad.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[280px_1fr]">
          <aside>
            <nav className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="mb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                On this page
              </p>

              {sideLinks.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="space-y-10 rounded-3xl bg-white p-8 shadow md:p-12">
            <Section id="about" title="Name & Objectives">
              <p>
                The Students' Gymkhana of Indian Institute of Information
                Technology Allahabad provides a structured platform for student
                governance and holistic growth.
              </p>

              <div className="mt-6 grid gap-5">
                {objectives.map(([tag, title, text]) => (
                  <div
                    key={tag}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="text-sm font-bold text-blue-700">{tag}</span>
                    <h4 className="mt-2 font-bold text-slate-900">{title}</h4>
                    <p className="mt-2 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="structure" title="Organizational Structure">
              <ul className="list-disc space-y-2 pl-6">
                <li>The general body consists of all registered students of IIITA.</li>
                <li>The Director, IIITA is the Patron of the Students' Gymkhana.</li>
                <li>The Dean, Student Affairs is the caretaker of the Gymkhana.</li>
                <li>Each council has one Faculty-in-Charge to monitor activities.</li>
                <li>All selected members are called Gymkhana Members.</li>
              </ul>

              {/* <div className="mt-6 rounded-3xl bg-blue-50 p-6 text-center">
                <p className="font-bold text-blue-900">
                  Patron: Director · Caretaker: Dean Student Affairs
                </p>
                <div className="my-4 h-8 border-l border-blue-300" />
                <p className="font-semibold text-slate-800">
                  General Body — All Students
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-4">
                  {["Academic & Technical", "Cultural", "Sports", "Welfare & Ecological"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-blue-100 bg-white p-4 text-sm font-semibold text-blue-900"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div> */}
            </Section>

            <Section id="councils" title="The Four Councils">
              <div className="grid gap-5 md:grid-cols-2">
                {councils.map((council) => (
                  <div
                    key={council.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                        {council.tag}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {council.title}
                      </h4>
                    </div>

                    <dl className="mt-5 space-y-3 text-sm">
                      <div>
                        <dt className="font-bold text-blue-700">Societies</dt>
                        <dd className="text-slate-600">{council.societies}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-blue-700">Festival / Focus</dt>
                        <dd className="text-slate-600">{council.festival}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-blue-700">Objective</dt>
                        <dd className="text-slate-600">{council.focus}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="composition" title="Composition of Councils">
              <ul className="list-disc space-y-2 pl-6">
                <li>Each council shall have minimum 25% female representation.</li>
                <li>
                  The Welfare & Ecological Council shall have at least one
                  PwD-category student.
                </li>
                <li>
                  Each council has one FIC, one President, one General Secretary
                  and one Treasurer.
                </li>
              </ul>

              <div className="mt-6 grid gap-4 md:grid-cols-4">
                {[
                  ["1", "Ph.D. Student"],
                  ["3", "Master's Students"],
                  ["8", "B.Tech Students"],
                  ["12", "GMs per Council"],
                ].map(([num, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-blue-50 p-5 text-center"
                  >
                    <div className="text-3xl font-bold text-blue-700">{num}</div>
                    <p className="mt-2 text-sm font-medium text-slate-700">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="selection" title="Selection & Eligibility">
              <p>
                On the basis of CGPA students of Gymkhana Members are selected by a duly constituted committee
                appointed by the Director on the recommendation of Dean Student
                Affairs.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-4">
                {[
                  ["8.0", "Academic & Technical"],
                  ["6.0", "Cultural"],
                  ["6.0", "Sports"],
                  ["7.0", "Welfare & Ecological"],
                ].map(([cgpa, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-blue-100 bg-blue-50 p-5"
                  >
                    <div className="text-3xl font-bold text-blue-700">{cgpa}</div>
                    <p className="mt-2 text-sm font-semibold text-blue-900">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-slate-600">
                Students must have no active disciplinary enquiry or UFM.
              </p>
            </Section>

            <Section id="functions" title="Functions of Councils">
              <div className="space-y-4">
                <Accordion title="Academic & Technical Council">
                  Organizes workshops, seminars, hackathons, project expos and
                  Aparoksha while promoting research, innovation and peer learning.
                </Accordion>
                <Accordion title="Cultural Council">
                  Conducts music, dance, drama, literary events, art exhibitions
                  and Effervescence while promoting cultural inclusivity.
                </Accordion>
                <Accordion title="Sports Council">
                  Organizes tournaments, leagues, fitness drives, wellness
                  workshops and Asmita.
                </Accordion>
                <Accordion title="Welfare & Ecological Council">
                  Plans welfare and ecological activities including mental health
                  awareness, gender sensitization, cleanliness, climate change,
                  pollution awareness and conservation initiatives.
                </Accordion>
              </div>
            </Section>

            <Section id="budget" title="Budget Distribution & Festivals">
              <div className="space-y-4">
                {budget.map(([name, percent]) => (
                  <div key={name}>
                    <div className="mb-1 flex justify-between text-sm font-semibold">
                      <span>{name}</span>
                      <span className="text-blue-700">{percent}</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div
                        className="h-3 rounded-full bg-blue-700"
                        style={{ width: percent }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-slate-600">
                Each council organizes its own festivals and events. Festival
                Organizing Members may be appointed with FIC approval.
              </p>
            </Section>

            <Section id="finance" title="Financial Guidelines">
              <ul className="list-disc space-y-2 pl-6">
                <li>The Treasurer maintains income and expenditure records.</li>
                <li>Expenditure must not exceed available funds.</li>
                <li>All income must go directly into the official Gymkhana account.</li>
                <li>Cash, personal or third-party accounts are strictly prohibited.</li>
                <li>All activities must follow IIITA ethical and audit standards.</li>
              </ul>
            </Section>

            <Section id="gbm" title="General Body Meeting">
              <ul className="list-disc space-y-2 pl-6">
                <li>The Gymkhana may call a GBM with Dean SA approval.</li>
                <li>
                  Agenda items must be submitted by all four presidents at least
                  two days in advance.
                </li>
                <li>Dean SA and FICs must attend the GBM.</li>
              </ul>
            </Section>

            <Section id="roles" title="Roles & Responsibilities">
              <div className="space-y-4">
                {roleItems.map((role) => (
                  <Accordion key={role.title} title={role.title}>
                    <ul className="list-disc space-y-2 pl-6">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </Accordion>
                ))}
              </div>
            </Section>

            <Section id="emails" title="Official E-mail IDs">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Academic & Technical", "atcouncil.gymkhana@iiita.ac.in"],
                  ["Cultural Council", "culturalcouncil.gymkhana@iiita.ac.in"],
                  ["Sports Council", "sportscouncil.gymkhana@iiita.ac.in"],
                  ["Welfare & Ecological", "wecouncil.gymkhana@iiita.ac.in"],
                ].map(([name, email]) => (
                  <div
                    key={email}
                    className="rounded-2xl border border-slate-200 bg-blue-50 p-5"
                  >
                    <h4 className="font-bold text-blue-900">{name}</h4>
                    <p className="mt-1 break-all text-sm text-blue-700">
                      {email}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="termination" title="Termination & Amendments">
              <ul className="list-disc space-y-2 pl-6">
                <li>Disciplinary violations or misconduct.</li>
                <li>Repeated failure of assigned responsibilities.</li>
                <li>Misuse of funds or procedural non-compliance.</li>
                <li>Ethical or behavioural misconduct.</li>
                <li>Voluntary resignation submitted to FIC and Dean SA.</li>
              </ul>

              <div className="mt-5 rounded-2xl bg-blue-50 p-5 text-blue-900">
                Any amendment to this ordinance requires approval of the
                Institute Senate.
              </div>
            </Section>
          </main>
        </div>
      </section>
    </>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-32">
      <h3 className="mb-4 text-2xl font-bold text-blue-900">{title}</h3>
      <div className="leading-relaxed text-slate-700">{children}</div>
    </section>
  );
}

function Accordion({ title, children }) {
  return (
    <details className="rounded-2xl border border-slate-200 bg-white p-5">
      <summary className="cursor-pointer font-bold text-slate-900">
        {title}
      </summary>
      <div className="mt-4 text-slate-600">{children}</div>
    </details>
  );
}