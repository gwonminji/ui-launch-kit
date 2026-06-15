import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section variant="muted">
      <div className="max-w-3xl mx-auto text-center py-16">

        <h2 className="text-4xl font-semibold">
          Ready to build your SaaS?
        </h2>

        <div className="mt-10 flex justify-center gap-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="outline">Docs</Button>
        </div>

      </div>
    </Section>
  );
}