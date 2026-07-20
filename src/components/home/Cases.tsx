import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { CASES } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Cases() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Кейсы"
        title="Живые результаты"
        description="Конкретные артисты, метрики и формат работы. Ссылки на релизы добавим, как только подтвердим права на публикацию."
        action={
          <Button href="/apply" variant="outline" size="sm">
            Стать следующим кейсом
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {CASES.map((c) => (
          <article
            key={c.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-navy-elevated"
          >
            <div className="relative h-48 overflow-hidden md:h-56">
              <Image
                src={c.image}
                alt={`${c.artist} — ${c.title}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132844] to-transparent" />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] text-white/80 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-white/45">{c.artist}</div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {c.title}
                  </h3>
                </div>
                <div className="shrink-0 rounded-xl bg-gold/10 px-3 py-1.5 text-xs font-semibold text-gold">
                  {c.metric}
                </div>
              </div>
              <p className="mt-2 text-sm font-medium text-white/85">{c.result}</p>
              <p className="mt-1 text-sm leading-relaxed text-white/50">
                {c.detail}
              </p>
              {Object.keys(c.links).length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {Object.entries(c.links).map(([platform, href]) => (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-white/50 uppercase transition hover:text-gold"
                    >
                      {platform}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-xs text-white/30">
                  Стриминг-ссылка по запросу
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
