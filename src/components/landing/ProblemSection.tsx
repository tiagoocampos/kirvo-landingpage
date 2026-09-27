import { BellOff, CalendarX2, MessageSquareMore, NotebookPen } from "lucide-react"
import { Reveal } from "./Reveal"
import { Section, SectionHeading } from "./Section"

const PAINS = [
  {
    icon: CalendarX2,
    title: "Horário duplicado",
    text: "Dois clientes combinaram o mesmo horário em conversas diferentes. Um deles sai chateado, e a culpa cai na sua agenda.",
  },
  {
    icon: BellOff,
    title: "Cliente esquece e não avisa",
    text: "A cadeira fica vazia e ninguém te avisou a tempo. Cada falta é um corte que você deixou de fazer.",
  },
  {
    icon: MessageSquareMore,
    title: "Tempo perdido confirmando",
    text: "“Tem horário hoje?” “Que horas?” “Com quem?” Dez mensagens pra marcar um corte de quarenta minutos.",
  },
  {
    icon: NotebookPen,
    title: "Histórico no caderno",
    text: "Quem é cliente fiel? Qual foi o último corte? Está tudo espalhado entre o caderno e conversas antigas.",
  },
]

export function ProblemSection() {
  return (
    <Section id="problema" tone="dark">
      <Reveal>
        <SectionHeading
          kicker="O problema"
          title="Sua agenda vive no WhatsApp. Ele não foi feito pra isso."
          description="Cada corte marcado vira uma conversa. Quando a cadeira enche, a bagunça também."
        />
      </Reveal>

      <div className="bg-line border-line mt-14 grid gap-px overflow-hidden rounded-md border sm:grid-cols-2">
        {PAINS.map((pain, index) => (
          <Reveal key={pain.title} delay={index * 80} className="bg-surface">
            <article className="h-full p-7 sm:p-10">
              <pain.icon className="size-7" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{pain.title}</h3>
              <p className="text-fg-muted mt-3 leading-relaxed">{pain.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
