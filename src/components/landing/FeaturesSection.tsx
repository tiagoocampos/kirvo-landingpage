import { CalendarClock, CalendarDays, CheckCheck, Clock, Contact, Users } from "lucide-react"
import { Reveal } from "./Reveal"
import { Section, SectionHeading } from "./Section"

const FEATURES = [
  {
    icon: CalendarClock,
    title: "Agendamento online 24h",
    text: "Seu link fica no ar o tempo todo. O cliente marca de madrugada, no ônibus ou no intervalo, sem esperar você responder.",
  },
  {
    icon: Clock,
    title: "Só horários realmente livres",
    text: "O motor de disponibilidade cruza expediente, duração do serviço e agendamentos existentes. Horário duplicado deixa de existir.",
  },
  {
    icon: CheckCheck,
    title: "Confirmação automática",
    text: "O cliente escolheu, o horário está reservado. Sem você precisar conferir, responder e confirmar na mão.",
  },
  {
    icon: Users,
    title: "Profissionais, serviços e horários",
    text: "Cadastre cada barbeiro com seus serviços e sua jornada de trabalho. Cada um tem a própria agenda.",
  },
  {
    icon: Contact,
    title: "Histórico de clientes",
    text: "Saiba quem já passou pela cadeira, com quem e quando. Chega de procurar no meio de conversas antigas.",
  },
  {
    icon: CalendarDays,
    title: "Painel de agenda visual",
    text: "Veja o dia e a semana da equipe num só lugar, num relance, sem caderno e sem planilha.",
  },
]

export function FeaturesSection() {
  return (
    <Section id="recursos" tone="light">
      <Reveal>
        <SectionHeading
          kicker="Funcionalidades"
          title="Tudo que a agenda da barbearia precisa. Nada além."
          description="Feito para o ritmo de quem trabalha com horário marcado: simples pro cliente, claro pra equipe."
        />
      </Reveal>

      <div className="bg-line border-line mt-14 grid gap-px overflow-hidden rounded-md border sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <Reveal key={feature.title} delay={(index % 3) * 80} className="bg-surface">
            <article className="h-full p-7 sm:p-9">
              <feature.icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="text-fg-muted mt-2.5 leading-relaxed">{feature.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
