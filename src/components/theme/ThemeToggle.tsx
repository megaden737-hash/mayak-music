"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export type Theme = "light" | "dark";

const STORAGE_KEY = "mayak-theme";

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const v = localStorage.getItem(STORAGE_KEY);
  return v === "dark" ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getStoredTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Включить тёмную тему" : "Включить светлую тему"}
      title={theme === "light" ? "Тёмная тема" : "Светлая тема"}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-xl border border-foreground/12 text-foreground transition hover:bg-foreground/5",
        className,
      )}
    >
      {/* Avoid hydration mismatch flash: show sun until mounted */}
      {!mounted || theme === "light" ? (
        <Moon size={17} strokeWidth={2} />
      ) : (
        <Sun size={17} strokeWidth={2} />
      )}
    </button>
  );
}
