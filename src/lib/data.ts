export const SITE = {
  name: "Mayak Music",
  tagline: "Музыкальное агентство полного цикла",
  city: "Москва",
  since: 2019,
  address: "Болотная наб., 3, стр. 1 · Красный Октябрь",
  metro: ["м. Полянка — 10 мин", "м. Кропоткинская — 13 мин"],
  phones: [
    { label: "+7 (995) 114-57-05", href: "tel:+79951145705" },
    { label: "+7 (995) 114-37-05", href: "tel:+79951143705" },
  ],
  /** основной номер для tel:/wa */
  phone: "+7 (995) 114-57-05",
  phoneHref: "tel:+79951145705",
  email: "hello@mayak.music",
  telegram: "https://t.me/mayakmanager",
  telegramHandle: "@mayakmanager",
  whatsapp: "https://wa.me/79951145705",
  instagram: "https://instagram.com/mayak.music",
  vk: "https://vk.com/mayak.music",
  youtube: "https://youtube.com/@mayakmusic",
  mapUrl:
    "https://yandex.ru/maps/?text=Красный%20Октябрь%20Болотная%20набережная%203",
  mapEmbed:
    "https://yandex.ru/map-widget/v1/?text=Красный%20Октябрь%20Москва%20Болотная%20наб.&z=16",
  responseSla: "Ответим в Telegram в день обращения",
  stats: {
    artists: "120+",
    companies: "40+",
    projects: "340+",
    years: "7",
  },
} as const;

/** Слайды full-viewport hero на главной */
export const HERO_SLIDES = [
  {
    id: "studios",
    eyebrow: "Москва · Красный Октябрь · с 2019",
    title: "Профессиональная студия",
    titleLine2: "на Красном Октябре",
    description:
      "Бронь онлайн · репетиции от 900 ₽/час · запись Small 1 200 ₽/час. Без звонков и «перезвоните».",
    image: "/images/hero/hero-main.jpg",
    primary: { href: "/studios#booking", label: "Забронировать студию" },
    secondary: { href: "/apply", label: "Получить план релиза" },
  },
  {
    id: "creation",
    eyebrow: "Мастерская",
    title: "Биты, песни",
    titleLine2: "и контент под ключ",
    description:
      "Маркетплейс готовых битов и песен + продакшн: обложки, рилсы, аранжировки.",
    image: "/images/studios/creation-hero.jpg",
    primary: { href: "/creation", label: "Смотреть каталог" },
    secondary: { href: "/creation#services", label: "Услуги под ключ" },
  },
  {
    id: "learning",
    eyebrow: "Школа",
    title: "Учись так,",
    titleLine2: "как тебе удобно",
    description:
      "Пробный урок · записанные курсы · живые занятия с преподом · разовые уроки · вебинары и концерты.",
    image: "/images/studios/school-hero.jpg",
    primary: { href: "/learning", label: "Выбрать формат" },
    secondary: { href: "/learning#trial", label: "Пробный урок" },
  },
  {
    id: "promotion",
    eyebrow: "Лейбл",
    title: "Выпусти трек сам —",
    titleLine2: "через сайт",
    description:
      "Заполни данные, приложи трек и обложку. Дистрибуция на 150+ площадок после проверки.",
    image: "/images/news/news-celebration.jpg",
    primary: { href: "/promotion#upload", label: "Отправить релиз" },
    secondary: { href: "/promotion#packages", label: "Пакеты промо" },
  },
  {
    id: "agency",
    eyebrow: "Mayak · бонус",
    title: "Всё для артиста —",
    titleLine2: "одна команда",
    description:
      "Студия, мастерская, школа и лейбл. −20% на первую услугу до конца месяца.",
    image: "/images/studios/hero.jpg",
    primary: { href: "/apply", label: "Оставить заявку" },
    secondary: { href: "/#bonus", label: "Забрать −20%" },
  },
] as const;

/** Основная навигация — без кабинета (кабинет → «Войти») */
export const NAV = [
  { href: "/studios", label: "Студии" },
  { href: "/creation", label: "Мастерская" },
  { href: "/learning", label: "Школа" },
  { href: "/promotion", label: "Лейбл" },
] as const;

