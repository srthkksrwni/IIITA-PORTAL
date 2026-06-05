const opportunities = [
  ["Machine Learning Intern", "Industry", "Tech Partner Pvt. Ltd.", "On-site", "Open", "green"],
  ["Research Intern — Vision Lab", "Research", "IIITA", "On-campus", "Open", "green"],
  ["Summer Research Fellow", "International", "Partner University", "Abroad", "Upcoming", "blue"],
  ["Backend Engineering Intern", "Industry", "Product Startup", "Remote", "Open", "green"],
  ["Data Analytics Intern", "Industry", "Analytics Firm", "Hybrid", "Closing soon", "gray"],
];

const phases = [
  ["Phase I", "Feb – Mar", "Summer industry internships"],
  ["Phase II", "Apr – May", "Research & international internships"],
  ["Phase III", "Sep – Oct", "Winter & semester-long internships"],
];

export default function Internships() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-blue-200 mb-4">Home / Internship Portal</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Internship Portal</h1>
          <p className="max-w-3xl text-blue-100 text-lg">
            Your single hub for industry, research and international internships —
            discover, apply, track and convert, all in one place.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Opportunities" title="Available Opportunities" />

          <div className="overflow-x-auto bg-white rounded-2xl shadow">
            <table className="w-full text-left">
              <thead className="bg-blue-50">
                <tr>
                  {["Role", "Type", "Host", "Mode", "Status"].map((h) => (
                    <th key={h} className="p-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {opportunities.map(([role, type, host, mode, status, color]) => (
                  <tr key={role} className="border-t">
                    <td className="p-4">{role}</td>
                    <td className="p-4">{type}</td>
                    <td className="p-4">{host}</td>
                    <td className="p-4">{mode}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          color === "green"
                            ? "bg-green-100 text-green-700"
                            : color === "blue"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="How It Works" title="Application Process" />

          <div className="max-w-3xl space-y-5">
            {[
              ["Watch the circulars", "Internship circulars are published centrally with eligibility and deadlines."],
              ["Build your profile", "Complete your student profile and upload your CV to the portal."],
              ["Apply & track", "Apply to roles and track status — applied, shortlisted, interview, offer — in one place."],
              ["Onboard with support", "The internship cell assists with documentation, stipend and credit conversion."],
            ].map(([title, text], i) => (
              <div key={title} className="flex gap-4 bg-white p-5 rounded-2xl shadow-sm">
                <span className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-bold text-lg">{title}</h4>
                  <p className="text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <InfoCard icon="🏢" title="Industry Partners" text="A network of technology firms, startups and enterprises offering structured internships and pre-placement pathways." />
          <InfoCard icon="🔬" title="Research Labs" text="On-campus and partner research labs across AI, systems, networks, security and applied sciences." />
          <InfoCard icon="🌍" title="International Internships" text="Cross-border placements with visa, funding and logistics support from the office." />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Plan Ahead" title="Internship Calendar" />

          <div className="overflow-x-auto bg-white rounded-2xl shadow">
            <table className="w-full text-left">
              <thead className="bg-blue-50">
                <tr>
                  {["Phase", "Window", "Focus"].map((h) => (
                    <th key={h} className="p-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {phases.map(([phase, window, focus]) => (
                  <tr key={phase} className="border-t">
                    <td className="p-4">{phase}</td>
                    <td className="p-4">{window}</td>
                    <td className="p-4">{focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="Proof It Works" title="Student Success Stories" />

          <div className="grid md:grid-cols-2 gap-6">
            <Quote name="Karan Singh" course="B.Tech IT, 4th Year" initials="KS">
              The internship portal tracked everything for me. I landed a research internship that turned into a pre-placement offer.
            </Quote>
            <Quote name="Ananya Roy" course="B.Tech ECE, 4th Year" initials="AR">
              My international internship was made possible entirely by the office — funding, visa, everything. Life-changing.
            </Quote>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />

          <div className="space-y-4">
            <Faq q="Are internships credited?">
              Many internships can be converted to academic credit through the office&apos;s internship-credit framework, subject to approval.
            </Faq>
            <Faq q="Can first-year students apply?">
              Most internships require completion of the first year; some research roles consider motivated first-years case by case.
            </Faq>
            <Faq q="Does the office help with stipends?">
              Yes — the internship cell assists with stipend documentation, offer letters and conversion to pre-placement offers where applicable.
            </Faq>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHead({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <span className="text-blue-700 font-semibold uppercase tracking-wide text-sm">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">{title}</h2>
    </div>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 border">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

function Quote({ name, course, initials, children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 border">
      <div className="text-yellow-500 mb-3">★★★★★</div>
      <p className="text-gray-700 mb-5">“{children}”</p>
      <div className="flex items-center gap-3">
        <span className="w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
          {initials}
        </span>
        <div>
          <b>{name}</b>
          <p className="text-sm text-gray-500">{course}</p>
        </div>
      </div>
    </div>
  );
}

function Faq({ q, children }) {
  return (
    <details className="bg-white rounded-xl shadow-sm border p-5">
      <summary className="font-semibold cursor-pointer">{q}</summary>
      <p className="text-gray-600 mt-3">{children}</p>
    </details>
  );
}