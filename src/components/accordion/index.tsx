import * as React from "react"

// Icons
import { LuChevronRight } from "react-icons/lu"

// help
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

// Contexts
interface AccordionContextProps {
    isOpen: boolean
    handleState: () => void
}

const AccordionContext = React.createContext<AccordionContextProps>({
    isOpen: false,
    handleState() {},
})

const AccordionProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const handleState = () => {
        setIsOpen(!isOpen)
    }

    return (
        <AccordionContext.Provider value={{ isOpen, handleState }}>
            {children}
        </AccordionContext.Provider>
    )
}

// ____________________ Root ____________________
const rootVariants = cva("w-full rounded-md px-2 py-1", {
    variants: {
        variant: {
            default: "hover:bg-border/10",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

interface AccordionRootProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof rootVariants> {
    children?: React.ReactNode
    asChild?: boolean
}

const AccordionRoot = React.forwardRef<HTMLDivElement, AccordionRootProps>(
    ({ children, className, asChild, variant, ...props }, ref) => {
        const Comp = asChild ? Slot : "div"

        return (
            <AccordionProvider>
                <Comp
                    ref={ref}
                    className={cn(rootVariants({ variant }))}
                    {...props}
                >
                    {children}
                </Comp>
            </AccordionProvider>
        )
    }
)

// ____________________ Trigger ____________________

const triggerVariants = cva("flex items-center gap-1 w-full", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

interface AccordionTriggerProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof triggerVariants> {
    asChild?: boolean
}

const AccordionTrigger = React.forwardRef<
    HTMLDivElement,
    AccordionTriggerProps
>(({ className, asChild, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    const { handleState, isOpen } = React.useContext(AccordionContext)

    return (
        <div
            role="button"
            ref={ref}
            onClick={handleState}
            className={cn(triggerVariants({ variant, className }))}
        >
            <LuChevronRight
                className={`h-4 w-4 transition-all duration-300 ease-in-out ${isOpen && "rotate-90"}`}
            />
            <Comp ref={ref} {...props}></Comp>
        </div>
    )
})

AccordionTrigger.displayName = "AccordionTrigger"

// ____________________ Content ____________________
const contentVariants = cva("flex flex-col items-start px-6", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

interface AccordionContentProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof contentVariants> {
    asChild?: boolean
}

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    AccordionContentProps
>(({ className, asChild, variant, ...props }, ref) => {
    const { isOpen } = React.useContext(AccordionContext)
    const Comp = asChild ? Slot : "div"

    return (
        isOpen && (
            <Comp
                ref={ref}
                className={cn(contentVariants({ variant, className }))}
                {...props}
            />
        )
    )
})

AccordionContent.displayName = "AccordionContent"

// ____________________ Item ____________________
const itemVariants = cva(
    "px-2 py-1 text-start rounded-md font-light text-border hover:text-white w-full",
    {
        variants: {
            variant: {
                default: "hover:bg-border/20",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

interface ItemProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof itemVariants> {
    asChild?: boolean
}
const AccordionItem = React.forwardRef<HTMLButtonElement, ItemProps>(
    ({ className, variant, asChild, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        return (
            <Comp
                ref={ref}
                className={cn(itemVariants({ className, variant }))}
                {...props}
            />
        )
    }
)

AccordionItem.displayName = "AccordionItem"

export { AccordionRoot, AccordionTrigger, AccordionContent, AccordionItem }
