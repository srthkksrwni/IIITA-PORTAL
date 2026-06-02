import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";

const pillars = [
  {
    title: "Academic Excellence",
    description:
      "Mentoring, learning support, and skill-building pathways to help students thrive.",
    badge: "Teaching",
  },
  {
    title: "Personal Growth",
    description:
      "Coaching for confidence, leadership, and development opportunities beyond the classroom.",
    badge: "Development",
  },
  {
    title: "Wellbeing & Inclusion",
    description:
      "A culture of inclusive care with mental wellness resources and supportive systems.",
    badge: "Care",
  },
  {
    title: "Global & Career Readiness",
    description:
      "Internships, mobility support, and guidance to achieve long-term professional success.",
    badge: "Opportunity",
  },
];

function SupportPillars() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Support Pillars
          </span>
          <h2 className="text-4xl mt-3 font-bold">One ecosystem, many strengths</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Our pillars align to student needs across academics, wellbeing, inclusion, and future readiness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <Card key={p.title} className="p-6 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Badge variant="outline">{p.badge}</Badge>
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportPillars;

