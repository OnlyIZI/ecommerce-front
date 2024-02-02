"use client"
import { useTheme } from "next-themes"

export const HeaderAdmin = () => {
  const { setTheme } = useTheme()

  return (
    <header>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </header>
  )
}
