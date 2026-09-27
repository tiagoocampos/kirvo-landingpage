import { WHATSAPP_URL } from "@/lib/site"
import { Container } from "./Section"
import { NAV_LINKS } from "./nav"
import { Wordmark } from "./Wordmark"

export function Footer() {
  return (
    <footer data-tone="dark" className="bg-surface text-fg">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark className="text-4xl sm:text-5xl" />
            <p className="text-fg-muted mt-5 max-w-xs leading-relaxed">
              Agendamento online para quem trabalha com horário marcado. Hoje, para barbearias.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <p className="text-fg-muted mb-4 text-xs font-medium tracking-[0.18em] uppercase">
              Navegue
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-fg-muted hover:text-fg transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-fg-muted mb-4 text-xs font-medium tracking-[0.18em] uppercase">
              Contato
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#contato" className="text-fg-muted hover:text-fg transition-colors">
                  Quero ser piloto
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-muted hover:text-fg transition-colors"
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-line text-fg-muted mt-14 flex flex-col gap-2 border-t pt-6 text-sm sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} KirvoAgenda. Todos os direitos reservados.</span>
        </div>
      </Container>
    </footer>
  )
}
