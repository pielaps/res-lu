"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Sun className="h-5 w-5 transition-all duration-200" />
      ) : (
        <Moon className="h-5 w-5 transition-all duration-200" />
      )}
    </Button>
  )
}
