import { Link } from "react-router-dom";

function Footer() {
return ( <footer className="bg-slate-950 text-slate-300"> <div className="max-w-7xl mx-auto px-6 py-16">
    {/* Main Footer */}
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      
      {/* Brand */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white font-bold text-lg">
            T
          </div>

          <div>
            <h3 className="font-bold text-white">
              THRIVE @ IIITA
            </h3>

            <p className="text-sm text-slate-400">
              Holistic Growth · Inclusive Care · Mental Wellness
            </p>
          </div>
        </div>

        <p className="text-sm leading-7 text-slate-400">
          The single point of access for student development,
          well-being, inclusion, and global opportunity at
          IIIT Allahabad.
        </p>
      </div>

      {/* Programs */}
      <div>
        <h4 className="mb-4 text-lg font-semibold text-white">
          Programs
        </h4>

        <div className="flex flex-col gap-3">
          <Link to="/programs" className="hover:text-white transition-colors">
            Minor & Honours
          </Link>

          <Link to="/mentorship" className="hover:text-white transition-colors">
            Mentorship
          </Link>

          <Link to="/mobility" className="hover:text-white transition-colors">
            Student Mobility
          </Link>

          <Link to="/internships" className="hover:text-white transition-colors">
            Internships
          </Link>
        </div>
      </div>

      {/* Care & Wellness */}
      <div>
        <h4 className="mb-4 text-lg font-semibold text-white">
          Care & Wellness
        </h4>

        <div className="flex flex-col gap-3">
          <Link to="/wellness" className="hover:text-white transition-colors">
            Mental Wellness
          </Link>

          <Link to="/inclusive" className="hover:text-white transition-colors">
            Inclusive Care
          </Link>

          <Link to="/ecological" className="hover:text-white transition-colors">
            Ecological Council
          </Link>

          <Link to="/resources" className="hover:text-white transition-colors">
            Student Resources
          </Link>
        </div>
      </div>

      {/* Office */}
      <div>
        <h4 className="mb-4 text-lg font-semibold text-white">
          Office
        </h4>

        <div className="flex flex-col gap-3">
          <Link to="/about" className="hover:text-white transition-colors">
            About Us
          </Link>

          <Link to="/news" className="hover:text-white transition-colors">
            News & Events
          </Link>

          <Link to="/dashboard" className="hover:text-white transition-colors">
            Dashboard
          </Link>

          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>

    </div>

    {/* Divider */}
    <div className="my-10 h-px bg-slate-800" />

    {/* Bottom Footer */}
    <div className="flex flex-col gap-4 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
      <p>
        © 2026 IIIT Allahabad · Office for Students' Holistic Growth,
        Inclusive Care & Mental Wellness.
      </p>

      <p>
        Deoghat, Jhalwa, Prayagraj-211015, Uttar Pradesh, India
      </p>
    </div>
  </div>
</footer>

);
}

export default Footer;
