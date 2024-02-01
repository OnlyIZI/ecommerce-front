"use client";
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <h1 className="font-bold text-red-400">teste</h1>
      <div>
        <button onClick={() => setTheme('light')}>Light</button>
        <br/>
        <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
    </div>
  )
}
