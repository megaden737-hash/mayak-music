import type { Metadata } from "next";
import Image from "next/image";
import {
  LEARNING_DIRS,
  LEARNING_EVENTS,
  LEARNING_LIVE,
  LEARNING_ONDEMAND,
  LEARNING_SINGLE,
} from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { LeadQuiz } from "@/components/forms/LeadQuiz";

export const metadata: Metadata = {
  title: "Школа",
  description:
    "Пробный урок, записанные курсы, живые занятия онлайн/офлайн, разовые уроки, вебинары и концерты Mayak Школа.",
};

const formatBadge: Record<string, string> = {
  Онлайн: "bg-blue-400/15 text-blue-300",
  Офлайн: "bg-amber-400/15 text-amber-200",
  Гибрид: "bg-gold/15 text-gold",
};

export default function LearningPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/studios/school-hero.jpg"
            alt="Школа Mayak"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 to-background" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="max-w-2xl">
            <div className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
              Школа
            </div>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Учись так, как тебе удобно
            </h1>
            <p className="mt-4 text-lg text-foreground/60">
              Пробный урок · записанные курсы · живые программы с преподом ·
              разовые уроки · вебинары и концерты.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#trial" size="lg">
                Пробный урок бесплатно
              </Button>
              <Button href="#formats" variant="outline" size="lg">
                Все форматы
              </Button>
            </div>
          </div>
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-3xl border border-foreground/10 md:h-52 md:w-52">
            <Image
              src="/images/mascot.jpg"
              alt="Маскот Mayak Школа"
              fill
              className="object-cover"
              sizes="208px"
            />
          </div>
        </div>
      </section>

      {/* Format map */}
      <Section id="formats" className="pt-0">
        <SectionHeader
          eyebrow="Форматы"
          title="Выбери свой путь"
          description="Не всё «курс на 3 месяца». Ниже — разные продукты."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["#trial", "Пробный", "Бесплатно, 45 мин"],
            ["#ondemand", "Записанные", "В своём темпе"],
            ["#live", "С преподом", "Онлайн / офлайн"],
            ["#single", "1 урок", "Без абонемента"],
            ["#events", "Ивенты", "Вебинары · концерты"],
          ].map(([href, t, d]) => (
            <a
              key={href}
              href={href}
              className="rounded-2xl border border-foreground/10 bg-navy-elevated px-4 py-5 transition hover:border-gold/40 hover:bg-gold/5"
            >
              <div className="font-semibold">{t}</div>
              <div className="mt-1 text-xs text-foreground/45">{d}</div>
            </a>
          ))}
        </div>
      </Section>

      {/* A) Trial — primary entry */}
      <Section id="trial" className="bg-gold/[0.04]">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full bg-gold px-3 py-1 text-xs font-bold tracking-wide !text-white uppercase">
              Главный вход
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Пробное занятие — бесплатно
            </h2>
            <p className="mt-4 text-foreground/55">
              45 минут онлайн или в студии. Поймёшь формат, уровень и подойдёт
              ли преподаватель. Без давления купить курс.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/50">
              <li className="flex gap-2">
                <span className="text-gold">✓</span> Любое направление
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span> Ответ в день заявки
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span> −20% если зайдёшь на
                программу
              </li>
            </ul>
          </div>
          <LeadQuiz />
        </div>
      </Section>

      {/* Directions chips */}
      <Section className="pt-8">
        <SectionHeader
          eyebrow="Направления"
          title="Чему учим"
          description="Один предмет — в любом формате: запись, live-курс или разовый урок."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {LEARNING_DIRS.map((d) => (
            <div
              key={d}
              className="rounded-2xl border border-foreground/10 bg-navy-elevated px-4 py-5 text-center text-sm font-medium"
            >
              {d}
            </div>
          ))}
        </div>
      </Section>

      {/* B) On-demand */}
      <Section id="ondemand" className="pt-0">
        <SectionHeader
          eyebrow="On-demand"
          title="Записанные курсы"
          description="Готовые видеопрограммы. Смотришь когда удобно, доступ на 12 месяцев."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEARNING_ONDEMAND.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-3xl border border-foreground/10 bg-navy-elevated p-6"
            >
              <span className="w-fit rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] text-foreground/50">
                Запись · {c.lessons} уроков
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold">
                {c.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-foreground/50">{c.description}</p>
              <div className="mt-4 text-xs text-foreground/35">{c.duration}</div>
              <div className="mt-1 font-display text-2xl font-semibold text-gold">
                {formatPrice(c.price)}
              </div>
              <Button href="/apply" size="sm" className="mt-5 w-full">
                Купить доступ
              </Button>
            </article>
          ))}
        </div>
      </Section>

      {/* C) Live with teacher */}
      <Section id="live" className="bg-[#eef4fb]">
        <SectionHeader
          eyebrow="С преподавателем"
          title="Живые курсы · онлайн и офлайн"
          description="Программы с расписанием, обратной связью и практикой в студии."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {LEARNING_LIVE.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-3xl border border-foreground/10 bg-navy-elevated p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${formatBadge[c.format] ?? "bg-foreground/5 text-foreground/60"}`}
                    >
                      {c.format}
                    </span>
                    <span className="rounded-full bg-foreground/5 px-2.5 py-1 text-[11px] text-foreground/45">
                      {c.duration}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold">
                    {c.title}
                  </h3>
                </div>
                <div className="font-display text-2xl font-semibold text-gold">
                  {formatPrice(c.price)}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                {c.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/55">
                {c.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button href="#trial" size="sm">
                  Записаться
                </Button>
                <Button href="#trial" variant="outline" size="sm">
                  Сначала пробный
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* D) Single lessons */}
      <Section id="single">
        <SectionHeader
          eyebrow="Без абонемента"
          title="Разовые уроки"
          description="Одно занятие с преподом. Удобно попробовать или закрыть конкретный запрос."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LEARNING_SINGLE.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-3xl border border-foreground/10 bg-navy-elevated p-6"
            >
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <div className="mt-1 text-xs text-foreground/40">
                {c.duration} · {c.format}
              </div>
              <p className="mt-3 flex-1 text-sm text-foreground/50">{c.description}</p>
              <div className="mt-4 font-display text-2xl font-semibold">
                {formatPrice(c.price)}
              </div>
              <Button href="/apply" size="sm" className="mt-4 w-full">
                Записаться на 1 урок
              </Button>
            </article>
          ))}
        </div>
      </Section>

      {/* E) Events */}
      <Section id="events" className="bg-[#eef4fb] pb-8">
        <SectionHeader
          eyebrow="Афиша"
          title="Вебинары · семинары · концерты"
          description="Открытые события школы и агентства."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {LEARNING_EVENTS.map((e) => (
            <article
              key={e.title}
              className="flex flex-col justify-between gap-4 rounded-3xl border border-foreground/10 bg-navy-elevated p-6 sm:flex-row sm:items-center"
            >
              <div>
                <div className="text-xs text-gold/90">
                  {e.date} · {e.format}
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/50">{e.description}</p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                <div className="font-semibold text-gold">{e.priceLabel}</div>
                <Button href="/apply" size="sm">
                  Записаться
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-24 pt-0">
        <SectionHeader
          eyebrow="Этапы"
          title="Как обычно заходят в Школу"
        />
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            ["01", "Пробный", "45 минут — знакомство и уровень."],
            ["02", "Формат", "Запись, live-курс, 1 урок или ивент."],
            ["03", "Практика", "Занятия + студия при live-программах."],
            ["04", "Результат", "Навык, портфолио или релиз."],
          ].map(([n, t, d]) => (
            <div
              key={n}
              className="rounded-3xl border border-foreground/10 bg-navy-elevated p-5"
            >
              <div className="font-mono text-sm text-gold">{n}</div>
              <div className="mt-3 font-semibold">{t}</div>
              <p className="mt-1 text-sm text-foreground/50">{d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
