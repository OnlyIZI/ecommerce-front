import { InputHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "@/lib/utils"

type InputProps = InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof inputVariants> & {
        error?: string
    }

const inputVariants = cva(
    "p-2 border outline-none rounded-xl focus:shadow-md",
    {
        variants: {
            variant: {
                default: "bg-input",
                error: "border-red-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ variant, className, error, ...props }, ref) => {
        return (
            <div className="flex flex-col items-start gap-1">
                <input
                    {...props}
                    className={cn(inputVariants({ variant, className }))}
                    ref={ref}
                />
                {error && (
                    <p className="text-sm text-red-500 shadow-md">{error}</p>
                )}
            </div>
        )
    }
)
