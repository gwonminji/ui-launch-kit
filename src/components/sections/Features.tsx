import { Zap, Box, Rocket } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-surface/30 text-foreground py-40 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight">
            Everything you need to ship faster.
          </h2>

          <p className="mt-6 text-muted-foreground">
            A minimal system built for real SaaS products.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">

          <div className="p-7 rounded-2xl border border-border bg-background hover:shadow-sm transition">
            <Zap className="w-5 h-5 text-primary" />
            <h3 className="mt-6 text-lg font-semibold">Fast Setup</h3>
            <p className="mt-3 text-muted-foreground">
              Start building in minutes, not hours.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-border bg-background hover:shadow-sm transition">
            <Box className="w-5 h-5 text-primary" />
            <h3 className="mt-6 text-lg font-semibold">Structured System</h3>
            <p className="mt-3 text-muted-foreground">
              Clean architecture designed for scalability.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-border bg-background hover:shadow-sm transition">
            <Rocket className="w-5 h-5 text-primary" />
            <h3 className="mt-6 text-lg font-semibold">Production Ready</h3>
            <p className="mt-3 text-muted-foreground">
              Deploy-ready from day one.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}