const navItems = [
  ["peer", "Peer Mentorship Program"],
  ["faculty", "Faculty Mentorship Program"],
  ["mentor-resp", "Mentor Responsibilities"],
  ["mentee-resp", "Mentee Responsibilities"],
  ["matching", "Matching Process"],
  ["training", "Training Framework"],
  ["impact", "Impact Assessment"],
  ["register", "Registration Process"],
  ["resources", "Resources"],
  ["faq", "FAQ"],
];

export default function Mentorship() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-blue-200 mb-4">Home / Student Mentorship</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Student Mentorship
          </h1>
          <p className="max-w-3xl text-blue-100 text-lg">
            No one should navigate IIITA alone. Our layered mentorship network
            connects you with peers, faculty and industry guides.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-10">
          <aside>
            <nav className="sticky top-24 bg-white rounded-2xl shadow border p-4 space-y-2">
              {navItems.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-10 text-gray-700">
            <ContentBlock id="peer" title="Peer Mentorship Program">
              Trained senior students are matched with juniors to ease the
              transition into campus life, share study strategies and offer a
              friendly first point of contact. Each peer mentor supports a small
              cohort and meets them regularly through the semester.
            </ContentBlock>

            <ContentBlock id="faculty" title="Faculty Mentorship Program">
              Every student is assigned a faculty mentor for sustained academic
              and personal guidance — from course planning to research direction
              and career choices — across the full duration of their programme.
            </ContentBlock>

            <ContentBlock id="mentor-resp" title="Mentor Responsibilities">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Meet mentees regularly and maintain a supportive, confidential
                  relationship.
                </li>
                <li>
                  Guide on academics, opportunities and well-being; escalate
                  concerns appropriately.
                </li>
                <li>
                  Maintain brief records of interactions for continuity.
                </li>
              </ul>
            </ContentBlock>

            <ContentBlock id="mentee-resp" title="Mentee Responsibilities">
              <ul className="list-disc pl-6 space-y-2">
                <li>Engage honestly and attend scheduled sessions.</li>
                <li>Set goals and act on guidance received.</li>
                <li>Provide feedback to help improve the programme.</li>
              </ul>
            </ContentBlock>

            <ContentBlock id="matching" title="Matching Process">
              Matching considers branch, interests, language preference and
              goals. Students may request a re-match if a pairing is not working
              — relationships, not assignments, are what matter.
            </ContentBlock>

            <ContentBlock id="training" title="Training Framework">
              All mentors complete structured training in active listening,
              boundaries, referral pathways and inclusivity before being
              matched, with refresher sessions each semester.
            </ContentBlock>

            <ContentBlock id="impact" title="Impact Assessment">
              The programme is evaluated through periodic surveys, session logs
              and well-being indicators, with outcomes reported to the advisory
              committee.
            </ContentBlock>

            <section id="register" className="scroll-mt-28">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Registration Process
              </h3>

              <div className="space-y-4">
                {[
                  [
                    "Sign up",
                    "Register as a mentor or mentee on the student portal.",
                  ],
                  [
                    "Get matched",
                    "The matching system proposes a pairing based on your profile.",
                  ],
                  [
                    "Begin",
                    "Attend your first session and set shared goals.",
                  ],
                ].map(([title, text], index) => (
                  <div
                    key={title}
                    className="flex gap-4 bg-white border rounded-2xl shadow-sm p-5"
                  >
                    <span className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        {title}
                      </h4>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <ContentBlock id="resources" title="Resources">
              <ul className="list-disc pl-6 space-y-2">
                <li>Mentor handbook and conversation guides.</li>
                <li>Goal-setting and reflection templates.</li>
                <li>
                  Referral directory for wellness, academics and careers.
                </li>
              </ul>
            </ContentBlock>

            <section id="faq" className="scroll-mt-28">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <Faq q="Is mentorship confidential?">
                  Yes. Conversations are private; mentors only escalate when
                  there is a safety concern, following clear protocols.
                </Faq>

                <Faq q="Can I switch mentors?">
                  Absolutely. A good fit is essential — request a re-match
                  anytime through the portal.
                </Faq>

                <Faq q="How much time does it take?">
                  Typically one short session every two to three weeks, plus
                  messaging as needed.
                </Faq>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

function ContentBlock({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="leading-8">{children}</div>
    </section>
  );
}

function Faq({ q, children }) {
  return (
    <details className="bg-white border rounded-xl shadow-sm p-5">
      <summary className="font-semibold text-gray-900 cursor-pointer">
        {q}
      </summary>
      <p className="mt-3 text-gray-600 leading-7">{children}</p>
    </details>
  );
}