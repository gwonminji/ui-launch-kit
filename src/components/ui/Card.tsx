import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "p-7 rounded-2xl border border-border bg-white shadow-sm transition",
        className
      )}
    >
      {children}
    </div>
  );
}