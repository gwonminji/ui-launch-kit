import { Section } from "@/components/ui/Section";

export default function Solution() {
  return (
    <Section variant="muted">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-xs uppercase tracking-widest text-muted">
          Problem → Solution
        </p>

        <h2 className="mt-8 text-4xl font-semibold">
          SaaS development is still fragmented.
        </h2>

        <p className="mt-10 text-lg text-muted leading-8">
          Developers waste time rebuilding the same foundations instead of focusing on product value.
        </p>

        <div className="mt-10 text-xl font-medium">
          This kit removes that friction completely.
        </div>

      </div>
    </Section>
  );
}