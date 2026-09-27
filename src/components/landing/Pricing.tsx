import { ArrowRight, Check } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"
import { Section, SectionHeading } from "./Section"

/*
 * ⚠️ PREÇOS AINDA NÃO DEFINIDOS.
 * Para preencher: troque `price` (ex.: "R$ 00,00") e, se quiser, `period` em cada plano.
 * Enquanto `price` for null, o card mostra "Em breve" + "[preço a definir]".
 * Nomes dos planos e a divisão de benefícios abaixo são apenas um layout de exemplo.
 */
type Plan = {
  name: string
  description: string
  price: string | null
  period: string
  priceNote?: string
  benefits: string[]
  cta: string
  highlighted?: boolean
}

const PLANS: Plan[] = [
  {
    name: "Teste grátis",
    description: "Para conhecer o KirvoAgenda funcionando na sua barbearia.",
    price: "Grátis",
    period: "",
    priceNote: "[duração do teste a definir]",
    benefits: [
      "Link próprio de agendamento",
      "Cadastro de profissionais e serviços",
      "Horários de trabalho por profissional",
      "Painel de agenda visual",
    ],
    cta: "Começar grátis",
  },
  {
    name: "Essencial",
    description: "Para barbearias pequenas que querem sair do caderno.",
    price: null,
    period: "/mês",
    benefits: [
      "Tudo do teste grátis",
      "Agendamento online 24h",
      "Confirmação automática",
      "[benefício a definir]",
    ],
    cta: "Quero ser piloto",
  },
  {
    name: "Completo",
    description: "Para barbearias com equipe e mais volume de clientes.",
    price: null,
    period: "/mês",
    benefits: [
      "Tudo do plano Essencial",
      "Várias agendas de profissionais",
      "Histórico de clientes",
      "[benefício a definir]",
    ],
    cta: "Quero ser piloto",
    highlighted: true,
  },
]

function PlanCard({ plan }: { plan: Plan }) {
  return (
    // O plano em destaque inverte o tom (branco dentro da seção preta).
    <article
      data-tone={plan.highlighted ? "light" : "dark"}
      className={cn(
        "bg-surface text-fg flex h-full flex-col rounded-md border p-7 sm:p-8",
        plan.highlighted ? "border-fg" : "border-line-strong"
      )}
    >
      <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
      <p className="text-fg-muted mt-2 min-h-12 leading-relaxed">{plan.description}</p>

      <div className="border-line my-7 border-y py-6">
        {plan.price ? (
          <p className="font-display text-5xl leading-none tracking-tight">
            {plan.price}
            {plan.period && <span className="text-fg-muted font-sans text-base">{plan.period}</span>}
          </p>
        ) : (
          <>
            <p className="font-display text-5xl leading-none tracking-tight">Em breve</p>
            <p className="text-fg-muted mt-2 text-sm">[preço a definir]</p>
          </>
        )}
        {plan.price && plan.priceNote && (
          <p className="text-fg-muted mt-2 text-sm">{plan.priceNote}</p>
        )}
      </div>

      <ul className="flex-1 space-y-3.5">
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3 text-[0.9375rem]">
            <Check className="mt-0.5 size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <a href="#contato" className={cn(buttonVariants({ size: "lg" }), "mt-8 w-full")}>
        {plan.cta}
        <ArrowRight />
      </a>
    </article>
  )
}

export function Pricing() {
  return (
    <Section id="precos" tone="dark">
      <Reveal>
        <SectionHeading
          kicker="Preços"
          title="Comece testando. O preço a gente conversa com quem vier primeiro."
          description="Os valores dos planos ainda estão sendo definidos. As primeiras barbearias piloto entram com teste gratuito e ajudam a moldar o produto."
        />
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {PLANS.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 80}>
            <PlanCard plan={plan} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
