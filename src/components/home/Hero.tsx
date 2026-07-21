"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { HERO_SLIDES } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const AUTO_MS = 7000;
const SWIPE_THRESHOLD = 50;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const count = HERO_SLIDES.length;

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % count) + count) % count;
      setActive(next);
      setProgress(0);
      setDragOffset(0);
    },
    [count],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Auto-advance like Instagram stories
  useEffect(() => {
    if (reduceMotion || paused || dragging) return;
    const started = Date.now();
    const tick = () => {
      const elapsed = Date.now() - started;
      const p = Math.min(1, elapsed / AUTO_MS);
      setProgress(p);
      if (p >= 1) next();
    };
    const id = window.setInterval(tick, 50);
    return () => window.clearInterval(id);
  }, [active, paused, dragging, reduceMotion, next]);

  function onKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  }

  function onPointerDown(e: ReactPointerEvent) {
    // Don't start drag from links/buttons
    if ((e.target as HTMLElement).closest("a, button")) return;
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: ReactPointerEvent) {
    if (dragStartX.current === null) return;
    dragDelta.current = e.clientX - dragStartX.current;
    setDragOffset(dragDelta.current);
  }

  function onPointerUp() {
    if (dragStartX.current === null) return;
    const d = dragDelta.current;
    dragStartX.current = null;
    setDragging(false);
    setDragOffset(0);
    if (d < -SWIPE_THRESHOLD) next();
    else if (d > SWIPE_THRESHOLD) prev();
  }

  const trackStyle = {
    transform: `translateX(calc(${-active * 100}% + ${dragging ? dragOffset : 0}px))`,
    transition: dragging || reduceMotion ? "none" : "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <section
      className="relative h-[100svh] overflow-hidden pt-20"
      aria-roledescription="carousel"
      aria-label="Главные предложения Mayak"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Horizontal track — swipe left/right like Instagram */}
      <div
        className="absolute inset-0 flex h-full cursor-grab touch-pan-y active:cursor-grabbing"
        style={trackStyle}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className="relative h-full w-full min-w-full shrink-0"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} из ${count}: ${slide.title}`}
            aria-hidden={active !== i}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt=""
                fill
                priority={i === 0}
                className="object-cover object-center select-none"
                sizes="100vw"
                draggable={false}
              />
              <div className="hero-overlay absolute inset-0" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,79,255,0.08),transparent_50%)]" />
            </div>

            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-5 pb-24 md:px-6 md:pb-20">
                <div className="max-w-4xl">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-foreground/70 uppercase backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {slide.eyebrow}
                  </div>

                  <h1 className="font-display text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[0.98] font-bold tracking-[-0.03em] text-foreground">
                    {slide.title}
                    {slide.titleLine2 && (
                      <span className="block text-foreground">{slide.titleLine2}</span>
                    )}
                  </h1>

                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/65 md:text-xl">
                    {slide.description}
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button
                      href={slide.primary.href}
                      size="lg"
                      className="h-13 px-8"
                    >
                      {slide.id === "studios" ? (
                        <CalendarDays size={18} />
                      ) : (
                        <ArrowRight size={18} />
                      )}
                      {slide.primary.label}
                    </Button>
                    <Button
                      href={slide.secondary.href}
                      variant="outline"
                      size="lg"
                    >
                      {slide.secondary.label}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop arrows */}
      <div className="pointer-events-none absolute inset-y-0 right-0 left-0 z-20 hidden items-center justify-between px-3 md:flex md:px-5">
        <button
          type="button"
          onClick={prev}
          aria-label="Предыдущий слайд"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-background/90 text-foreground shadow-sm backdrop-blur transition hover:border-gold/40 hover:bg-background"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Следующий слайд"
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-background/90 text-foreground shadow-sm backdrop-blur transition hover:border-gold/40 hover:bg-background"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Instagram-style progress segments */}
      <div className="absolute right-5 bottom-6 left-5 z-30 md:right-8 md:bottom-8 md:left-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3">
          <div className="flex gap-1.5" role="tablist" aria-label="Слайды">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Слайд ${i + 1}: ${s.title}`}
                onClick={() => goTo(i)}
                className="h-1 flex-1 overflow-hidden rounded-full bg-foreground/15"
              >
                <span
                  className={cn(
                    "block h-full rounded-full bg-gold",
                    i < active && "w-full",
                    i > active && "w-0",
                    i === active && !reduceMotion && "transition-[width] duration-75 ease-linear",
                  )}
                  style={{
                    width:
                      i === active
                        ? reduceMotion
                          ? "100%"
                          : `${progress * 100}%`
                        : undefined,
                  }}
                />
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between text-[11px] tracking-wide text-foreground/40 uppercase">
            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </span>
            <span className="hidden sm:inline">Свайп влево · дальше</span>
          </div>
        </div>
      </div>
    </section>
  );
}