/** Mayak Label public proof */
export const LABEL_STATS = {
  releases: "200+",
  yandexUrl: "https://music.yandex.ru/label/5448090",
  yandexLabel: "Смотреть на Яндекс Музыке",
} as const;

export const DIRECTIONS = [
  {
    slug: "studios",
    href: "/studios",
    title: "Студии",
    subtitle: "Запись · репетиции · съёмки",
    description:
      "Три профессиональных пространства на Красном Октябре. Бронируй онлайн — без звонков и ожиданий.",
    price: "от 900 ₽/час",
    image: "/images/studios/small/small-1.jpg",
    cta: "Забронировать",
  },
  {
    slug: "creation",
    href: "/creation",
    title: "Мастерская",
    subtitle: "Биты · песни · визуал",
    description:
      "Готовый маркетплейс и продакшн под ключ: биты, треки, обложки, рилсы и клипы.",
    price: "биты от 5 900 ₽",
    image: "/images/covers/beat-cover-hiphop.jpg",
    cta: "Смотреть каталог",
  },
  {
    slug: "learning",
    href: "/learning",
    title: "Школа",
    subtitle: "Курсы · уроки · ивенты",
    description:
      "Пробный урок, записанные курсы, живые занятия онлайн/офлайн, разовые уроки без абонемента, вебинары и концерты.",
    price: "пробный урок бесплатно",
    image: "/images/artists/vocal-session.jpg",
    cta: "Выбрать формат",
  },
  {
    slug: "promotion",
    href: "/promotion",
    title: "Лейбл",
    subtitle: "Релиз · плейлисты · SMM",
    description:
      "Дистрибуция на 150+ площадок, плейлисты, реклама и полный релиз-пакет. 200+ релизов Mayak Label.",
    price: "релиз 3 900 ₽",
    image: "/images/news/news-celebration.jpg",
    cta: "Запустить релиз",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Выбери направление",
    text: "Студия, создание, обучение или продвижение — или пройди короткий квиз.",
  },
  {
    step: "02",
    title: "Оставь заявку",
    text: "2 минуты. Мы напишем в Telegram в тот же день.",
  },
  {
    step: "03",
    title: "Согласуем план",
    text: "Смета, сроки, команда. Без скрытых платежей и размытых «от».",
  },
  {
    step: "04",
    title: "Делаем результат",
    text: "Треки, контент, стримы, навыки — с прозрачным статусом по ходу работы.",
  },
] as const;

/** Кейсы: без фейковых deep-links. links только если есть реальный URL */
export const CASES = [
  {
    id: "amin-svetofor",
    artist: "Amin",
    title: "«Светофор»",
    result: "7 редакторских плейлистов",
    detail:
      "Релиз через Mayak: питчинг в Spotify, VK и Яндекс. Подборка «Новая музыка России» и ещё 6 плейлистов.",
    metric: "7 плейлистов",
    image: "/images/news/news-celebration.jpg",
    tags: ["Релиз", "Плейлисты"],
    verified: true,
    links: {} as Record<string, string>,
  },
  {
    id: "nika-nova",
    artist: "Nika Nova",
    title: "«Не отпускай»",
    result: "300k+ просмотров клипа",
    detail:
      "Съёмки на локации + в студии Mayak. Полный цикл: продакшн, монтаж, релиз.",
    metric: "300k+ views",
    image: "/images/news/video-shoot.jpg",
    tags: ["Клип", "Продакшн"],
    verified: true,
    links: {} as Record<string, string>,
  },
  {
    id: "luna-ocean",
    artist: "LUNA",
    title: "«Океан»",
    result: "Саундтрек · 1,2M стримов",
    detail:
      "Главная тема фильма. Запись и сведение в Mayak Large.",
    metric: "1,2M streams",
    image: "/images/luna-ocean.jpg",
    tags: ["Саундтрек", "Запись"],
    verified: true,
    links: {} as Record<string, string>,
  },
  {
    id: "cold-static",
    artist: "Mayak Beats",
    title: "«Cold Static»",
    result: "Бит в релизе топ-артиста",
    detail: "Лицензия с маркетплейса Mayak. Эксклюзив + синк.",
    metric: "Sync deal",
    image: "/images/covers/beat-cover-electronic.jpg",
    tags: ["Битстор", "Лицензия"],
    verified: false,
    links: {} as Record<string, string>,
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Amin",
    role: "Артист · релиз «Светофор»",
    text: "Забронировал студию за 5 минут, в тот же день записали вокал. Без воды и очередей.",
    avatar: "/images/artists/01-2N7MslCV1aA.jpg",
    result: "7 плейлистов после релиза",
  },
  {
    name: "Nika Nova",
    role: "Исполнительница",
    text: "Клип, обложка и релиз — одна команда. Мне не пришлось собирать 10 подрядчиков.",
    avatar: "/images/artists/05-U3uS3nZuVs8.jpg",
    result: "300k+ на клипе",
  },
  {
    name: "Марк",
    role: "Битмейкер",
    text: "Четыре продажи с маркетплейса за месяц. Процесс простой: залил — купили.",
    avatar: "/images/artists/beatmaker.jpg",
    result: "4 продажи / месяц",
  },
] as const;

