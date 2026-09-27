function resolveSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL
  if (url) return url

  // Sem a env em produção, metadataBase, robots.txt e sitemap.xml apontariam
  // silenciosamente para localhost — falha alto e cedo em vez disso.
  if (process.env.NODE_ENV === "production") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL não está definida. Configure-a antes do build de produção " +
        "(ex.: https://seu-dominio.com.br) — ver .env.example."
    )
  }
  return "http://localhost:3000"
}

// URL pública do site (usada em metadataBase, robots e sitemap).
export const SITE_URL = resolveSiteUrl()

export const SITE_NAME = "KirvoAgenda"
export const SITE_TITLE = "KirvoAgenda — Agendamento online para barbearias"
export const SITE_DESCRIPTION =
  "Chega de agenda perdida no WhatsApp. O KirvoAgenda dá à sua barbearia um link de agendamento online: o cliente escolhe serviço, profissional e horário livre."

// Número de WhatsApp para contato (formato exigido pelo wa.me: DDI+DDD+número, sem símbolos).
export const WHATSAPP_NUMBER = "5554999067417"
export const WHATSAPP_DEFAULT_MESSAGE = "Olá! Vim pela landing page e quero saber mais sobre o Kirvo."

export function buildWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = buildWhatsAppUrl()
