import { cn } from "@/lib/utils"

/** Wordmark em Keronige — usado no header e no footer. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      aria-label="KirvoAgenda — início"
      className={cn("font-display text-2xl leading-none tracking-tight", className)}
    >
      KirvoAgenda
    </a>
  )
}
