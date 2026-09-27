import { Check, Lock, Scissors } from "lucide-react"
import { cn } from "@/lib/utils"

// Conteúdo puramente ilustrativo (mockup da tela de agendamento do cliente).
const SERVICES = [
  { name: "Corte", duration: "40 min", selected: true },
  { name: "Barba", duration: "30 min", selected: false },
  { name: "Corte + barba", duration: "60 min", selected: false },
]

const PROFESSIONALS = [
  { initials: "RA", name: "Rafa", selected: true },
  { initials: "DI", name: "Diego", selected: false },
  { initials: "BR", name: "Bruno", selected: false },
]

const SLOTS = [
  { time: "09:00", state: "taken" },
  { time: "09:40", state: "free" },
  { time: "10:20", state: "selected" },
  { time: "11:00", state: "free" },
  { time: "11:40", state: "taken" },
  { time: "14:00", state: "free" },
] as const

function Label({ children }: { children: string }) {
  return (
    <p className="text-fg-muted mb-2.5 text-[0.6875rem] font-medium tracking-[0.16em] uppercase">
      {children}
    </p>
  )
}

/** Mockup em preto e branco da tela pública de agendamento. Decorativo. */
export function BookingMockup({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative mx-auto w-full max-w-md", className)}>
      <div
        data-tone="dark"
        className="bg-surface text-fg border-fg/20 rounded-md border shadow-[0_30px_60px_-30px_rgba(10,10,10,0.6)]"
      >
        {/* barra de endereço */}
        <div className="border-line flex items-center gap-2 border-b px-4 py-3">
          <span className="flex gap-1.5">
            <span className="border-line-strong size-2.5 rounded-full border" />
            <span className="border-line-strong size-2.5 rounded-full border" />
            <span className="border-line-strong size-2.5 rounded-full border" />
          </span>
          <span className="bg-tint text-fg-muted ml-2 flex flex-1 items-center gap-1.5 rounded-md px-3 py-1 text-xs">
            <Lock className="size-3" />
            sua-barbearia
          </span>
        </div>

        <div className="space-y-6 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="bg-fg text-surface flex size-9 items-center justify-center rounded-md">
              <Scissors className="size-4" />
            </span>
            <div>
              <p className="text-sm leading-tight font-semibold">Agendar horário</p>
              <p className="text-fg-muted text-xs">Escolha e confirme em segundos</p>
            </div>
          </div>

          <div>
            <Label>1 · Serviço</Label>
            <div className="space-y-2">
              {SERVICES.map((service) => (
                <div
                  key={service.name}
                  className={cn(
                    "flex items-center justify-between rounded-md border px-3.5 py-2.5 text-sm",
                    service.selected ? "border-fg border-2 font-medium" : "border-line-strong text-fg-muted"
                  )}
                >
                  <span>{service.name}</span>
                  <span className="text-xs">{service.duration}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>2 · Profissional</Label>
            <div className="flex gap-2">
              {PROFESSIONALS.map((pro) => (
                <div
                  key={pro.name}
                  className={cn(
                    "flex flex-1 items-center gap-2 rounded-md border px-2.5 py-2 text-sm",
                    pro.selected ? "border-fg border-2 font-medium" : "border-line-strong text-fg-muted"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-6 items-center justify-center rounded-full text-[0.625rem] font-semibold",
                      pro.selected ? "bg-fg text-surface" : "border-line-strong border"
                    )}
                  >
                    {pro.initials}
                  </span>
                  {pro.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label>3 · Horário</Label>
            <div className="grid grid-cols-3 gap-2">
              {SLOTS.map((slot) => (
                <div
                  key={slot.time}
                  className={cn(
                    "rounded-md border py-2 text-center text-sm tabular-nums",
                    slot.state === "selected" && "bg-fg text-surface border-fg font-semibold",
                    slot.state === "free" && "border-line-strong",
                    slot.state === "taken" && "border-line text-fg-faint line-through"
                  )}
                >
                  {slot.time}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-fg text-surface flex h-11 items-center justify-center gap-2 rounded-md text-sm font-medium">
            <Check className="size-4" />
            Confirmar horário
          </div>
        </div>
      </div>

      {/* aviso de agendamento recebido */}
      <div
        data-tone="light"
        className="bg-surface text-fg border-fg absolute -bottom-6 -left-3 flex items-center gap-3 rounded-md border px-4 py-3 shadow-[0_18px_40px_-20px_rgba(10,10,10,0.5)] sm:-left-10"
      >
        <span className="bg-fg text-surface flex size-8 items-center justify-center rounded-full">
          <Check className="size-4" />
        </span>
        <div>
          <p className="text-sm leading-tight font-semibold">Agendamento confirmado</p>
          <p className="text-fg-muted text-xs">Hoje · 10:20 · Corte com Rafa</p>
        </div>
      </div>
    </div>
  )
}