export const TEAM = [
  {
    name: "Даниил",
    role: "Основатель · продюсер · преподаватель",
    focus: "Агентство, продюсирование, обучение",
    photo: "/images/team/daniil.jpg",
  },
  {
    name: "Кирилл",
    role: "Сооснователь · саунд-продюсер · художник",
    focus: "Саунд, визуал, креатив",
    photo: "/images/team/kirill.jpg",
  },
  {
    name: "Матвей",
    role: "Партнёр · саунд-дизайнер",
    focus: "Саунд-дизайн, продакшн",
    photo: "/images/team/matvey.jpg",
  },
  {
    name: "Ольга",
    role: "Преподаватель · вокал · актёрское мастерство",
    focus: "Вокал, сцена, подача",
    photo: "/images/team/olga.jpg",
  },
  {
    name: "Лиза",
    role: "Координатор проекта",
    focus: "Клиенты, процессы, бронь",
    photo: "/images/team/lisa.jpg",
  },
  {
    name: "Влад",
    role: "Видео и реклама",
    focus: "Клипы, рилсы, промо",
    photo: "/images/team/vlad.jpg",
  },
  {
    name: "Влад",
    role: "Видеограф · оператор-постановщик",
    focus: "Съёмка, свет, визуальный язык",
    photo: "/images/team/vlad2.jpg",
  },
  {
    name: "Илья",
    role: "Концертный звукорежиссёр · саунд-продюсер",
    focus: "Live-звук, сведение, продакшн",
    photo: "/images/team/ilya.jpg",
  },
  {
    name: "Anna",
    role: "Бизнес-ассистент · юрист",
    focus: "Документы, договоры, организация",
    photo: "/images/team/anna.jpg",
  },
  {
    name: "Харис",
    role: "Преподаватель · сонграйтер",
    focus: "Текст, мелодия, уроки",
    photo: "/images/team/haaris.jpg",
  },
  {
    name: "Ольга",
    role: "Ведущая · певица · сонграйтер",
    focus: "Вокал, сцена, тексты",
    photo: "/images/team/olga2.jpg",
  },
  {
    name: "Чоппа",
    role: "Гострайтер",
    focus: "Тексты для артистов",
    photo: "/images/team/choppa.jpg",
  },
  {
    name: "Рома",
    role: "Музыкальный продюсер",
    focus: "Продюсирование, аранжировки",
    photo: "/images/team/roma.jpg",
  },
  {
    name: "Анна",
    role: "Автор песен · композитор",
    focus: "Песни, композиция",
    photo: "/images/team/anna2.jpg",
  },
] as const;

export const PARTNERS = [
  "СМИ Слива",
  "Радио МСМ",
  "Креативная Лаборатория «Фонарь»",
] as const;

