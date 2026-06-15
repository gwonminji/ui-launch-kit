import { cn } from "@/lib/cn";

export function Button({
  variant = "primary",
  children,
}: {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-md text-sm font-medium transition",

        variant === "primary" &&
          "bg-primary text-white hover:bg-primary-hover",

        variant === "outline" &&
          "border border-border bg-transparent hover:bg-surface",

        variant === "ghost" &&
          "hover:bg-surface"
      )}
    >
      {children}
    </button>
  );
}