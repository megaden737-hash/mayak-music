"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { QUIZ_STEPS, SITE } from "@/lib/data";
import { submitLead } from "@/lib/leads";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Answers = Record<string, string>;

export function LeadQuiz({ compact = false }: { compact?: boolean }) {
  const [stepId, setStepId] = useState("goal");
  const [answers, setAnswers] = useState<Answers>({});
  const [history, setHistory] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", phone: "", contact: "" });
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const step = useMemo(
    () => QUIZ_STEPS.find((s) => s.id === stepId),
    [stepId],
  );

  const isContact = stepId === "contact";

  function pick(optionId: string, next: string) {
    setAnswers((prev) => ({ ...prev, [stepId]: optionId }));
    setHistory((prev) => [...prev, stepId]);
    setStepId(next);
  }

  function back() {
    const prev = history[history.length - 1];
    if (!prev) return;
    setHistory((h) => h.slice(0, -1));
    setStepId(prev);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const result = await submitLead({
      type: "quiz",
      name: form.name,
      phone: form.phone,
      contact: form.contact,
      message: "Квиз / заявка с сайта",
      meta: {
        ...answers,
        bonus: "-20%",
        source: typeof window !== "undefined" ? window.location.pathname : "",
      },
    });
    setSubmitting(false);
    if (!result.ok) {
      setError(result.error || "Ошибка отправки");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div
        className={cn(
          "rounded-3xl border border-gold/20 bg-gold/5 p-8 text-center md:p-10",
          compact && "p-6",
        )}
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-black">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-tight">
          Заявка принята
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-white/60">
          Спасибо, {form.name.split(" ")[0] || "друг"}! Мы свяжемся в ближайшие
          часы. Бонус −20% закреплён за тобой.
        </p>
        <a
          href={SITE.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex text-sm font-medium text-gold hover:underline"
        >
          Написать сейчас в Telegram →
        </a>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8",
        compact && "p-5",
      )}
    >
      <div className="mb-6 flex items-center gap-2 text-gold">
        <Sparkles size={16} />
        <span className="text-xs font-medium tracking-[0.16em] uppercase">
          Квиз · 2 минуты
        </span>
      </div>

      {!isContact && step && (
        <>
          <h3 className="font-display text-2xl leading-tight tracking-tight md:text-3xl">
            {step.question}
          </h3>
          <div className="mt-6 grid gap-3">
            {step.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => pick(opt.id, opt.next)}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left transition hover:border-gold/40 hover:bg-gold/5"
              >
                <span className="font-medium text-white/90 group-hover:text-white">
                  {opt.label}
                </span>
                <ArrowRight
                  size={18}
                  className="text-white/30 transition group-hover:text-gold"
                />
              </button>
            ))}
          </div>
        </>
      )}

      {isContact && (
        <form onSubmit={submit} className="space-y-4">
          <h3 className="font-display text-2xl leading-tight tracking-tight md:text-3xl">
            Куда прислать ответ?
          </h3>
          <p className="text-sm text-white/50">
            Бонус −20% на первую услугу. {SITE.responseSla}.
          </p>
          <input
            required
            placeholder="Имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-navy px-4 py-3.5 text-sm outline-none transition focus:border-gold/50"
          />
          <input
            required
            type="tel"
            placeholder="Телефон"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-navy px-4 py-3.5 text-sm outline-none transition focus:border-gold/50"
          />
          <input
            placeholder="Telegram или email"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-navy px-4 py-3.5 text-sm outline-none transition focus:border-gold/50"
          />
          {error && (
            <p className="text-sm text-red-400">
              {error}{" "}
              <a href={SITE.telegram} className="underline">
                Написать в TG
              </a>
            </p>
          )}
          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? "Отправляем…" : "Получить −20% и ответ"}
          </Button>
          <p className="text-center text-xs text-white/35">
            Нажимая кнопку, ты соглашаешься с{" "}
            <a href="/privacy" className="underline hover:text-white/60">
              политикой
            </a>
          </p>
        </form>
      )}

      {history.length > 0 && (
        <button
          type="button"
          onClick={back}
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-white/45 transition hover:text-white"
        >
          <ArrowLeft size={14} />
          Назад
        </button>
      )}
    </div>
  );
}
