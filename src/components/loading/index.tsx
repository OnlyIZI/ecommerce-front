import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { LuRotateCw } from "react-icons/lu"

const loadingVariants = cva("animate-spin text-primary", {
    variants: {
        size: {
            sm: "h-4 w-4",
            md: "h-6 w-6",
            lg: "h-8 w-8",
            xl: "h-10 w-10",
        },
    },
    defaultVariants: {
        size: "md",
    },
})

interface loadingProps extends VariantProps<typeof loadingVariants> {}

export const Loading = ({ size }: loadingProps) => {
    return <LuRotateCw className={cn(loadingVariants({ size }))} />
}
