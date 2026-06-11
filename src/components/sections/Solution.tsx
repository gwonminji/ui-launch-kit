import { AlertTriangle, Sparkles } from "lucide-react";

export default function Solution() {
  return (
    <section className="bg-background text-foreground py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-xs text-muted uppercase tracking-widest">
          Problem → Solution
        </p>

        <h2 className="mt-8 text-4xl font-semibold tracking-tight">
          SaaS development is still unnecessarily fragmented.
        </h2>

        <p className="mt-10 text-lg text-muted-foreground leading-8">
          Most teams rebuild the same foundations again and again,
          wasting time on setup instead of building product value.
        </p>

        <div className="mt-12 space-y-6 text-left">

          <div className="flex gap-3 items-start">
            <AlertTriangle className="w-5 h-5 text-muted mt-1" />
            <p className="text-muted-foreground">
              Teams spend too much time setting up boilerplate.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <Sparkles className="w-5 h-5 text-primary mt-1" />
            <p className="text-muted-foreground">
              This kit removes unnecessary complexity instantly.
            </p>
          </div>

        </div>

        <div className="mt-10 text-xl font-medium">
          We remove that friction completely.
        </div>

      </div>
    </section>
  );
}