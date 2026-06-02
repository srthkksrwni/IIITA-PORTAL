export default function SectionHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="text-center mb-16">
      <span className="text-blue-600 font-semibold uppercase tracking-wider">
        {eyebrow}
      </span>

      <h2 className="text-4xl mt-3 font-bold">
        {title}
      </h2>

      {description && (
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

