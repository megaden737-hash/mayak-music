"use client";

import { useEffect, useState } from "react";
import { LeadQuiz } from "@/components/forms/LeadQuiz";
import { Section } from "@/components/ui/Section";

/** Акция до конца текущего месяца — честный дедлайн, не «вечный таймер» */
function useMonthEndCountdown() {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
      setLeft(Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000)));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const d = String(Math.floor(left / 86400)).padStart(2, "0");
  const h = String(Math.floor((left % 86400) / 3600)).padStart(2, "0");
  const m = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return { d, h, m, s };
}

export function CtaBonus() {
  const { d, h, m, s } = useMonthEndCountdown();

  return (
    <Section id="bonus" className="pb-24">
      <div className="grid items-start gap-8 overflow-hidden rounded-[2rem] border border-foreground/10 bg-gradient-to-br from-[#0f172a] via-[#132844] to-[#0a1a0a] p-6 md:grid-cols-2 md:p-10 lg:p-12">
        <div>
          <div className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
            Акция месяца
          </div>
          <h2 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
            −20% на первую услугу
          </h2>
          <p className="mt-4 max-w-md text-foreground/60">
            До конца месяца: скидка на первый заказ. Плюс бесплатная экскурсия
            по студиям и пробный урок в Школе.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              [d, "дн"],
              [h, "час"],
              [m, "мин"],
              [s, "сек"],
            ].map(([val, label]) => (
              <div
                key={label}
                className="min-w-[64px] rounded-2xl border border-foreground/10 bg-foreground/5 px-3 py-3 text-center"
              >
                <div className="font-display text-2xl font-semibold tabular-nums">
                  {val}
                </div>
                <div className="text-[10px] tracking-wide text-foreground/40 uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-2 text-sm text-foreground/55">
            <li className="flex gap-2">
              <span className="text-gold">✓</span> Ответ в Telegram в день заявки
            </li>
            <li className="flex gap-2">
              <span className="text-gold">✓</span> Бесплатная экскурсия
            </li>
            <li className="flex gap-2">
              <span className="text-gold">✓</span> Пробный урок в Школе
            </li>
          </ul>
        </div>

        <LeadQuiz compact />
      </div>
    </Section>
  );
}
