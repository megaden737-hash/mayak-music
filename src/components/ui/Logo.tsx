import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string | null;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const markSize = {
  sm: "h-9 w-9 rounded-xl text-[1.25rem]",
  md: "h-10 w-10 rounded-xl text-[1.4rem]",
  lg: "h-12 w-12 rounded-2xl text-[1.65rem]",
};

/**
 * Classic Mayak mark: white rounded square + dark navy M.
 */
export function LogoMark({
  size = "sm",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center bg-white text-navy shadow-sm transition group-hover:scale-[1.02]",
        markSize[size],
        className,
      )}
      aria-hidden
    >
      <span className="font-display leading-none font-bold tracking-[-0.04em]">
        M
      </span>
    </div>
  );
}

export function Logo({
  href = "/",
  size = "sm",
  showWordmark = true,
  className,
}: LogoProps) {
  const inner = (
    <>
      <LogoMark size={size} />
      {showWordmark && (
        <div className="leading-none">
          <div
            className={cn(
              "font-display font-semibold tracking-tight text-white",
              size === "sm" && "text-[17px]",
              size === "md" && "text-xl",
              size === "lg" && "text-2xl",
            )}
          >
            MAYAK
          </div>
        </div>
      )}
    </>
  );

  const classes = cn("group inline-flex items-center gap-2.5", className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label="Mayak Music — на главную"
      >
        {inner}
      </Link>
    );
  }

  return <div className={classes}>{inner}</div>;
}
