import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const slides = [
    {
      title: "Empowering Students for Academic Excellence",
      subtitle:
        "A unified student support platform for mentoring, wellness, internships, mobility and inclusive growth.",
      tag: "Office of the Professor-in-Charge · Est. 2026",
      image: "/iiita-banner.jpg",
      primary: "Explore Programs",
      primaryLink: "/programs",
    },
    {
      title: "Mentorship, Wellness & Inclusive Support",
      subtitle:
        "Connecting students with care systems, academic guidance, accessibility support and personal development resources.",
      tag: "Student-Centric Growth Ecosystem",
      image: "/iiita-banner.jpg",
      primary: "Student Support",
      primaryLink: "/contact",
    },
    {
      title: "Internships, Mobility & Global Opportunities",
      subtitle:
        "Helping students discover experiential learning, research exposure, exchange programs and career-building pathways.",
      tag: "Opportunities Beyond Classrooms",
      image: "/iiita-banner.jpg",
      primary: "Browse Internships",
      primaryLink: "/internships",
    },
  ];

  const quickLinks = [
    ["🎓", "Minor & Honours Programs", "/programs", "bg-blue-500/15 text-blue-200"],
    ["🤝", "Find a Mentor", "/mentorship", "bg-emerald-400/15 text-emerald-200"],
    ["💼", "Browse Internships", "/internships", "bg-amber-400/15 text-amber-200"],
    ["🌍", "Exchange & Mobility", "/mobility", "bg-cyan-400/15 text-cyan-200"],
    ["♿", "Request Assistance", "/inclusive", "bg-violet-400/15 text-violet-200"],
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden bg-[#031225] text-white">
      {/* Hero Carousel */}
      <div className="relative min-h-[720px] overflow-hidden">
        <img
          src={slide.image}
          alt="IIIT Allahabad Campus"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020b18]/95 via-[#031225]/80 to-[#031225]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.45),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.25),transparent_35%)]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-blue-100 shadow-lg backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
              {slide.tag}
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              {slide.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              {slide.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to={slide.primaryLink}
                className="rounded-full bg-blue-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                {slide.primary} →
              </Link>

              <Link
                to="/wellness"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Wellness Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl backdrop-blur-md transition hover:bg-white/20 lg:flex"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl backdrop-blur-md transition hover:bg-white/20 lg:flex"
        >
          ›
        </button>

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-blue-400"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <span className="rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            Student Hub
          </span>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Quick Access
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Direct access to important student services, academic support and growth opportunities.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {quickLinks.map(([icon, title, path, style]) => (
            <Link
              key={title}
              to={path}
              className="group rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-blue-950/20 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-300/40 hover:bg-white/[0.10]"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${style}`}
              >
                {icon}
              </span>

              <h3 className="mt-5 font-semibold text-slate-100 group-hover:text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                Open service →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;