import type { Metadata } from "next";
import { LeadQuiz } from "@/components/forms/LeadQuiz";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Оставить заявку",
  description:
    "Квиз Mayak Music: услуга, релиз или заявка в команду. Ответ в тот же день.",
};

type Props = {
  searchParams?: Promise<{ type?: string }> | { type?: string };
};

export default async function ApplyPage({ searchParams }: Props) {
  const params = await Promise.resolve(searchParams ?? {});
  const isCareer = params.type === "career";

  return (
    <div className="pt-28 pb-20 md:pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:px-6 lg:gap-16">
        <div>
          <div className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
            {isCareer ? "Карьера · Mayak" : "Заявка"}
          </div>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {isCareer ? "Заявка на собеседование" : "Что тебе нужно?"}
          </h1>
          <p className="mt-4 max-w-md text-lg text-white/55">
            {isCareer
              ? "Расскажи о себе в квизе или оставь контакты — свяжемся и пригласим на разговор."
              : "Короткий квиз — и мы поймём, чем помочь. Бонус −20% на первую услугу + бесплатная экскурсия."}
          </p>

          <div className="mt-10 space-y-4">
            {(isCareer
              ? [
                  "Ответ в Telegram в день заявки",
                  "Собеседование онлайн или на Красном Октябре",
                  "Ищем продюсеров, звук, видео, SMM и координацию",
                ]
              : [
                  "Ответ в мессенджере в день заявки",
                  "Прозрачная смета без «от»",
                  "Можно начать со студии, курса или релиза",
                ]
            ).map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 text-sm text-white/60"
              >
                <span className="mt-0.5 text-gold">✓</span>
                {t}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/45">
            <div className="font-medium text-white/80">Или напиши сразу</div>
            <p className="mt-2">
              {SITE.phones.map((p) => p.label).join(" · ")}
              <br />
              {SITE.email}
              <br />
              Telegram: {SITE.telegramHandle}
              <br />
              VK: mayak.music
            </p>
          </div>
        </div>

        <LeadQuiz />
      </div>
    </div>
  );
}
