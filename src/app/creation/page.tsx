import type { Metadata } from "next";
import Image from "next/image";
import { Gift } from "lucide-react";
import { CREATION_SERVICES } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Marketplace } from "@/components/creation/Marketplace";

export const metadata: Metadata = {
  title: "Создание",
  description:
    "Биты, песни под ключ, дизайн и съёмки. Маркетплейс готовых треков Mayak Music.",
};

export default function CreationPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/studios/creation-hero.jpg"
            alt="Создание музыки"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 to-white" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-6">
          <div className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
            Creation
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Создай релиз — или купи готовое
          </h1>
          <p className="mt-4 max-w-xl text-lg text-foreground/60">
            Услуги под ключ и маркетплейс битов/песен. Один вход — от идеи до
            файла.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#marketplace" size="lg">
              Маркетплейс
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Услуги под ключ
            </Button>
          </div>
        </div>
      </section>

      {/* Lead magnets */}
      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-3xl border border-gold/20 bg-gold/5 p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold !text-white">
              <Gift size={20} />
            </div>
            <div>
              <h3 className="font-semibold">5 бесплатных битов</h3>
              <p className="mt-1 text-sm text-foreground/55">
                Оставь заявку — пришлём пак в Telegram. Для практики и демо.
              </p>
              <Button href="/apply" size="sm" className="mt-4">
                Запросить пак
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-navy-elevated p-6">
            <h3 className="font-semibold">Прайс на продакшн</h3>
            <p className="mt-1 text-sm text-foreground/55">
              Актуальные пакеты на сайте. Нужен PDF или кастом — напиши менеджеру.
            </p>
            <Button href="/apply" variant="outline" size="sm" className="mt-4">
              Запросить прайс
            </Button>
          </div>
        </div>
      </Section>

      <Section id="services" className="pt-0">
        <SectionHeader
          eyebrow="Под ключ"
          title="4 услуги для релиза"
          description="Фиксированные пакеты. Без «от» и размытых смет."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CREATION_SERVICES.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-3xl border border-foreground/10 bg-navy-elevated p-6"
            >
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <div className="mt-2 font-display text-2xl font-semibold text-gold">
                {formatPrice(s.price)}
              </div>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-foreground/55">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/apply" size="sm" className="mt-6 w-full">
                Заказать
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <Marketplace />
      </Section>
    </>
  );
}
