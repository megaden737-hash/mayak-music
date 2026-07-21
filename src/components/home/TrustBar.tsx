import { SITE } from "@/lib/data";

const items = [
  "Spotify · Apple · VK · Яндекс",
  "Красный Октябрь",
  "Бронь онлайн",
  "Прозрачные цены",
  SITE.responseSla,
  `С ${SITE.since} года`,
];

export function TrustBar() {
  return (
    <div className="border-y border-foreground/10 bg-navy-elevated">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 text-xs tracking-wide text-foreground/40 uppercase md:justify-between md:px-6 md:text-[13px]">
        {items.map((item) => (
          <span key={item} className="whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
