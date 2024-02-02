"use client"
import { useTheme } from "next-themes"

export const HeaderAdmin = () => {
  const { setTheme } = useTheme()

  return (
    <header>
      <button>mode</button>
    </header>
  )
}
