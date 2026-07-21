import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Публичная оферта",
  robots: { index: false },
};

export default function OfferPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
        Публичная оферта
      </h1>
      <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-foreground/60">
        <p>
          Настоящий документ является предложением {SITE.name} заключить договор
          на оказание услуг (аренда студии, продакшн, обучение, продвижение) на
          условиях, опубликованных на сайте.
        </p>
        <p>
          Акцепт оферты — отправка заявки, бронирование слота или оплата счёта.
          Конкретный объём услуг, сроки и стоимость фиксируются в подтверждении
          (сообщение, договор, счёт).
        </p>
        <p>
          Контакты: {SITE.email}, {SITE.phone}, {SITE.address}.
        </p>
        <p className="text-foreground/40">
          Шаблон. Перед коммерческим использованием замени на юридически
          выверенную оферту.
        </p>
      </div>
    </Section>
  );
}
