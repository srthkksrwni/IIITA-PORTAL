import { useState } from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Programs", "/programs"],
    ["Care & Wellness", "/wellness"],
    ["Resources", "/resources"],
    ["News", "/news"],
    ["Dashboard", "/dashboard"],
    ["Contact", "/contact"],
  ];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[76px] z-50 px-6">
          <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-[#031225]/95 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {links.map(([label, path]) => (
                <Link
                  key={label}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-blue-100 transition hover:bg-white/10 hover:text-white"
                >
                  {label}
                </Link>
              ))}

              <Link
                to="/internships"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-blue-500 px-4 py-3 text-center font-semibold text-white"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;