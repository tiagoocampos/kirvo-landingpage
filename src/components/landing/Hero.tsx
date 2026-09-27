import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { BookingMockup } from "./BookingMockup"
import { Section } from "./Section"

export function Hero() {
  return (
    <Section id="inicio" tone="light" className="overflow-hidden pt-14 pb-24 md:pt-24 md:pb-32">
      <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div>
          <p className="text-fg-muted mb-6 text-xs font-medium tracking-[0.18em] uppercase">
            Agendamento online para barbearias
          </p>
          <h1 className="font-display text-[3.25rem] leading-[0.98] tracking-tight text-balance sm:text-7xl lg:text-[5.5rem]">
            Chega de agenda perdida no WhatsApp.
          </h1>
          <p className="text-fg-muted mt-8 max-w-xl text-lg leading-relaxed text-pretty sm:text-xl">
            O KirvoAgenda dá à sua barbearia um link de agendamento: o cliente escolhe serviço,
            profissional e horário livre, e você para de responder mensagem pra marcar corte.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className={buttonVariants({ size: "lg" })}>
              Começar grátis
              <ArrowRight />
            </a>
            <a href="#como-funciona" className={buttonVariants({ size: "lg", variant: "outline" })}>
              Ver como funciona
            </a>
          </div>

          <p className="text-fg-muted mt-6 text-sm">
            Teste grátis. Estamos abrindo vagas para as primeiras barbearias piloto.
          </p>
        </div>

        <BookingMockup className="mt-4 lg:mt-0" />
      </div>
    </Section>
  )
}
