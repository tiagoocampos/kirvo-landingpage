"use client"

import { useRef, useState, type MouseEvent } from "react"
import { Menu, X } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { CTA, NAV_LINKS } from "./nav"
import { Container } from "./Section"
import { Wordmark } from "./Wordmark"

export function Header() {
  const [open, setOpen] = useState(false)
  // O Sheet trava o scroll da página enquanto está aberto; então navegamos pra âncora
  // só depois que ele terminou de fechar (onOpenChangeComplete).
  const pendingHash = useRef<string | null>(null)

  function handleMobileLink(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault()
    pendingHash.current = href
    setOpen(false)
  }

  function handleOpenChangeComplete(isOpen: boolean) {
    if (isOpen || !pendingHash.current) return
    const hash = pendingHash.current
    pendingHash.current = null
    document.querySelector(hash)?.scrollIntoView()
    history.replaceState(null, "", hash)
  }

  return (
    <header
      data-tone="light"
      className="bg-surface/90 border-line sticky top-0 z-40 border-b backdrop-blur-md"
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Wordmark className="text-fg" />

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-fg-muted hover:text-fg text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href={CTA.href} className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}>
          {CTA.label}
        </a>

        <Sheet open={open} onOpenChange={setOpen} onOpenChangeComplete={handleOpenChangeComplete}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="-mr-2 md:hidden" />}
            aria-label="Abrir menu"
          >
            <Menu className="size-6" />
          </SheetTrigger>

          <SheetContent side="right" showCloseButton={false} className="w-[86%] max-w-sm gap-0 p-0">
            <div className="border-line flex h-16 items-center justify-between border-b px-5">
              <Wordmark className="text-fg" />
              <SheetClose
                render={<Button variant="ghost" size="icon" className="-mr-2" />}
                aria-label="Fechar menu"
              >
                <X className="size-6" />
              </SheetClose>
            </div>

            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">Navegação principal do site</SheetDescription>

            <nav aria-label="Menu mobile" className="flex flex-col px-5 pt-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleMobileLink(event, link.href)}
                  className="border-line text-fg border-b py-5 text-2xl font-medium tracking-tight"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto p-5">
              <a
                href={CTA.href}
                onClick={(event) => handleMobileLink(event, CTA.href)}
                className={cn(buttonVariants({ size: "lg" }), "w-full")}
              >
                {CTA.label}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
