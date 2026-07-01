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
      <div className="mx-auto flex max-w-[1550px] items-center px-6 py-4">
        {/* Logo Section */}
        <Link to="/" onClick={scrollTop} className="flex items-center gap-3">
          {/* <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-800 text-lg font-extrabold shadow-lg shadow-blue-500/30">
            IIITA
          </span> */}

          <div className="leading-tight">
            <div className="text-lg font-bold tracking-wide">
              IIIT Allahabad
            </div>
{/* 
            <div className="text-xs leading-5 text-blue-200">
              <div>Holistic Growth · Inclusive Care</div>
              <div>Mental Wellness</div>
            </div> */}
          </div>
        </Link>

        {/* Navigation + Buttons Section */}
        <div className="ml-auto flex items-center">
          <nav className="hidden items-center gap-11 text-sm font-medium text-blue-100 lg:flex">
            <Link to="/" onClick={scrollTop} className="transition hover:text-white">
              Home
            </Link>

            <Link to="/about" onClick={scrollTop} className="transition hover:text-white">
              About
            </Link>

            <Link to="/minors" onClick={scrollTop} className="transition hover:text-white">
              Minors
            </Link>

             <Link to="/honours" onClick={scrollTop} className="transition hover:text-white">
              Honours
            </Link>

            <Link to="/wellness" onClick={scrollTop} className="transition hover:text-white">
              Care & Wellness
            </Link>

            
            <Link to="https://friendly-tiramisu-879cee.netlify.app/" target="_blank" onClick={scrollTop} className="transition hover:text-white">
              PWD Cell
            </Link>

            <Link to="/ecological" onClick={scrollTop} className="transition hover:text-white">
              Ecological Council
            </Link>

            <Link to="/internships" onClick={scrollTop} className="transition hover:text-white">
              Internships
            </Link>

            {/* <Link to="/dashboard" onClick={scrollTop} className="transition hover:text-white">
              Dashboard
            </Link> */}

            <Link to="/contact" onClick={scrollTop} className="transition hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-4 ml-12 lg:flex">
            <a
              href="https://prayaas.iiita.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-44 items-center justify-center rounded-full border border-blue-300/30 text-center text-sm font-semibold text-blue-100 transition hover:bg-white/10 hover:text-white"
            >
              Student Initiative
            </a>

            {/* <Link
              to="/internships"
              onClick={scrollTop}
              className="flex h-14 w-36 items-center justify-center rounded-full bg-blue-500 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Apply Now
            </Link> */}
          </div>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

export default Navbar;