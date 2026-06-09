export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="mx-auto max-w-2xl text-center">

        {/* Headline */}
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Simple tools for better work.
        </h1>

        {/* Sub text */}
        <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
          Build, manage, and ship your ideas without unnecessary complexity.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <button className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}