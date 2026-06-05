import React from "react";
import { Link } from "react-router-dom";

const kpis = [
  { icon: "🤝", trend: "+8%", value: "315", label: "Active Mentors" },
  { icon: "🎓", trend: "+12%", value: "2,940", label: "Active Mentees" },
  { icon: "💼", trend: "+18%", value: "540", label: "Internships Offered" },
  { icon: "🌍", trend: "+22%", value: "132", label: "Exchange Students" },
  { icon: "💚", trend: "+15%", value: "184", label: "Wellness Activities" },
  { icon: "⭐", trend: "+0.3", value: "4.6/5", label: "Avg. Student Feedback" },
  {
    icon: "📨",
    trend: "−9%",
    value: "27",
    label: "Open Support Requests",
    danger: true,
  },
  { icon: "📊", trend: "+6%", value: "78%", label: "Participation Rate" },
];

const programBars = [
  { name: "Mentorship", height: "72%" },
  { name: "Internships", height: "90%" },
  { name: "Exchange", height: "48%" },
  { name: "Wellness", height: "64%" },
  { name: "Minor/Hon.", height: "55%" },
  { name: "Eco", height: "40%" },
];

const yearlyData = [
  ["Peer Mentorship", "980", "720", "410", "180", "2,290"],
  ["Internships", "40", "210", "540", "620", "1,410"],
  ["Exchange", "—", "28", "74", "30", "132"],
  ["Wellness Activities", "610", "540", "470", "320", "1,940"],
];

export default function Dashboard() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-blue-200 mb-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Dashboard
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Office Dashboard
          </h1>

          <p className="max-w-3xl text-lg text-blue-100 leading-relaxed">
            Outcomes at a glance — engagement, well-being and impact across
            every programme the office runs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold uppercase tracking-wide text-sm">
              Live Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Office Dashboard
            </h2>
            <p className="mt-4 text-slate-600">
              A real-time snapshot of engagement, outcomes and well-being across
              the office&apos;s programmes. Illustrative data.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                    {item.icon}
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
                      item.danger
                        ? "bg-red-100 text-red-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {item.trend}
                  </span>
                </div>

                <div className="text-4xl font-bold text-slate-900">
                  {item.value}
                </div>
                <div className="mt-2 text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Participation by Program
              </h3>

              <div className="flex h-72 items-end justify-between gap-4 border-b border-slate-200 pb-4">
                {programBars.map((bar) => (
                  <div
                    key={bar.name}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                  >
                    <div className="flex h-full w-full items-end justify-center">
                      <div
                        className="w-full max-w-12 rounded-t-2xl bg-blue-600"
                        style={{ height: bar.height }}
                      />
                    </div>
                    <span className="text-xs md:text-sm text-slate-500 text-center">
                      {bar.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Support Requests — Status
              </h3>

              <Progress label="Resolved" value="82%" />
              <Progress label="In Progress" value="13%" />
              <Progress label="New" value="5%" />

              <p className="mt-8 text-sm text-slate-500">
                Median first-response time:{" "}
                <b className="text-slate-900">6.4 hours</b>
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm overflow-x-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Participation Analytics — by Year
            </h3>

            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-4 font-semibold">Programme</th>
                  <th className="p-4 font-semibold">1st Yr</th>
                  <th className="p-4 font-semibold">2nd Yr</th>
                  <th className="p-4 font-semibold">3rd Yr</th>
                  <th className="p-4 font-semibold">4th Yr</th>
                  <th className="p-4 font-semibold">Total</th>
                </tr>
              </thead>

              <tbody>
                {yearlyData.map((row) => (
                  <tr key={row[0]} className="border-b border-slate-200">
                    {row.map((cell) => (
                      <td key={cell} className="p-4 text-slate-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

function Progress({ label, value }) {
  return (
    <div className="mb-5">
      <p className="mb-2 text-sm text-slate-500">{label}</p>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-blue-600" style={{ width: value }} />
      </div>
    </div>
  );
}