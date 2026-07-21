"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6">
        <div
          className={cn(
            "mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 md:h-16 md:px-5",
            scrolled
              ? "border-foreground/10 shadow-xl shadow-foreground/10 backdrop-blur-xl"
              : "border-foreground/10 backdrop-blur-md",
          )}
          style={{ background: "var(--header-bg)" }}
        >
          <div className="flex items-center gap-2">
            <Logo size="sm" />
            <div className="hidden text-[10px] tracking-wide text-foreground/40 uppercase sm:block">
              {SITE.city} · {SITE.since}
            </div>
          </div>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Основное меню"
          >
            {NAV.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-foreground/5 text-gold"
                      : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:flex" />
            <Link
              href="/account"
              className="hidden text-sm text-foreground/45 transition hover:text-foreground md:inline"
            >
              Войти
            </Link>
            <Button href="/apply" size="sm" className="hidden sm:inline-flex">
              Оставить заявку
            </Button>
            <Button href="/studios#booking" size="sm" className="sm:hidden">
              Бронь
            </Button>
            <button
              type="button"
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 text-foreground lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-6 pt-24 pb-10">
          <nav className="flex flex-col gap-1" aria-label="Мобильное меню">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl border border-transparent px-4 py-4 text-2xl font-medium tracking-tight transition",
                    active
                      ? "border-foreground/10 bg-foreground/5 text-gold"
                      : "text-foreground/85 hover:bg-foreground/5",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/account"
              className="rounded-2xl px-4 py-4 text-lg text-foreground/50"
            >
              Войти в кабинет
            </Link>
          </nav>
          <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between rounded-2xl border border-foreground/10 px-4 py-3">
              <span className="text-sm text-foreground/60">Тема</span>
              <ThemeToggle />
            </div>
            <Button href="/studios#booking" size="lg" className="w-full">
              Забронировать студию
            </Button>
            <Button href="/apply" variant="outline" size="lg" className="w-full">
              Оставить заявку
            </Button>
            <p className="text-center text-sm text-foreground/40">{SITE.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}
