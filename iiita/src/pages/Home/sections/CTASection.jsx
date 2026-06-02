import Button from "../../../components/ui/Button";

function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="rounded-3xl overflow-hidden p-10 md:p-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(2,6,23,1) 0%, rgba(30,64,175,1) 100%)",
          }}
        >
          <div className="max-w-3xl">
            <span className="text-blue-200 font-semibold uppercase tracking-wider">
              Get started
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Support for every student journey
            </h2>
            <p className="text-slate-200 mt-5 leading-relaxed">
              Explore mentoring, wellness, inclusion, global opportunities, internships, and holistic development through a single experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="primary">Explore programs</Button>
              <Button variant="outline">Contact support</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