export const FAQ = [
  {
    q: "Как быстро отвечаете на заявку?",
    a: "В рабочий день — обычно в течение нескольких часов в Telegram. Поздно вечером и в выходные — на следующее утро.",
  },
  {
    q: "Можно ли забронировать студию на сегодня?",
    a: "Да, если есть свободный слот. Выбери время в календаре или напиши в Telegram — подтвердим за 15–30 минут.",
  },
  {
    q: "Цены на сайте финальные?",
    a: "Да, почасовые тарифы студий и пакеты указаны как есть. Доп. услуги (звукрежиссёр, монтаж) — отдельной строкой в смете.",
  },
  {
    q: "Нужно ли оборудование и инженер?",
    a: "Базовый сетап в студии есть. Звукорежиссёра можно добавить к брони — напиши в заявке.",
  },
  {
    q: "Как купить бит?",
    a: "Оставь заявку на карточке или в квизе. Пришлём договор лицензии, WAV/stems и счёт. Онлайн-оплата подключается.",
  },
  {
    q: "Пробный урок правда бесплатный?",
    a: "Да, 45 минут онлайн или в студии — чтобы познакомиться с форматом и преподавателем. Без обязательства купить курс.",
  },
  {
    q: "Где вы находитесь и как пройти?",
    a: "Красный Октябрь, Болотная наб. м. Полянка ~10 мин, м. Кропоткинская ~13 мин. Карта и ориентиры — в блоке «Как нас найти».",
  },
  {
    q: "Работаете с артистами не из Москвы?",
    a: "Да. Дистрибуция, промо, биты и часть обучения — удалённо. Студия и съёмки — в Москве.",
  },
  {
    q: "Что входит в −20% на первую услугу?",
    a: "Скидка на первый оплаченный заказ (студия, продакшн, курс или промо-пакет). Не суммируется с пакетными скидками на часы, если не оговорено иначе.",
  },
  {
    q: "Есть договор и закрывающие?",
    a: "Да, для физлиц и ИП/ООО. Счёт, акт, при необходимости — лицензионный договор на бит/трек.",
  },
] as const;

export const STUDIOS = [
  {
    id: "small",
    name: "Mayak Small",
    label: "Маленькая студия",
    size: "18 м²",
    capacity: "до 3 человек",
    description:
      "Идеально для вокала, подкастов и сольных сессий. Тихая комната, быстрый сетап.",
    features: ["Звукозапись", "Репетиции", "Подкасты", "Вокал"],
    prices: {
      rehearsal: 900,
      recording: 1200,
    },
    images: [
      "/images/studios/small/small-1.jpg",
      "/images/studios/small/small-2.jpg",
      "/images/studios/small/small-3.jpg",
      "/images/studios/small/small-4.jpg",
    ],
  },
  {
    id: "medium",
    name: "Mayak Medium",
    label: "Средняя студия",
    size: "32 м²",
    capacity: "до 8 человек",
    description:
      "Запись группы и живых инструментов. Можно снимать контент параллельно.",
    features: ["Звукозапись", "Съёмка контента", "Группа", "Live-инструменты"],
    prices: {
      rehearsal: 1800,
      recording: 2500,
    },
    images: [
      "/images/studios/medium/medium-1.jpg",
      "/images/studios/medium/medium-2.jpg",
      "/images/studios/medium/medium-3.jpg",
      "/images/studios/medium/medium-1.jpg",
    ],
  },
  {
    id: "large",
    name: "Mayak Large",
    label: "Большая студия",
    size: "65 м²",
    capacity: "до 16 человек",
    description:
      "Live room с роялем. Концерты, съёмки, мероприятия. Medium в подарок ко времени.",
    features: [
      "Звукозапись",
      "Репетиции",
      "Съёмки / подкасты",
      "Мероприятия",
      "Рояль",
    ],
    prices: {
      rehearsal: 3000,
      recording: 3600,
    },
    note: "Запись 3600 ₽/час включает Medium на то же время",
    images: [
      "/images/studios/large/large-1.jpg",
      "/images/studios/large/large-2.jpg",
      "/images/studios/large/large-3.jpg",
      "/images/studios/large/large-4.jpg",
    ],
  },
] as const;

export const STUDIO_PACKS = [
  { hours: 12, discount: 5, label: "12 часов" },
  { hours: 24, discount: 10, label: "24 часа" },
  { hours: 48, discount: 20, label: "48 часов" },
] as const;

