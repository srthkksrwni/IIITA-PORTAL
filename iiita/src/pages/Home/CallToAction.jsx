import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-[#031225] px-6 py-20 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-r from-[#0a2344] via-[#0f2d56] to-[#13396a] px-8 py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:px-16">
          
          

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your Success is Our Shared Mission
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            From your first semester to your final viva, IIITA stands
            beside you at every step. Explore academic opportunities, connect
            with mentors, discover internships, or simply reach out whenever
            you need support.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/programs"
              className="rounded-full bg-white px-7 py-3 font-semibold text-[#0f2d56] shadow-lg transition duration-300 hover:-translate-y-1"
            >
              Explore Programs
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;