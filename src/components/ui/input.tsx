import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "@/lib/utils"

// Estado de erro sem cor: contorno mais grosso e sólido (aria-invalid).
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-md border border-line-strong bg-transparent px-3.5 text-base text-fg transition-colors outline-none placeholder:text-fg-faint hover:border-fg-muted focus-visible:border-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-2 aria-invalid:border-fg",
        className
      )}
      {...props}
    />
  )
}

export { Input }
