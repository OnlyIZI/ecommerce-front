"use client"

// hooks
import { UseMediaQuery } from "@/hooks/useMediaQuery"
import { ElementRef, useRef, useState } from "react"
import { cn } from "@/lib/utils"

// icons
import { ChevronLeft, ClipboardEdit, Menu } from "lucide-react"
import { UserAvatar } from "@/app/admin/_components/asideMenu/_components/userAvatar"
import {
    AccordionContent,
    AccordionItem,
    AccordionRoot,
    AccordionTrigger,
} from "@/components/accordion"

export const AsideMenu = () => {
    const isMobile = UseMediaQuery("(max-width: 768px")

    const sidebarRef = useRef<ElementRef<"aside">>(null)

    const [isCollapse, setIsCollapse] = useState<boolean>(false)

    const collapse = () => {
        if (sidebarRef.current && isCollapse) {
            setIsCollapse(false)
            sidebarRef.current.style.width = isMobile ? "100%" : "14%"
        }

        if (sidebarRef.current && !isCollapse) {
            setIsCollapse(true)
            sidebarRef.current.style.width = "0%"
        }
    }

    return (
        <>
            <aside
                ref={sidebarRef}
                className={cn(
                    "group/aside relative flex w-60 flex-col bg-background transition-all duration-300 ease-in-out"
                )}
            >
                {/* sidebar button */}
                <div
                    role="button"
                    onClick={collapse}
                    className={cn(
                        "absolute right-2 top-3 z-50 cursor-pointer rounded-md bg-border opacity-0 transition-all duration-100 ease-in hover:bg-border/40 group-hover/aside:opacity-100"
                    )}
                >
                    <ChevronLeft
                        role="button"
                        className={cn(
                            "h-6 w-6 p-0.5",
                            isCollapse && "rotate-180"
                        )}
                    />
                </div>
                {/* sidebar border */}
                <div className="absolute right-0 top-0 h-full w-0.5 bg-border" />
                <UserAvatar />
                <section className="overflow-hidden p-1">
                    <AccordionRoot>
                        <AccordionTrigger>
                            <ClipboardEdit className="h-5 w-5" />
                            Produtos
                        </AccordionTrigger>
                        <AccordionContent>
                            <AccordionItem>Adicionar</AccordionItem>
                            <AccordionItem>Editar</AccordionItem>
                            <AccordionItem>Remover</AccordionItem>
                        </AccordionContent>
                    </AccordionRoot>
                </section>
            </aside>
            {isCollapse && (
                <button onClick={collapse} className="fixed left-1 top-5">
                    <Menu className="h-5 w-5" />
                </button>
            )}
        </>
    )
}
