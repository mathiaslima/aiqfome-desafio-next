export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