export const BEATS = [
  {
    id: 1,
    title: "Тёмный горизонт",
    genre: "trap",
    bpm: 138,
    price: 9900,
    exclusive: false,
    key: "C#m",
    image: "/images/covers/beat-cover-hiphop.jpg",
  },
  {
    id: 2,
    title: "Северный ветер",
    genre: "hiphop",
    bpm: 92,
    price: 7900,
    exclusive: false,
    key: "F#m",
    image: "/images/covers/beat-cover-hiphop.jpg",
  },
  {
    id: 3,
    title: "Neon Drift",
    genre: "electronic",
    bpm: 128,
    price: 11900,
    exclusive: true,
    key: "G",
    image: "/images/covers/beat-cover-electronic.jpg",
  },
  {
    id: 4,
    title: "Москва 3:00",
    genre: "trap",
    bpm: 145,
    price: 6900,
    exclusive: false,
    key: "Dm",
    image: "/images/covers/beat-cover-hiphop.jpg",
  },
  {
    id: 5,
    title: "Падаю вверх",
    genre: "pop",
    bpm: 115,
    price: 8900,
    exclusive: false,
    key: "A",
    image: "/images/covers/beat-cover-acoustic.jpg",
  },
  {
    id: 6,
    title: "Тишина в голове",
    genre: "rnb",
    bpm: 82,
    price: 8500,
    exclusive: false,
    key: "Bm",
    image: "/images/covers/beat-cover-acoustic.jpg",
  },
  {
    id: 7,
    title: "Cold Static",
    genre: "electronic",
    bpm: 140,
    price: 9900,
    exclusive: false,
    key: "B",
    image: "/images/covers/beat-cover-electronic.jpg",
  },
  {
    id: 8,
    title: "Night Run",
    genre: "trap",
    bpm: 150,
    price: 6500,
    exclusive: false,
    key: "C#m",
    image: "/images/covers/beat-cover-hiphop.jpg",
  },
] as const;

export const TRACKS = [
  {
    id: 1,
    title: "Светофор",
    artist: "Amin",
    genre: "Hip-Hop",
    price: 24900,
    duration: "2:54",
    image: "/images/news/news-celebration.jpg",
  },
  {
    id: 2,
    title: "Океан",
    artist: "LUNA",
    genre: "Indie Pop",
    price: 39000,
    duration: "3:41",
    image: "/images/luna-ocean.jpg",
  },
  {
    id: 3,
    title: "Не отпускай",
    artist: "Nika Nova",
    genre: "Pop",
    price: 18500,
    duration: "3:12",
    image: "/images/news/video-shoot.jpg",
  },
  {
    id: 4,
    title: "Грустный поп",
    artist: "Даня Маяк",
    genre: "Pop",
    price: 22000,
    duration: "3:05",
    image: "/images/danya-mayak-grustny-pop.jpg",
  },
] as const;

export const CREATION_SERVICES = [
  {
    title: "Бит под ключ",
    price: 15000,
    items: ["Референс и ТЗ", "2 раунда правок", "WAV + stems", "Базовая лицензия"],
  },
  {
    title: "Песня под ключ",
    price: 45000,
    items: ["Текст / мелодия", "Аранжировка", "Вокал + сведение", "Мастеринг"],
  },
  {
    title: "Обложка + motion",
    price: 8900,
    items: ["Концепт", "Обложка 3000px", "Анимация 9:16", "Исходники"],
  },
  {
    title: "Съёмка рилсов",
    price: 18000,
    items: ["1 локация / студия", "3–5 рилсов", "Монтаж", "Цвет + звук"],
  },
] as const;

/** Живые курсы с преподавателем (онлайн / офлайн) */
export const LEARNING_LIVE = [
  {
    title: "Вокал",
    price: 89000,
    duration: "12 недель",
    format: "Гибрид" as const,
    description: "Постановка голоса, дыхание, репертуар, студийная запись.",
    includes: ["24 занятия", "2 студийные сессии", "Репертуар под тебя"],
  },
  {
    title: "Битмейкинг",
    price: 67000,
    duration: "10 недель",
    format: "Офлайн" as const,
    description: "FL Studio / Ableton. От драм-паттернов до готового бита на продажу.",
    includes: ["20 занятий", "Портфолио из 5 битов", "Выход в маркетплейс"],
  },
  {
    title: "Звукорежиссура",
    price: 79000,
    duration: "12 недель",
    format: "Офлайн" as const,
    description: "Запись, сведение, мастеринг. Практика на реальных сессиях.",
    includes: ["24 занятия", "3 live-сессии", "Сведение 2 треков"],
  },
  {
    title: "Музыкальный менеджмент",
    price: 42000,
    duration: "6 недель",
    format: "Онлайн" as const,
    description: "Релизы, контракты, продвижение, работа с командой.",
    includes: ["12 занятий", "Релиз-план", "Разбор кейса"],
  },
] as const;

