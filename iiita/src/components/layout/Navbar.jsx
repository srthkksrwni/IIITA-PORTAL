import { Link } from "react-router-dom";


import MobileMenu from "./MobileMenu";


function Navbar() {
  return (
    <>


      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="THRIVE @ IIITA"
          >
            <span
              className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center"
              aria-hidden="true"
            >
              T
            </span>
            <div className="leading-tight">
              <div className="font-bold text-slate-900">
                THRIVE @ IIITA
              </div>
              <div className="text-xs text-slate-600">
                Holistic Growth · Inclusive Care · Mental Wellness
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6 text-slate-700">
            <Link to="/" className="hover:text-blue-700 font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-700 font-medium">
              About
            </Link>

            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 hover:text-blue-700 font-medium"
              >
                Programs
                <span aria-hidden="true">▾</span>
              </button>
              <div className="absolute left-0 top-full">
                
              </div>
            </div>

            <Link
              to="/wellness"
              className="hover:text-blue-700 font-medium"
            >
              Care & Wellness
            </Link>

            <Link
              to="/resources"
              className="hover:text-blue-700 font-medium"
            >
              Resources
            </Link>

            <Link
              to="/news"
              className="hover:text-blue-700 font-medium"
            >
              News & Events
            </Link>

            <Link
              to="/dashboard"
              className="hover:text-blue-700 font-medium"
            >
              Dashboard
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-700 font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-2 rounded-xl border border-blue-600/30 text-blue-700 hover:bg-blue-600/5 font-semibold text-sm"
            >
              Student Support
            </Link>
            <Link
              to="/internships"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm"
            >
              Apply Now
            </Link>
          </div>

          <MobileMenu />
        </div>
      </header>
    </>
  );
}

export default Navbar;


