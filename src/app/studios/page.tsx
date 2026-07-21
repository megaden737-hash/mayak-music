import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Users, Ruler } from "lucide-react";
import { SITE, STUDIOS, STUDIO_PACKS } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BookingCalendar } from "@/components/studios/BookingCalendar";

export const metadata: Metadata = {
  title: "Студии",
  description:
    "Три профессиональные студии Mayak на Красном Октябре. Прозрачные цены, онлайн-бронирование.",
};

export default function StudiosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/studios/hero.jpg"
            alt="Студии Mayak"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-gold uppercase">
            <MapPin size={14} />
            {SITE.address}
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Студии Mayak
          </h1>
          <p className="mt-4 max-w-xl text-lg text-foreground/60">
            Три пространства для записи, репетиций и съёмок. Бронируй онлайн —
            без звонков и «занято, перезвоните».
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#booking" size="lg">
              Забронировать
            </Button>
            <Button href="/apply" variant="outline" size="lg">
              Бесплатная экскурсия
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-foreground/50">
            {SITE.metro.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative h-56 overflow-hidden rounded-3xl md:h-72">
            <Image
              src="/images/studios/red-oct/krasny_oktyabr_1.jpeg"
              alt="Красный Октябрь"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="relative h-56 overflow-hidden rounded-3xl md:h-72">
            <Image
              src="/images/studios/red-oct/krasny_oktyabr_2.jpg"
              alt="Креативный кластер"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-foreground/40">
          Креативный кластер Красный Октябрь · в центре Москвы
        </p>
      </Section>

      {/* Studio cards */}
      <Section className="pt-8">
        <SectionHeader
          eyebrow="Пространства"
          title="Выбери студию"
          description="Цены фиксированные. Пакеты часов — со скидкой."
        />

        <div className="space-y-8">
          {STUDIOS.map((studio) => (
            <article
              key={studio.id}
              id={studio.id}
              className="overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-navy-elevated"
            >
              <div className="grid lg:grid-cols-5">
                <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-2">
                  <div>
                    <div className="text-xs tracking-[0.16em] text-gold uppercase">
                      {studio.label}
                    </div>
                    <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      {studio.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                      {studio.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-4 text-sm text-foreground/50">
                      <span className="inline-flex items-center gap-1.5">
                        <Ruler size={14} /> {studio.size}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users size={14} /> {studio.capacity}
                      </span>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {studio.features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-foreground/70"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 space-y-3 border-t border-foreground/10 pt-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/50">Репетиция</span>
                      <span className="font-semibold">
                        {formatPrice(studio.prices.rehearsal)} / час
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/50">Запись</span>
                      <span className="font-semibold">
                        {formatPrice(studio.prices.recording)} / час
                      </span>
                    </div>
                    {"note" in studio && studio.note && (
                      <p className="text-xs text-foreground/40">{studio.note}</p>
                    )}
                    <Button href="#booking" className="mt-2 w-full">
                      Забронировать {studio.name}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-px bg-foreground/5 lg:col-span-3">
                  {studio.images.map((src, i) => (
                    <div key={src + i} className="relative aspect-[4/3] bg-navy-elevated">
                      <Image
                        src={src}
                        alt={`${studio.name} фото ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width:1024px) 50vw, 30vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Packs */}
      <Section className="pt-0">
        <SectionHeader
          eyebrow="Пакеты"
          title="Бери часы пакетом — дешевле"
          description="Скидка применяется к выбранной студии и типу сессии."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {STUDIO_PACKS.map((p) => (
            <div
              key={p.hours}
              className="rounded-3xl border border-foreground/10 bg-navy-elevated p-6 text-center"
            >
              <div className="font-display text-3xl font-semibold">{p.label}</div>
              <div className="mt-2 text-gold">−{p.discount}%</div>
              <Button href="#booking" variant="outline" size="sm" className="mt-5">
                Выбрать
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Booking */}
      <Section id="booking" className="pb-24">
        <SectionHeader
          eyebrow="Бронь"
          title="Выбери дату и время"
          description="Интерактивный календарь. После заявки подтвердим слот в мессенджере. Готово к интеграции Cal.com."
        />
        <BookingCalendar />
      </Section>
    </>
  );
}
