export function Section({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "muted";
}) {
  return (
    <section
      className={`
        py-36 px-6
        ${variant === "muted" ? "bg-surface" : "bg-white"}
      `}
    >
      {children}
    </section>
  );
}