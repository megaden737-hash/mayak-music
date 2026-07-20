# Mayak Music — сайт агентства

Профессиональный сайт музыкального агентства **Mayak Music** на Next.js 15.

**Live:** https://mayak-music.vercel.app  
**Стек:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion

## Страницы

| URL | Описание |
|-----|----------|
| `/` | Главная: hero, направления, процесс, кейсы, CTA |
| `/studios` | 3 студии + онлайн-календарь бронирования |
| `/creation` | Услуги под ключ + маркетплейс битов/песен |
| `/learning` | Курсы с ценами + пробный урок |
| `/promotion` | Пакеты продвижения с фиксированными ценами |
| `/account` | Кабинет артиста (демо) |
| `/apply` | Квиз «Что тебе нужно?» + заявка −20% |

## Локальный запуск

```bash
# Node 18+
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm start
```

## Деплой на Vercel

1. Подключи репозиторий `megaden737-hash/mayak-music` к Vercel  
2. Framework Preset: **Next.js**  
3. Root directory: `.`  
4. Deploy  

Кастомный домен: Project → Settings → Domains.

## Структура

```
src/
  app/                 # App Router pages
  components/
    layout/            # Header, Footer
    home/              # Секции главной
    studios/           # BookingCalendar
    creation/          # Marketplace
    forms/             # LeadQuiz
    ui/                # Button, Section
  lib/                 # data, utils
public/images/         # Оптимизированные ассеты
_legacy/               # Старый статический HTML
```

## Заявки → Telegram

1. Создай бота у [@BotFather](https://t.me/BotFather), скопируй token  
2. Узнай `chat_id` (например через @userinfobot)  
3. Создай `.env.local`:

```bash
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
NEXT_PUBLIC_SITE_URL=https://mayak-music.vercel.app
# NEXT_PUBLIC_YANDEX_METRIKA_ID=12345678
```

4. Перезапусти `npm run dev` / redeploy на Vercel  

Без env заявки всё равно принимаются (логируются на сервере) и UX не ломается.

## Контакты

Все контакты — в `src/lib/data.ts` (`SITE.phone`, `telegram`, …). Замени на реальные перед продом.

## Дальше (интеграции)

- Подключить **Cal.com** / Google Calendar к `BookingCalendar`
- Auth (Clerk / Supabase) для реального кабинета
- Оплата битов (ЮKassa / Stripe)
- Реальные deep-links кейсов + mp3-превью

## Контакты (контент сайта)

Красный Октябрь · Болотная наб. · Москва
