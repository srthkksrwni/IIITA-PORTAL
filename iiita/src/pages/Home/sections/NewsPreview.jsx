import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";

const news = [
  {
    title: "Mentorship Week: Student Stories",
    tag: "Update",
    date: "May 2026",
    excerpt:
      "Highlights from student-led sessions focused on academic strategies and personal growth.",
  },
  {
    title: "Wellness Resources Expanded",
    tag: "Wellbeing",
    date: "April 2026",
    excerpt:
      "New tools and support pathways for mental wellness and inclusive student care.",
  },
  {
    title: "Mobility Guidance for Global Opportunities",
    tag: "Mobility",
    date: "March 2026",
    excerpt:
      "Workshops covering applications, preparation, and success planning for global programs.",
  },
];

function NewsPreview() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-300 font-semibold uppercase tracking-wider">
            News & Updates
          </span>
          <h2 className="text-4xl mt-3 font-bold">Stay informed</h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
            Recent announcements and previews of what’s happening across mentoring, wellness, and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {news.map((n) => (
            <Card
              key={n.title}
              className="p-7 bg-white/5 border-white/10 text-white"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <Badge variant="outline">{n.tag}</Badge>
                <span className="text-slate-300 text-sm">{n.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{n.title}</h3>
              <p className="text-slate-300 leading-relaxed">{n.excerpt}</p>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline">View all news</Button>
        </div>
      </div>
    </section>
  );
}

export default NewsPreview;

