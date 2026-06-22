# Mayak Music — Сайт

Статический сайт музыкального агентства Mayak Music.

**Текущие страницы:**
- Главная (index.html)
- Studios (studios.html)
- Creation / Marketplace (creation.html)
- School / Обучение (learning.html)
- Другие: Label, Promotion, Vacancies, Account и т.д.

**Технологии:** Чистый HTML + Tailwind CDN + Vanilla JS. Все изображения в `assets/images/`.

## Локальный запуск

```bash
cd mayak-music
python3 -m http.server 8000
```

Открой http://localhost:8000

## Деплой на Vercel (через GitHub)

Поскольку ты подключил GitHub и Vercel к Grok, вот как выложить:

### 1. Подключи GitHub (если ещё не)
```bash
# В папке проекта (уже сделано)
cd /Users/daniilostasenko/mayak-music

# Создай репозиторий на GitHub (через веб или gh)
# Затем:
git remote add origin https://github.com/ТВОЙ_НИК/mayak-music.git
git branch -M main
git push -u origin main
```

### 2. Подключи Vercel
1. Зайди на vercel.com
2. New Project → Import Git Repository
3. Выбери репозиторий
4. Настройки:
   - Framework: **Other**
   - Build Command: (оставь пустым)
   - Output Directory: (оставь пустым или `.`)
5. Deploy

Готово. Сайт будет по адресу `https://mayak-music-xxx.vercel.app`

### 3. Последующие правки
```bash
# Отредактировал файлы
git add .
git commit -m "обновил Creation блок + формы"
git push
```

Vercel автоматически передеплоит за ~30 секунд.

## Формы и заявки
Формы сейчас показывают только уведомления.

Чтобы заявки приходили:
- Подключи Formspree, Web3Forms или FormBold (рекомендую Web3Forms или FormBold для Telegram+email).
- Скажи endpoint / access key — я быстро подключу все формы на сайте.

## Структура
- index.html — главная
- assets/ — изображения и статика
- vercel.json — конфиг для Vercel (уже добавлен)

Все правки делай в этих файлах.

