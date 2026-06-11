export default function CTA() {
  return (
    <section className="bg-foreground text-background py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-semibold tracking-tight">
          Start building better SaaS products today.
        </h2>

        <p className="mt-6 text-background/70 text-lg leading-7">
          Stop rebuilding foundations. Focus on what actually matters.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-background text-foreground px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">
            Get Started
          </button>

          <button className="border border-background/20 px-6 py-3 rounded-md text-sm font-medium hover:bg-background/10 transition">
            View Docs
          </button>
        </div>

      </div>
    </section>
  );
}