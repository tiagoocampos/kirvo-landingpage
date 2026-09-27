import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  id?: string
  /** "dark" inverte a seção (fundo preto, texto branco). */
  tone?: "light" | "dark"
  className?: string
  children: ReactNode
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>
}

export function Section({ id, tone = "light", className, children }: SectionProps) {
  return (
    <section
      id={id}
      data-tone={tone}
      className={cn("bg-surface text-fg py-20 md:py-28", className)}
    >
      <Container>{children}</Container>
    </section>
  )
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-fg-muted mb-5 text-xs font-medium tracking-[0.18em] uppercase">{children}</p>
  )
}

export function SectionHeading({
  kicker,
  title,
  description,
  className,
}: {
  kicker: string
  title: ReactNode
  description?: ReactNode
  className?: string
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Kicker>{kicker}</Kicker>
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="text-fg-muted mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
