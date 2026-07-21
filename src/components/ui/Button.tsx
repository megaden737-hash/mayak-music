import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-white hover:bg-gold-hot shadow-[0_0_0_1px_rgba(10,79,255,0.2)]",
  secondary:
    "bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/12",
  ghost:
    "bg-transparent text-foreground/80 hover:text-foreground hover:bg-foreground/5",
  outline:
    "bg-transparent text-foreground border border-foreground/20 hover:border-gold hover:bg-gold-soft",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-xl",
  md: "h-11 px-6 text-sm rounded-2xl",
  lg: "h-13 px-8 text-base rounded-2xl",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
};

function isExternal(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    if (isExternal(props.href)) {
      return (
        <a
          href={props.href}
          className={classes}
          onClick={props.onClick}
          target={props.href.startsWith("http") ? "_blank" : undefined}
          rel={
            props.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
