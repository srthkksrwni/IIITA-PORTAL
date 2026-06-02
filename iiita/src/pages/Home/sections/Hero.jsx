import { Link } from "react-router-dom";
import { quickAccess } from "../../../data/quickAccess";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-10 lg:py-14">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <h1 className="mt-6 text-5xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight max-w-3xl">
              Empowering Students for Academic Excellence,
              Personal Growth &{" "}
              <span className="text-blue-700">
                Lifelong Success
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Supporting every student's journey through mentoring,
              wellness, inclusion, global opportunities,
              internships, and holistic development.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/responsibilities"
                className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-medium transition-all duration-300 shadow-sm"
              >
                Explore Programs
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl font-medium transition-all duration-300"
              >
                Student Support
              </Link>
            </div>
          </div>

          {/* Quick Access Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
            <h4 className="text-xl font-semibold text-slate-900 mb-6">
              Quick Access
            </h4>

            <div className="space-y-3">
              {quickAccess.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-xl">
                    {item.icon}
                  </span>

                  <div className="flex-1">
                    <p className="font-medium text-slate-800 group-hover:text-blue-700">
                      {item.title}
                    </p>
                  </div>

                  <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;