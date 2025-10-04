"use client"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface MobileMenuProps {
  onNavigate: (sectionId: string) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function MobileMenu({ onNavigate, isOpen, setIsOpen }: MobileMenuProps) {
  const { t } = useLanguage()

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId)
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden relative z-50">
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Menu Dropdown - Full width using viewport units */}
      {isOpen && (
        <div
          className="fixed top-16 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-b dark:border-gray-700 shadow-lg z-40 md:hidden"
          style={{
            left: 0,
            right: 0,
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
          }}
        >
          <div className="py-4 space-y-2">
            <button
              onClick={() => handleNavigate("about")}
              className="block w-full text-left px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors font-medium" // Changed color to match others
            >
              {t("about")}
            </button>
            <button
              onClick={() => handleNavigate("experience")}
              className="block w-full text-left px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              {t("experience")}
            </button>
            <button
              onClick={() => handleNavigate("research")}
              className="block w-full text-left px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              {t("researches")}
            </button>
            <button
              onClick={() => handleNavigate("volunteer")}
              className="block w-full text-left px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              {t("volunteer")}
            </button>
            <button
              onClick={() => handleNavigate("contact")}
              className="block w-full text-left px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              {t("contact")}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
