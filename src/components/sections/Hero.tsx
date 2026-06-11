export default function Hero() {
  return (
    <section className="bg-background text-foreground min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <h1 className="text-7xl font-semibold tracking-tight leading-none">
          Build SaaS products that feel <strong>production-ready</strong>.
        </h1>
        <p className="mt-10 text-lg text-muted leading-7">
          Ship faster with a structured UI system built for real-world SaaS products.
        </p>
        <div className="mt-10 flex items-center justify-center gap-10">
          <button className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-primary-hover transition">
            Get the Kit
          </button>
        </div>
        <p className="mt-24 text-xs text-muted">
          Designed for modern builders and SaaS founders.
        </p>
      </div>
    </section>
  );
}