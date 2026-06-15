import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Zap, Box, Rocket } from "lucide-react";

export default function Features() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <h2 className="text-4xl font-semibold">
            Everything you need to ship faster.
          </h2>
        </div>

        {/* 동일 너비 grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">

          <Card className="
            hover:-translate-y-1 transition duration-300
          ">
            <div className="w-10 h-10 rounded-md bg-surface flex items-center justify-center mb-4">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold">Production Ready</h3>
            <p className="mt-2 text-muted">
              Built with scalable architecture.
            </p>
          </Card>

          <Card className="
            hover:-translate-y-1 transition duration-300
          ">
            <div className="w-10 h-10 rounded-md bg-surface flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold">Fast Setup</h3>
            <p className="mt-2 text-muted">
              Start in minutes without config pain.
            </p>
          </Card>

          <Card className="
            hover:-translate-y-1 transition duration-300
          ">
            <div className="w-10 h-10 rounded-md bg-surface flex items-center justify-center mb-4">
              <Box className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold">Modular System</h3>
            <p className="mt-2 text-muted">
              Reusable components for every section.
            </p>
          </Card>

        </div>

      </div>
    </Section>
  );
}