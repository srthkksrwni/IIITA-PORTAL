import { useState } from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-lg border px-3 py-2 text-slate-700 bg-white"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[72px] z-50 mx-auto max-w-7xl px-6">
          <div className="bg-white border rounded-2xl shadow-sm p-3">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="px-3 py-2 rounded-xl hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-xl hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/programs"
                className="px-3 py-2 rounded-xl hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Programs
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;

