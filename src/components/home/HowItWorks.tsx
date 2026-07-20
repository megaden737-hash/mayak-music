import { HOW_IT_WORKS } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";

export function HowItWorks() {
  return (
    <Section className="bg-white/[0.015]">
      <SectionHeader
        eyebrow="Процесс"
        title="Как это работает"
        description="Четыре шага от первой заявки до результата — без сюрпризов."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HOW_IT_WORKS.map((item) => (
          <div
            key={item.step}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="font-mono text-sm text-gold">{item.step}</div>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
