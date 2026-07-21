"use client";

import { useState } from "react";
import Image from "next/image";
import {
  User,
  Music2,
  Package,
  ShoppingCart,
  Zap,
  LogOut,
} from "lucide-react";
import {
  ACCOUNT_ORDERS,
  ACCOUNT_TRACKS,
  CART_ITEMS,
  SITE,
} from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "profile", label: "Профиль", icon: User },
  { id: "tracks", label: "Мои треки", icon: Music2 },
  { id: "orders", label: "Заказы", icon: Package },
  { id: "cart", label: "Корзина", icon: ShoppingCart },
  { id: "quick", label: "Быстрый заказ", icon: Zap },
] as const;

const statusMap = {
  done: { label: "Готово", className: "bg-gold/15 text-gold" },
  in_progress: {
    label: "В работе",
    className: "bg-blue-400/15 text-blue-300",
  },
  review: { label: "На ревью", className: "bg-amber-400/15 text-amber-300" },
};

export default function AccountPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("profile");
  const cartTotal = CART_ITEMS.reduce((s, i) => s + i.price, 0);

  return (
    <div className="pt-28 pb-20 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-6">
        <div className="account-demo-banner mb-6 rounded-2xl px-4 py-3 text-sm leading-relaxed">
          <strong className="font-semibold">Демо-режим.</strong> Авторизация и
          реальные заказы подключаются. Чтобы работать с нами сейчас —{" "}
          <a href="/apply">оставь заявку</a> или напиши в Telegram.
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-medium tracking-[0.18em] text-gold uppercase">
              Кабинет артиста
            </div>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Привет, Артист
            </h1>
            <p className="mt-2 text-foreground/50">
              Так будет выглядеть твой личный кабинет: треки, заказы, корзина.
            </p>
          </div>
          <Button href="/apply" variant="outline" size="sm">
            <LogOut size={14} />
            Назад к заявке
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="rounded-3xl border border-foreground/10 bg-navy-elevated p-3">
              <nav className="flex gap-1 overflow-x-auto lg:flex-col">
                {TABS.map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTab(t.id)}
                      className={cn(
                        "flex shrink-0 items-center gap-2.5 rounded-2xl px-4 py-3 text-sm font-medium transition",
                        tab === t.id
                          ? "bg-gold !text-white"
                          : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground",
                      )}
                    >
                      <Icon size={16} />
                      {t.label}
                      {t.id === "cart" && (
                        <span
                          className={cn(
                            "ml-auto rounded-full px-1.5 text-[10px] font-bold",
                            tab === t.id
                              ? "bg-foreground/10"
                              : "bg-foreground/5 text-foreground/70",
                          )}
                        >
                          {CART_ITEMS.length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9">
            <div className="min-h-[420px] rounded-3xl border border-foreground/10 bg-navy-elevated p-6 md:p-8">
              {tab === "profile" && (
                <div className="space-y-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
                      <Image
                        src="/images/artists/artist-portrait.jpg"
                        alt="Аватар"
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold">
                        Demo Artist
                      </h2>
                      <p className="text-sm text-foreground/45">
                        artist@mayak.music · Москва
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-foreground/5 px-3 py-1 text-xs text-foreground/60">
                          Hip-Hop / Pop
                        </span>
                        <span className="rounded-full bg-gold/10 px-3 py-1 text-xs text-gold">
                          Активный клиент
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {[
                      ["Заказов", "12"],
                      ["Треков в работе", String(ACCOUNT_TRACKS.length)],
                      ["Скидка", "−20%"],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="rounded-2xl border border-foreground/10 bg-navy-elevated p-4"
                      >
                        <div className="text-xs text-foreground/40">{k}</div>
                        <div className="mt-1 font-display text-2xl font-semibold">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-foreground/10 bg-navy-elevated p-5 text-sm text-foreground/55">
                    <div className="font-medium text-foreground">Контакты агентства</div>
                    <p className="mt-2">
                      {SITE.phone} · {SITE.email}
                      <br />
                      {SITE.address}
                    </p>
                  </div>
                </div>
              )}

              {tab === "tracks" && (
                <div>
                  <h2 className="font-display text-2xl font-semibold">
                    Мои треки
                  </h2>
                  <p className="mt-1 text-sm text-foreground/45">
                    Статусы продакшна в реальном времени (демо).
                  </p>
                  <div className="mt-6 space-y-4">
                    {ACCOUNT_TRACKS.map((t) => (
                      <div
                        key={t.title}
                        className="rounded-2xl border border-foreground/10 bg-navy-elevated p-5"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="font-semibold">{t.title}</div>
                            <div className="text-sm text-foreground/45">{t.status}</div>
                          </div>
                          <div className="text-sm font-medium text-gold">
                            {t.progress}%
                          </div>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-foreground/5">
                          <div
                            className="h-full rounded-full bg-gold transition-all"
                            style={{ width: `${t.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tab === "orders" && (
                <div>
                  <h2 className="font-display text-2xl font-semibold">Заказы</h2>
                  <div className="mt-6 space-y-3">
                    {ACCOUNT_ORDERS.map((o) => {
                      const st = statusMap[o.status];
                      return (
                        <div
                          key={o.id}
                          className="flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-navy-elevated p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <div className="text-xs text-foreground/35">{o.id}</div>
                            <div className="font-medium">{o.title}</div>
                            <div className="text-sm text-foreground/40">{o.date}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span
                              className={cn(
                                "rounded-full px-2.5 py-1 text-xs font-medium",
                                st.className,
                              )}
                            >
                              {st.label}
                            </span>
                            <span className="font-semibold">
                              {formatPrice(o.price)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {tab === "cart" && (
                <div>
                  <h2 className="font-display text-2xl font-semibold">Корзина</h2>
                  <div className="mt-6 space-y-3">
                    {CART_ITEMS.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between border-b border-foreground/10 py-3 text-sm"
                      >
                        <span>{item.name}</span>
                        <span className="font-semibold">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-foreground/50">Итого</span>
                    <span className="font-display text-2xl font-semibold">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  <Button href="/apply" size="lg" className="mt-6 w-full">
                    Оформить заказ
                  </Button>
                </div>
              )}

              {tab === "quick" && (
                <div>
                  <h2 className="font-display text-2xl font-semibold">
                    Быстрый заказ
                  </h2>
                  <p className="mt-1 text-sm text-foreground/45">
                    Один клик — заявка менеджеру.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      ["Забронировать студию", "/studios#booking"],
                      ["Заказать бит", "/creation"],
                      ["Пробный урок", "/learning#trial"],
                      ["Запустить релиз", "/promotion"],
                    ].map(([label, href]) => (
                      <Button
                        key={label}
                        href={href}
                        variant="outline"
                        className="h-auto justify-start py-4"
                      >
                        {label}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
