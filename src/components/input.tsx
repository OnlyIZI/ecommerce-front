import { HTMLAttributes, InputHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "@/lib/utils"

/* __________________________root_________________________*/
interface InputRootProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof inputRootVariants> {
    children?: React.ReactNode
    error?: string
}

const inputRootVariants = cva("flex flex-col items-start gap-1", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export const InputRoot = React.forwardRef<HTMLDivElement, InputRootProps>(
    ({ variant, className, error, children, ...props }, ref) => {
        return (
            <div
                {...props}
                ref={ref}
                className={cn(inputRootVariants({ variant, className }))}
            >
                {children}
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
        )
    }
)

/* __________________________container_________________________*/
interface InputContainerProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof inputContainerVariants> {
    children?: React.ReactNode
}

const inputContainerVariants = cva(
    "flex items-center justify-center rounded-xl border p-2 outline-1 focus-within:outline",
    {
        variants: {
            variant: {
                default: "",
                error: "border-red-500 outline-red-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export const InputContainer = React.forwardRef<
    HTMLDivElement,
    InputContainerProps
>(({ variant, className, children, ...props }, ref) => {
    return (
        <div
            {...props}
            ref={ref}
            className={cn(inputContainerVariants({ variant, className }))}
        >
            {children}
        </div>
    )
})

/* __________________________content_________________________*/
interface InputContentProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof inputContentVariants> {
    children?: React.ReactNode
}

const inputContentVariants = cva("", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export const InputContent = React.forwardRef<HTMLDivElement, InputContentProps>(
    ({ variant, className, children, ...props }, ref) => {
        return (
            <div
                {...props}
                ref={ref}
                className={cn(inputContentVariants({ variant, className }))}
            >
                {children}
            </div>
        )
    }
)

/* __________________________input_________________________*/
interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {}

const inputVariants = cva("mx-1 bg-transparent focus:outline-none", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ variant, className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                {...props}
                className={cn(inputVariants({ className, variant }))}
            />
        )
    }
)
