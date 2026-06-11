import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-blue-200 mb-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>{" "}
            / Contact
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>

          <p className="max-w-3xl text-lg text-blue-100 leading-relaxed">
            We're here for you. Reach the office, request support, or share
            feedback — every message is read with care.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <span className="text-blue-700 font-semibold uppercase tracking-wide text-sm">
                Get in Touch
              </span>

              <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-8">
                Office Details
              </h2>

              <div className="space-y-5">
                <InfoBlock
                  icon="👩‍💼"
                  title="Prof. Sonali Agarwal"
                  text="Professor-in-Charge · Students' Holistic Growth, Inclusive Care & Mental Wellness"
                />

                <InfoBlock
                  icon="🏛️"
                  title="Indian Institute of Information Technology, Allahabad"
                  text="Deoghat, Jhalwa, Prayagraj-211015, U.P., India"
                />

                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                    ✉️
                  </div>
                  <div>
                    <b className="block text-slate-900">Email</b>
                    <span className="text-slate-600">
                      <a
                        href="mailto:thrive@iiita.ac.in"
                        className="text-blue-700 hover:underline"
                      >
                        thrive@iiita.ac.in
                      </a>{" "}
                      ·{" "}
                      <a
                        href="mailto:contact@iiita.ac.in"
                        className="text-blue-700 hover:underline"
                      >
                        contact@iiita.ac.in
                      </a>
                    </span>
                  </div>
                </div>

                <InfoBlock
                  icon="📞"
                  title="Phone"
                  text="+91-532-2922025 · +91-532-2922067"
                />

                <InfoBlock
                  icon="🕘"
                  title="Office Hours"
                  text={
                    <>
                      Monday – Friday · 9:30 AM – 5:30 PM
                      <br />
                      Wellness Centre walk-ins: 10:00 AM – 4:00 PM
                    </>
                  }
                />
              </div>

              
            </div>

            <div>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Student Support Form
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <FormInput label="Full Name" type="text" required />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput label="Enrolment No." type="text" />
                    <FormInput label="Email" type="email" required />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      How can we help?
                    </label>
                    <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600">
                      <option>Academic / Minor & Honours</option>
                      <option>Mentorship</option>
                      <option>Internships</option>
                      <option>Exchange & Mobility</option>
                      <option>Inclusive Care / Accessibility</option>
                      <option>Mental Wellness</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 py-10">
            <iframe
              className="h-[450px] w-full rounded-3xl border border-slate-200 shadow-sm"
              loading="lazy"
              title="IIIT Allahabad Map"
              src="https://www.google.com/maps?q=IIIT+Allahabad+Jhalwa+Prayagraj&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
        {icon}
      </div>
      <div>
        <b className="block text-slate-900">{title}</b>
        <span className="text-slate-600">{text}</span>
      </div>
    </div>
  );
}

function FormInput({ label, type, placeholder, required }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
      />
    </div>
  );
}