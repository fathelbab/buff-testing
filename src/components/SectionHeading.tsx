interface SectionHeadingProps {
  label: string
}

export default function SectionHeading({ label }: SectionHeadingProps) {
  return (
    <span className="rounded p-3 text-lg font-black leading-5.5 text-text-primary outline-1 outline-border-default md:p-4 md:text-[20px]">
      {label}
    </span>
  )
}
