function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-emerald-600 hover:bg-emerald-700 text-white",

    outline:
      "border border-white/20 text-white hover:bg-white/10",
  };

  return (
    <button
      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;