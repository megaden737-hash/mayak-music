"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 pt-28 text-center">
      <h1 className="font-display text-3xl font-semibold">Что-то сломалось</h1>
      <p className="mt-3 max-w-md text-white/55">
        Обнови страницу или напиши нам в Telegram — разберёмся.
      </p>
      <div className="mt-6 flex gap-3">
        <Button type="button" onClick={reset}>
          Попробовать снова
        </Button>
        <Button href="/" variant="outline">
          На главную
        </Button>
      </div>
    </div>
  );
}
