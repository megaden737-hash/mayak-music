import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DIRECTIONS } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Directions() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Направления"
        title="Четыре опоры агентства"
        description="Не размазанный «всё и сразу» — чёткие продукты с входом, ценой и результатом."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {DIRECTIONS.map((d, i) => (
          <Link
            key={d.slug}
            href={d.href}
            className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-navy-elevated"
          >
            <div className="absolute inset-0">
              <Image
                src={d.image}
                alt={d.title}
                fill
                className="object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
            </div>

            <div className="relative flex min-h-[280px] flex-col justify-end p-6 md:min-h-[320px] md:p-8">
              <div className="mb-auto flex items-start justify-between">
                <span className="font-mono text-xs text-foreground/35">
                  0{i + 1}
                </span>
                <span className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-gold backdrop-blur">
                  {d.price}
                </span>
              </div>

              <div className="text-xs tracking-[0.16em] text-foreground/45 uppercase">
                {d.subtitle}
              </div>
              <h3 className="mt-1 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {d.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/60 md:text-base">
                {d.description}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition group-hover:gap-2.5">
                {d.cta}
                <ArrowUpRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
