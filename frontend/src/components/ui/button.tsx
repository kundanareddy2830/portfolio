import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline" | "ghost"
  size?: "default" | "icon" | "sm" | "lg"
}

const buttonVariants = ({
  variant = "default",
  size = "default"
}: {
  variant?: "default" | "primary" | "outline" | "ghost"
  size?: "default" | "icon" | "sm" | "lg"
} = {}) =>
  cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : variant === "outline"
      ? "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100"
      : variant === "ghost"
      ? "bg-transparent hover:bg-gray-100"
      : "bg-gray-100 hover:bg-gray-200",
    size === "icon"
      ? "h-8 w-8 p-0"
      : size === "sm"
      ? "h-7 px-2 text-xs"
      : size === "lg"
      ? "h-12 px-6 text-base"
      : "h-10 px-4",
  );

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
