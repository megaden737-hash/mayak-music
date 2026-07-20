export type LeadPayload = {
  type: "quiz" | "booking" | "marketplace" | "contact" | "distribution";
  name?: string;
  phone?: string;
  contact?: string;
  message?: string;
  meta?: Record<string, string | number | boolean | null | undefined>;
};

export async function submitLead(payload: LeadPayload): Promise<{
  ok: boolean;
  error?: string;
}> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || "Не удалось отправить" };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Нет сети. Напиши нам в Telegram." };
  }
}
