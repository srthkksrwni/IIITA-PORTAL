// src/pages/Home/sections/WelcomeSection.jsx

import { picMessage } from "../../../data/picMessage";

function WelcomeSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Profile Card */}

          <div className="
                sticky top-28
                bg-white
                rounded-3xl
                border
                shadow-lg
                p-8
                ">

            <div className="w-24 h-24 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
              SA
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              {picMessage.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {picMessage.designation}
            </p>

          </div>

          {/* Message */}

          <div className="lg:col-span-2">

            <span className="text-blue-600 font-semibold uppercase tracking-wide">
              Message from the Professor-in-Charge
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-8">
              {picMessage.title}
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">

              {picMessage.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </div>

            <div className="mt-10 border-l-4 border-blue-600 pl-4">

              <h4 className="font-bold">
                Prof. Sonali Agarwal
              </h4>

              <p className="text-gray-500">
                Professor-in-Charge · Students' Holistic Growth,
                Inclusive Care & Mental Wellness
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WelcomeSection;