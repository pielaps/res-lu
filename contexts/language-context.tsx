"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "fr" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    about: "About",
    experience: "Experience",
    researches: "Researches",
    volunteer: "Volunteer",
    contact: "Contact",

    // About section
    businessAnalyst: "Business Analyst | Market Researcher",
    student: "International Economics and Business Student",
    aboutText:
      "Experienced in market research, data analytics, and statistical modeling with hands-on use of Python. Created a strategic competitor guide analyzing 30 companies with actionable insights for the team. Developed a Telegram-based monitoring tool to track competitor activity, cutting manual work by 80%. Conducted certification research across 40 industry–country pairs for the Export Center.",
    tagline: "I bring beauty, brains, and talent to everything I do.",

    // Experience section
    workingExperience: "Working Experience",
    marketingIntern: "Marketing Intern",
    projectAdmin: "Project Administrator",
    present: "Present",
    expDesc1:
      "Analyzed <strong>30 competitors</strong> in wealth management and created a strategic guide for the team",
    expDesc2:
      "Developed a Telegram bot in Python to automate competitor monitoring (reducing daily manual work by <strong>up to 4 hours</strong>)",
    haenschAssistant: "Assistant",
    haenschCompany: "Haensch",
    haenschDate: "November – December 2023",
    haenschDesc1:
      "Researched certification rules for <strong>40 industry-country pairs</strong> for internal market analysis",
    haenschDesc2: "Conducted certification research for <strong>4 countries</strong> across multiple industries",
    unileverCompany: "Unilever",
    unileverDate: "March – May 2024",
    unileverDesc1: "Created a themed quiz 'UniQuiz' about the history of the Kalina factory and Unilever",
    unileverDesc2:
      "Held the quiz for <strong>30 children</strong> of employees and gathered feedback as part of a corporate event",

    // Research section
    researchProjects: "Research Projects",
    taxiFareTitle: "Factors Influencing Taxi Fare Prices",
    taxiFareDesc:
      "Conducted a full-scale research project using original survey data from <strong>116 students</strong>, uncovering <strong>9 key drivers</strong> of taxi pricing. Built a regression model with <strong>6 key factors</strong> explaining <strong>65% of taxi fare</strong> variation. Provided recommendations that could help <strong>reduce</strong> passenger expenses on taxi rides by <strong>around 20%</strong>",
    tele2Title: "Analysis of consumer behavior in the mobile communication market",
    tele2Desc:
      "Analyzed tariff preferences of customers using real mobile network data, revealing <strong>47 million users</strong>. Built consumer indifference curves for different user segments and identified optimal plans. Proposed solutions that demonstrated up to <strong>40% cost reduction</strong> for certain user groups",
    yandexGamifiedTitle: "Advantages of creating a gamified project on the example of Yandex",
    yandexGamifiedDesc:
      "Analyzed Yandex's annual reports and identified a positive correlation between gamification and customer retention. The number of returning users increased, and overall profit grew. The study suggests that gamified elements significantly contributed to this growth by enhancing user engagement.",
    accountingInventoryTitle: "Key changes in accounting for material and production inventory",
    accountingInventoryDesc:
      "Explored recent innovations in accounting standards and explained their necessity and impact on modern practice.",
    accountingStandardsTitle: "Current changes in federal accounting standards: necessity in times of change",
    accountingStandardsDesc:
      "Outlined key innovations and their importance in adapting accounting systems to contemporary economic challenges.",
    chinaRussiaTitle: "Dynamics of economic cooperation between China and Russia under economic restrictions",
    chinaRussiaDesc:
      "I analyzed trade volumes and examined how both countries adapted economically under sanctions. Special focus was placed on how Chinese banks respond to restrictions and the resulting implications for bilateral cooperation.",

    // Volunteer section
    volunteerExperience: "Volunteer Experience",
    dataAnalyst: "Data Analyst Volunteer",
    eventCoordinator: "Event Coordinator",
    volDesc1:
      "Analyzed donation patterns and created data visualizations to help optimize fundraising campaigns for local charities.",
    volDesc2:
      "Coordinated international student events and managed logistics for cultural exchange programs at the university.",
    guideTitle: "Guide",
    innopromOrg: "INNOPROM",
    innopromDate: "July 2023",
    innopromDesc1:
      "Led guided tours for international guests in both Russian and English, coordinated visitor flow, and provided on-site logistical support.",
    innopromDesc2:
      "Represented the host country to foreign delegations and ensured a smooth and informative visitor experience.",
    innopromDesc3:
      "Personally conducted a VIP tour for the delegation from Zimbabwe, contributing to the professional image of the event and its international outreach.",
    volunteerCoordinatorTitle: "Volunteer Coordinator",
    sportsFestivalOrg: "International University Sports Festival Committee",
    sportsFestivalDate: "July - September 2023",
    sportsFestivalDesc1:
      "Assisted foreign athletes and delegation members with accommodation, local transportation, and orientation throughout the city.",
    sportsFestivalDesc2:
      "Served as a cultural liaison between international participants and local organizers, ensuring smooth communication and comfort during the event.",
    sportsFestivalDesc3:
      "Helped maintain the festival's reputation for hospitality and operational excellence in a high-pressure international setting.",

    // Contact section
    contactMe: "Contact Me",
    contactText:
      "I'm always interested in discussing new opportunities in business analysis, market research, or data analysis. Feel free to reach out!",

    // Footer
    rightsReserved: "All rights reserved.",
  },
  fr: {
    // Navigation
    about: "À propos",
    experience: "Expérience",
    researches: "Recherches",
    volunteer: "Bénévolat",
    contact: "Contact",

    // About section
    businessAnalyst: "Analyste d'affaires | Chercheuse en marketing",
    student: "Étudiante en Économie Internationale et Commerce",
    aboutText:
      "Expérimentée en recherche de marché, analyse de données et modélisation statistique avec une utilisation pratique de Python. J'ai créé un guide stratégique des concurrents analysant 30 entreprises avec des insights exploitables pour l'équipe. J'ai développé un outil de surveillance basé sur Telegram pour suivre l'activité des concurrents, réduisant le travail manuel de 80%. J'ai mené des recherches de certification sur 40 paires industrie-pays pour le Centre d'exportation.",
    tagline: "J'apporte beauté, intelligence et talent à tout ce que je fais.",

    // Experience section
    workingExperience: "Expérience Professionnelle",
    marketingIntern: "Stagiaire Marketing",
    projectAdmin: "Administratrice de Projet",
    present: "Présent",
    expDesc1:
      "Analysé <strong>30 concurrents</strong> en gestion de patrimoine et créé un guide stratégique pour l'équipe",
    expDesc2:
      "Développé un bot Telegram en Python pour automatiser la surveillance des concurrents (réduisant le travail manuel quotidien <strong>jusqu'à 4 heures</strong>)",
    haenschAssistant: "Assistante",
    haenschCompany: "Haensch",
    haenschDate: "Novembre – Décembre 2023",
    haenschDesc1:
      "Recherché les règles de certification pour <strong>40 paires industrie-pays</strong> pour l'analyse interne du marché",
    haenschDesc2: "Mené des recherches sur la certification pour <strong>4 pays</strong> dans plusieurs industries",
    unileverCompany: "Unilever",
    unileverDate: "Mars – Mai 2024",
    unileverDesc1: "Créé un quiz thématique 'UniQuiz' sur l'histoire de l'usine Kalina et d'Unilever",
    unileverDesc2:
      "Organisé le quiz pour <strong>30 enfants</strong> d'employés et recueilli des commentaires dans le cadre d'un événement d'entreprise",

    // Research section
    researchProjects: "Projets de Recherche",
    taxiFareTitle: "Facteurs Influant sur les Prix des Courses de Taxi",
    taxiFareDesc:
      "Mené un projet de recherche complet utilisant des données d'enquête originales de <strong>116 étudiants</strong>, découvrant <strong>9 facteurs clés</strong> de tarification des taxis. Construit un modèle de régression avec <strong>6 facteurs clés</strong> expliquant <strong>65% de la variation des tarifs</strong> de taxi. Fourni des recommandations qui pourraient aider à <strong>réduire</strong> les dépenses des passagers en taxi d'<strong>environ 20%</strong>",
    tele2Title: "Analyse du comportement des consommateurs sur le marché de la communication mobile",
    tele2Desc:
      "Analysé les préférences tarifaires des clients en utilisant des données réelles de réseau mobile, révélant <strong>47 millions d'utilisateurs</strong>. Construit des courbes d'indifférence des consommateurs pour différents segments d'utilisateurs et identifié des plans optimaux. Proposé des solutions qui ont démontré jusqu'à <strong>40% de réduction des coûts</strong> pour certains groupes d'utilisateurs",
    yandexGamifiedTitle: "Avantages de la création d'un projet gamifié à l'exemple de Yandex",
    yandexGamifiedDesc:
      "Analysé les rapports annuels de Yandex et identifié une corrélation positive entre la gamification et la rétention des clients. Le nombre d'utilisateurs récurrents a augmenté, et le profit global a progressé. L'étude suggère que les éléments gamifiés ont significativement contribué à cette croissance en améliorant l'engagement des utilisateurs.",
    accountingInventoryTitle: "Principaux changements dans la comptabilité des stocks de matières et de production",
    accountingInventoryDesc:
      "Exploré les innovations récentes dans les normes comptables et expliqué leur nécessité et leur influence sur la pratique moderne.",
    accountingStandardsTitle:
      "Changements actuels dans les normes comptables fédérales : nécessité en période de changement",
    accountingStandardsDesc:
      "Décrit les innovations clés et leur importance pour l'adaptation des systèmes comptables aux défis économiques contemporains.",
    chinaRussiaTitle:
      "Dynamique de la coopération économique entre la Chine et la Russie sous les restrictions économiques",
    chinaRussiaDesc:
      "J'ai analysé les volumes d'échanges et examiné comment les deux pays se sont adaptés économiquement sous les sanctions. Une attention particulière a été portée à la manière dont les banques chinoises réagissent aux restrictions et aux implications qui en découlent pour la coopération bilatérale.",

    // Volunteer section
    volunteerExperience: "Expérience Bénévole",
    dataAnalyst: "Analyste de Données Bénévole",
    eventCoordinator: "Coordinatrice d'Événements",
    volDesc1:
      "Analysé les modèles de dons et créé des visualisations de données pour aider à optimiser les campagnes de collecte de fonds pour les associations caritatives locales.",
    volDesc2:
      "Coordonné des événements d'étudiants internationaux et géré la logistique des programmes d'échange culturel à l'université.",
    guideTitle: "Guide",
    innopromOrg: "INNOPROM",
    innopromDate: "Juillet 2023",
    innopromDesc1:
      "Dirigé des visites guidées pour les invités internationaux en russe et en anglais, coordonné le flux de visiteurs et fourni un soutien logistique sur place.",
    innopromDesc2:
      "Représenté le pays hôte auprès des délégations étrangères et assuré une expérience visiteur fluide et informative.",
    innopromDesc3:
      "Personnellement mené une visite VIP pour la délégation du Zimbabwe, contribuant à l'image professionnelle de l'événement et à sa portée internationale.",
    volunteerCoordinatorTitle: "Coordinatrice Bénévole",
    sportsFestivalOrg: "Comité du Festival International Universitaire des Sports",
    sportsFestivalDate: "Juillet - Septembre 2023",
    sportsFestivalDesc1:
      "Assisté les athlètes étrangers et les membres des délégations avec l'hébergement, le transport local et l'orientation dans la ville.",
    sportsFestivalDesc2:
      "Servi de liaison culturelle entre les participants internationaux et les organisateurs locaux, assurant une communication et un confort fluides pendant l'événement.",
    sportsFestivalDesc3:
      "Aidée à maintenir la réputation du festival en matière d'hospitalité et d'excellence opérationnelle dans un environnement international sous pression.",

    // Contact section
    contactMe: "Contactez-moi",
    contactText:
      "Je suis toujours intéressée à discuter de nouvelles opportunités en analyse d'affaires, recherche marketing ou analyse de données. N'hésitez pas à me contacter !",

    // Footer
    rightsReserved: "Tous droits réservés.",
  },
  ru: {
    // Navigation
    about: "Обо мне",
    experience: "Опыт",
    researches: "Исследования",
    volunteer: "Волонтерство",
    contact: "Контакты",

    // About section
    businessAnalyst: "Бизнес-аналитик | Исследователь рынка",
    student: "Выпускница KEDGE Business School (IBBA) и УрФУ",
    aboutText:
      "Специализируюсь на аналитике данных и рыночных исследованиях. Разработала Telegram-бота для мониторинга конкурентов, что позволило сократить время анализа на 80%, провела стратегический обзор 30 конкурентов и исследовала сертификационные требования по 40 международным рынкам.",
    tagline: "В свободное время играю на пианино, решаю головоломки, еще и крестиком вышиваю.",

    // Experience section
    workingExperience: "Опыт работы",
    marketingIntern: "Стажер в отделе маркетинга",
    projectAdmin: "Администратор проекта",
    present: "Настоящее время",
    expDesc1:
      "Проанализировала <strong>30 конкурентов</strong> в сфере управления капиталом и создала стратегическое руководство для команды",
    expDesc2:
      "Разработала Telegram-бота на Python для автоматизации мониторинга конкурентов (сокращая ежедневную ручную работу <strong>до 4 часов</strong>)",
    haenschAssistant: "Стажёр в компании Haensch",
    haenschCompany: "Haensch",
    haenschDate: "Ноябрь-Декабрь 2023",
    haenschDesc1:
      "Исследовала правила сертификации для <strong>40 пар отрасль-страна</strong> для внутреннего анализа рынка",
    haenschDesc2: "Провела исследование сертификации для <strong>4 стран</strong> в различных отраслях",
    unileverCompany: "Unilever",
    unileverDate: "Март – Май 2024",
    unileverDesc1: "Создала тематический квиз 'UniQuiz' об истории фабрики Калина и Unilever",
    unileverDesc2:
      "Провела квиз для <strong>30 детей</strong> сотрудников и собрала отзывы в рамках корпоративного мероприятия",

    // Research section
    researchProjects: "Исследовательские проекты",
    taxiFareTitle: "Факторы, влияющие на ценообразование такси",
    taxiFareDesc:
      "Провела полномасштабный исследовательский проект, используя оригинальные данные опроса <strong>116 студентов</strong>, выявив <strong>9 ключевых факторов</strong> ценообразования такси. Построила регрессионную модель с <strong>6 ключевыми факторами</strong>, объясняющими <strong>65% вариации тарифов</strong> такси. Предоставила рекомендации, которые могут помочь <strong>сократить</strong> расходы пассажиров на поездки на такси <strong>примерно на 20%</strong>",
    tele2Title: "Анализ потребительского поведения на рынке мобильной связи",
    tele2Desc:
      "Проанализировала тарифные предпочтения клиентов, используя реальные данные мобильной сети, выявив <strong>47 миллионов пользователей</strong>. Построила кривые безразличия потребителей для различных сегментов пользователей и определила оптимальные планы. Предложила решения, которые продемонстрировали <strong>снижение затрат до 40%</strong> для определенных групп пользователей",
    yandexGamifiedTitle: "Преимущества создания геймифицированного проекта на примере Яндекса",
    yandexGamifiedDesc:
      "Проанализировала годовые отчеты компании 'Яндекс' и выявила корреляцию между введением игры 'Плюс Сити' и удержанием клиентов. Геймификация помогла повысить количество вовзвращающихся пользователей, число потребляемых услуг. Общая прибыль с момента выпуска игры, прибыль начала расти на 2% быстрее.",
    accountingInventoryTitle: "Ключевые изменения в учете материально-производственных запасов",
    accountingInventoryDesc:
      "Исследовала последние инновации в стандартах бухгалтерского учета и объяснила их необходимость и влияние на современную практику.",
    accountingStandardsTitle:
      "Текущие изменения в федеральных стандартах бухгалтерского учета: необходимость во времена перемен",
    accountingStandardsDesc:
      "Обозначила ключевые инновации и их важность в адаптации систем бухгалтерского учета к современным экономическим вызовам.",
    chinaRussiaTitle:
      "Динамика экономического сотрудничества между Китаем и Россией в условиях экономических ограничений",
    chinaRussiaDesc:
      "Я проанализировала объемы торговли и изучила, как обе страны экономически адаптировались в условиях санкций. Особое внимание было уделено тому, как китайские банки реагируют на ограничения и каковы последствия для двустороннего сотрудничества.",

    // Volunteer section
    volunteerExperience: "Волонтерский опыт",
    dataAnalyst: "Волонтер-аналитик данных",
    eventCoordinator: "Координатор мероприятий",
    volDesc1:
      "Провела экскурсию по павильонам для делегации из Зимбабве, рассказывала об инновациях в агропромышленном комплексе на английском. Очень пыталась :)",
    volDesc2:
      "Помогала иностранным спортсменам и членам делегаций с размещением, отвечала на вопросы о том, куда можно сходить и как включить стиральную машину. Находилась в штабе, координировала работу других волонтеров, принимала срочные сообщения от сотрудников на точках и передавала их управляющему.",
    guideTitle: "Гид на иннопроме",
    innopromOrg: "INNOPROM",
    innopromDate: "Июль 2023",
    innopromDesc1:
      "Провела экскурсию по павильонам для делегации из Зимбабве, рассказывала об инновациях в агропромышленном комплексе на английском. Очень пыталась :)",
    volunteerCoordinatorTitle: "Координатор волонтеров",
    sportsFestivalOrg: "Международный фестиваль университетских видов спорта",
    sportsFestivalDate: "Июль - Сентябрь 2023",
    sportsFestivalDesc1:
      "Помогала иностранным спортсменам и членам делегаций с размещением, отвечала на вопросы о том, куда можно сходить и как включить стиральную машину. Находилась в штабе, координировала работу других волонтеров, принимала срочные сообщения от сотрудников на точках и передавала их управляющему.",
    sportsFestivalDesc2:
      "Служила культурным посредником между международными участниками и местными организаторами, обеспечивая плавную и комфортную коммуникацию во время мероприятия.",
    sportsFestivalDesc3:
      "Помогла поддерживать репутацию фестиваля в области гостеприимства и операционной эффективности в условиях высокого давления от международных делегаций.",

    // Contact section
    contactMe: "Связаться со мной",
    contactText:
      "Мне интересно всё, что связано с аналитикой, исследованиями и данными. Если хотите обсудить проект, идею или просто обменяться опытом — пишите!",

    // Footer
    rightsReserved: "Все права защищены.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "fr", "ru"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
