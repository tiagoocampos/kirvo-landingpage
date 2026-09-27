import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/*
 * As cores vêm dos tokens de tom (fg/surface): dentro de uma seção clara o botão
 * "default" é preto com texto branco; dentro de uma seção escura ele inverte
 * sozinho para branco com texto preto (ver data-tone em globals.css).
 */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-fg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-fg text-surface hover:bg-fg/85",
        outline: "border-fg bg-transparent text-fg hover:bg-tint",
        ghost: "text-fg hover:bg-tint",
        link: "text-fg underline underline-offset-4 hover:no-underline",
      },
      size: {
        default: "h-10 gap-2 px-4",
        sm: "h-9 gap-1.5 px-3.5 text-[0.8125rem]",
        lg: "h-12 gap-2 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
