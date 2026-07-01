import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              IIIT Allahabad
            </h3>

            <p className="text-sm leading-7 text-slate-400">
              Office for Students' Holistic Growth, Inclusive Care &
              Mental Wellness dedicated to supporting student
              development, academic enrichment, well-being,
              mentorship, and global opportunities.
            </p>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Academic Programs
            </h4>

            <div className="flex flex-col gap-3">
              <Link
                to="/minors"
                className="transition-colors hover:text-white"
              >
                Minor Programs
              </Link>

              <Link
                to="/honours"
                className="transition-colors hover:text-white"
              >
                Honours by Research
              </Link>

              {/* <Link
                to="/mobility"
                className="transition-colors hover:text-white"
              >
                Student Mobility
              </Link> */}

              <Link
                to="/internships"
                className="transition-colors hover:text-white"
              >
                Internships
              </Link>
            </div>
          </div>

          {/* Student Support */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Student Support
            </h4>

            <div className="flex flex-col gap-3">
              <Link
                to="/wellness"
                className="transition-colors hover:text-white"
              >
                Care & Wellness
              </Link>

              {/* <Link
                to="/mentorship"
                className="transition-colors hover:text-white"
              >
                Mentorship
              </Link>

              <Link
                to="/inclusive"
                className="transition-colors hover:text-white"
              >
                Inclusive Education
              </Link> */}

              <Link
                to="/ecological"
                className="transition-colors hover:text-white"
              >
                Ecological Council
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h4>

            <div className="space-y-3 text-sm text-slate-400">
              <p>
                Office for Students' Holistic Growth, Inclusive Care &
                Mental Wellness
              </p>

              <p>
                Indian Institute of Information Technology Allahabad
              </p>

              <p>
                Devghat, Jhalwa,<br />
                Prayagraj – 211015,<br />
                Uttar Pradesh, India
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © 2026 IIIT Allahabad. All Rights Reserved.
          </p>

          <p>
            Office for Students' Holistic Growth, Inclusive Care &
            Mental Wellness
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;