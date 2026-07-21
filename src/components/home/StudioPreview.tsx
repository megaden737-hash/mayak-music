import Image from "next/image";
import { STUDIOS } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function StudioPreview() {
  return (
    <Section className="bg-[#eef4fb]">
      <SectionHeader
        eyebrow="Студии"
        title="Три пространства на Красном Октябре"
        description="Прозрачные цены. Онлайн-календарь. Без «позвоните нам»."
        action={
          <Button href="/studios" variant="outline">
            Все студии и бронь
          </Button>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {STUDIOS.map((s) => (
          <div
            key={s.id}
            className="overflow-hidden rounded-3xl border border-foreground/10 bg-navy-elevated"
          >
            <div className="relative h-48">
              <Image
                src={s.images[0]}
                alt={s.name}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <div className="text-xs tracking-wide text-foreground/40 uppercase">
                {s.label} · {s.size}
              </div>
              <h3 className="mt-1 font-display text-2xl font-semibold">
                {s.name}
              </h3>
              <p className="mt-2 text-sm text-foreground/50">{s.description}</p>
              <div className="mt-4 flex items-end justify-between gap-3 border-t border-foreground/10 pt-4">
                <div>
                  <div className="text-xs text-foreground/40">Запись</div>
                  <div className="font-semibold">
                    {formatPrice(s.prices.recording)}
                    <span className="text-sm font-normal text-foreground/40">
                      /час
                    </span>
                  </div>
                </div>
                <Button href={`/studios#booking`} size="sm">
                  Бронь
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
