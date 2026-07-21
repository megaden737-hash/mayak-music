import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TelegramFloat } from "@/components/layout/TelegramFloat";
import { YandexMetrika } from "@/components/analytics/YandexMetrika";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

/** Yandex Sans–like: large, simple, product grotesk + Cyrillic */
const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mayak-music.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mayak Music — студия на Красном Октябре и агентство",
    template: "%s · Mayak Music",
  },
  description:
    "Студии на Красном Октябре. Бронь онлайн · запись Small 1 200 ₽/час. Создание, обучение, дистрибуция через сайт. Москва.",
  keywords: [
    "студия звукозаписи Москва",
    "Красный Октябрь студия",
    "аренда студии записи",
    "музыкальное агентство",
    "биты купить",
    "продвижение артиста",
    "Mayak Music",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Mayak Music",
    title: "Mayak Music — студия на Красном Октябре",
    description:
      "Бронь онлайн · от 900 ₽/час. Запись, репетиции, продакшн и продвижение.",
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Mayak Music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayak Music",
    description: "Студия и музыкальное агентство в Москве",
    images: ["/images/hero/hero-main.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** Prevent FOUC: default light, restore saved theme before paint */
const themeInitScript = `
(function(){
  try {
    var t = localStorage.getItem('mayak-theme');
    if (t !== 'dark' && t !== 'light') t = 'light';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${onest.variable}`}
      suppressHydrationWarning
      data-theme="light"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <YandexMetrika />
        <Header />
        <main>{children}</main>
        <Footer />
        <TelegramFloat />
      </body>
    </html>
  );
}
