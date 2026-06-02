function Badge({ children, variant = "primary" }) {
  const styles = {
    primary: "bg-blue-600/10 text-blue-700 border-blue-600/20",
    success: "bg-emerald-600/10 text-emerald-700 border-emerald-600/20",
    warning: "bg-amber-600/10 text-amber-700 border-amber-600/20",
    outline: "bg-transparent border-slate-200 text-slate-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles[variant] || styles.primary}`}
    >
      {children}
    </span>
  );
}

export default Badge;

