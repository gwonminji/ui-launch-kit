import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
        variant === "primary"
          ? "bg-(--color-accent) text-white hover:bg-(--color-accent-strong)"
          : "border border-black/10 bg-transparent text-foreground hover:bg-black/5",
        className,
      )}
    >
      {children}
    </Link>
  );
}
