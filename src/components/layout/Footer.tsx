import Link from "next/link";
import { NAV, SITE } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const socials = [
  { label: "Telegram", href: SITE.telegram },
  { label: "Instagram", href: SITE.instagram },
  { label: "VK", href: SITE.vk },
  { label: "YouTube", href: SITE.youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size="md" />
            <p className="mt-2 text-sm text-white/45">{SITE.tagline}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Студии, создание, обучение и продвижение. Москва, Красный Октябрь ·
              с {SITE.since}.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button href="/studios#booking" size="md">
                Забронировать
              </Button>
              <Button href={SITE.telegram} variant="outline" size="md">
                Telegram
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-4 text-xs font-medium tracking-[0.18em] text-white/40 uppercase">
              Навигация
            </div>
            <ul className="space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/apply"
                  className="text-sm text-white/70 transition hover:text-gold"
                >
                  Оставить заявку
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-sm text-white/70 transition hover:text-gold"
                >
                  Кабинет
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="mb-4 text-xs font-medium tracking-[0.18em] text-white/40 uppercase">
              Контакты
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>{SITE.address}</li>
              {SITE.metro.map((m) => (
                <li key={m} className="text-white/45">
                  {m}
                </li>
              ))}
              {SITE.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="transition hover:text-gold">
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-gold"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.telegram} className="transition hover:text-gold">
                  Telegram {SITE.telegramHandle}
                </a>
              </li>
              <li>
                <a href={SITE.vk} className="transition hover:text-gold">
                  VK mayak.music
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="mb-4 text-xs font-medium tracking-[0.18em] text-white/40 uppercase">
              Соцсети
            </div>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition hover:text-gold"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Mayak Music. Все права защищены.
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-white/60">
              Политика конфиденциальности
            </Link>
            <Link href="/offer" className="hover:text-white/60">
              Оферта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
