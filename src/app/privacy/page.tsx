import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <Section className="pt-28 md:pt-32">
      <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
        Политика конфиденциальности
      </h1>
      <div className="prose prose-invert mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-white/60">
        <p>
          Настоящая политика описывает, как {SITE.name} («мы») обрабатывает
          персональные данные, которые ты передаёшь через сайт, формы заявок и
          мессенджеры.
        </p>
        <h2 className="text-lg font-semibold text-white">Какие данные собираем</h2>
        <p>
          Имя, телефон, email / Telegram, содержание заявки, технические данные
          (IP, cookie, метрики посещений — при подключении аналитики).
        </p>
        <h2 className="text-lg font-semibold text-white">Зачем</h2>
        <p>
          Обработка заявок, бронирование студий, связь по заказам, улучшение
          сервиса. Данные не продаём третьим лицам.
        </p>
        <h2 className="text-lg font-semibold text-white">Хранение и права</h2>
        <p>
          Данные хранятся столько, сколько нужно для исполнения запроса и
          требований закона. Ты можешь запросить удаление:{" "}
          <a href={`mailto:${SITE.email}`} className="text-gold">
            {SITE.email}
          </a>
          .
        </p>
        <p className="text-white/40">
          Документ-шаблон. Перед продом согласуй с юристом.
        </p>
      </div>
    </Section>
  );
}
