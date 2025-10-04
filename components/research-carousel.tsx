"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ResearchCarousel() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const researchProjects = [
    {
      title: t("taxiFareTitle"),
      year: "2024",
      description: t("taxiFareDesc"),
    },
    {
      title: t("tele2Title"),
      year: "2024",
      description: t("tele2Desc"),
    },
    {
      title: t("yandexGamifiedTitle"),
      year: "2024",
      description: t("yandexGamifiedDesc"),
    },
    {
      title: t("accountingInventoryTitle"),
      year: "2024",
      description: t("accountingInventoryDesc"),
    },
    {
      title: t("accountingStandardsTitle"),
      year: "2025",
      description: t("accountingStandardsDesc"),
    },
    {
      title: t("chinaRussiaTitle"),
      year: "2025",
      description: t("chinaRussiaDesc"),
    },
  ]

  // Create extended array for seamless looping
  const extendedProjects = [
    ...researchProjects.slice(-2), // Last 2 items at the beginning
    ...researchProjects,
    ...researchProjects.slice(0, 2), // First 2 items at the end
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Initialize position to account for prepended items
  useEffect(() => {
    if (!isMobile) {
      setCurrentIndex(2) // Start at the real first item (index 2 in extended array)
    } else {
      setCurrentIndex(2) // Same for mobile
    }
  }, [isMobile])

  // Touch handling for mobile swipe
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return

    let startX = 0
    let currentX = 0
    let isDragging = false

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      isDragging = true
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      currentX = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
      if (!isDragging) return
      isDragging = false

      const diff = startX - currentX
      const threshold = 50

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      }
    }

    const carousel = carouselRef.current
    carousel.addEventListener("touchstart", handleTouchStart)
    carousel.addEventListener("touchmove", handleTouchMove)
    carousel.addEventListener("touchend", handleTouchEnd)

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart)
      carousel.removeEventListener("touchmove", handleTouchMove)
      carousel.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isMobile])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setCurrentIndex((prev) => prev + 1)

    setTimeout(() => {
      setIsTransitioning(false)
      setCurrentIndex((prev) => {
        if (prev >= researchProjects.length + 2) {
          return 2 // Reset to real first item
        }
        return prev
      })
    }, 600)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setCurrentIndex((prev) => prev - 1)

    setTimeout(() => {
      setIsTransitioning(false)
      setCurrentIndex((prev) => {
        if (prev <= 1) {
          return researchProjects.length + 1 // Reset to real last item
        }
        return prev
      })
    }, 600)
  }

  const getTransform = () => {
    if (isMobile) {
      // Mobile: show one card fully + peek of next card (75% width + 20px gap)
      return `translateX(-${currentIndex * 75}%)`
    } else {
      // Desktop: show 2 cards side by side
      return `translateX(-${currentIndex * 43.5}%)`
    }
  }

  return (
    <div className="relative">
      {/* Desktop Navigation Arrows - Only show on desktop */}
      {!isMobile && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 border transition-all duration-300 w-10 h-10"
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 border transition-all duration-300 w-10 h-10"
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </Button>
        </>
      )}

      {/* Carousel Container */}
      <div className="overflow-hidden" ref={carouselRef}>
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-600 ease-out" : ""}`}
          style={{
            transform: getTransform(),
          }}
        >
          {extendedProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className={`flex-shrink-0 ${isMobile ? "pr-5" : "pr-6"} py-1`}
              style={{
                width: isMobile ? "75%" : "43.5%",
              }}
            >
              <Card className="group relative overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 ease-out h-full hover:-translate-y-1 will-change-transform">
                {/* Material Design 3 surface tint overlay on hover */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 dark:group-hover:bg-blue-400/10 transition-all duration-300 pointer-events-none rounded-lg" />

                <CardHeader className="p-4 md:p-6 relative">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-sm md:text-lg leading-tight dark:text-gray-200 pr-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 flex-shrink-0 text-xs whitespace-nowrap transition-colors duration-300">
                      {project.year}
                    </Badge>
                  </div>
                  <CardDescription className="text-[11px] md:text-sm leading-relaxed dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    <span dangerouslySetInnerHTML={{ __html: project.description }} />
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
