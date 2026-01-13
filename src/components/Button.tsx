interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-[0.98]",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
