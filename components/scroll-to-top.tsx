"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

interface ScrollToTopProps {
  contactSectionBottom: number | null
  aboutSectionTop: number | null // New prop for about section's top position
}

export default function ScrollToTop({ contactSectionBottom, aboutSectionTop }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (typeof window !== "undefined") {
        // Button appears after scrolling past the initial viewport height (about section)
        const scrolledPastInitialView = window.scrollY > window.innerHeight / 2 // Appear earlier

        // Button should be visible as long as the bottom of the viewport is above the contact section bottom
        const isAboveContactSectionEnd = contactSectionBottom
          ? window.scrollY + window.innerHeight < contactSectionBottom - 50
          : true

        setIsVisible(scrolledPastInitialView && isAboveContactSectionEnd)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [contactSectionBottom])

  const scrollToAbout = () => {
    if (aboutSectionTop !== null) {
      window.scrollTo({
        top: aboutSectionTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <Button
      onClick={scrollToAbout} // Changed to scroll to about section
      size="icon"
      className={`fixed bottom-6 right-6 z-50 md:hidden
              bg-gray-700/15 dark:bg-gray-300/15
              hover:bg-gray-700/25 dark:hover:bg-gray-300/25
              text-gray-800 dark:text-gray-200 shadow-lg rounded-full w-8 h-8 // Made smaller (w-8 h-8)
              transition-all duration-300 ease-in-out
              backdrop-blur-sm border border-gray-300/20 dark:border-gray-700/20
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ChevronUp className="h-4 w-4" />
    </Button>
  )
}
