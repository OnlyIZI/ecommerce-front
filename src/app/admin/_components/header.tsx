"use client"
import { Bell } from "@/icons/bell"
import { Moon } from "@/icons/moon"
import { SideBar } from "@/icons/sideBar"
import { SideBarReverse } from "@/icons/sideBarReverse"
import { Star } from "@/icons/star"
import { Sun } from "@/icons/sun"
import { useTheme } from "next-themes"

export const HeaderAdmin = () => {
  const { theme, setTheme } = useTheme()

  function handleToggle() {
    if (theme == "light") return setTheme("dark")
    return setTheme("light")
  }

  return (
    <section className="flex h-14 w-full items-center justify-between px-8">
      <div className="flex gap-4">
        <button>
          <SideBar width={20} height={20} />
        </button>
        <button>
          <Star width={20} height={20} />
        </button>
        <p>Dashboard</p>
        <p>/</p>
        <p>Default</p>
      </div>
      <div className="flex gap-4">
        <button onClick={handleToggle}>
          <Sun width={20} height={20} className="flex dark:hidden" />
          <Moon width={20} height={20} className="hidden dark:flex" />
        </button>
        <button>
          <Bell width={20} height={20} />
        </button>
        <button>
          <SideBarReverse width={20} height={20} />
        </button>
      </div>
    </section>
  )
}
