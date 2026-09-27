"use client"

import { useState, type FormEvent } from "react"
import { AlertCircle, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { buildWhatsAppUrl } from "@/lib/site"
import { Reveal } from "./Reveal"
import { Kicker, Section } from "./Section"

type Lead = { nome: string; negocio: string; whatsapp: string }
type Errors = Partial<Record<keyof Lead, string>>

const EMPTY: Lead = { nome: "", negocio: "", whatsapp: "" }

/** Formata como (11) 91234-5678 enquanto o usuário digita. */
function formatWhatsapp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function validate(lead: Lead): Errors {
  const errors: Errors = {}
  if (lead.nome.trim().length < 2) errors.nome = "Informe seu nome."
  if (lead.negocio.trim().length < 2) errors.negocio = "Informe o nome do seu negócio."
  const digits = lead.whatsapp.replace(/\D/g, "")
  if (digits.length < 10) errors.whatsapp = "Informe um WhatsApp com DDD."
  return errors
}

function Field({
  id,
  label,
  error,
  ...inputProps
}: {
  id: keyof Lead
  label: string
  error?: string
} & React.ComponentProps<typeof Input>) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1.5 text-sm font-semibold">
          <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactSection() {
  const [lead, setLead] = useState<Lead>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function update(field: keyof Lead, value: string) {
    setLead((current) => ({ ...current, [field]: value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate(lead)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const nome = lead.nome.trim()
    const negocio = lead.negocio.trim()
    const message =
      `Olá! Me chamo ${nome}, da ${negocio}. Vim pela landing page e quero saber mais sobre o KirvoAgenda. ` +
      `Meu WhatsApp é ${lead.whatsapp}.`

    // Sem backend/e-mail dedicado pra essa landing: o lead vai direto pro WhatsApp,
    // já com a mensagem pronta, numa aba nova (permitido por ser dentro do próprio submit).
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer")
    setSent(true)
    setLead(EMPTY)
  }

  return (
    <Section id="contato" tone="light">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <Kicker>Contato</Kicker>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
            Quer ser uma das primeiras barbearias?
          </h2>
          <p className="text-fg-muted mt-6 max-w-md text-lg leading-relaxed text-pretty">
            Deixe seu contato e a gente chama você no WhatsApp para começar o teste gratuito.
          </p>
        </Reveal>

        {/* mb no mobile: dá espaço pro botão flutuante do WhatsApp não cobrir o CTA "Quero ser piloto" */}
        <Reveal delay={120} className="mb-24 sm:mb-0">
          {sent ? (
            <div
              role="status"
              className="border-fg flex flex-col items-start gap-4 rounded-md border-2 p-8"
            >
              <span className="bg-fg text-surface flex size-10 items-center justify-center rounded-full">
                <Check className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold tracking-tight">Abrimos o WhatsApp pra você.</h3>
              <p className="text-fg-muted leading-relaxed">
                Se não abriu numa nova aba, confira o bloqueador de pop-ups do navegador.
              </p>
              <Button variant="outline" onClick={() => setSent(false)}>
                Enviar outro contato
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border-line-strong space-y-6 rounded-md border p-6 sm:p-8"
            >
              <Field
                id="nome"
                label="Seu nome"
                autoComplete="name"
                placeholder="Como devemos te chamar?"
                value={lead.nome}
                onChange={(event) => update("nome", event.target.value)}
                error={errors.nome}
              />
              <Field
                id="negocio"
                label="Nome do negócio"
                autoComplete="organization"
                placeholder="Ex.: Barbearia do Zé"
                value={lead.negocio}
                onChange={(event) => update("negocio", event.target.value)}
                error={errors.negocio}
              />
              <Field
                id="whatsapp"
                label="WhatsApp"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(00) 00000-0000"
                value={lead.whatsapp}
                onChange={(event) => update("whatsapp", formatWhatsapp(event.target.value))}
                error={errors.whatsapp}
              />
              <Button type="submit" size="lg" className="w-full">
                Quero ser piloto
                <ArrowRight />
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
