"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export default function VolunteerSection() {
  const { t } = useLanguage()

  return (
    <section
      id="volunteer"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200 bg-gradient-to-b from-transparent via-white/5 to-transparent"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-16 transition-colors duration-200">
          {t("volunteerExperience")}
        </h2>
        <div className="space-y-8">
          {/* Guide / INNOPROM */}
          <Card className="border-l-4 border-l-blue-500 dark:bg-gray-700 dark:border-gray-600 transition-colors duration-200">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <CardTitle className="text-xl dark:text-gray-200 transition-colors duration-200">
                    {t("guideTitle")}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 font-medium transition-colors duration-200">
                    {t("innopromOrg")}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200 self-start sm:self-auto">
                  {t("innopromDate")}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span dangerouslySetInnerHTML={{ __html: t("innopromDesc1") }} />
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Volunteer Coordinator / International University Sports Festival Committee */}
          <Card className="border-l-4 border-l-blue-500 dark:bg-gray-700 dark:border-gray-600 transition-colors duration-200">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  <CardTitle className="text-xl dark:text-gray-200 transition-colors duration-200">
                    {t("volunteerCoordinatorTitle")}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 font-medium transition-colors duration-200">
                    {t("sportsFestivalOrg")}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="dark:bg-gray-600 dark:text-gray-200 self-start sm:self-auto">
                  {t("sportsFestivalDate")}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span dangerouslySetInnerHTML={{ __html: t("sportsFestivalDesc1") }} />
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
