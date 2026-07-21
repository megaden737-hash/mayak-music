"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Clock, Check } from "lucide-react";
import { SITE, STUDIOS } from "@/lib/data";
import { submitLead } from "@/lib/leads";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const HOURS = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

// Mock busy slots — replace with Cal.com / API later
const BUSY: Record<string, string[]> = {
  small: ["12:00", "13:00", "19:00"],
  medium: ["14:00", "15:00", "16:00"],
  large: ["11:00", "20:00"],
};

function addDays(base: Date, days: number) {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

function fmtDay(d: Date) {
  return d.toLocaleDateString("ru-RU", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function dateKey(d: Date) {
  return d.toISOString().slice(0, 10);
}

export function BookingCalendar({
  defaultStudio = "small",
}: {
  defaultStudio?: string;
}) {
  const [studioId, setStudioId] = useState(defaultStudio);
  const [mode, setMode] = useState<"rehearsal" | "recording">("recording");
  const [dayOffset, setDayOffset] = useState(0);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [duration, setDuration] = useState(2);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contact, setContact] = useState({ name: "", phone: "" });

  const studio = STUDIOS.find((s) => s.id === studioId) ?? STUDIOS[0];
  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(new Date(), i)),
    [],
  );
  const selectedDay = days[dayOffset];
  const busy = BUSY[studioId] ?? [];
  const pricePerHour =
    mode === "rehearsal" ? studio.prices.rehearsal : studio.prices.recording;
  const total = pricePerHour * duration;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedHour) return;
    setSubmitting(true);
    setError(null);
    const result = await submitLead({
      type: "booking",
      name: contact.name,
      phone: contact.phone,
      message: "Бронь студии",
      meta: {
        studio: studio.name,
        mode,
        date: dateKey(selectedDay),
        time: selectedHour,
        hours: duration,
        total,
      },
    });
    setSubmitting(false);
    if (!result.ok) {
      setError(result.error || "Ошибка");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-gold/25 bg-gold/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold !text-white">
          <Check size={24} />
        </div>
        <h3 className="font-display text-2xl font-semibold">Бронь отправлена</h3>
        <p className="mt-2 text-foreground/60">
          {studio.name} · {fmtDay(selectedDay)} · {selectedHour} · {duration} ч
          <br />
          Сумма: {formatPrice(total)}. Подтвердим слот в Telegram за 15–30 мин.
        </p>
        <a
          href={SITE.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-gold hover:underline"
        >
          Написать сейчас →
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-foreground/10 bg-navy-elevated p-5 md:p-8">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-gold">
          <CalendarDays size={18} />
          <span className="text-xs font-medium tracking-[0.16em] uppercase">
            Онлайн-бронирование
          </span>
        </div>
        <span className="text-xs text-foreground/35">
          Заявка → подтверждение в Telegram · Cal.com можно подключить позже
        </span>
      </div>

      {/* Studio select */}
      <div className="mb-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {STUDIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              setStudioId(s.id);
              setSelectedHour(null);
            }}
            className={cn(
              "rounded-2xl border px-4 py-3 text-left transition",
              studioId === s.id
                ? "border-gold/50 bg-gold/10"
                : "border-foreground/10 bg-navy-elevated hover:border-foreground/20",
            )}
          >
            <div className="text-sm font-semibold">{s.name}</div>
            <div className="text-xs text-foreground/45">{s.label}</div>
          </button>
        ))}
      </div>

      {/* Mode */}
      <div className="mb-5 flex gap-2">
        {(
          [
            ["recording", "Запись"],
            ["rehearsal", "Репетиция"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setMode(id)}
            className={cn(
              "rounded-xl px-4 py-2 text-sm font-medium transition",
              mode === id
                ? "bg-white text-black"
                : "bg-foreground/5 text-foreground/70 hover:bg-foreground/5",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Days */}
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
        {days.map((d, i) => (
          <button
            key={dateKey(d)}
            type="button"
            onClick={() => {
              setDayOffset(i);
              setSelectedHour(null);
            }}
            className={cn(
              "min-w-[88px] shrink-0 rounded-2xl border px-3 py-3 text-center text-sm transition",
              dayOffset === i
                ? "border-gold/50 bg-gold/10 text-foreground"
                : "border-foreground/10 text-foreground/60 hover:border-foreground/20",
            )}
          >
            {fmtDay(d)}
          </button>
        ))}
      </div>

      {/* Hours */}
      <div className="mb-5">
        <div className="mb-3 flex items-center gap-2 text-sm text-foreground/50">
          <Clock size={14} />
          Свободные слоты
        </div>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
          {HOURS.map((h) => {
            const isBusy = busy.includes(h);
            const selected = selectedHour === h;
            return (
              <button
                key={h}
                type="button"
                disabled={isBusy}
                onClick={() => setSelectedHour(h)}
                className={cn(
                  "rounded-xl border py-2.5 text-sm font-medium transition",
                  isBusy &&
                    "cursor-not-allowed border-foreground/5 bg-navy-elevated text-foreground/20 line-through",
                  !isBusy &&
                    !selected &&
                    "border-foreground/10 text-foreground/80 hover:border-gold/40",
                  selected && "border-gold bg-gold !text-white",
                )}
              >
                {h}
              </button>
            );
          })}
        </div>
      </div>

      {/* Duration */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="text-sm text-foreground/50">Длительность:</span>
        {[1, 2, 3, 4, 6].map((h) => (
          <button
            key={h}
            type="button"
            onClick={() => setDuration(h)}
            className={cn(
              "rounded-xl px-3 py-1.5 text-sm transition",
              duration === h
                ? "bg-white text-black"
                : "bg-foreground/5 text-foreground/70 hover:bg-foreground/5",
            )}
          >
            {h} ч
          </button>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-foreground/10 bg-foreground/5 px-5 py-4">
        <div>
          <div className="text-sm text-foreground/50">
            {studio.name} · {mode === "recording" ? "запись" : "репетиция"} ·{" "}
            {formatPrice(pricePerHour)}/час
          </div>
          <div className="font-display text-3xl font-semibold tracking-tight">
            {formatPrice(total)}
          </div>
        </div>
        {selectedHour && (
          <div className="text-sm text-foreground/60">
            {fmtDay(selectedDay)} · с {selectedHour}
          </div>
        )}
      </div>

      <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
        <input
          required
          placeholder="Имя"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          className="rounded-2xl border border-foreground/10 bg-navy px-4 py-3.5 text-sm outline-none focus:border-gold/50"
        />
        <input
          required
          type="tel"
          placeholder="Телефон или Telegram"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
          className="rounded-2xl border border-foreground/10 bg-navy px-4 py-3.5 text-sm outline-none focus:border-gold/50"
        />
        {error && (
          <p className="text-sm text-red-400 sm:col-span-2">
            {error}{" "}
            <a href={SITE.telegram} className="underline">
              Написать в TG
            </a>
          </p>
        )}
        <Button
          type="submit"
          size="lg"
          className="sm:col-span-2"
          disabled={!selectedHour || submitting}
        >
          {submitting
            ? "Отправляем…"
            : selectedHour
              ? `Забронировать · ${formatPrice(total)}`
              : "Выбери время"}
        </Button>
      </form>
    </div>
  );
}
