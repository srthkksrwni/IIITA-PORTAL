import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#031225]/90 text-white shadow-lg shadow-blue-950/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-800 text-lg font-extrabold shadow-lg shadow-blue-500/30">
            T
          </span>

          <div className="leading-tight">
            <div className="text-lg font-bold tracking-wide">
              THRIVE @ IIITA
            </div>
            <div className="text-xs text-blue-200">
              Holistic Growth · Inclusive Care · Mental Wellness
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-blue-100 lg:flex">
          <Link to="/" className="transition hover:text-white">Home</Link>
          <Link to="/about" className="transition hover:text-white">About</Link>
          <Link to="/programs" className="transition hover:text-white">Programs</Link>
          <Link to="/wellness" className="transition hover:text-white">Care & Wellness</Link>
          <Link to="/resources" className="transition hover:text-white">Resources</Link>
          <Link to="/news" className="transition hover:text-white">News</Link>
          <Link to="/dashboard" className="transition hover:text-white">Dashboard</Link>
          <Link to="/contact" className="transition hover:text-white">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="rounded-full border border-blue-300/30 px-5 py-2 text-sm font-semibold text-blue-100 transition hover:bg-white/10 hover:text-white"
          >
            Student Support
          </Link>

          <Link
            to="/internships"
            className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
          >
            Apply Now
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

export default Navbar;