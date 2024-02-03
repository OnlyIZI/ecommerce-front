"use client"

// hooks
import { UseMediaQuery } from "@/hooks/useMediaQuery"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

// icons
import { LuChevronLeft } from "react-icons/lu"

export const AsideMenu = () => {
  const isMobile = UseMediaQuery("(max-width: 768px")

  return (
    <aside
      className={cn(
        "group/aside relative flex h-full w-60 flex-col",
        isMobile && "w-0"
      )}
    >
      {/* sidebar button */}
      <div className={cn("absolute right-2 top-3 bg-se")}>
        <LuChevronLeft className="h-4 w-4" />
      </div>
      {/* sidebar border */}
      <div className="group-hover/aside opacity-0:opacity-100 absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-primary-cyan transition" />
      <section>Profile name</section>
      <section>
        <div>Seção 1</div>
        <div>Seção 2</div>
      </section>
    </aside>
  )
}
