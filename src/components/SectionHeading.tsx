interface SectionHeadingProps {
  label: string
  variant?: "default" | "borderless" | "inverted"
}

const variantClasses = {
  default:
    "rounded p-3 text-lg font-black leading-5.5 text-text-primary outline-1 outline-border-default md:p-4 md:text-[20px]",

  borderless:
    "text-lg font-black leading-5.5 text-text-primary md:text-[22px] uppercase whitespace-nowrap",
  inverted:
    "rounded-xl p-4 text-lg font-black text-white uppercase bg-black leading-5.5 text-text-primary outline-1 outline-border-default md:p-4 md:text-[28px]",
};


export default function SectionHeading({
  label,
  variant = "default",
}: SectionHeadingProps) {
  return (
    <span className={variantClasses[variant]}>
      {label}
    </span>
  );
}