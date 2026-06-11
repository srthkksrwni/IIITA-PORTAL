
function WelcomeMessage() {
  return (
    <section className="bg-[#031225] px-6 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl lg:grid-cols-[0.85fr_1.15fr] lg:p-10">

          {/* Left Panel */}
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-blue-500/20 via-blue-900/30 to-slate-950 p-8 shadow-xl">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-blue-400/30 shadow-2xl shadow-blue-500/20">
                <img
                  src="/Sonali Maam.jpg"
                  alt="Prof. Sonali Agarwal"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name Card */}
              <div className="mt-8 w-full rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white">
                  Prof. Sonali Agarwal
                </h3>
              </div>

              {/* Additional Info Card */}
              <div className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <h4 className="text-lg font-semibold text-white">
                  Head, Centre for Intelligent Robotics (CIR)
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Professor-In-Charge, Students’ Holistic Growth, Inclusive
                  Care and Mental Wellness
                  <br />
                  Action Editor, Neural Networks
                  <br />
                  General Chair: ISEC 2023 | ICONIP 2022 | BDA 2021
                  <br />
                  Professor
                  <br />
                  Big Data Analytics (BDA) Lab
                  <br />
                  Department of Information Technology
                </p>
              </div>

              {/* Profile Button */}
              <a
                href="https://profile.iiita.ac.in/sonali/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full rounded-2xl bg-blue-600 px-6 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
              >
                View Full Profile 
              </a>
            </div>
          </div>

          {/* Message Body */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
              Message from the Professor-in-Charge
            </span>

            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              A campus where every student is seen, supported and empowered
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                Dear Students, Colleagues and Well-wishers — it is my privilege
                to welcome you to the Office for Students&apos; Holistic Growth,
                Inclusive Care and Mental Wellness at IIIT Allahabad.
              </p>

              <p>
                Our mandate brings together, under one roof, the many dimensions
                of student life that shape who you become — rigorous Minor and
                Honours pathways, peer and faculty mentorship, national and
                international internships, semester exchange and credit-transfer
                mobility, accessible and inclusive education for our Divyangjan
                students, and a comprehensive framework for mental wellness.
              </p>

              <p>
                To every student: you do not have to navigate your journey
                alone. Whether you are reaching for a competitive internship,
                exploring a global semester, seeking academic enrichment, or
                simply needing someone to talk to, this office is your single
                point of access and your steadfast ally.
              </p>

              <p>
                I invite you to explore this portal, engage with our programmes,
                and reach out whenever you need us. Together, let us build a
                culture of care, curiosity and courage.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WelcomeMessage;

