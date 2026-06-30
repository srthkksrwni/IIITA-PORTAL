import React, { useState } from "react";

const sideLinks = [
  ["mission", "Mental Wellness Mission"],
  ["framework", "Student Wellbeing Framework"],
  ["router", "What's on Your Mind?"],
  ["services", "Available Support Services"],
  ["counselling", "Counselling Resources"],
  ["emergency", "Emergency Support"],
  ["selfhelp", "Self-Help Resources"],
  ["events", "Wellness Events & Campaigns"],
  ["toolkit", "Wellness Toolkit"],
  ["staff", "For Faculty & Wardens"],
  ["faq", "FAQ"],
  ["stories", "Stories"],
];

const routerOptions = {
  acad: {
    icon: "📚",
    label: "Academic stress",
    answer:
      "Your faculty mentor is the best first point of contact. You can also book a counselling session whenever academic pressure starts affecting your well-being.",
  },
  exam: {
    icon: "🌙",
    label: "Exam anxiety & sleep",
    answer:
      "Exam stress is common and manageable. Use the self-help toolkit and reach out to a counsellor for practical strategies related to sleep, focus and anxiety.",
  },
  hostel: {
    icon: "🏠",
    label: "Hostel adjustment",
    answer:
      "Wardens, assistant wardens and peer support systems can help with hostel-related concerns, adjustment issues and everyday challenges.",
  },
  lonely: {
    icon: "🤝",
    label: "Feeling lonely or low",
    answer:
      "You are not alone. A peer listener, mentor or counsellor can help you talk through what you are experiencing in a safe and confidential space.",
  },
  money: {
    icon: "💸",
    label: "Money worries",
    answer:
      "You may confidentially approach the Dean Student Affairs, mentor or relevant office for guidance on available support and assistance.",
  },
  crisis: {
    icon: "💚",
    label: "I am in real distress",
    answer:
      "Please reach out immediately. Contact the campus helpline or call Tele-MANAS 14416 for free 24×7 mental health support.",
  },
};

const faqs = [
  [
    "Is counselling really confidential?",
    "Yes. Counselling sessions are private. Information is shared only in rare cases where there is an immediate risk to safety.",
  ],
  [
    "How do I book a session?",
    "You can book through the Wellness Centre, walk in during available hours, or request a mentor, warden or peer listener to connect you.",
  ],
  [
    "Can I get help for a friend?",
    "Yes. If you are worried about a friend, you can speak to a counsellor for guidance or contact emergency support if the situation is urgent.",
  ],
  [
    "Who can use these services?",
    "All enrolled students, including UG, PG and research scholars, can access mental wellness support.",
  ],
];

