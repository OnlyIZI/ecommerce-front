"use client"

// hooks
import { UseMediaQuery } from "@/hooks/useMediaQuery"
import { ElementRef, useRef, useState } from "react"
import { cn } from "@/lib/utils"

// icons
import { LuChevronLeft. } from "react-icons/lu"
import { UserAvatar } from "@/app/admin/_components/asideMenu/_components/userAvatar"

export const AsideMenu = () => {
    const isMobile = UseMediaQuery("(max-width: 768px")

    const sidebarRef = useRef<ElementRef<"aside">>(null)

    const [isCollapse, setIsCollapse] = useState<boolean>(false)

    const collapse = () => {
        if (sidebarRef.current && isCollapse) {
            setIsCollapse(false)
            sidebarRef.current.style.width = isMobile ? "100%" : "240px"
        }

        if (sidebarRef.current && !isCollapse) {
            setIsCollapse(true)
            sidebarRef.current.style.width = "50px"
        }
    }

    return (
        <>
            <aside
                ref={sidebarRef}
                className={cn(
                    "group/aside relative flex h-full w-60 flex-col bg-background transition-all duration-300 ease-in-out",
                    isMobile && "w-0"
                )}
            >
                {/* sidebar button */}
                <div
                    role="button"
                    onClick={collapse}
                    className={cn(
                        "absolute -right-2 top-3 z-50 cursor-pointer rounded-full bg-border opacity-0 transition-all duration-100 ease-in hover:bg-border/40 group-hover/aside:opacity-100"
                    )}
                >
                    <LuChevronLeft
                        role="button"
                        className={cn(
                            "h-6 w-6 p-0.5",
                            isCollapse && "rotate-180"
                        )}
                    />
                </div>
                {/* sidebar border */}
                <div className="absolute right-0 top-0 h-full w-0.5 bg-border group-hover/aside:w-1" />
                <UserAvatar />
                <section>
                    {/* #TODO adicionar componente de seções */}
                    <div>Seção 1</div>
                    <div>Seção 2</div>
                </section>
            </aside>
        </>
    )
}
