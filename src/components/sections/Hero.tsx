import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-background text-foreground min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <p className="text-xs uppercase tracking-widest text-muted flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          SaaS Starter Kit
        </p>

        <h1 className="mt-6 text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          Build SaaS products that feel{" "}
          <span className="text-primary">production-ready</span>.
        </h1>

        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-7">
          A structured UI system designed to help you ship faster with clarity and consistency.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-primary text-background px-6 py-3 rounded-md text-sm font-medium hover:bg-primary-hover transition">
            Get the Kit
          </button>

          <button className="border border-border bg-surface px-6 py-3 rounded-md text-sm font-medium hover:bg-surface-hover transition">
            View GitHub
          </button>
        </div>

      </div>
    </section>
  );
}