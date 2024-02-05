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
const RootProps = cva("", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

interface AccordionRootProps
    extends React.HTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof RootProps> {
    children?: React.ReactNode
}

const AccordionRoot = React.forwardRef<HTMLButtonElement, AccordionRootProps>(
    ({ children, className, variant, ...props }, ref) => {
        return (
            <AccordionProvider>
                <button ref={ref} className={cn({ variant })} {...props}>
                    {children}
                </button>
            </AccordionProvider>
        )
    }
)

// ____________________ Trigger ____________________

const triggerVariants = cva("flex items-center gap-1", {
    variants: {
        variant: {
            default: "bg-red-400 hover:bg-red-600",
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
        <div onClick={handleState} className={cn(triggerVariants({ variant }))}>
            <LuChevronRight className="h-4 w-4" />
            <Comp ref={ref} className={cn(className)} {...props}></Comp>
        </div>
    )
})

AccordionTrigger.displayName = "AccordionTrigger"

// ____________________ Content ____________________

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    AccordionContentProps
>(({ className, children, ...props }, ref) => {
    const { isOpen } = React.useContext(AccordionContext)

    return (
        isOpen && (
            <div ref={ref} className={cn(className)} {...props}>
                {children}
            </div>
        )
    )
})

AccordionContent.displayName = "AccordionContent"

// ____________________ Item ____________________

interface ItemProps extends React.HTMLAttributes<HTMLElement> {
    asChild?: boolean
}
const AccordionItem = React.forwardRef<HTMLDivElement, ItemProps>(
    ({ className, asChild, ...props }, ref) => {
        const Comp = asChild ? Slot : "div"

        return (
            <Comp ref={ref} className={cn(className)} {...props} />

        )
    }
)

AccordionItem.displayName = "AccordionItem"

export { AccordionRoot, AccordionTrigger, AccordionContent, AccordionItem }
