import { Link } from "react-router-dom";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";

const initiatives = [
  {
    title: "Academic Mentoring",
    description:
      "Structured mentorship for academic excellence, project-based learning, and student-led growth.",
    badge: "Mentorship",
    href: "/mentorship",
  },
  {
    title: "Student Wellness & Inclusion",
    description:
      "Holistic wellbeing support with inclusive care, mental wellness resources, and community building.",
    badge: "Wellness",
    href: "/wellness",
  },
  {
    title: "Global Opportunities",
    description:
      "Support for mobility programs, international exposure, and preparation for global success.",
    badge: "Mobility",
    href: "/mobility",
  },
];

function FeaturedInitiatives() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Featured Initiatives
          </span>
          <h2 className="text-4xl mt-3 font-bold">Built for student success</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Explore high-impact programs designed to support academic excellence,
            personal growth, and lifelong opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {initiatives.map((item) => (
            <Card key={item.title} className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <Badge>{item.badge}</Badge>
              </div>

              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{item.description}</p>

              <Link
                to={item.href}
                className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-800"
              >
                Learn more
                <span className="ml-2">→</span>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedInitiatives;

