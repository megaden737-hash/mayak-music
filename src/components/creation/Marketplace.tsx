"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Play, ShoppingBag, Tag } from "lucide-react";
import { BEATS, SITE, TRACKS } from "@/lib/data";
import { submitLead } from "@/lib/leads";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const GENRES = [
  { id: "all", label: "Все" },
  { id: "hiphop", label: "Hip-Hop" },
  { id: "trap", label: "Trap" },
  { id: "electronic", label: "Electronic" },
  { id: "pop", label: "Pop" },
  { id: "rnb", label: "R&B" },
] as const;

export function Marketplace() {
  const [genre, setGenre] = useState<string>("all");
  const [toast, setToast] = useState<string | null>(null);

  const beats = useMemo(
    () =>
      genre === "all" ? BEATS : BEATS.filter((b) => b.genre === genre),
    [genre],
  );

  async function buy(label: string, price?: number) {
    setToast("Отправляем заявку…");
    const result = await submitLead({
      type: "marketplace",
      name: "Покупатель с сайта",
      message: label,
      meta: { item: label, price: price ?? "" },
    });
    if (result.ok) {
      setToast(`${label} — заявка принята. Напишем в Telegram.`);
    } else {
      setToast(`Не отправилось. Напиши ${SITE.telegramHandle}`);
    }
    setTimeout(() => setToast(null), 4000);
  }

  return (
    <div>
      {/* Beats */}
      <div id="marketplace" className="mb-16">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-medium tracking-[0.16em] text-gold uppercase">
              Маркетплейс
            </div>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Готовые биты
            </h2>
            <p className="mt-2 text-sm text-foreground/50">
              Превью · цена · лицензия. Мгновенный заказ.
            </p>
          </div>
          <Button href="/apply" variant="outline" size="sm">
            Заказать кастомный бит
          </Button>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {GENRES.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setGenre(g.id)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition",
                genre === g.id
                  ? "border-gold/50 bg-gold/15 text-gold"
                  : "border-foreground/10 text-foreground/60 hover:border-foreground/25",
              )}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {beats.map((b) => (
            <article
              key={b.id}
              className="group overflow-hidden rounded-3xl border border-foreground/10 bg-navy-elevated transition hover:border-foreground/20"
            >
              <div className="relative aspect-square">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100"
                  aria-label="Превью"
                  onClick={() =>
                    setToast(
                      "Аудио-превью скоро. Напиши в Telegram — пришлём 30-сек demo.",
                    )
                  }
                  title="Превью скоро"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-black shadow-lg">
                    <Play size={22} className="ml-0.5 fill-current" />
                  </span>
                </button>
                {b.exclusive && (
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-gold uppercase backdrop-blur">
                    Exclusive
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold tracking-tight">{b.title}</h3>
                <div className="mt-1 flex items-center gap-2 text-xs text-foreground/40">
                  <span className="capitalize">{b.genre}</span>
                  <span>·</span>
                  <span>{b.bpm} BPM</span>
                  <span>·</span>
                  <span>{b.key}</span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="font-display text-lg font-semibold">
                    {formatPrice(b.price)}
                  </div>
                  <button
                    type="button"
                    onClick={() => buy(`Бит «${b.title}»`, b.price)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gold px-3 py-2 text-xs font-semibold text-black transition hover:bg-gold"
                  >
                    <ShoppingBag size={14} />
                    Заказать
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Tracks */}
      <div id="tracks">
        <div className="mb-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Готовые песни
          </h2>
          <p className="mt-2 text-sm text-foreground/50">
            Лицензирование и покупка прав. Для релиза или синка.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRACKS.map((t) => (
            <article
              key={t.id}
              className="overflow-hidden rounded-3xl border border-foreground/10 bg-navy-elevated"
            >
              <div className="relative h-40">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-foreground/40">{t.artist}</div>
                <h3 className="font-semibold">{t.title}</h3>
                <div className="mt-1 text-xs text-foreground/40">
                  {t.genre} · {t.duration}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold">{formatPrice(t.price)}</span>
                  <button
                    type="button"
                    onClick={() => buy(`Трек «${t.title}»`, t.price)}
                    className="inline-flex items-center gap-1 rounded-xl border border-foreground/15 px-3 py-1.5 text-xs font-medium transition hover:border-gold/50 hover:text-gold"
                  >
                    <Tag size={12} />
                    Запросить
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {toast && (
        <div className="fixed right-4 bottom-4 z-50 max-w-sm rounded-2xl border border-gold/30 bg-navy-elevated px-4 py-3 text-sm shadow-2xl">
          {toast}
        </div>
      )}
    </div>
  );
}
