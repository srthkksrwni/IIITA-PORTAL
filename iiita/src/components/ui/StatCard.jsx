// src/components/ui/StatCard.jsx

function StatCard({ value, label }) {
  return (
    <div className="
        bg-white
        rounded-3xl
        p-6
        border
        border-slate-200
        shadow-lg
        shadow-slate-100
        hover:-translate-y-1
        transition-all
        duration-300
        ">
      <h3 className="text-3xl font-bold text-blue-700">
        {value}
      </h3>

      <p className="text-gray-600 mt-2">
        {label}
      </p>
    </div>
  );
}

export default StatCard;