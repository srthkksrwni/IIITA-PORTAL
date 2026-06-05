import React from "react";

function Wellness() {
  const sideLinks = [
    ["#mission", "Mental Wellness Mission"],
    ["#framework", "Student Wellbeing Framework"],
    ["#services", "Available Support Services"],
    ["#counselling", "Counselling Resources"],
    ["#emergency", "Emergency Support"],
    ["#selfhelp", "Self-Help Resources"],
    ["#events", "Wellness Events & Campaigns"],
    ["#toolkit", "Wellness Toolkit"],
    ["#faq", "FAQ"],
    ["#stories", "Stories"],
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Utility Bar */}
      <div className="bg-emerald-900 text-white text-sm">

        
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between gap-4 flex-wrap">
          <span>
            Indian Institute of Information Technology, Allahabad · An Institute
            of National Importance
          </span>

          <div className="flex gap-4 flex-wrap">
            <a href="#" className="hover:underline">
              IIITA Main Site ↗
            </a>
            <a href="mailto:thrive@iiita.ac.in" className="hover:underline">
              thrive@iiita.ac.in
            </a>
            <a href="#" className="hover:underline">
              Emergency Helpline
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <span className="w-11 h-11 bg-emerald-700 text-white flex items-center justify-center rounded-full font-bold text-xl">
              T
            </span>
            <span>
              <b className="block text-lg">THRIVE @ IIITA</b>
              <span className="text-sm text-slate-500">
                Holistic Growth · Inclusive Care · Mental Wellness
              </span>
            </span>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex gap-6 font-medium">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/wellness" className="text-emerald-700">Care & Wellness</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/news">News & Events</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>

          <div className="hidden md:flex gap-3">
            <a href="/contact" className="px-4 py-2 border rounded-full text-sm">
              Student Support
            </a>
            <a href="/internships" className="px-4 py-2 bg-emerald-700 text-white rounded-full text-sm">
              Apply Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-sm mb-4">
            <a href="/" className="underline">Home</a> / Mental Wellness
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Mental Wellness</h1>
          <p className="max-w-3xl text-lg text-white/90">
            Your mind matters. Confidential counselling, proactive support and a
            campus culture where seeking help is a sign of strength.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-emerald-800 to-blue-700 text-white rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-3">In distress right now?</h2>
            <p className="mb-6 max-w-3xl">
              You are not alone. Confidential help is available 24×7. Reach the
              campus counselling helpline or walk in to the Wellness Centre any time.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="/contact" className="bg-white text-emerald-800 px-6 py-3 rounded-full font-semibold">
                Contact the Wellness Centre
              </a>
              <a href="tel:+910000000000" className="border border-white px-6 py-3 rounded-full font-semibold">
                Call Helpline
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1">
            <nav className="bg-white rounded-2xl shadow p-4 sticky top-28">
              {sideLinks.map(([href, text]) => (
                <a
                  key={href}
                  href={href}
                  className="block px-4 py-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {text}
                </a>
              ))}
            </nav>
          </aside>

          <main className="lg:col-span-3 bg-white rounded-3xl shadow p-8 md:p-12 space-y-10">
            <Section id="mission" title="Mental Wellness Mission">
              To foster a campus where every student feels safe, supported and
              able to seek help without stigma — integrating prevention, early
              intervention and care into everyday student life.
            </Section>

            <Section id="framework" title="Student Wellbeing Framework">
              Our framework spans four layers: awareness and prevention, everyday
              support through peers and mentors, professional counselling, and
              crisis response.
            </Section>

            <Section id="services" title="Available Support Services">
              <ul className="list-disc pl-6 space-y-2">
                <li>Individual and group counselling with qualified professionals.</li>
                <li>Drop-in wellness sessions and stress-relief activities.</li>
                <li>Workshops on resilience, sleep, focus and balance.</li>
                <li>Referrals to specialist care when needed.</li>
              </ul>
            </Section>

            <Section id="counselling" title="Counselling Resources">
              Free, confidential counselling is available to all students. Sessions
              can be booked online or by walk-in, with both in-person and virtual options.
            </Section>

            <Section id="emergency" title="Emergency Support">
              A 24×7 crisis protocol ensures immediate response. If you or a friend
              are in distress, contact the helpline or reach any counsellor, mentor
              or warden.
            </Section>

            <Section id="selfhelp" title="Self-Help Resources">
              <ul className="list-disc pl-6 space-y-2">
                <li>Guided breathing and mindfulness exercises.</li>
                <li>Sleep, study and time-management toolkits.</li>
                <li>Curated reading and audio for stress and focus.</li>
              </ul>
            </Section>

            <Section id="events" title="Wellness Events & Campaigns">
              Regular awareness weeks, mindfulness sessions, peer-support circles
              and well-being fairs keep mental health visible and normalised across campus.
            </Section>

            <Section id="toolkit" title="Wellness Toolkit">
              A downloadable toolkit equips students and mentors with quick
              self-checks, grounding techniques and a clear map of where to turn for help.
            </Section>

            <Section id="stories" title="Student Stories">
              <div className="bg-emerald-50 p-6 rounded-2xl border">
                <div className="text-yellow-500 mb-2">★★★★★</div>
                <p className="italic mb-4">
                  “Reaching out to the counselling cell was the best decision of
                  my second year. I wish I'd known sooner how much support was here.”
                </p>
                <b>Anonymous Student</b>
                <p className="text-sm text-slate-500">B.Tech, 2nd Year</p>
              </div>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <FAQ q="Is counselling really confidential?">
                Yes. Sessions are private and records are protected. Information is
                shared only in rare situations involving immediate safety.
              </FAQ>

              <FAQ q="How do I book a session?">
                Book online through the portal or simply walk in to the Wellness Centre.
              </FAQ>

              <FAQ q="Can I get help for a friend?">
                Yes. You can reach out on behalf of a friend in distress.
              </FAQ>
            </Section>
          </main>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h3 className="text-xl font-bold mb-2">THRIVE @ IIITA</h3>
          <p className="text-slate-300 max-w-2xl">
            The single point of access for student development, well-being,
            inclusion and global opportunity at IIIT Allahabad.
          </p>
          <div className="border-t border-white/10 mt-8 pt-5 text-sm text-slate-400 flex justify-between flex-wrap gap-3">
            <span>© 2026 IIIT Allahabad</span>
            <span>Deoghat, Jhalwa, Prayagraj-211015, U.P., India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <div id={id}>
      <h3 className="text-2xl font-bold text-emerald-800 mb-3">{title}</h3>
      <div className="text-slate-700 leading-7">{children}</div>
    </div>
  );
}

function FAQ({ q, children }) {
  return (
    <details className="border rounded-xl p-4 mb-3">
      <summary className="font-semibold cursor-pointer">{q}</summary>
      <p className="mt-3 text-slate-600">{children}</p>
    </details>
  );
}

export default Wellness;