"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface LanguageDropdownProps {
  onOpenChange: (open: boolean) => void
  isOpen: boolean
}

export default function LanguageDropdown({ onOpenChange, isOpen }: LanguageDropdownProps) {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "fr" as const, name: "Français", flag: "🇫🇷" },
    { code: "ru" as const, name: "Русский", flag: "🇷🇺" },
  ]

  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-50">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={language === lang.code ? "bg-accent" : ""}
          >
            {/* Show flags only on desktop */}
            <span className="mr-2 hidden md:inline">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
