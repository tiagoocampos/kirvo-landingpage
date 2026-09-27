import { Reveal } from "./Reveal"
import { Kicker, Section } from "./Section"

const SEGMENTS = [
  {
    name: "Barbearias",
    text: "Onde o KirvoAgenda nasceu e onde ele já está pronto pra usar.",
    available: true,
  },
  {
    name: "Salões e estúdios de beleza",
    text: "Vários profissionais, vários serviços, a mesma lógica de horário.",
    available: false,
  },
  {
    name: "Clínicas e consultórios",
    text: "Consultas com hora marcada e menos faltas na agenda.",
    available: false,
  },
  {
    name: "Estúdios e aulas",
    text: "Tatuagem, personal trainer, aulas particulares e mais.",
    available: false,
  },
]

export function Segments() {
  return (
    <Section id="segmentos" tone="light">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal>
          <Kicker>Segmentos</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
            Hoje pra barbearias. Amanhã pra qualquer negócio que trabalha com horário marcado.
          </h2>
          <p className="text-fg-muted mt-6 max-w-lg text-lg leading-relaxed text-pretty">
            Começamos por quem conhecemos de perto. O nome é KirvoAgenda, e não “agenda de barbearia”,
            porque a ideia é crescer para outros tipos de negócio, sem data definida.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="border-line border-t">
            {SEGMENTS.map((segment) => (
              <li
                key={segment.name}
                className="border-line flex items-start justify-between gap-6 border-b py-6"
              >
                <div>
                  <h3
                    className={
                      segment.available
                        ? "text-xl font-semibold tracking-tight"
                        : "text-fg-muted text-xl font-medium tracking-tight"
                    }
                  >
                    {segment.name}
                  </h3>
                  <p className="text-fg-muted mt-1.5 max-w-sm leading-relaxed">{segment.text}</p>
                </div>
                <span
                  className={
                    segment.available
                      ? "bg-fg text-surface shrink-0 rounded-md px-3 py-1 text-xs font-medium"
                      : "border-line-strong text-fg-muted shrink-0 rounded-md border border-dashed px-3 py-1 text-xs font-medium"
                  }
                >
                  {segment.available ? "Disponível hoje" : "No radar"}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
