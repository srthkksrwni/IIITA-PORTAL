import React from "react";

function Mobility() {
  const sideLinks = [
    ["#semester", "Semester Exchange"],
    ["#exchange", "Student Exchange"],
    ["#credit", "Credit Transfer"],
    ["#partners", "International Partnerships"],
    ["#apply", "Application Procedure"],
    ["#funding", "Funding Opportunities"],
    ["#scholarships", "Scholarships"],
    ["#faq", "FAQ"],
    ["#stories", "Stories"],
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="bg-emerald-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between gap-4 flex-wrap">
          <span>
            Indian Institute of Information Technology, Allahabad · An Institute
            of National Importance
          </span>
          <div className="flex gap-4 flex-wrap">
            <a href="#" className="hover:underline">IIITA Main Site ↗</a>
            <a href="mailto:thrive@iiita.ac.in" className="hover:underline">thrive@iiita.ac.in</a>
            <a href="#" className="hover:underline">Emergency Helpline</a>
          </div>
        </div>
      </div>

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
              <li><a href="/programs" className="text-emerald-700">Programs</a></li>
              <li><a href="/wellness">Care & Wellness</a></li>
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

      <section className="bg-gradient-to-r from-emerald-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-sm mb-4">
            <a href="/" className="underline">Home</a> / Student Mobility
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Student Mobility
          </h1>
          <p className="max-w-3xl text-lg text-white/90">
            Take your IIITA journey global — semester exchange, credit transfer,
            summer schools and international internships.
          </p>
        </div>
      </section>

      <section className="py-16">
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
            <Section id="semester" title="Semester Exchange">
              Spend a semester at a partner university, earning credits that
              transfer back to your IIITA degree while gaining invaluable
              cross-cultural and academic experience.
            </Section>

            <Section id="exchange" title="Student Exchange">
              Short and long-term exchange options across partner institutions,
              with structured support for academics, visas and accommodation.
            </Section>

            <Section id="credit" title="Credit Transfer">
              A transparent framework maps courses taken abroad to IIITA credits,
              approved in advance so your time abroad always counts.
            </Section>

            <Section id="partners" title="International Partnerships">
              The office maintains a growing network of MoUs with universities
              and research institutes across Asia, Europe and North America.
            </Section>

            <Section id="apply" title="Application Procedure">
              <div className="space-y-5">
                <Step title="Shortlist">
                  Identify partner institutions matching your academics and goals.
                </Step>
                <Step title="Apply">
                  Submit your application, transcript and statement of purpose.
                </Step>
                <Step title="Approval">
                  Course mapping and credit transfer approved by the office.
                </Step>
                <Step title="Go global">
                  Complete visa, funding and travel with office support.
                </Step>
              </div>
            </Section>

            <Section id="funding" title="Funding Opportunities">
              <ul className="list-disc pl-6 space-y-2">
                <li>Institute mobility grants for eligible students.</li>
                <li>Partner-funded scholarships and waivers.</li>
                <li>External fellowships and travel-support schemes.</li>
              </ul>
            </Section>

            <Section id="scholarships" title="Scholarships">
              Need- and merit-based scholarships help ensure that financial
              circumstances never stand between a student and a global opportunity.
            </Section>

            <Section id="stories" title="Student Stories">
              <div className="grid md:grid-cols-2 gap-5">
                <Quote
                  name="Rohan Mehta"
                  course="B.Tech IT, 4th Year"
                  avatar="RM"
                >
                  “My exchange semester abroad was the most transformative term
                  of my degree — and every credit transferred back smoothly.”
                </Quote>

                <Quote
                  name="Sneha Nair"
                  course="B.Tech ECE, 3rd Year"
                  avatar="SN"
                >
                  “The office handled the paperwork and funding so I could focus
                  on the experience. I came back a different person.”
                </Quote>
              </div>
            </Section>

            <Section id="faq" title="Frequently Asked Questions">
              <FAQ q="Will exchange extend my degree?">
                No — with pre-approved credit mapping, your exchange semester
                replaces a regular semester.
              </FAQ>

              <FAQ q="Do I need to know another language?">
                Many partners teach in English. Language requirements, where they
                exist, are listed per partner.
              </FAQ>

              <FAQ q="Is funding guaranteed?">
                Funding is competitive but the office actively helps you find and
                apply to suitable schemes.
              </FAQ>
            </Section>
          </main>
        </div>
      </section>

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

function Step({ title, children }) {
  return (
    <div className="flex gap-4 bg-slate-50 border rounded-2xl p-5">
      <span className="w-4 h-4 mt-2 rounded-full bg-emerald-700 flex-shrink-0"></span>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-slate-600">{children}</p>
      </div>
    </div>
  );
}

function Quote({ children, name, course, avatar }) {
  return (
    <div className="bg-emerald-50 p-6 rounded-2xl border">
      <div className="text-yellow-500 mb-2">★★★★★</div>
      <p className="italic mb-5">{children}</p>
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center font-bold">
          {avatar}
        </span>
        <div>
          <b>{name}</b>
          <p className="text-sm text-slate-500">{course}</p>
        </div>
      </div>
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

export default Mobility;