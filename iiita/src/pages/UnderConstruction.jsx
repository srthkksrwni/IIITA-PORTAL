import { Link } from "react-router-dom";
import { Construction, Clock3, ArrowLeft } from "lucide-react";

export default function UnderConstruction() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.15),transparent_30%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-200">
            <Construction className="h-4 w-4" />
            Under Construction
          </div>

          {/* Icon */}
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <Construction className="h-14 w-14 text-blue-300" />
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
            We’re Building
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Something New
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
            This section is currently being developed and will be available
            soon. We are working to bring new features, resources and
            opportunities for the IIITA community.
          </p>

          {/* Status Card */}
          <div className="mx-auto mb-10 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center justify-center gap-3 text-blue-300">
              <Clock3 className="h-5 w-5" />
              <span className="font-semibold">
                Development in Progress
              </span>
            </div>

            <p className="mt-4 text-slate-300">
              Content, services and resources for this section will be published
              in future updates.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <Link
              to="/contact"
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>

          {/* Footer Text */}
          <p className="mt-12 text-sm text-slate-500">
            Thank you for your patience and continued support.
          </p>
        </div>
      </div>
    </section>
  );
}