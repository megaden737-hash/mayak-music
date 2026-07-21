import { MapPin, Navigation } from "lucide-react";
import { SITE } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Location() {
  return (
    <Section id="location">
      <SectionHeader
        eyebrow="Локация"
        title="Как нас найти"
        description="Креативный кластер Красный Октябрь — в центре Москвы."
      />
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="rounded-3xl border border-foreground/10 bg-navy-elevated p-6 lg:col-span-2">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <MapPin size={18} />
            </div>
            <div>
              <div className="font-semibold">{SITE.address}</div>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/50">
                {SITE.metro.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm text-foreground/55">
            {SITE.phones.map((p) => (
              <p key={p.href}>
                <a href={p.href} className="hover:text-gold">
                  {p.label}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </p>
            <p>
              <a href={SITE.telegram} className="hover:text-gold">
                Telegram {SITE.telegramHandle}
              </a>
            </p>
            <p>
              <a href={SITE.vk} className="hover:text-gold">
                VK mayak.music
              </a>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button href={SITE.mapUrl} variant="primary" size="sm">
              <Navigation size={14} />
              Открыть карту
            </Button>
            <Button href="/studios#booking" variant="outline" size="sm">
              Забронировать
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-foreground/10 lg:col-span-3">
          <iframe
            title="Mayak Music на карте — Красный Октябрь"
            src={SITE.mapEmbed}
            className="h-[280px] w-full bg-navy-elevated md:h-full md:min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
