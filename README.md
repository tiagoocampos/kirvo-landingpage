# KirvoAgenda — Landing page

Landing page de uma página só (scroll com âncoras) do KirvoAgenda.
**Next.js (App Router) + TypeScript**, Tailwind CSS v4 (`@tailwindcss/postcss`) e shadcn/ui.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # build de produção
npm run start    # serve o build
npm run lint
```

## ⚠️ Fonte Keronige — arquivos necessários antes de rodar

```
src/assets/fonts/KeronigeRegular.woff2   # next/font/local, usado no site (layout.tsx)
src/assets/fonts/KeronigeRegular.ttf     # next/og (opengraph-image.tsx) só lê ttf/otf/woff
```

Sem o `.woff2`, `npm run dev` e `npm run build` falham com
`Font file not found: Can't resolve '../assets/fonts/KeronigeRegular.woff2'`.
Sem o `.ttf`, falha a geração da imagem de Open Graph (`/opengraph-image`) com um erro
parecido apontando pro `readFile` em `opengraph-image.tsx`.
O Inter vem de `next/font/google` (baixado no build), não precisa de arquivo local.

## Estrutura

```
src/
  app/
    layout.tsx                  # fontes (next/font), <html>, metadata/viewport
    page.tsx                    # monta as seções
    globals.css                 # tokens (@theme), tons claro/escuro
    icon.svg  favicon.ico  robots.ts  sitemap.ts
    opengraph-image.tsx         # imagem de compartilhamento (OG/Twitter), gerada com next/og
  lib/
    site.ts                     # URL/título/descrição, número e link do WhatsApp
    utils.ts                    # cn()
  components/
    landing/                    # uma seção por arquivo
      Header.tsx (client)       # sticky; menu mobile com Sheet do shadcn
      Hero.tsx, BookingMockup.tsx
      ProblemSection.tsx, FeaturesSection.tsx, HowItWorks.tsx
      Segments.tsx, Pricing.tsx
      ContactSection.tsx (client), Footer.tsx
      WhatsAppButton.tsx         # botão flutuante fixo, em todas as páginas (layout.tsx)
      Section.tsx, Reveal.tsx (client), Wordmark.tsx, nav.ts
    ui/                         # componentes shadcn (button, input, label, sheet)
  assets/fonts/                 # Keronige (ver acima)
```

Só `Header`, `ContactSection`, `Reveal` e o `Sheet` são Client Components; o resto é Server Component.

## Identidade visual

- **Só preto e branco.** `--color-ink: #0a0a0a`, `--color-bg: #ffffff` e variações de opacidade
  (`ink-60`, `ink-10`, `paper-60`, `paper-15`…) em `@theme`. Nenhuma outra cor.
- **Inversão de seção** via `data-tone="light|dark"` (componente `Section`). Dentro de cada tom,
  `text-fg`, `text-fg-muted`, `bg-surface`, `border-line` e os botões se invertem sozinhos.
- **Tipografia:** Keronige (`font-display`) só em H1/H2, números grandes e wordmark; Inter no resto.
- **Raio único:** `rounded-md` em cards, botões e inputs.
- Estados de erro/sucesso do formulário usam contorno mais grosso, peso da fonte e ícone — sem cor.

## Configuração

- `NEXT_PUBLIC_SITE_URL` — URL pública (usada em `metadataBase`, `robots.txt` e `sitemap.xml`).
  Em desenvolvimento cai em `http://localhost:3000`; **em produção (`NODE_ENV=production`) o build
  falha se ela não estiver definida** (`src/lib/site.ts`), pra nunca publicar com URLs de localhost
  nesses arquivos. Defina antes do `npm run build` de produção (ver `.env.example`).
  `src/lib/site.ts` normaliza erros comuns de configuração da plataforma de deploy (espaços,
  aspas coladas no valor, domínio sem `https://`, barra final) — mas se o valor não virar uma URL
  válida mesmo assim, o build falha com uma mensagem dizendo qual valor foi recebido.
- **WhatsApp:** número e mensagem padrão em `WHATSAPP_NUMBER` / `WHATSAPP_DEFAULT_MESSAGE`
  (`src/lib/site.ts`), usados pelo botão flutuante, pelo formulário de contato e pelo rodapé.

## Contato

Não há backend/e-mail dedicado a essa landing: tanto o botão flutuante quanto o formulário de
contato (`ContactSection.tsx`, com os dados preenchidos na mensagem) e o link do rodapé abrem o
WhatsApp (`wa.me`) direto, numa aba nova.

## Pendências (marcadas no código)

- **Preços:** `src/components/landing/Pricing.tsx` — preencha `price` (e `period`) em `PLANS`.
  Enquanto for `null`, mostra "Em breve" + "[preço a definir]". Nomes dos planos, benefícios e
  duração do teste são placeholders.
