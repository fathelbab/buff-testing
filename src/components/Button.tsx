import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "outlined" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "rounded-xl bg-surface-brand font-bold text-white shadow-md transition hover:bg-action-hover",
  secondary:
    "rounded-xl bg-border-default font-bold text-text-primary shadow-md transition hover:bg-page-dark hover:text-headings-light",
  outlined:
    "rounded-xl border border-border-light bg-white font-bold text-text-primary shadow-md transition hover:bg-page-dark hover:border-white hover:text-headings-light",
  ghost:
    "rounded-lg bg-transparent font-bold transition hover:bg-border-default",
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-sm sm:text-base",
  lg: "flex h-[56px] w-[130px] items-center justify-center",
}

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {icon && <span className="inline-flex items-center gap-2">{icon}{children}</span>}
      {!icon && children}
    </button>
  )
}
