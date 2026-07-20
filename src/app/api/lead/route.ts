import { NextResponse } from "next/server";

type Body = {
  type?: string;
  name?: string;
  phone?: string;
  contact?: string;
  message?: string;
  meta?: Record<string, unknown>;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const type = (body.type || "contact").slice(0, 40);
  const name = (body.name || "").trim().slice(0, 120);
  const phone = (body.phone || "").trim().slice(0, 40);
  const contact = (body.contact || "").trim().slice(0, 120);
  const message = (body.message || "").trim().slice(0, 2000);

  if (!name && !phone && !contact) {
    return NextResponse.json(
      { ok: false, error: "Укажи имя или телефон" },
      { status: 400 },
    );
  }

  const metaLines = body.meta
    ? Object.entries(body.meta)
        .filter(([, v]) => v !== undefined && v !== null && v !== "")
        .map(([k, v]) => `• ${k}: ${String(v)}`)
        .join("\n")
    : "";

  const text = [
    `🎙 Mayak · ${type}`,
    name && `Имя: ${name}`,
    phone && `Телефон: ${phone}`,
    contact && `Контакт: ${contact}`,
    message && `Сообщение: ${message}`,
    metaLines && `\n${metaLines}`,
    `\n⏱ ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })} МСК`,
  ]
    .filter(Boolean)
    .join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Always log server-side for local/dev without secrets
  console.info("[lead]", text.replace(/\n/g, " | "));

  if (token && chatId) {
    try {
      const tg = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: escapeHtml(text),
            disable_web_page_preview: true,
          }),
        },
      );
      if (!tg.ok) {
        const err = await tg.text();
        console.error("[telegram]", err);
        // still accept lead so UX doesn't break
      }
    } catch (e) {
      console.error("[telegram]", e);
    }
  }

  return NextResponse.json({
    ok: true,
    delivered: Boolean(token && chatId),
  });
}
