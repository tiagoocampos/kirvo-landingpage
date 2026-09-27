"use client"

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react"
import { cn } from "@/lib/utils"

const noopSubscribe = () => () => {}

// Sem animação (conteúdo já visível) quando não há IntersectionObserver ou o usuário prefere
// menos movimento. No servidor (e na hidratação) o snapshot é `false`, então não há mismatch.
function getSkipAnimation() {
  return (
    typeof IntersectionObserver === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

/** Fade/slide de entrada ao rolar. Respeita prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const skipAnimation = useSyncExternalStore(noopSubscribe, getSkipAnimation, () => false)
  const [seen, setSeen] = useState(false)
  const visible = skipAnimation || seen

  useEffect(() => {
    const el = ref.current
    if (!el || skipAnimation) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [skipAnimation])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : undefined }}
      className={cn(
        "transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}
