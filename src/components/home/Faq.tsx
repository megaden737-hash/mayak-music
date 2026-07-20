"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/data";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Частые вопросы"
        description="Коротко о брони, ценах, сроках и формате работы."
      />
      <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-white/90">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "shrink-0 text-white/40 transition",
                    isOpen && "rotate-180 text-gold",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-white/55 md:px-6">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
