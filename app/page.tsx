"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ResearchCarousel from "@/components/research-carousel"
import VolunteerSection from "@/components/volunteer-section"
import ScrollHeader from "@/components/scroll-header"
import ScrollToTop from "@/components/scroll-to-top"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import { useRef, useEffect, useState } from "react"

export default function ResumePage() {
  const { t, language } = useLanguage()
  const { theme } = useTheme()
  const contactSectionRef = useRef<HTMLElement>(null)
  const aboutSectionRef = useRef<HTMLElement>(null)
  const [contactSectionBottom, setContactSectionBottom] = useState<number | null>(null)
  const [aboutSectionTop, setAboutSectionTop] = useState<number | null>(null)

  useEffect(() => {
    const updateSectionPositions = () => {
      if (contactSectionRef.current) {
        setContactSectionBottom(contactSectionRef.current.getBoundingClientRect().bottom + window.scrollY)
      }
      if (aboutSectionRef.current) {
        setAboutSectionTop(aboutSectionRef.current.offsetTop)
      }
    }

    updateSectionPositions()
    window.addEventListener("resize", updateSectionPositions)
    window.addEventListener("scroll", updateSectionPositions)

    return () => {
      window.removeEventListener("resize", updateSectionPositions)
      window.removeEventListener("scroll", updateSectionPositions)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <ScrollHeader />
      <ScrollToTop contactSectionBottom={contactSectionBottom} aboutSectionTop={aboutSectionTop} />
      <div className="pt-16">
        {/* Hero/About Section */}
        <section
          id="about"
          ref={aboutSectionRef}
          className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200 min-h-screen flex items-center bg-gradient-to-b from-transparent via-gray-50/5 to-transparent"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Layout */}
            <div className="block sm:hidden">
              <div className="text-center mb-8">
                <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-2 shadow-sm hover:shadow-md transition-all duration-300 inline-block">
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/3 dark:group-hover:bg-blue-400/5 transition-all duration-300 pointer-events-none rounded-xl" />
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Mariia Priakhina"
                    width={240}
                    height={300}
                    className="rounded-lg object-cover relative z-10"
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% bg-gradient-to-r">
                  Mariia Priakhina
                </h1>
                <h2 className="text-lg text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-200">
                  {t("businessAnalyst")}
                </h2>
                <h3 className="text-base text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-200">
                  {t("student")}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2 transition-colors duration-200">
                  {t("aboutText")}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium transition-colors duration-200">
                  {t("tagline")}
                </p>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex sm:items-center sm:gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-2 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/3 dark:group-hover:bg-blue-400/5 transition-all duration-300 pointer-events-none rounded-xl" />
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Mariia Priakhina"
                    width={260}
                    height={320}
                    className="rounded-lg object-cover w-full h-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] relative z-10"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% bg-gradient-to-r">
                  Mariia Priakhina
                </h1>
                <h2 className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-200">
                  {t("businessAnalyst")}
                </h2>
                <h3 className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 transition-colors duration-200">
                  {t("student")}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-2 sm:mb-4 transition-colors duration-200">
                  {t("aboutText")}
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium transition-colors duration-200">
                  {t("tagline")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Working Experience Section */}
        <section
          id="experience"
          className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200 bg-gradient-to-b from-transparent via-white/5 to-transparent"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16 transition-colors duration-200">
              {t("workingExperience")}
            </h2>
            <div className="space-y-8">
              {/* SMARTGEN Entry */}
              <Card className="border-l-4 border-l-blue-500 dark:bg-gray-700 dark:border-gray-600 transition-colors duration-200">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl dark:text-gray-200 transition-colors duration-200">
                        {t("marketingIntern")}
                      </CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-200">
                        SMARTGEN Wealth Management
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200 self-start sm:self-auto">
                      {language === "en" ? "March" : language === "fr" ? "Mars" : "Март"} 2025 - {t("present")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: t("expDesc1") }} />
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: t("expDesc2") }} />
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Unilever Entry */}
              <Card className="border-l-4 border-l-purple-500 dark:bg-gray-700 dark:border-gray-600 transition-colors duration-200">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl dark:text-gray-200 transition-colors duration-200">
                        {t("projectAdmin")}
                      </CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-200">
                        {t("unileverCompany")}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200 self-start sm:self-auto">
                      {t("unileverDate")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: t("unileverDesc1") }} />
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: t("unileverDesc2") }} />
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Haensch Entry */}
              <Card className="border-l-4 border-l-blue-500 dark:bg-gray-700 dark:border-gray-600 transition-colors duration-200">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl dark:text-gray-200 transition-colors duration-200">
                        {t("haenschAssistant")}
                      </CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-400 font-medium transition-colors duration-200">
                        {t("haenschCompany")}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200 self-start sm:self-auto">
                      {t("haenschDate")}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: t("haenschDesc1") }} />
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: t("haenschDesc2") }} />
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Research Projects Section */}
        <section
          id="research"
          className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200 bg-gradient-to-b from-transparent via-gray-50/5 to-transparent"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16 transition-colors duration-200">
              {t("researchProjects")}
            </h2>
            <div className="max-w-5xl mx-auto">
              <ResearchCarousel />
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <VolunteerSection />

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactSectionRef}
          className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200 bg-gradient-to-b from-transparent via-gray-50/5 to-transparent"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8 transition-colors duration-200">
              {t("contactMe")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto transition-colors duration-200">
              {t("contactText")}
            </p>

            {/* Mobile: Vertical layout */}
            <div className="space-y-6 md:hidden">
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0077B5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <Link
                  href="https://www.linkedin.com/in/mariiapriakhina"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-lg transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#EA4335">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.273L12 9.545l10.091-5.724h.273c.904 0 1.636.749 1.636 1.636z" />
                </svg>
                <Link
                  href="mailto:mariiapriakhina@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 text-lg transition-colors duration-200"
                >
                  mariiapriakhina@gmail.com
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488" />
                </svg>
                <Link
                  href="https://wa.me/33759314454"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 text-lg transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +33759314454
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <div
                  className={`w-6 h-6 transition-all duration-200 ${theme === "dark" ? "brightness-125" : "brightness-100"}`}
                >
                  <Image src="/icons/mastodon-logo.svg" alt="Mastodon" width={24} height={24} className="w-6 h-6" />
                </div>
                <Link
                  href="https://mastodon.social/@voix"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6364FF] dark:hover:text-[#858AFA] text-lg transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mastodon
                </Link>
              </div>
            </div>

            {/* Desktop: Horizontal layout */}
            <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-8 md:max-w-3xl md:mx-auto">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0077B5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <Link
                  href="https://www.linkedin.com/in/mariiapriakhina"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-lg transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#EA4335">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.273L12 9.545l10.091-5.724h.273c.904 0 1.636.749 1.636 1.636z" />
                </svg>
                <Link
                  href="mailto:mariiapriakhina@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 text-lg transition-colors duration-200"
                >
                  mariiapriakhina@gmail.com
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488" />
                </svg>
                <Link
                  href="https://wa.me/33759314454"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 text-lg transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +33759314454
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <div
                  className={`w-6 h-6 transition-all duration-200 ${theme === "dark" ? "brightness-125" : "brightness-100"}`}
                >
                  <Image src="/icons/mastodon-logo.svg" alt="Mastodon" width={24} height={24} className="w-6 h-6" />
                </div>
                <Link
                  href="https://mastodon.social/@voix"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#6364FF] dark:hover:text-[#858AFA] text-lg transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mastodon
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 transition-colors duration-200">
              © 2025 Mariia Priakhina. {t("rightsReserved")}
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
