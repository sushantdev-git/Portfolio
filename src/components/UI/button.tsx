import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-heading text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none active:translate-y-[2px]",
  {
    variants: {
      variant: {
        default:
          "bg-card text-foreground border-2 border-active shadow-tactile hover:bg-card-hover active:shadow-tactile-active",
        primary:
          "bg-brand-blue text-white border-2 border-active shadow-tactile hover:bg-brand-blue-hover active:shadow-tactile-active",
        success:
          "bg-brand-green text-white border-2 border-active shadow-tactile hover:bg-brand-green-hover active:shadow-tactile-active",
        warning:
          "bg-brand-orange text-white border-2 border-active shadow-tactile hover:bg-brand-orange-hover active:shadow-tactile-active",
        ghost:
          "hover:bg-card-hover text-foreground active:translate-y-0 active:bg-transparent",
        link:
          "text-brand-blue underline-offset-4 hover:underline active:translate-y-0",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-sm px-4 text-xs shadow-tactile-sm active:translate-y-[1px] active:shadow-tactile-sm-active",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10 border-2 border-active shadow-tactile active:translate-y-[2px] active:shadow-tactile-active",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
