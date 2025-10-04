"use client"

import { useState, useEffect } from "react"
import ThemeToggle from "@/components/theme-toggle"
import LanguageDropdown from "@/components/language-dropdown"
import MobileMenu from "@/components/mobile-menu"
import { useLanguage } from "@/contexts/language-context"

export default function ScrollHeader() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [menuOpenScrollY, setMenuOpenScrollY] = useState(0)
  const [langDropdownOpenScrollY, setLangDropdownOpenScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY

        // If mobile menu is open and user scrolled down more than 8px, close the menu
        if (isMobileMenuOpen && currentScrollY > menuOpenScrollY + 8) {
          setIsMobileMenuOpen(false)
        }

        // If language dropdown is open and user scrolled down more than 9px, close it
        if (isLanguageDropdownOpen && currentScrollY > langDropdownOpenScrollY + 9) {
          setIsLanguageDropdownOpen(false)
        }

        // Normal header visibility logic (only when both menus are closed)
        if (!isMobileMenuOpen && !isLanguageDropdownOpen) {
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down & past threshold
            setIsVisible(false)
          } else {
            // Scrolling up
            setIsVisible(true)
          }
        }

        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY, isMobileMenuOpen, menuOpenScrollY, isLanguageDropdownOpen, langDropdownOpenScrollY])

  // Track when mobile menu opens to record scroll position
  useEffect(() => {
    if (isMobileMenuOpen) {
      setMenuOpenScrollY(window.scrollY)
    }
  }, [isMobileMenuOpen])

  // Track when language dropdown opens to record scroll position
  useEffect(() => {
    if (isLanguageDropdownOpen) {
      setLangDropdownOpenScrollY(window.scrollY)
    }
  }, [isLanguageDropdownOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLanguageDropdownOpenChange = (open: boolean) => {
    setIsLanguageDropdownOpen(open)
    if (open) {
      // Close mobile menu if language dropdown is opened
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-sm border-b dark:border-gray-700 transition-all duration-200 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
            >
              MP
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium transition-colors duration-200"
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
            >
              {t("experience")}
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
            >
              {t("researches")}
            </button>
            <button
              onClick={() => scrollToSection("volunteer")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
            >
              {t("volunteer")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
            >
              {t("contact")}
            </button>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageDropdown onOpenChange={handleLanguageDropdownOpenChange} isOpen={isLanguageDropdownOpen} />
            <MobileMenu onNavigate={scrollToSection} isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
          </div>
        </div>
      </div>
    </nav>
  )
}