export default function Wellness() {
  const [active, setActive] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-blue-200">
            <a href="/" className="hover:text-white">
              Home
            </a>{" "}
            / Mental Wellness
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            THRIVE @ IIITA · Care & Wellness
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Mental Wellness
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-100">
            Your mind matters. Confidential counselling, proactive support and a
            campus culture where seeking help is a sign of strength — not
            weakness.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-blue-700 p-8 text-white shadow-lg md:p-10">
            <h2 className="mb-3 text-3xl font-bold">In distress right now?</h2>

            <p className="mb-6 max-w-3xl text-blue-100">
              You are not alone. Confidential help is available 24×7 — reach the
              campus helpline or walk in to the Wellness Centre any time.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-white px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                Contact the Wellness Centre
              </a>

              <a
                href="tel:+910000000000"
                className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-800"
              >
                Call Helpline
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[280px_1fr]">
          <aside>
            <nav className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="mb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                On this page
              </p>

              {sideLinks.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  {label}
                </a>
              ))}

              <div className="mt-5 rounded-2xl bg-blue-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-700">
                  Quick Help
                </p>
                <a
                  href="tel:14416"
                  className="block text-sm font-semibold text-blue-800"
                >
                  Tele-MANAS · 14416
                </a>
                <a
                  href="tel:+910000000000"
                  className="mt-1 block text-sm font-semibold text-blue-800"
                >
                  Campus 24×7 · [number]
                </a>
              </div>
            </nav>
          </aside>

          <main className="space-y-10 rounded-3xl bg-white p-8 shadow md:p-12">
            <Section id="mission" title="Mental Wellness Mission">
              <p>
                To foster a campus where every student feels safe, supported and
                able to seek help without stigma — integrating prevention, early
                intervention and care into everyday student life.
              </p>
            </Section>

            <Section id="framework" title="Student Wellbeing Framework">
              <p>
                Our framework works across four connected layers. Most needs are
                met early and informally, while specialist care is available when
                required.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {[
                  [
                    "01",
                    "Awareness & Prevention",
                    "Life-skills, orientation and awareness activities that reduce stigma and promote well-being.",
                  ],
                  [
                    "02",
                    "Everyday Support",
                    "Peers, mentors and wardens who notice, listen and support students early.",
                  ],
                  [
                    "03",
                    "Professional Counselling",
                    "Free and confidential counselling support with trained professionals.",
                  ],
                  [
                    "04",
                    "Crisis Response",
                    "A 24×7 protocol with clear escalation and access to specialist care.",
                  ],
                ].map(([num, title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="mb-2 text-2xl font-bold text-blue-700">
                      {num}
                    </p>
                    <h4 className="mb-2 font-bold text-slate-900">{title}</h4>
                    <p className="text-sm text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="router" title="What's on your mind today?">
              <p>
                Reaching out is a normal and healthy step. Pick what feels
                closest and see where support may begin.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {Object.entries(routerOptions).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActive(key)}
                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                      active === key
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-700 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border-l-4 border-blue-700 bg-blue-50 p-5 text-slate-700">
                {active
                  ? routerOptions[active].answer
                  : "Tap an option above to see who can help and how to reach them."}
              </div>
            </Section>

            <Section id="services" title="Available Support Services">
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  [
                    "🗣️",
                    "Counselling",
                    "Individual and group sessions with qualified professionals.",
                  ],
                  [
                    "🌿",
                    "Peer Listeners",
                    "Trained student volunteers offering first-step support.",
                  ],
                  [
                    "🏡",
                    "Hostel Wellbeing",
                    "Wardens, assistant wardens and after-hours support.",
                  ],
                  [
                    "🧘",
                    "Drop-in Activities",
                    "Stress-relief sessions, yoga, music and wellness activities.",
                  ],
                  [
                    "💪",
                    "Resilience Workshops",
                    "Practical sessions on sleep, focus, balance and recovery.",
                  ],
                  [
                    "➡️",
                    "Specialist Referrals",
                    "A clear pathway to medical and specialist care when needed.",
                  ],
                ].map(([icon, title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="mb-3 text-3xl">{icon}</div>
                    <h4 className="mb-2 font-bold text-slate-900">{title}</h4>
                    <p className="text-sm text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="counselling" title="Counselling Resources">
              <p>
                Free, confidential counselling is available to all students, with
                in-person and virtual options. No problem is too small to bring.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {[
                  [
                    "01",
                    "Reach Out",
                    "Book online, walk in, or ask a mentor, warden or peer listener to connect you.",
                  ],
                  [
                    "02",
                    "Meet & Talk",
                    "A calm, private conversation at a time that works for you.",
                  ],
                  [
                    "03",
                    "Stay Supported",
                    "Follow-ups and referrals are available whenever needed.",
                  ],
                ].map(([num, title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <p className="mb-2 text-xl font-bold text-blue-700">
                      {num}
                    </p>
                    <h4 className="mb-2 font-bold text-slate-900">{title}</h4>
                    <p className="text-sm text-slate-600">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-blue-50 p-4 text-sm font-medium text-blue-800">
                🔒 What you share is confidential and is never used against you.
              </div>

              <a
                href="/contact"
                className="mt-5 inline-flex rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Book a Session
              </a>
            </Section>

            <Section id="emergency" title="Emergency Support">
              <p>
                A 24×7 crisis protocol ensures immediate response. If you or a
                friend are in distress, contact any of these right away.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  [
                    "Campus",
                    "Wellness Centre Helpline",
                    "[number]",
                    "+910000000000",
                    "24×7",
                  ],
                  [
                    "Campus",
                    "Chief Warden",
                    "[number]",
                    "+910000000000",
                    "Hostel emergencies",
                  ],
                  [
                    "National",
                    "Tele-MANAS",
                    "14416 / 1-800-891-4416",
                    "14416",
                    "24×7, multilingual",
                  ],
                  [
                    "National",
                    "iCall TISS",
                    "9152987821",
                    "+919152987821",
                    "Mon–Sat, 8am–10pm",
                  ],
                  [
                    "National",
                    "Vandrevala Foundation",
                    "9999 666 555",
                    "+919999666555",
                    "24×7",
                  ],
                  [
                    "Campus",
                    "Health Centre",
                    "[number]",
                    "+910000000000",
                    "Campus clinic",
                  ],
                ].map(([role, name, number, tel, note]) => (
                  <a
                    key={name}
                    href={`tel:${tel}`}
                    className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-700 hover:bg-blue-50"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                      {role}
                    </p>
                    <h4 className="mt-1 font-bold text-slate-900">{name}</h4>
                    <p className="font-semibold text-blue-700">{number}</p>
                    <p className="text-sm text-slate-500">{note}</p>
                  </a>
                ))}
              </div>
            </Section>

            <Section id="selfhelp" title="Self-Help Resources">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["😴", "Sleeping better in the hostel"],
                  ["📝", "Beating exam pressure"],
                  ["🫂", "Making friends from scratch"],
                  ["🧠", "Guided breathing & mindfulness"],
                  ["📱", "Digital wellbeing & focus"],
                  ["🆘", "Worried about a friend?"],
                ].map(([icon, title]) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-slate-200 p-5"
                  >
                    <span className="text-2xl">{icon}</span>
                    <h4 className="font-semibold text-slate-900">{title}</h4>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="events" title="Wellness Events & Campaigns">
              <p>
                Awareness weeks, mindfulness sessions, peer-support circles and
                well-being fairs keep mental health visible and normalised
                across campus.
              </p>

              <a
                href="/news"
                className="mt-4 inline-block font-semibold text-blue-700 hover:underline"
              >
                See the wellness calendar →
              </a>
            </Section>

            <Section id="toolkit" title="Wellness Toolkit">
              <p>
                A downloadable toolkit equips students and mentors with quick
                self-checks, grounding techniques and a clear map of where to
                turn for help.
              </p>

              <div className="mt-5 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="rounded-full border border-blue-700 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
                >
                  Student Toolkit PDF
                </a>
                <a
                  href="#"
                  className="rounded-full border border-blue-700 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
                >
                  Mentor & Warden Guide PDF
                </a>
              </div>
            </Section>

            <Section id="staff" title="Everyone is Part of the Safety Net">
              <p>
                Faculty members, mentors and wardens play an important role in
                noticing early signs of distress and connecting students to
                professional support.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {[
                  [
                    "Observe",
                    "Notice early changes such as withdrawal, irregular routines or distress.",
                  ],
                  [
                    "Validate",
                    "Offer a non-judgmental space where students feel heard.",
                  ],
                  [
                    "Refer",
                    "Connect the student to professional support while respecting confidentiality.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-blue-50 p-5 text-blue-900"
                  >
                    <h4 className="mb-2 font-bold">{title}</h4>
                    <p className="text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              {faqs.map(([question, answer], index) => (
                <div
                  key={question}
                  className="mb-3 rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                    className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-slate-900"
                  >
                    {question}
                    <span className="text-xl text-blue-700">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === index && (
                    <p className="px-5 pb-4 text-slate-600">{answer}</p>
                  )}
                </div>
              ))}
            </Section>

            <Section id="stories" title="Student Stories">
              <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-blue-700 p-8 text-white">
                <div className="mb-3 text-yellow-300">★★★★★</div>
                <p className="mb-4 text-lg italic leading-relaxed">
                  “Reaching out to the counselling cell was the best decision of
                  my second year. I wish I'd known sooner how much support was
                  here.”
                </p>
                <b>Anonymous Student</b>
                <p className="text-sm text-blue-100">B.Tech, 2nd Year</p>
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
    <section id={id} className="scroll-mt-28">
      <h3 className="mb-4 text-2xl font-bold text-blue-900">{title}</h3>
      <div className="leading-relaxed text-slate-700">{children}</div>
    </section>
  );
}