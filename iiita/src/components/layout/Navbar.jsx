import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#031225]/90 text-white shadow-lg shadow-blue-950/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4">
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

        <nav className="hidden items-center gap-7 text-sm font-medium text-blue-100 mx-6 lg:flex">
          <Link to="/" onClick={scrollTop} className="transition hover:text-white">Home</Link>
          <Link to="/about" onClick={scrollTop} className="transition hover:text-white">About</Link>
          <Link to="/programs" onClick={scrollTop} className="transition hover:text-white">Programs</Link>
          <Link to="/wellness" onClick={scrollTop} className="transition hover:text-white">Care & Wellness</Link>
          <Link to="/resources" onClick={scrollTop} className="transition hover:text-white">Resources</Link>
          <Link to="/news" onClick={scrollTop} className="transition hover:text-white">News</Link>
          <Link to="/dashboard" onClick={scrollTop} className="transition hover:text-white">Dashboard</Link>
          <Link to="/contact" onClick={scrollTop} className="transition hover:text-white">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex ml-8">
          <Link
            to="https://prayaas.iiita.ac.in/" target="_blank" 
            className="rounded-full border border-blue-300/30 px-5 py-2 text-sm font-semibold text-blue-100 transition hover:bg-white/10 hover:text-white"
          >
            Student Initiative
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