/** @deprecated alias — live courses */
export const LEARNING_COURSES = LEARNING_LIVE;

/** Записанные on-demand курсы */
export const LEARNING_ONDEMAND = [
  {
    title: "Вокал с нуля: база",
    price: 9900,
    duration: "8 часов видео",
    lessons: 24,
    description: "Дыхание, строй, разборы. Смотришь в своём темпе, доступ 12 месяцев.",
  },
  {
    title: "Битмейкинг в FL Studio",
    price: 12900,
    duration: "12 часов видео",
    lessons: 36,
    description: "От пустого проекта до бита на продажу. Стем-разборы и пресеты.",
  },
  {
    title: "Сведение вокала",
    price: 14900,
    duration: "6 часов видео",
    lessons: 18,
    description: "Цепочка обработки, тюнинг, посылка в реверб. Практика на демо.",
  },
  {
    title: "Релиз под ключ: чеклист",
    price: 4900,
    duration: "3 часа видео",
    lessons: 12,
    description: "Метаданные, обложка, дистрибуция, первые плейлисты.",
  },
] as const;

/** Разовые уроки без абонемента */
export const LEARNING_SINGLE = [
  {
    title: "Вокал · 1 урок",
    price: 3500,
    duration: "55 мин",
    format: "Онлайн / офлайн",
    description: "Индивидуально с преподавателем. Без подписки.",
  },
  {
    title: "Битмейкинг · 1 урок",
    price: 4000,
    duration: "55 мин",
    format: "Онлайн / офлайн",
    description: "Разбор проекта или старт с нуля. FL / Ableton.",
  },
  {
    title: "Звукорежиссура · 1 урок",
    price: 4500,
    duration: "55 мин",
    format: "Офлайн · студия",
    description: "Сессия в Mayak: запись, сведение, вопросы по цепочке.",
  },
  {
    title: "Гитара / барабаны · 1 урок",
    price: 3000,
    duration: "55 мин",
    format: "Офлайн",
    description: "Разовое занятие без абонемента.",
  },
] as const;

/** Вебинары, семинары, концерты */
export const LEARNING_EVENTS = [
  {
    title: "Вебинар: как попасть в плейлисты",
    date: "28 авг 2026",
    format: "Вебинар · онлайн",
    price: 0,
    priceLabel: "Free",
    description: "Питчинг, питч-листы, ошибки новичков. 90 минут + Q&A.",
  },
  {
    title: "Семинар: договор и права на трек",
    date: "5 сен 2026",
    format: "Семинар · офлайн",
    price: 2500,
    priceLabel: "2 500 ₽",
    description: "Лицензии, сплиты, что подписывать с битмейкером.",
  },
  {
    title: "Open Mic Mayak",
    date: "12 сен 2026",
    format: "Концерт · студия Large",
    price: 0,
    priceLabel: "Free · вход",
    description: "Живые сеты артистов школы и агентства. Запись по заявке.",
  },
  {
    title: "Мастер-класс: вокал в студии",
    date: "19 сен 2026",
    format: "Семинар · офлайн",
    price: 4500,
    priceLabel: "4 500 ₽",
    description: "Запись вокала с инженером. 3 часа в Mayak Medium.",
  },
] as const;

export const LEARNING_DIRS = [
  "Вокал",
  "Звукорежиссура",
  "Битмейкинг",
  "Сольфеджио",
  "Гитара",
  "Барабаны",
  "Музыкальный менеджмент",
  "Диджеинг",
] as const;

