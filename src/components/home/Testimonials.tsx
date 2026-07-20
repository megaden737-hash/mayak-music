import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section className="pt-0">
      <SectionHeader
        eyebrow="Доверие"
        title="Говорят артисты"
        description="Короткие отзывы + результат работы."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="mb-4 inline-flex w-fit rounded-full bg-gold/10 px-2.5 py-1 text-[11px] font-medium text-gold">
              {t.result}
            </div>
            <blockquote className="flex-1 text-[15px] leading-relaxed text-white/75">
              «{t.text}»
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              <div className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-white/40">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
