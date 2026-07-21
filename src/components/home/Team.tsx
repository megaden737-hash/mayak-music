import Image from "next/image";
import { Handshake, Sparkles } from "lucide-react";
import { TEAM, PARTNERS, SITE } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Team() {
  return (
    <Section id="team" className="bg-navy-elevated">
      <SectionHeader
        eyebrow="Команда"
        title="Люди Mayak"
        description="Команда, партнёры и open roles — реальные лица агентства."
        action={
          <Button href={SITE.telegram} variant="outline" size="sm">
            Написать менеджеру
          </Button>
        }
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {TEAM.map((m) => (
          <article
            key={m.photo}
            className="group overflow-hidden rounded-2xl border border-foreground/10 bg-navy-elevated transition hover:border-gold/30"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={m.photo}
                alt={`${m.name} — ${m.role}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <h3 className="font-display text-base font-semibold tracking-tight md:text-lg">
                  {m.name}
                </h3>
                <div className="mt-0.5 text-[11px] leading-snug text-gold md:text-xs">
                  {m.role}
                </div>
                <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-foreground/50 md:text-xs">
                  {m.focus}
                </p>
              </div>
            </div>
          </article>
        ))}

        {/* Partners card */}
        <article className="flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-navy-elevated">
          <div className="relative flex min-h-0 flex-1 flex-col justify-between aspect-[3/4] bg-gradient-to-b from-sea-soft via-navy-elevated to-white p-4 md:p-5">
            <div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-gold">
                <Handshake size={20} />
              </div>
              <div className="text-xs font-medium tracking-[0.16em] text-gold uppercase">
                Партнёры
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
                Вместе сильнее
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-foreground/45 md:text-xs">
                Медиа и креативные партнёры Mayak
              </p>
            </div>
            <ul className="mt-4 space-y-2">
              {PARTNERS.map((p) => (
                <li
                  key={p}
                  className="rounded-xl border border-foreground/10 bg-navy-elevated px-3 py-2 text-xs font-medium text-foreground/80 md:text-sm"
                >
                  {p}
                </li>
              ))}
              <li className="px-1 text-[11px] text-foreground/40">и другие</li>
            </ul>
          </div>
        </article>

        {/* Join us card */}
        <article className="flex flex-col overflow-hidden rounded-2xl border border-gold/35 bg-navy-elevated shadow-[0_0_40px_-12px_rgba(10,79,255,0.2)]">
          <div className="relative flex aspect-[3/4] flex-col justify-between bg-gradient-to-b from-gold/10 via-navy-elevated to-white p-4 md:p-5">
            <div>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold">
                <Sparkles size={20} />
              </div>
              <div className="text-xs font-medium tracking-[0.16em] text-gold uppercase">
                Open role
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
                Место для тебя
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                Хочешь в команду Mayak? Расскажи, кто ты и чем полезен —
                пригласим на собеседование.
              </p>
            </div>
            <Button
              href="/apply?type=career"
              size="md"
              className="w-full text-sm"
            >
              Заполнить заявку на собеседование
            </Button>
          </div>
        </article>
      </div>
    </Section>
  );
}
