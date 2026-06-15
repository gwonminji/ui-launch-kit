import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <Section>
      <div className="min-h-[85vh] flex items-center justify-center text-center">

        <div className="max-w-4xl">

          <h1 className="text-6xl font-semibold tracking-tight leading-[1.05]">
            Build SaaS products that feel production-ready.
          </h1>

          <p className="mt-6 text-muted text-lg">
            A structured UI system for shipping faster with consistency.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="outline">View GitHub</Button>
          </div>

          {/* 🔥 FLOATING VISUAL ANCHOR */}
          <div className="mt-16 relative">

            {/* glow background */}
            <div className="absolute inset-0 -z-10 blur-2xl opacity-40 bg-primary/10 rounded-3xl" />

            <div className="
              rounded-2xl border bg-surface p-6 shadow-sm
              transform hover:-translate-y-1 transition
            ">

              <div className="rounded-lg border bg-white p-6 space-y-3">

                <div className="h-4 w-32 bg-surface rounded" />
                <div className="h-3 w-full bg-surface rounded" />
                <div className="h-3 w-5/6 bg-surface rounded" />

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="h-16 bg-surface rounded-md" />
                  <div className="h-16 bg-surface rounded-md" />
                  <div className="h-16 bg-surface rounded-md" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </Section>
  );
}