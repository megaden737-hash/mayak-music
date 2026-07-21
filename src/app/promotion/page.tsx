import type { Metadata } from "next";
import Image from "next/image";
import { PROMO_PACKAGES, SITE } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { LeadQuiz } from "@/components/forms/LeadQuiz";
import { DistributionForm } from "@/components/promotion/DistributionForm";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Продвижение",
  description:
    "Отправь трек на дистрибуцию через сайт. Плейлисты, SMM и полный релиз-пакет Mayak Promotion.",
};

export default function PromotionPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/news/news-celebration.jpg"
            alt="Продвижение"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-6">
          <div className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
            Promotion
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            Выпусти трек сам —
            <br />
            через сайт
          </h1>
          <p className="mt-4 max-w-xl text-lg text-foreground/60">
            Заполни данные, приложи файл и обложку. Дистрибуция, плейлисты и
            SMM — с прозрачными пакетами.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#upload" size="lg">
              Отправить релиз
            </Button>
            <Button href="#packages" variant="outline" size="lg">
              Смотреть пакеты
            </Button>
          </div>
        </div>
      </section>

      {/* Self-serve upload */}
      <Section id="upload" className="pt-0">
        <div className="mb-8 max-w-2xl">
          <div className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
            Отгрузка
          </div>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Форма релиза
          </h2>
          <p className="mt-3 text-foreground/55">
            Self-serve заявка. После проверки выложим на 150+ площадок. Файлы
            после отправки формы — в {SITE.telegramHandle}.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <DistributionForm />
        </div>
      </Section>

      <Section id="packages">
        <SectionHeader
          eyebrow="Пакеты"
          title="Прозрачные тарифы"
          description="Можно начать с дистрибуции и масштабировать промо."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PROMO_PACKAGES.map((p) => (
            <article
              key={p.id}
              className={cn(
                "relative flex flex-col rounded-3xl border p-6",
                p.popular
                  ? "border-gold/40 bg-gold/5"
                  : "border-foreground/10 bg-navy-elevated",
              )}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[11px] font-bold tracking-wide text-black uppercase">
                  Хит
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <div className="mt-2 font-display text-3xl font-semibold">
                {formatPrice(p.price)}
              </div>
              <p className="mt-3 text-sm text-foreground/55">{p.description}</p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-foreground/60">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-gold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={p.id === "distro" ? "#upload" : "/apply"}
                variant={p.popular ? "primary" : "outline"}
                size="sm"
                className="mt-6 w-full"
              >
                {p.id === "distro" ? "Отправить трек" : "Выбрать"}
              </Button>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-[#eef4fb]">
        <SectionHeader eyebrow="Этапы" title="Как мы ведём релиз" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Заявка", "Форма на сайте + файлы в Telegram."],
            ["02", "Проверка", "Метаданные, обложка, качество звука."],
            ["03", "Запуск", "Дистрибуция + опционально промо."],
            ["04", "Отчёт", "Стримы, плейлисты, рекомендации."],
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

      <Section id="release" className="pb-24">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <div className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
              Нужен совет
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Не уверен в пакете — пройди квиз
            </h2>
            <p className="mt-4 text-foreground/55">
              Или сразу форма{" "}
              <a href="#upload" className="text-gold hover:underline">
                отгрузки
              </a>
              . Дистрибуция от {formatPrice(PROMO_PACKAGES[0].price)}.
            </p>
            <div className="mt-8 space-y-3 text-sm text-foreground/50">
              <div className="rounded-2xl border border-foreground/10 bg-navy-elevated px-4 py-3">
                Spotify · Apple · VK · Яндекс · TikTok · 150+
              </div>
              <div className="rounded-2xl border border-foreground/10 bg-navy-elevated px-4 py-3">
                Telegram менеджера: {SITE.telegramHandle}
              </div>
            </div>
          </div>
          <LeadQuiz />
        </div>
      </Section>
    </>
  );
}
