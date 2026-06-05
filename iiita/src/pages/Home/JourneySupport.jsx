function JourneySupport() {
  const supports = [
    {
      icon: "📚",
      title: "Academic Enrichment",
      description:
        "Minors, honours, curriculum support and academic monitoring.",
    },
    {
      icon: "🎯",
      title: "Leadership & Life Skills",
      description:
        "Workshops that build confidence, communication and character.",
    },
    {
      icon: "🛡️",
      title: "Student Welfare",
      description:
        "Welfare activities, grievance support and a caring campus community.",
    },
    {
      icon: "🤝",
      title: "Mentorship Network",
      description:
        "Peer, faculty, research, career and industry mentorship in one place.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#031225] px-6 py-20 text-white lg:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            For Every Stage of Your Journey
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            One Office. Every Kind of Support.
          </h2>

          <p className="mt-4 text-slate-300">
            Dedicated services and initiatives designed to support students
            academically, professionally, socially and personally.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supports.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-blue-950/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-300/40 hover:bg-white/[0.09]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-2xl text-blue-200">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySupport;