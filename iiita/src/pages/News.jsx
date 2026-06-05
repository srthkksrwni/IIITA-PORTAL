import React from "react";
import { HashLink } from "react-router-hash-link";

const sideLinks = [
  ["all", "All"],
  ["announce", "Announcements"],
  ["work", "Workshops & Training"],
  ["intern", "Internships"],
  ["exch", "Exchange Calls"],
  ["well", "Wellness Events"],
  ["stories", "Success Stories"],
];

const newsItems = [
  {
    day: "12",
    month: "Jun",
    chip: "Workshop",
    color: "blue",
    title: "Managing Academic Anxiety: A Wellness Workshop",
    meta: "Counselling Cell · Seminar Hall A · 4:00 PM",
  },
  {
    day: "15",
    month: "Jun",
    chip: "Announcement",
    color: "amber",
    title: "Minor & Honours Applications Open for 2026 Cohort",
    meta: "Academic Enrichment · Portal now live",
  },
  {
    day: "18",
    month: "Jun",
    chip: "Exchange Call",
    color: "green",
    title: "Applications Open: Fall Semester Exchange 2026",
    meta: "Student Mobility · Deadline 30 June",
  },
  {
    day: "20",
    month: "Jun",
    chip: "Training",
    color: "blue",
    title: "Peer Mentor Training — Cohort 5",
    meta: "Mentorship · Two-day certified programme",
  },
  {
    day: "25",
    month: "Jun",
    chip: "Internship",
    color: "amber",
    title: "Summer Research Internship Circular — Phase II",
    meta: "Internship Cell · Rolling applications",
  },
  {
    day: "28",
    month: "Jun",
    chip: "Scholarship",
    color: "green",
    title: "Mobility Grant Window for Outbound Students",
    meta: "Student Mobility · Apply with exchange offer",
  },
  {
    day: "02",
    month: "Jul",
    chip: "Wellness Event",
    color: "green",
    title: "Mindfulness & Well-being Fair",
    meta: "Wellness Centre · Open to all students",
  },
  {
    day: "08",
    month: "Jul",
    chip: "Success Story",
    color: "blue",
    title: "From Campus to Global Lab: An Exchange Journey",
    meta: "Featured student spotlight",
  },
];

export default function News() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 text-sm text-blue-200">
            <HashLink to="/" className="hover:text-white">
              Home
            </HashLink>{" "}
            / News & Events
          </div>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            News & Events
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-blue-100">
            Stay current with announcements, workshops, internship circulars,
            exchange calls, scholarships and wellness happenings.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[280px_1fr]">
          <aside>
            <nav className="sticky top-24 space-y-1 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              {sideLinks.map(([id, label]) => (
                <HashLink
                  smooth
                  key={id}
                  to={`/news#${id}`}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  {label}
                </HashLink>
              ))}
            </nav>
          </aside>

          <div id="all" className="scroll-mt-28 space-y-5">
            {newsItems.map((item) => (
              <NewsItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-blue-950 p-8 text-center text-white shadow-xl md:p-12">
            <h2 className="text-3xl font-bold">Never miss an opportunity</h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Subscribe to receive announcements, internship circulars, exchange
              calls and wellness events straight to your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="your.name@iiita.ac.in"
                className="flex-1 rounded-full border border-white/20 bg-white px-5 py-3 text-slate-900 outline-none"
              />

              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function NewsItem({ item }) {
  const chipClasses = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
  };

  return (
    <div className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-blue-700 text-white">
        <b className="text-2xl">{item.day}</b>
        <span className="text-sm">{item.month}</span>
      </div>

      <div>
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            chipClasses[item.color]
          }`}
        >
          {item.chip}
        </span>

        <h3 className="mt-3 text-xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-2 text-slate-500">{item.meta}</p>
      </div>
    </div>
  );
}