export const PROMO_PACKAGES = [
  {
    id: "distro",
    title: "Дистрибуция",
    price: 3900,
    popular: false,
    description: "Релиз на Spotify, Apple, VK, Яндекс, TikTok и 150+ сервисов.",
    features: [
      "Загрузка за 1–3 дня",
      "Все основные площадки",
      "Статистика после релиза",
      "ISRC / UPC",
    ],
  },
  {
    id: "promo",
    title: "Промо + плейлисты",
    price: 29000,
    popular: false,
    description: "Таргет, редакторские и пользовательские плейлисты, питчинг.",
    features: [
      "Питчинг в плейлисты",
      "Таргет VK / Meta",
      "Прес-релиз",
      "Отчёт по стримам",
    ],
  },
  {
    id: "smm",
    title: "SMM и визуал",
    price: 22000,
    popular: false,
    description: "Контент-план, дизайн, Stories/Reels на месяц.",
    features: [
      "12 постов + 20 stories",
      "Визуальная система",
      "Монтаж рилсов",
      "Комьюнити-менеджмент",
    ],
  },
  {
    id: "full",
    title: "Полный релиз-пакет",
    price: 89000,
    popular: true,
    description: "Всё для сильного релиза: дистрибуция, промо, визуал, SMM.",
    features: [
      "Дистрибуция + промо",
      "Обложка + motion",
      "SMM на 30 дней",
      "Плейлисты + таргет",
      "Персональный менеджер",
    ],
  },
] as const;

export const QUIZ_STEPS = [
  {
    id: "goal",
    question: "Что тебе нужно прямо сейчас?",
    options: [
      { id: "studio", label: "Забронировать студию", next: "studio-type" },
      { id: "create", label: "Создать трек / контент", next: "create-type" },
      { id: "learn", label: "Начать обучение", next: "learn-type" },
      { id: "promo", label: "Продвинуть релиз", next: "promo-type" },
      { id: "unsure", label: "Не уверен — нужен совет", next: "contact" },
    ],
  },
  {
    id: "studio-type",
    question: "Какой формат сессии?",
    options: [
      { id: "rehearsal", label: "Репетиция", next: "contact" },
      { id: "record", label: "Запись", next: "contact" },
      { id: "shoot", label: "Съёмка", next: "contact" },
      { id: "event", label: "Мероприятие", next: "contact" },
    ],
  },
  {
    id: "create-type",
    question: "Что создаём?",
    options: [
      { id: "beat", label: "Бит", next: "contact" },
      { id: "song", label: "Песню под ключ", next: "contact" },
      { id: "visual", label: "Обложку / визуал", next: "contact" },
      { id: "video", label: "Рилсы / клип", next: "contact" },
    ],
  },
  {
    id: "learn-type",
    question: "Какое направление?",
    options: [
      { id: "vocal", label: "Вокал", next: "contact" },
      { id: "beatmaking", label: "Битмейкинг", next: "contact" },
      { id: "sound", label: "Звукорежиссура", next: "contact" },
      { id: "mgmt", label: "Менеджмент", next: "contact" },
    ],
  },
  {
    id: "promo-type",
    question: "Какой уровень продвижения?",
    options: [
      { id: "distro", label: "Только дистрибуция", next: "contact" },
      { id: "playlists", label: "Плейлисты + промо", next: "contact" },
      { id: "full", label: "Полный релиз-пакет", next: "contact" },
    ],
  },
] as const;

export const ACCOUNT_ORDERS = [
  {
    id: "ORD-1042",
    title: "Бит «Neon Drift» — exclusive",
    status: "done" as const,
    date: "12 июн 2026",
    price: 16660,
  },
  {
    id: "ORD-1038",
    title: "Студия Medium · запись 3ч",
    status: "in_progress" as const,
    date: "18 июн 2026",
    price: 7500,
  },
  {
    id: "ORD-1031",
    title: "Обложка + анимация",
    status: "review" as const,
    date: "20 июн 2026",
    price: 4500,
  },
];

export const ACCOUNT_TRACKS = [
  {
    title: "Демо #1",
    status: "Сведение",
    progress: 70,
  },
  {
    title: "Светофор (ремикс)",
    status: "Мастеринг",
    progress: 90,
  },
  {
    title: "Night Run (feat.)",
    status: "Текст",
    progress: 30,
  },
];

export const CART_ITEMS = [
  { name: "Бит «Neon Drift»", price: 11900 },
  { name: "Обложка + анимация", price: 4500 },
  { name: "Съёмка рилса", price: 15000 },
];
