// src/pages/Home/sections/StatsBand.jsx

import StatCard from "../../../components/ui/StatCard";
import { stats } from "../../../data/stats";

function StatsBand() {
  return (
    <section className="-mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default StatsBand;