import { Reveal } from "./Reveal"
import { Section, SectionHeading } from "./Section"

const OWNER_STEPS = [
  {
    title: "Cadastre sua barbearia",
    text: "Nome, endereço e os serviços que você oferece, com a duração de cada um.",
  },
  {
    title: "Configure profissionais e horários",
    text: "Adicione a equipe e defina o expediente de cada barbeiro.",
  },
  {
    title: "Compartilhe seu link",
    text: "Coloque no Instagram, no WhatsApp e no Google. É por ele que o cliente agenda.",
  },
  {
    title: "Receba agendamentos",
    text: "Os horários entram sozinhos na agenda, já confirmados e sem conflito.",
  },
]

const CLIENT_STEPS = [
  { title: "Acessa o link", text: "Direto no celular, sem baixar aplicativo." },
  { title: "Escolhe serviço, profissional e horário", text: "Só aparecem horários livres de verdade." },
  { title: "Confirma", text: "Pronto: o horário está reservado." },
]

type Step = { title: string; text: string }

function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="border-line border-t">
      {steps.map((step, index) => (
        <li key={step.title} className="border-line flex gap-5 border-b py-7 sm:gap-7">
          <span
            aria-hidden="true"
            className="font-display text-fg-faint w-14 shrink-0 text-5xl leading-none tabular-nums sm:w-16 sm:text-6xl"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="pt-1">
            <h4 className="text-lg font-semibold tracking-tight">{step.title}</h4>
            <p className="text-fg-muted mt-1.5 leading-relaxed">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function HowItWorks() {
  return (
    <Section id="como-funciona" tone="dark">
      <Reveal>
        <SectionHeading
          kicker="Como funciona"
          title="Do cadastro ao primeiro agendamento em poucos passos."
        />
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h3 className="text-fg-muted mb-6 text-xs font-medium tracking-[0.18em] uppercase">
            Para o dono da barbearia
          </h3>
          <StepList steps={OWNER_STEPS} />
        </Reveal>
        <Reveal delay={120}>
          <h3 className="text-fg-muted mb-6 text-xs font-medium tracking-[0.18em] uppercase">
            Para o cliente final
          </h3>
          <StepList steps={CLIENT_STEPS} />
        </Reveal>
      </div>
    </Section>
  )
}
