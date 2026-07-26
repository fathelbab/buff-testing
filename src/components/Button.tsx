import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "outlined" | "ghost" | "icon"
type ButtonSize = "sm" | "md" | "lg" | "icon"| "iconCard"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "rounded-xl bg-surface-brand font-bold text-white shadow-md transition hover:bg-action-hover",
  secondary:
    "rounded-xl bg-border-default font-bold text-text-primary shadow-md transition hover:bg-page-dark hover:text-headings-light",
  outlined:
    "rounded-xl border border-border-light bg-white font-bold text-text-primary shadow-md transition hover:bg-page-dark hover:border-white hover:text-headings-light",
  ghost:
    "rounded-lg bg-surface-disabled-dark font-bold transition hover:bg-border-default",
  icon:
    "rounded-full border border-border-light bg-black font-bold text-white shadow-md transition hover:bg-page hover:border-[#FF5F00] hover:text-[#FF5F00]",

}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-sm sm:text-base",
  lg: "flex h-[56px] w-[130px] items-center justify-center",
  icon: "flex h-16 w-16 items-center justify-center p-0",
  iconCard: "flex h-[44px] w-[44px] items-center justify-center p-0",

}

export default function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      <span className="inline-flex items-center justify-center gap-2">
        {leftIcon}
        {children}
        {rightIcon}
      </span>
    </button>
  );
}