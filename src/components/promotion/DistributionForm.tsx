"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Check, FileAudio, ImageIcon, Upload } from "lucide-react";
import { SITE } from "@/lib/data";
import { submitLead } from "@/lib/leads";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const AUDIO_TYPES = [
  "audio/mpeg",
  "audio/wav",
  "audio/x-wav",
  "audio/flac",
  "audio/mp3",
  "audio/wave",
];
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_AUDIO_MB = 80;
const MAX_IMAGE_MB = 10;

type FormState = {
  trackTitle: string;
  artist: string;
  genre: string;
  releaseDate: string;
  explicit: "no" | "yes";
  language: string;
  copyright: string;
  email: string;
  phone: string;
  agree: boolean;
};

const initial: FormState = {
  trackTitle: "",
  artist: "",
  genre: "",
  releaseDate: "",
  explicit: "no",
  language: "ru",
  copyright: "",
  email: "",
  phone: "",
  agree: false,
};

export function DistributionForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [audio, setAudio] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const audioRef = useRef<HTMLInputElement>(null);
  const coverRef = useRef<HTMLInputElement>(null);

  function onCover(file: File | null) {
    if (coverPreview) URL.revokeObjectURL(coverPreview);
    setCover(file);
    setCoverPreview(file ? URL.createObjectURL(file) : null);
  }

  function validateFiles(): string | null {
    if (!audio) return "Прикрепи файл трека (MP3 / WAV / FLAC)";
    if (!cover) return "Прикрепи обложку (JPG / PNG)";
    if (!AUDIO_TYPES.includes(audio.type) && !/\.(mp3|wav|flac)$/i.test(audio.name)) {
      return "Трек: только MP3, WAV или FLAC";
    }
    if (!IMAGE_TYPES.includes(cover.type)) {
      return "Обложка: JPG, PNG или WebP";
    }
    if (audio.size > MAX_AUDIO_MB * 1024 * 1024) {
      return `Трек слишком большой (макс. ${MAX_AUDIO_MB} МБ)`;
    }
    if (cover.size > MAX_IMAGE_MB * 1024 * 1024) {
      return `Обложка слишком большая (макс. ${MAX_IMAGE_MB} МБ)`;
    }
    return null;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.agree) {
      setError("Нужно согласие с политикой и офертой");
      return;
    }
    const fileErr = validateFiles();
    if (fileErr) {
      setError(fileErr);
      return;
    }

    setSubmitting(true);
    const result = await submitLead({
      type: "distribution",
      name: form.artist,
      phone: form.phone,
      contact: form.email,
      message: `Релиз: ${form.trackTitle}`,
      meta: {
        trackTitle: form.trackTitle,
        artist: form.artist,
        genre: form.genre,
        releaseDate: form.releaseDate,
        explicit: form.explicit,
        language: form.language,
        copyright: form.copyright,
        audioName: audio!.name,
        audioSizeMb: (audio!.size / 1024 / 1024).toFixed(2),
        coverName: cover!.name,
        coverSizeMb: (cover!.size / 1024 / 1024).toFixed(2),
        note: "Файлы прислать в Telegram после заявки",
      },
    });
    setSubmitting(false);

    if (!result.ok) {
      setError(result.error || "Не удалось отправить");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-gold/25 bg-gold/5 p-8 text-center md:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold !text-white">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h3 className="font-display text-2xl font-semibold">
          Заявка на релиз принята
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-foreground/60">
          Мы получили метаданные по «{form.trackTitle}» · {form.artist}.
          Осталось прислать файлы в Telegram — трек и обложку, которые ты
          выбрал на форме.
        </p>
        <div className="mx-auto mt-5 max-w-sm rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-left text-xs text-foreground/50">
          <div>Трек: {audio?.name}</div>
          <div>Обложка: {cover?.name}</div>
          <div className="mt-1 text-foreground/35">
            Напиши: «Релиз {form.artist} / {form.trackTitle}»
          </div>
        </div>
        <Button href={SITE.telegram} size="lg" className="mt-6">
          Открыть {SITE.telegramHandle} и прикрепить файлы
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-foreground/10 bg-navy-elevated p-5 md:p-8"
    >
      <div className="mb-6">
        <div className="text-xs font-medium tracking-[0.16em] text-gold uppercase">
          Self-serve · дистрибуция
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          Отправить релиз на отгрузку
        </h3>
        <p className="mt-2 text-sm text-foreground/50">
          Заявка на проверку. После модерации — выгрузка на Spotify, Apple, VK,
          Яндекс, TikTok и 150+. Дистрибуция от 3 900 ₽.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Название трека *"
          value={form.trackTitle}
          onChange={(v) => setForm({ ...form, trackTitle: v })}
          required
        />
        <Field
          label="Артист / project *"
          value={form.artist}
          onChange={(v) => setForm({ ...form, artist: v })}
          required
        />
        <Field
          label="Жанр"
          value={form.genre}
          onChange={(v) => setForm({ ...form, genre: v })}
          placeholder="Hip-Hop, Pop…"
        />
        <div>
          <label className="mb-1.5 block text-xs text-foreground/45">
            Желаемая дата релиза
          </label>
          <input
            type="date"
            value={form.releaseDate}
            onChange={(e) => setForm({ ...form, releaseDate: e.target.value })}
            className="w-full rounded-2xl border border-foreground/10 bg-navy px-4 py-3 text-sm outline-none focus:border-gold/50"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-foreground/45">Explicit</label>
          <select
            value={form.explicit}
            onChange={(e) =>
              setForm({
                ...form,
                explicit: e.target.value as "yes" | "no",
              })
            }
            className="w-full rounded-2xl border border-foreground/10 bg-navy px-4 py-3 text-sm outline-none focus:border-gold/50"
          >
            <option value="no">Нет</option>
            <option value="yes">Да</option>
          </select>
        </div>
        <Field
          label="Язык"
          value={form.language}
          onChange={(v) => setForm({ ...form, language: v })}
          placeholder="ru / en"
        />
        <Field
          label="Правообладатель / copyright"
          value={form.copyright}
          onChange={(v) => setForm({ ...form, copyright: v })}
          className="sm:col-span-2"
        />
        <Field
          label="Email *"
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          required
        />
        <Field
          label="Телефон или Telegram *"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
          required
          placeholder="+7… или @nick"
        />
      </div>

      {/* Files */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => audioRef.current?.click()}
          className={cn(
            "flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed px-4 py-6 text-center transition",
            audio
              ? "border-gold/40 bg-gold/5"
              : "border-foreground/15 bg-navy-elevated hover:border-foreground/30",
          )}
        >
          <FileAudio size={22} className="text-gold" />
          <div className="text-sm font-medium">
            {audio ? audio.name : "Трек * (MP3 / WAV / FLAC)"}
          </div>
          <div className="text-xs text-foreground/40">
            {audio
              ? `${(audio.size / 1024 / 1024).toFixed(1)} МБ`
              : `до ${MAX_AUDIO_MB} МБ · клик для выбора`}
          </div>
          <input
            ref={audioRef}
            type="file"
            accept=".mp3,.wav,.flac,audio/*"
            className="hidden"
            onChange={(e) => setAudio(e.target.files?.[0] ?? null)}
          />
        </button>

        <button
          type="button"
          onClick={() => coverRef.current?.click()}
          className={cn(
            "relative flex min-h-[140px] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-dashed px-4 py-6 text-center transition",
            cover
              ? "border-gold/40 bg-gold/5"
              : "border-foreground/15 bg-navy-elevated hover:border-foreground/30",
          )}
        >
          {coverPreview ? (
            <Image
              src={coverPreview}
              alt="Превью обложки"
              fill
              className="object-cover opacity-40"
              unoptimized
            />
          ) : null}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <ImageIcon size={22} className="text-gold" />
            <div className="text-sm font-medium">
              {cover ? cover.name : "Обложка * (JPG / PNG)"}
            </div>
            <div className="text-xs text-foreground/40">
              лучше 3000×3000 · до {MAX_IMAGE_MB} МБ
            </div>
          </div>
          <input
            ref={coverRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(e) => onCover(e.target.files?.[0] ?? null)}
          />
        </button>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-foreground/55">
        <input
          type="checkbox"
          checked={form.agree}
          onChange={(e) => setForm({ ...form, agree: e.target.checked })}
          className="mt-1"
        />
        <span>
          Согласен с{" "}
          <a href="/privacy" className="text-gold underline-offset-2 hover:underline">
            политикой
          </a>{" "}
          и{" "}
          <a href="/offer" className="text-gold underline-offset-2 hover:underline">
            офертой
          </a>
          . Файлы после заявки отправлю в {SITE.telegramHandle}.
        </span>
      </label>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      <Button
        type="submit"
        size="lg"
        className="mt-6 w-full"
        disabled={submitting}
      >
        <Upload size={18} />
        {submitting ? "Отправляем…" : "Отправить заявку на релиз"}
      </Button>
      <p className="mt-3 text-center text-xs text-foreground/35">
        Файлы на сервер не грузятся — после заявки прикрепи их в Telegram.
        Менеджер свяжет метаданные с файлами.
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
  type = "text",
  placeholder,
  className,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs text-foreground/45">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-foreground/10 bg-navy px-4 py-3 text-sm outline-none transition focus:border-gold/50"
      />
    </div>
  );
}
