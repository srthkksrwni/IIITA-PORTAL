import { Link } from "react-router-dom";

function FeaturedInitiatives() {
  const initiatives = [
    {
      icon: "🎓",
      title: "Minor Programs",
      desc: "Broaden your expertise with structured minor tracks across disciplines, designed for flexibility and depth.",
      link: "/programs",
      color: "blue",
    },
    {
      icon: "🏅",
      title: "Honours Programs",
      desc: "Push beyond the standard curriculum with research-intensive honours pathways and advanced electives.",
      link: "/programs",
      color: "green",
    },
    {
      icon: "🤝",
      title: "Peer Mentorship",
      desc: "Senior students guide juniors through academics, campus life and personal growth in trusted pairings.",
      link: "/mentorship",
      color: "blue",
    },
    {
      icon: "👩‍🏫",
      title: "Faculty Mentorship",
      desc: "Every student is matched with a faculty mentor for sustained academic and career guidance.",
      link: "/mentorship",
      color: "blue",
    },
    {
      icon: "🧠",
      title: "Mental Wellness",
      desc: "Confidential counselling, stress management, awareness drives and 24×7 crisis support.",
      link: "/wellness",
      color: "green",
    },
    {
      icon: "🌍",
      title: "Student Mobility",
      desc: "Semester exchange, credit transfer and summer schools with partner institutions worldwide.",
      link: "/mobility",
      color: "blue",
    },
    {
      icon: "💼",
      title: "Internships",
      desc: "Industry, research and international internships with end-to-end tracking and support.",
      link: "/internships",
      color: "blue",
    },
    {
      icon: "♿",
      title: "Inclusive Education",
      desc: "Accessibility services, assistive technologies and accommodations for our Divyangjan students.",
      link: "/inclusive",
      color: "green",
    },
    {
      icon: "🌱",
      title: "Ecological Council",
      desc: "Green-campus drives, sustainability projects and a student-led culture of environmental care.",
      link: "/ecological",
      color: "blue",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#061a33] px-6 py-20 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            What We Do
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Featured Initiatives
          </h2>

          <p className="mt-4 text-slate-300">
            Ten interconnected pillars that support the whole student —
            academically, professionally, socially and personally.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl shadow-blue-950/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-300/40 hover:bg-white/[0.10]"
            >
              <div
                className={`h-2 ${
                  item.color === "green"
                    ? "bg-gradient-to-r from-emerald-400 to-teal-500"
                    : "bg-gradient-to-r from-blue-500 to-cyan-400"
                }`}
              />

              <div className="p-6">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${
                    item.color === "green"
                      ? "bg-emerald-400/15 text-emerald-200"
                      : "bg-blue-500/15 text-blue-200"
                  }`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[78px] text-sm leading-7 text-slate-300">
                  {item.desc}
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold text-blue-300 transition group-hover:translate-x-1 group-hover:text-white">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedInitiatives;