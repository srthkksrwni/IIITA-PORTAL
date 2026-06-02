import { useState } from "react";

function FAQ({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <div
            key={item.question ?? idx}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : idx)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
            >
              <span className="font-semibold text-slate-900">
                {item.question}
              </span>
              <span className="text-slate-500">{open ? "−" : "+"}</span>
            </button>

            {open && (
              <div className="px-5 pb-4 text-slate-700 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;

