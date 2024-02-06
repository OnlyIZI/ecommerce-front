import { InputHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "@/lib/utils"

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {
    startContent?: React.ReactNode
    endContent?: React.ReactNode
    error?: string
}

const inputVariants = cva(
    "p-2 border rounded-xl outline-1 focus-within:outline",
    {
        variants: {
            variant: {
                default: "bg-input",
                error: "border-red-500 outline-red-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        { variant, className, error, startContent, endContent, ...props },
        ref
    ) => {
        return (
            <div className="flex flex-col items-start gap-1">
                <div
                    className={cn(
                        `flex items-center justify-center`,
                        inputVariants({ variant, className })
                    )}
                >
                    {startContent}
                    <input
                        {...props}
                        className="mx-1 bg-transparent focus:outline-none"
                        ref={ref}
                    />
                    {endContent}
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
        )
    }
)
